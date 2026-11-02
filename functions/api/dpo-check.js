// Diagnostics without revealing secrets: is the token present and well-formed, and what does DPO say?
import { createToken, json } from '../../lib/dpo.js';
export async function onRequestGet({ env, request }) {
  const t = String(env.DPO_COMPANY_TOKEN || '').replace(/\s+/g, '');
  const origin = new URL(request.url).origin;
  const r = await createToken(env, { amount: '1.00', currency: 'USD', ref: 'CHECK', name: 'Check Only', email: 'check@example.com', type: 'accommodation', description: 'Connection check', redirectUrl: origin + '/api/payment-return', backUrl: origin });
  return json({
    tokenPresent: Boolean(t),
    tokenLength: t.length,
    tokenLooksLikeGuid: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i.test(t),
    linkSecretSet: Boolean(env.LINK_SECRET),
    staffPinSet: Boolean(env.STAFF_PIN),
    dpoResult: r.result,
    dpoExplanation: r.explanation,
    gotToken: Boolean(r.token),
  });
}
