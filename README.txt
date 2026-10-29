RICO FINANCES v1.7.0 — OFFLINE ANALYST EDITION
=============================================

GITHUB PAGES INSTALL
1. In the running app, tap Export FIRST and save a backup file of your financial records.
2. Extract this ZIP. Upload ALL files from this folder to your existing GitHub repository at the same path (keep filenames and casing unchanged). Do not upload only index.html.
3. Commit your updates and allow GitHub Pages to deploy.
4. Open your existing GitHub Pages URL while ONLINE and use Check for App Update. Reopen to see v1.7.0.
5. Test by turning on Airplane Mode, reopening the Home Screen app, and reviewing the AI Analyst.

OFFLINE LIMITATIONS
- The app must load successfully online once on every device for the service worker to install the complete app shell. A first-ever offline load on GitHub Pages is not possible.
- Browser storage/cache can be cleared or evicted; never rely on the phone as the only backup.
- Data and personalization are local to a particular browser/Home Screen app installation and are not synced across devices.

FEATURES
- Preserved from v1.6.9: user-customizable app name, greeting and profile picture via the gear button; floating add control; 210 stickman animations; financial transactions, filtering, charts; JSON-compatible Export/Import; safe app update check.
- Correct developer footer: "Developed by: Engr. Rico J. Pono".
- New offline, free, built-in AI Analyst with read-only calculations: net monthly cash flow, income left after expenses, expense ratio, top spending, previous-month comparison, six-month expense history, major entries, suggestions and quick questions.
- This Analyst uses a transparent rule-based engine, NOT a generative cloud AI model. No API keys or subscription needed; no finance data is sent to a server by the Analyst.
- Recommendations depend on the completeness and correctness of the transactions you entered. Nothing in the Analyst changes financial records.

LOCAL DATA KEYS (UNCHANGED)
rico_finances_txs
rico_finances_backup_fallback
rico_finances_last_export
rico_finances_preferences_v1

APP SHELL
index.html, styles.css, icons.js, analyst.js, sw.js, manifest.webmanifest, version.json, apple-touch-icon.png, rico-finances-icon-192.png, rico-finances-icon-512.png

Rico Finances v1.7.0 | Developed by: Engr. Rico J. Pono
