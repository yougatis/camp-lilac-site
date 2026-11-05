// Meta Conversions API (server side). The browser pixel in Base.astro sends each event here too,
// with the same event_id, and Meta deduplicates the pair. Adds accuracy when the browser pixel is
// blocked (ad blockers, Safari ITP). The access token lives only in the Cloudflare secret META_CAPI_TOKEN
// (Cloudflare Pages -> Settings -> Variables and secrets); it is never in the repo.
const PIXEL_ID = '1131227682887375';
const ALLOWED = new Set(['PageView', 'Lead', 'Contact']);
const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });

async function sha256(s) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s.trim().toLowerCase()));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function onRequestPost({ request, env }) {
  const token = env.META_CAPI_TOKEN;
  if (!token) return json({ ok: false, error: 'not-configured' }, 503);
  let d;
  try { d = await request.json(); } catch { return json({ ok: false, error: 'bad-request' }, 400); }
  const name = String(d.event_name || '');
  if (!ALLOWED.has(name)) return json({ ok: false, error: 'bad-event' }, 400);

  const ip = request.headers.get('CF-Connecting-IP') || '';
  const ua = request.headers.get('User-Agent') || '';
  const user_data = { client_ip_address: ip, client_user_agent: ua };
  if (d.fbp) user_data.fbp = String(d.fbp).slice(0, 100);
  if (d.fbc) user_data.fbc = String(d.fbc).slice(0, 200);
  if (d.email) user_data.em = [await sha256(String(d.email))];
  const country = request.headers.get('CF-IPCountry');
  if (country && country.length === 2) user_data.country = [await sha256(country)];

  const event = {
    event_name: name,
    event_time: Math.floor(Date.now() / 1000),
    event_id: String(d.event_id || crypto.randomUUID()).slice(0, 100),
    event_source_url: String(d.url || request.headers.get('Referer') || '').slice(0, 500),
    action_source: 'website',
    user_data,
  };
  if (d.content_name) event.custom_data = { content_name: String(d.content_name).slice(0, 100) };

  try {
    const r = await fetch(`https://graph.facebook.com/v21.0/${PIXEL_ID}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: [event], access_token: token }),
    });
    return json({ ok: r.ok }, r.ok ? 200 : 502);
  } catch {
    return json({ ok: false, error: 'network' }, 502);
  }
}
