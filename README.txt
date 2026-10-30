MY FINANCES v1.7.3 — SAFE IPHONE EXPORT + UPDATE CHECK REPAIR
=========================================================

IMPORTANT: DO NOT DELETE THE OLD HOME SCREEN APP OR CLEAR SAFARI WEBSITE DATA.
Financial records are held locally in each app installation, not stored in GitHub.

REPAIRS
- Export now invokes native iPhone share sheet with a real .json File, when supported.
- If the share sheet is unavailable, Export opens a Backup Options dialog with
  Download and Copy backup text alternatives, plus a preview of the original JSON array.
- The backup timestamp changes only after user confirms a copy was saved.
- Update checker requests version.json BEFORE updating the service worker, and
  reports specific version-file/network failures rather than one generic error.
- Offline worker keeps version metadata checks truthful if there is no internet.
- Preserves all v1.7.2 finance features, original storage keys, AI Analyst,
  custom app name/greeting/photo, header, floating Add, and user-provided app logo.

TO INSTALL ON EXISTING GITHUB PAGES SITE
1. Upload all 13 actual app files (not this ZIP) to the SAME public Pages folder.
   You can replace repository app files; this does not delete data on users' phones.
2. Commit and wait for the site deployment to complete.
3. In Safari, visit YOUR_GITHUB_PAGES_URL/version.json (project page: /repo/version.json)
   and confirm that the JSON says version 1.7.3. HTTP 404 means the file isn't deployed
   at the address you're checking.
4. On the EXISTING installed app, stay online. Completely close it, then reopen it.
   Its earlier service worker uses network-first navigation, so it should get new HTML
   if the GitHub Pages deployment and connection are working.
5. Confirm the footer says v1.7.3, then tap Export and follow the iPhone share sheet
   or Backup Options to SAVE an actual personal copy of the transactions.
6. Verify the backup file exists in Files before removing or reinstalling anything.
7. Reopen offline AFTER at least one successful online load and cache install.

IF THE APP STILL SHOWS v1.7.1
- Check version.json at your live GitHub Pages URL in Safari.
- Check that Pages points to the branch/folder you updated (Settings > Pages).
- DO NOT delete your Home Screen app: existing offline and finance data may be lost.
- Try an online close/relaunch after confirming version.json on the website.

BACKUP FORMAT
JSON array identical to previous Export/Import, preserving compatibility.
Data keys remain rico_finances_txs and rico_finances_backup_fallback.
No financial transaction data is sent to the activation server or GitHub.

LIMITS
First installation needs internet. GitHub Pages is currently publicly accessible;
private one-time activation codes are NOT provided in this version.
Native iPhone share / Files UI depends on iOS and browser support.
The share sheet or download request is NOT proof of saved backup: verify in Files.

Developed by: Engr. Rico J. Pono
