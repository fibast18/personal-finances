# Rico Finances v1.6.7 — Configurable Complete Offline Edition

Upload the files from this ZIP directly to the ROOT of your existing GitHub Pages app repository (or its existing Pages deployment folder). Do not upload the ZIP itself. Replace all old app files and keep the same public URL.

Files (10):
- index.html: offline-ready finance app, UI, transactions, personalization settings
- sw.js: scope-safe service worker that precaches all required local app assets
- styles.css: bundled offline styles, including the clearer iPhone header layout
- icons.js: offline line icons
- manifest.webmanifest: web app installation information
- version.json: Check for App Update functionality
- apple-touch-icon.png, rico-finances-icon-192.png, rico-finances-icon-512.png: offline icons
- README.txt: this guide

Changes since v1.6.6:
1. Data Settings shows 'Export' and 'Import' (still JSON files for compatibility).
2. NEW 'Personalize App': edit App Name and Your Name/Greeting; Save App Settings.
3. NEW optional Choose Photo (stored on device, not on GitHub); Reset to use bundled icon.
4. App title in header is bolder and brighter, plus status moves beneath the header text to prevent squeezing; iPhone safe-area spacing improved.
5. Footer/app browser title/greeting reflect personalized app name. Core income/expense, monthly charts, 210 stickman actions, JSON backup, filtering, swipe, and update checks retained.
6. Version increment 1.6.7, scoped offline cache version updated accordingly.

IMPORTANT FOR EXISTING USERS:
* FIRST Export and save a backup from your currently installed app (Files/iCloud etc).
* Do not remove your installed Home Screen app or clear browser storage.
* Keep EXACTLY the same GitHub Pages URL/origin to preserve local transactions. Data remains in original localStorage keys 'rico_finances_txs', 'rico_finances_backup_fallback', 'rico_finances_last_export'. Existing JSON backups still import normally.
* New appearance preferences use a SEPARATE localStorage key 'rico_finances_preferences_v1'. They do not modify or reset financial data.
* Profile photos are separate local device data. This shareable package intentionally ships a generic default icon rather than anyone's personal photo. If you want your portrait, go to Personalize App > Choose Photo after updating.
* Export/Import affect financial records only (not name or photo).
* On iPhone, an EXISTING installed Home Screen icon caption does not automatically update when you change in-app name. Rename via the phone's shortcut options if available, or re-add to Home Screen only AFTER backing up. The default manifest/installed icon are shared assets.

For friends: each person visits this same GitHub Pages URL online, installs it on THEIR OWN iPhone, then opens 'Personalize App'. Their transactions, name and photo are stored locally on their device, not shared through GitHub. Same-URL means each visitor loads same published code but records are private to the device/browser profile (unless they export/import their own backups).

OFFLINE: first access/installation MUST be online. A service worker cannot install via GitHub Pages if that device has never visited the site online. After a successful online install and complete asset caching, launch works with Wi-Fi/mobile data off. Browsers may evict cached data, so Export backups regularly.

Deployment: Commit/upload all files, open your Pages URL online, use Check for App Update, and reload once. If the Home Screen app still looks old, close/reopen it while online to allow the new service worker to activate.
