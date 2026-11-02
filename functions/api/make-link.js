// Staff-only: builds a signed deposit link for a guest.
import { sign, isTest, json } from '../../lib/dpo.js';

export async function onRequestPost({ request, env }) {
  const b = await request.json().catch(() => ({}));
  const pin = env.STAFF_PIN || (isTest(env) ? '0000' : '');
  if (!pin || String(b.pin || '') !== pin) return json({ error: 'Wrong staff PIN' }, 401);
  const currency = b.currency === 'TZS' ? 'TZS' : 'USD';
  const type = b.type === 'safari' ? 'safari' : 'accommodation';
  const total = Number(b.total);
  const pct = Number(b.pct || 10);
  if (!(total > 0) || !(pct > 0 && pct <= 100)) return json({ error: 'Check the total and deposit %' }, 400);
  const raw = (total * pct) / 100;
  const amount = currency === 'TZS' ? String(Math.round(raw)) : raw.toFixed(2);
  const p = {
    ref: String(b.ref || '').trim().slice(0, 40),
    amount, currency, type,
    name: String(b.name || '').trim().slice(0, 80),
    email: String(b.email || '').trim().slice(0, 120),
    desc: String(b.desc || '').trim().slice(0, 120),
  };
  if (!p.ref || !p.name || !p.email) return json({ error: 'Booking ref, guest name and email are required' }, 400);
  const sig = await sign(env, p);
  const origin = new URL(request.url).origin;
  const url = `${origin}/pay?` + new URLSearchParams({ ...p, sig }).toString();
  return json({ url, amount, currency, test: isTest(env) });
}
