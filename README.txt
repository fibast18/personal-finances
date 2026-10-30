MY FINANCES v1.7.2 — OFFLINE GITHUB PAGES EDITION
=================================================

WHAT CHANGED FROM RICO FINANCES v1.7.1
- The iPhone Add to Home Screen title is now 'My Finances'.
- The Android PWA manifest name and short name are now 'My Finances'.
- The attached FINANCES / SMART WEALTH PLANNING & MANAGEMENT logo is used for Apple touch, Android install, and browser icons.
- In-app default name is now 'My Finances'; other personalized names and uploaded profile photos remain supported.
- Saved legacy default name 'Rico Finances' displays as 'My Finances', while other custom names are retained.
- Developer credit still reads: Developed by: Engr. Rico J. Pono.
- AI Analyst pop-up, gear personalization, 66px floating Add button, built-in icons/charts/styles and offline operation retained.
- Offline cache updated to v1.7.2; financial transaction keys and backup schema unchanged.

DEPLOY TO GITHUB PAGES
1. On EACH phone already using the app, open the app and choose Export to save a personal financial backup FIRST.
2. Extract this ZIP and upload ALL of the enclosed app files directly into the same repository directory serving your GitHub Pages site (NOT the ZIP itself). Replace the old files. A missing file can break offline installation.
3. Commit, wait for GitHub Pages to deploy, then open the existing site ONLINE and choose Check for App Update.
4. Confirm the footer displays v1.7.2, then test offline.
5. For the new icon and Home Screen name, add the UPDATED site to the Home Screen from Safari (iPhone) or Install App (Android). Previously installed icons may keep the old name and image.
6. On iPhone, DO NOT remove the existing installed app until you've exported a backup. iOS can treat a re-added Home Screen web app as a different data container. If transactions don't appear, use Import to restore the exported file.

DATA & COMPATIBILITY
- URL and storage origin should remain the same to preserve existing transactions on current installations.
- Existing localStorage keys are not renamed: rico_finances_txs, rico_finances_backup_fallback, rico_finances_last_export, rico_finances_preferences_v1.
- Financial data is LOCAL to each browser/PWA installation, not synchronized or uploaded to GitHub.
- Old user-uploaded profile photos remain in each device's preferences.
- AI Analyst is a free offline rule-based calculator, not an online generative AI.

OFFLINE & ACCESS LIMITATIONS
- First visit/installation on each device MUST happen while online so the service worker can cache the entire app. Subsequent offline use depends on cached files remaining installed.
- The GitHub Pages URL remains PUBLIC to anyone with the link. This package does NOT implement per-phone activation codes or a private access server.
- Browser cache and storage can be cleared/evicted; back up transactions periodically.

PACKAGE FILES
index.html, styles.css, icons.js, analyst.js, sw.js, manifest.webmanifest, version.json,
my-finances-icon-192.png, my-finances-icon-512.png, my-finances-maskable-512.png,
my-finances-apple-touch-icon.png, favicon-48.png, README.txt

Developed by: Engr. Rico J. Pono
