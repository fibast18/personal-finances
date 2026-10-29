# Rico Finances v1.6.8 — Compact Header + Floating Add Button (Full Offline Package)

COMPLETE GITHUB PAGES REPLACEMENT — 10 files:
index.html, sw.js, styles.css, icons.js, manifest.webmanifest, version.json,
rico-finances-icon-192.png, rico-finances-icon-512.png, apple-touch-icon.png, README.txt.

Changes from v1.6.7:
- Photo locked to 52x52 px (46x46 px on narrow screens). Title and greeting sit to its right.
- A settings gear appears at top right, with the personalization form in a modal dialog only when opened.
- Add (+) now floats on the bottom-left, enlarged 1.5x to 66x66 px, above the iPhone safe area.
- Core header/action CSS is also embedded directly in index.html to avoid previous cached CSS sizing problems.
- All existing features retained: 210 animated stickman actions, charts, filters, entries/edit/delete,
  Export/Import backup compatibility, offline operation and update check.
- Same finance localStorage keys: rico_finances_txs, rico_finances_backup_fallback, rico_finances_last_export.
- Same appearance storage key: rico_finances_preferences_v1. Existing name and photo stay on each device.
- Scoped service worker cache upgraded to rico-finances-v1.6.8.

HOW TO UPDATE:
1. First EXPORT current financial records as backup before any replacement.
2. Unzip, upload all 10 files to the same repository folder used by GitHub Pages.
   Upload individual files from inside ZIP, NOT the ZIP itself and NOT a containing folder.
3. Commit. Open app online, then use Check for App Update and close/reopen once while online.
4. Check footer version v1.6.8 and test with Wi-Fi/mobile data off.

IMPORTANT: Keep same URL; do not uninstall Home Screen app or delete its storage, which contains records and settings.
GitHub Pages cannot open for the first-ever time entirely offline: an online installation is required.
Personal photos are stored locally and are not embedded in the package or shared with your friends.
The displayed app name is customizable; iPhone Home Screen caption and manifest icon remain shared PWA assets.
