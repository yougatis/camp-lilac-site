# Camp Lilac website (camp-lilac.com)

Static site built with Astro. Every page is plain HTML — fast, and fully readable by Google.

## Run it locally
```
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs the finished site to dist/
```

## Where things live
| What | File |
|---|---|
| Business facts (phone, email, address, coordinates, check-in times, amenities) | `src/data/site.ts` |
| Rooms, prices, descriptions | `src/data/rooms.ts` |
| Safari packages, prices, itineraries | `src/data/safaris.ts` |
| FAQ (also becomes FAQ rich-result schema) | `src/data/faqs.ts` |
| Blog posts (one Markdown file each) | `src/content/blog/*.md` |
| Page copy | `src/pages/*.astro` |
| Design tokens / CSS | `src/styles/global.css` |
| Photos | `public/images/` (replace the `.svg` placeholders with `.jpg`/`.webp`, then update the paths in the data files) |
| Old-URL redirects | `public/_redirects` |

## Writing a blog post
Create `src/content/blog/my-post-slug.md`:
```
---
title: "Title that contains the search phrase"
description: "140–160 characters. This is the Google snippet."
pubDate: 2026-11-15
cover: /images/my-photo.jpg
coverAlt: "Describe the photo"
tags: ["planning"]
youtube: "VIDEO_ID"    # optional — embeds the video and adds VideoObject schema
---
Post body in Markdown…
```
The file name becomes the URL: `/blog/my-post-slug`. The sitemap updates automatically on build.

## Booking form
`src/pages/book.astro` → `FORM_ENDPOINT`. Leave empty and the form opens WhatsApp with the request pre-filled.
Paste a Make.com custom-webhook URL there and the form posts JSON to it instead (email + Google Sheet log).

## Deploy (Cloudflare Pages)
1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → connect the repo.
   Build command: `npm run build` · Output directory: `dist`
3. Custom domains → add `www.camp-lilac.com` and `camp-lilac.com`.
4. In Squarespace → Domains → DNS: replace the Squarespace A/CNAME records with the ones Cloudflare shows
   (CNAME `www` → `<project>.pages.dev`; root → the record Cloudflare gives, or move nameservers to Cloudflare for the cleanest setup).
5. Wait for DNS (minutes to a few hours). Then cancel the Squarespace website subscription (keep the domain).

Every push to the repo redeploys the site in about a minute.

## After launch (SEO)
- Google Search Console: add `www.camp-lilac.com`, submit `https://www.camp-lilac.com/sitemap-index.xml`.
- Google Business Profile: claim/update the camp with the same name, address, phone and website.
- Test rich results: https://search.google.com/test/rich-results on a room page, the FAQ and a blog post.
- Add the Tripadvisor / Booking.com URLs in `src/data/site.ts` (they go into `sameAs` schema).
