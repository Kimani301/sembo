# Osembo – install page and app

Files: `index.html` (install page with Windows / Android tabs), `app.html` (the Osembo app), `manifest.webmanifest`, `sw.js` (offline), `icons/`, `firebase-rules.json`.

## Publish on GitHub (free)
1. Create a repository on GitHub and upload ALL files in this folder (keep the `icons` folder).
2. Repository **Settings → Pages → Build and deployment**: Source "Deploy from a branch", Branch `main`, folder `/ (root)`, Save.
3. After a minute your link is `https://<your-username>.github.io/<repository-name>/`. Share that link: it opens the install page.

## Firebase
Paste the contents of `firebase-rules.json` into Realtime Database → Rules → Publish. The app already points at your database.

## Updating later
Upload the new `app.html` (replace the old one). Phones pick it up automatically the next time they open the app online. If you ever change other files, also change `V="osembo-pwa-1"` in `sw.js` to `osembo-pwa-2`, and so on.

## Going back to an older version
Keep the previous `app.html` under another name (for example `app-old.html`). To roll back, rename it to `app.html` and upload.
