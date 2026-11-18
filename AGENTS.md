# Architecture rules
- Keep CV files in public/cv and validate the PDF signature before creating browser downloads; this preserves public downloads on both hosting platforms and prevents HTML downloads.
- Prepare validated CV Files before button clicks and prefer native file sharing on touch devices; Safari requires uninterrupted user activation to save files.
- Render project demos with the shared portaled dialog; transformed project cards otherwise displace fixed overlays, and the dialog supplies focus trapping and Escape handling.
- Import skill logos through local asset pointers and resolve their asset-proxy paths against the published Lovable origin; Vercel does not serve that proxy, so relative paths return HTML instead of logos.
- Use motion values for hero pointer animation and pause background playback offscreen or in hidden tabs; this avoids whole-hero rerenders and unnecessary decoding.