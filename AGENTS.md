# Architecture rules
- Keep CV files in public/cv and validate the PDF signature before creating browser downloads; this preserves public downloads on both hosting platforms and prevents HTML downloads.
- Render project demos with the shared portaled dialog; transformed project cards otherwise displace fixed overlays, and the dialog supplies focus trapping and Escape handling.
- Import skill logos through local asset pointers rather than third-party image URLs; this avoids runtime CDN failures.
- Use motion values for hero pointer animation and pause background playback offscreen or in hidden tabs; this avoids whole-hero rerenders and unnecessary decoding.