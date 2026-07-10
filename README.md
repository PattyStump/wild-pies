# Wild Pies — website

Static homepage for Wild Pies (Saskatoon). The deployable site lives in
[`site/`](site/); a GitHub Actions workflow publishes it to GitHub Pages on
every push to `main`.

## Deploy (first time)

1. Create a new **empty** repo on github.com (no README/gitignore) — e.g. `wild-pies`.
2. From this folder, run:

   ```sh
   git init
   git add .
   git commit -m "Wild Pies site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/wild-pies.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
4. The workflow runs automatically. When it finishes (Actions tab, ~1 min), your
   live URL is **https://<your-username>.github.io/wild-pies/** — send that to the client.

Future edits: commit and push to `main`; Pages redeploys itself.
