// Send every non-canonical host (camp-lilac.com, new.camp-lilac.com) to www.camp-lilac.com,
// keeping the path, so Google only ever sees one copy of the site.
// *.pages.dev is left reachable so preview deployments keep working, but gets an X-Robots-Tag: noindex header.
const CANONICAL = 'www.camp-lilac.com';

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  const host = url.hostname;
  if (host !== CANONICAL && host.endsWith('camp-lilac.com')) {
    url.hostname = CANONICAL;
    url.protocol = 'https:';
    url.port = '';
    return Response.redirect(url.toString(), 301);
  }
  const res = await next();
  // Preview deployments (*.pages.dev) must never be indexed as copies of the real site.
  if (host.endsWith('.pages.dev')) {
    const r = new Response(res.body, res);
    r.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return r;
  }
  return res;
}
