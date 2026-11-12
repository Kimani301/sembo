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


## Owner maintenance mode update
- The Owner Console now has a shared maintenance-mode switch.
- When enabled, the app displays the supplied owner portrait and the message “SYSTEM IS UNDER MAINTENANCE”.
- The maintenance portrait is embedded in `app.html`, so no separate image upload is needed.
- Replace `app.html` and `sw.js` in the GitHub Pages repository with the versions in this package. The service-worker cache version has been incremented.
- The maintenance flag is stored in the school's shared app data and is distributed through the existing sync process. Devices that are offline will not receive the change until they reconnect.

## Security note
The Owner Console additions are still client-side controls. The current Firebase rules in this project permit broad reads and writes for anyone who knows the school ID. This package does not claim to solve that backend security issue. Before storing real student data, deploy Firebase Authentication, role-based server-enforced rules, and trusted server-side audit/backup functions.
