# المافيا — ديوانية أونلاين

Web pages for the online mode of the Mafia party game.

- **`host.html`**: the narrator screen. It creates a diwaniya (room) and shows its code and QR code.
- **`index.html`**: the player page. Players open it from the link or by scanning the QR code.

The game rules run on a Supabase edge function. These pages are built output; do not edit them here.
Rebuild from the app's source with:

```
node tools/transpile.js && node tools/build-online.js
```
