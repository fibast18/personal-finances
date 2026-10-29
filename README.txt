# Rico Finances v1.6.6 — Offline GitHub Pages Release

Upload EVERY file in this folder to the SAME folder in your existing GitHub Pages repository. Upload files, not the ZIP itself. No build step, npm, server or API key is required.

Files:
- index.html — complete app, financial records still use original browser localStorage keys
- sw.js — scoped offline cache and safe update logic
- styles.css — precompiled local styles, no Tailwind CDN
- icons.js — fully local SVG line icons, no Lucide CDN
- manifest.webmanifest — iPhone/iPad Home Screen and Android PWA support
- version.json — supports Check for App Update
- rico-finances-icon-192.png / rico-finances-icon-512.png / apple-touch-icon.png — bundled fallback brand icon

OPTIONAL: If you want your original profile photo to appear in the app, upload the original file named exactly `Rico ID.JPG` (case-sensitive) alongside these files. Since that photo was not included in your attached source, this release shows the bundled finance icon if the photo is absent.

### Safety before changing GitHub files
1. On your CURRENT Rico Finances app, tap Export JSON and save a copy somewhere outside the app (Files/iCloud Drive). IMPORTANT: the GitHub repository does not store your transaction data.
2. Do not delete the installed Home Screen app or clear Safari website data; that might erase its device-local transactions.
3. In your existing repository, replace source files with everything in this folder. Keep the repository and GitHub Pages address the same. If you change domain/path, old localStorage will NOT automatically transfer.
4. Online, open the GitHub Pages app URL once, then use it to install/refresh on the iPhone Home Screen. Confirm your transactions and that all icons/chart/styles appear.
5. Turn off both Wi-Fi and mobile data, close and reopen the Home Screen app, then test. Existing records, charts and new entry should work offline.
6. Check for App Update requires internet but does not erase cache or stored transactions. For future releases, update the version in index.html, version.json and sw.js cache name together.

IMPORTANT: GitHub Pages cannot load an app on a device that has NEVER visited/installed it while online. Offline starts only after at least one complete successful ONLINE load/install on that device. Mobile browsers can evict cached files under storage pressure. Export JSON regularly.

No financial transactions are included in this ZIP. Records remain on the phone/browser in keys `rico_finances_txs` and `rico_finances_backup_fallback`, and remain compatible with original JSON export/import.
