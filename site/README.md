# Wild Pies — Saskatoon

A hand-built, dependency-free static implementation of the Wild Pies homepage
(from the Claude Design prototype `project/Wild Pies.dc.html`).

## Files

- `index.html` — the page (semantic, accessible, mobile-first)
- `styles.css` — all styling, ported 1:1 from the prototype
- `app.js` — the two form confirmations (booking + email signup)
- `assets/` — logo marks, wordmark, branded trailer, and 8 pie photos

No build step, no framework, no external JS. Fonts load from Google Fonts.

## Run locally

Open `index.html` directly, or serve the folder:

```
cd site && python3 -m http.server 8000
```

then visit http://localhost:8000

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages** → Source = **Deploy from a branch**.
3. Branch = your default branch, folder = **/site** (or move these files to
   the repo root / `docs/` if Pages only offers `/root` and `/docs`).
4. Save, wait ~1 min. Your live URL — `https://<user>.github.io/<repo>/` — is
   the link to send the client.

## Notes

- **Forms are visual-only.** Submitting shows an inline thank-you but sends
  nothing. To make them live, POST to a form service (e.g. Formspree) inside
  the handlers in `app.js` before revealing the confirmation.
- The nav emblem cross-fades through the brand colours (white → sage → orange
  → forest) on a 14s loop; reduced-motion users see a static orange mark.
- The trailer drives in from off-screen on load; reduced-motion users see it
  parked in place.
