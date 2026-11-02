// Send every non-canonical host (camp-lilac.com, new.camp-lilac.com) to www.camp-lilac.com,
// keeping the path, so Google only ever sees one copy of the site.
// *.pages.dev is left alone so preview deployments keep working.
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
  return next();
}
