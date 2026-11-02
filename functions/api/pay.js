// Guest clicks "Pay deposit": verify the signed link, create a DPO token, send them to DPO's secure page.
import { createToken, verifySig, linkFields, PAY_URL } from '../../lib/dpo.js';

export async function onRequestPost({ request, env }) {
  const form = await request.formData();
  const p = Object.fromEntries(linkFields.map((k) => [k, String(form.get(k) || '')]));
  const origin = new URL(request.url).origin;
  const back = `${origin}/pay?` + new URLSearchParams({ ...p, sig: String(form.get('sig') || '') }).toString();
  if (!(await verifySig(env, p, String(form.get('sig') || '')))) {
    return Response.redirect(`${origin}/payment-failed?reason=link`, 303);
  }
  const what = p.type === 'safari' ? 'Safari' : 'Stay';
  const r = await createToken(env, {
    ...p,
    description: `Deposit ${p.ref}${p.desc ? " - " + p.desc : " - " + what}`,
    redirectUrl: `${origin}/api/payment-return`,
    backUrl: back,
  });
  if (r.result !== '000' || !r.token) {
    return Response.redirect(`${origin}/payment-failed?reason=dpo&code=${encodeURIComponent(r.result)}`, 303);
  }
  return Response.redirect(PAY_URL + encodeURIComponent(r.token), 303);
}
