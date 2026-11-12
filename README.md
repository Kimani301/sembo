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


## Owner console
- Open it by tapping the Osembo title or the maintenance photo 5 times (or Ctrl+Shift+K on a computer).
- **First time:** you are asked to set your own owner password (at least 8 characters). Do this on your own phone before giving the app to a school. You are then shown a **recovery code** once: write it on paper.
- **Next times:** enter your owner password. After 3 wrong tries you must wait. If you forget the password, tap "Forgot password?" and use the recovery code.
- Tabs (bottom bar): Overview, Accounts, Data, Activity, Security. It locks itself after 10 minutes.
- Overview: switch the app OFF/ON (maintenance screen on every connected phone).
- Accounts: reset the admin password (asks for your owner password), revoke admin access, suspend or restore staff.
- Data: download a backup and connect phones to the school database.
- Security: change your password, make a new recovery code.
- Licensing has been removed completely. There are no licence keys, payments or expiry.

## Updating
Replace `app.html` and `sw.js` in GitHub (cache version is now osembo-pwa-5). `maintenance-owner.jpg` is no longer needed: the photo is inside app.html.

## Security notes
- Still open: the Firebase rules allow anyone who knows the School ID to read and write. Add Firebase sign-in before storing real student data.
- Default seed passwords (admin, secretary) are still in the source; change them after first login.
