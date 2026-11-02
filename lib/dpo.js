// DPO Pay (3G Direct Pay) helpers for Cloudflare Pages Functions.
// Secrets live in Cloudflare env vars: DPO_COMPANY_TOKEN, LINK_SECRET, STAFF_PIN.
// Without DPO_COMPANY_TOKEN the site runs in DPO TEST mode (public sandbox account).

const API = 'https://secure.3gdirectpay.com/API/v6/';
export const PAY_URL = 'https://secure.3gdirectpay.com/payv2.php?ID=';
const TEST_TOKEN = '8D3DA73D-9D7F-4E09-96D4-3D44E7A83EA3';
const TEST_SERVICE = '5525';
const SERVICES = { accommodation: '108438', safari: '109194' };

export const isTest = (env) => !env.DPO_COMPANY_TOKEN;
const companyToken = (env) => String(env.DPO_COMPANY_TOKEN || TEST_TOKEN).replace(/\s+/g, '').trim();
const serviceType = (env, type) => (isTest(env) ? TEST_SERVICE : SERVICES[type] || SERVICES.accommodation);

const ascii = (s) => String(s ?? '').normalize('NFKD').replace(/[\u2013\u2014]/g, '-').replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"').replace(/[^\x20-\x7E]/g, '');
const esc = (s) => ascii(s).replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c]));
const tag = (xml, name) => (xml.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`)) || [])[1] ?? '';

async function call(body) {
  const res = await fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/xml' }, body });
  return res.text();
}

export async function createToken(env, p) {
  const [first, ...rest] = String(p.name || 'Guest').trim().split(/\s+/);
  const now = new Date();
  const date = `${now.getUTCFullYear()}/${String(now.getUTCMonth() + 1).padStart(2, '0')}/${String(now.getUTCDate()).padStart(2, '0')} 12:00`;
  const xml = `<?xml version="1.0" encoding="utf-8"?>
<API3G>
<CompanyToken>${esc(companyToken(env))}</CompanyToken>
<Request>createToken</Request>
<Transaction>
<PaymentAmount>${esc(p.amount)}</PaymentAmount>
<PaymentCurrency>${esc(p.currency)}</PaymentCurrency>
<CompanyRef>${esc(p.ref)}</CompanyRef>
<RedirectURL>${esc(p.redirectUrl)}</RedirectURL>
<BackURL>${esc(p.backUrl)}</BackURL>
<CompanyRefUnique>0</CompanyRefUnique>
<PTL>72</PTL>
<customerFirstName>${esc(first)}</customerFirstName>
<customerLastName>${esc(rest.join(' ') || '-')}</customerLastName>
<customerEmail>${esc(p.email)}</customerEmail>
</Transaction>
<Services>
<Service>
<ServiceType>${esc(serviceType(env, p.type))}</ServiceType>
<ServiceDescription>${esc(p.description)}</ServiceDescription>
<ServiceDate>${date}</ServiceDate>
</Service>
</Services>
</API3G>`;
  const out = await call(xml);
  return { result: tag(out, 'Result'), explanation: tag(out, 'ResultExplanation'), token: tag(out, 'TransToken') };
}

export async function verifyToken(env, token) {
  const xml = `<?xml version="1.0" encoding="utf-8"?>
<API3G>
<CompanyToken>${esc(companyToken(env))}</CompanyToken>
<Request>verifyToken</Request>
<TransactionToken>${esc(token)}</TransactionToken>
</API3G>`;
  const out = await call(xml);
  return {
    result: tag(out, 'Result'),
    explanation: tag(out, 'ResultExplanation'),
    amount: tag(out, 'TransactionAmount'),
    currency: tag(out, 'TransactionCurrency'),
    approval: tag(out, 'TransactionApproval'),
  };
}

// Signed payment links so a guest can't change the amount in the URL.
const enc = new TextEncoder();
async function hmac(secret, msg) {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(msg));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('').slice(0, 32);
}
export const linkFields = ['ref', 'amount', 'currency', 'type', 'name', 'email', 'desc'];
const payload = (p) => linkFields.map((k) => String(p[k] ?? '')).join('|');
const secret = (env) => env.LINK_SECRET || (isTest(env) ? 'camp-lilac-test-secret' : '');
export async function sign(env, p) { const s = secret(env); if (!s) throw new Error('LINK_SECRET not set'); return hmac(s, payload(p)); }
export async function verifySig(env, p, sig) { const s = secret(env); if (!s || !sig) return false; return (await hmac(s, payload(p))) === sig; }

export const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
