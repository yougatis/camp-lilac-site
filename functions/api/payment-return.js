// DPO sends the guest back here. We verify with DPO before showing success.
import { verifyToken } from '../../lib/dpo.js';

export async function onRequestGet({ request, env }) {
  const u = new URL(request.url);
  const token = u.searchParams.get('TransactionToken') || u.searchParams.get('TransID') || '';
  const ref = u.searchParams.get('CompanyRef') || '';
  if (!token) return Response.redirect(`${u.origin}/payment-failed?reason=missing`, 303);
  const v = await verifyToken(env, token);
  const q = new URLSearchParams({ ref, amount: v.amount, currency: v.currency });
  if (v.result === '000') return Response.redirect(`${u.origin}/payment-success?${q}`, 303);
  return Response.redirect(`${u.origin}/payment-failed?reason=dpo&code=${encodeURIComponent(v.result)}&${q}`, 303);
}
