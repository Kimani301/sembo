<p align="center">
  <img src="icons/icon-512.png" alt="Osembo app icon" width="128">
</p>

<h1 align="center">Osembo Comprehensive School</h1>

<p align="center">
  Marks, fees, remedial, register and timetable in one installable app.<br>
  Works on Windows, Android and iPhone, and offline after the first visit.
</p>

<p align="center">
  <a href="https://YOUR-USERNAME.github.io/YOUR-REPO/"><b>Open the app and install it</b></a>
</p>

---

## Install

| Device | Steps |
|---|---|
| **Windows laptop** | Open the link above in Chrome or Edge, press **Install app**, confirm. |
| **Android phone** | Open the link in Chrome, press **Install app** (or menu ⋮ then **Install app**). |
| **iPhone / iPad** | Open the link in Safari, tap **Share**, then **Add to Home Screen**. |

## What is inside

- Marks and results, rankings, report cards
- School fees and other money
- Remedial collections and defaulters
- Class register, timetables, teachers, books, announcements
- Parents portal

## Files

| File | Purpose |
|---|---|
| `index.html` | Landing page with the Install button |
| `app.html` | The school app |
| `manifest.webmanifest` | Install details (name, colours, icons) |
| `sw.js` | Offline support |
| `icons/` | App icons for Windows, Android and iPhone |

## Publish on GitHub Pages

1. Upload all files in this folder to the **root** of your repository (keep the `icons` folder).
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After a minute your app is live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`. Put that link in the repository's **About → Website** box and replace the link at the top of this README.

Installing only works over `https://`, which GitHub Pages provides.

## Releasing an update

Edit `app.html`, then change `VERSION` in `sw.js` (for example `osembo-v4`) so installed copies refresh.

Developed by key_money.
