# The Arabic Byanjan — Cafe & Restaurant Website

A beautiful, fully responsive single-page menu & ordering website for **The Arabic Byanjan** in Domkal.

> *Enjoy The Fun Of Arabia* — authentic Arabian, Indian & Continental cuisine, ordered straight from your phone.

## ✨ Features

- 🐪 **Cinematic loading screen** with an animated camel and Arabic chef running across the desert with a steaming food tray.
- 🎨 **Black & gold theme** matched to the restaurant's logo.
- 📜 **Full categorized menu** (Starters, Momos, Kababs, Delights, Soups, Continental, Pizza & Burger, Main Course, Rice & Naan, Gravy, Chef's Signature, Beverages, Mocktails, Shakes).
- 🛒 **Smart cart** — pick items with size/portion options, change quantities, see your live total.
- 📲 **One-tap WhatsApp ordering** — auto-formatted order message sent to **+91 62949 90993**.
- 📞 **Direct call buttons** for Saikat Roy, Farhad Reza & Fardin SK.
- 🌐 **Social links** for Facebook & Instagram.
- 📍 **Location card** with Google Maps link.
- 📱 **Fully responsive** for mobile, tablet & desktop.
- 💾 Cart is saved in `localStorage` (survives page reloads).

## 🗂️ Project Structure

```
thearabicbyanjan/
├── index.html           # Page markup
├── css/styles.css       # Theme, layout, animations
├── js/script.js         # Menu data, cart, WhatsApp ordering
├── images/
│   ├── logo.svg         # Vector fallback logo
│   ├── logo.png         # ← drop your real logo here (auto-detected)
│   └── README.md
└── README.md
```

## 🚀 Run Locally

It's pure static HTML — just open `index.html` in any browser, or serve it:

```bash
# Option 1 — Python
python3 -m http.server 8080

# Option 2 — Node (npx)
npx serve .
```

Then visit <http://localhost:8080>.

## 🌍 Deploy (free)

### GitHub Pages
1. Push this repo to GitHub.
2. **Settings → Pages → Source:** branch `main`, folder `/ (root)`.
3. Your site will be live at `https://<username>.github.io/thearabicbyanjan/` in ~1 minute.

### Netlify / Vercel
- Drag-and-drop the folder, or connect the GitHub repo. No build step needed.

## 🖼️ Replacing the Logo

The site includes a recreated `images/logo.svg` as a fallback.
**To use your original PNG logo:** drop it at `images/logo.png` — the site auto-prefers the PNG and falls back to the SVG if missing.

## 🛠️ Customizing

- **Phone / WhatsApp / address** → top of `js/script.js` (`RESTAURANT` object) and contact section in `index.html`.
- **Menu items / prices** → `MENU` array in `js/script.js` (clearly grouped by category).
- **Colors** → CSS variables at the top of `css/styles.css` (`--gold-1`, `--gold-2`, `--bg-0`, etc.).
- **Hours** → footer block in `index.html`.

## 📞 Contact

- 📍 Domkal Bridge More, Near Hotel Byanjan, 742303
- 🟢 WhatsApp: **+91 62949 90993**
- 📞 Saikat Roy: +91 89266 86250 · Farhad Reza: +91 86170 27019 · Fardin SK: +91 94348 80573
- 📘 Facebook: <https://facebook.com/share/1DxYSjkfGt/>
- 📸 Instagram: <https://instagram.com/thearabicbyanjan>

---

Designed & developed for **The Arabic Byanjan**.
