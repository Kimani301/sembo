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


## Owner console (updated)
- Open it by tapping the Osembo title or the maintenance photo 5 times, then enter your owner code. It is NOT stored in the app.
- Tabs: Status, Keys, Licence, Access, Data, Activity. It locks itself after 10 minutes.
- Switch app OFF shows the maintenance screen on every phone connected to the school database. A phone that is not connected (see Data tab) is only affected itself.
- Revoke admin access and staff suspension now apply to all connected phones.
- Licence keys are digitally signed, long, and pasted (not typed). Keys made by the old version no longer work.

## Updating
Replace `app.html` and `sw.js` in GitHub (cache version is now osembo-pwa-4). `maintenance-owner.jpg` is no longer needed: the photo is inside app.html.

## Security notes
- Still open: the Firebase rules allow anyone who knows the School ID to read and write. Add Firebase sign-in before storing real student data.
- Default seed passwords (admin, secretary) are still in the source; change them after first login.
- Licence checking is currently switched off in the code (`licActive` always returns true).
