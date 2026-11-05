// Website booking requests -> Google Apps Script in the info@camp-lilac.com Google account.
// The script saves each request as a row in the sheet "Camp Lilac - Website booking requests"
// and emails it to info@camp-lilac.com. Its URL is kept in the Cloudflare variable BOOKING_SCRIPT_URL.
const FIELDS = ['name', 'email', 'phone', 'country', 'checkin', 'checkout', 'adults', 'children', 'room', 'safari', 'offer', 'arrival', 'message'];
const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });

export async function onRequestPost({ request, env }) {
  const url = env.BOOKING_SCRIPT_URL;
  if (!url) return json({ ok: false, error: 'not-configured' }, 503);
  let d;
  try { d = await request.json(); } catch { return json({ ok: false, error: 'bad-request' }, 400); }
  if (d.website) return json({ ok: true }); // honeypot: bots get a fake success
  const clean = {};
  for (const k of FIELDS) clean[k] = String(d[k] ?? '').trim().slice(0, k === 'message' ? 2000 : 200);
  if (!clean.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email) || !clean.checkin || !clean.phone || !clean.country) {
    return json({ ok: false, error: 'missing-fields' }, 400);
  }
  try {
    const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(clean) });
    const out = await r.json().catch(() => ({}));
    return out.ok ? json({ ok: true }) : json({ ok: false, error: 'script' }, 502);
  } catch {
    return json({ ok: false, error: 'network' }, 502);
  }
}
