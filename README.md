# Dani C J — Portfolio

A Next.js portfolio site deployed to GitHub Pages with a filterable image gallery, animated skills bars, about section, and contact form.

---

## 🚀 Quick Start (local dev)

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## 📸 Adding Portfolio Images

1. Copy your image file into `public/images/portfolio/`  
   (supports `.jpg`, `.jpeg`, `.png`, `.webp`)

2. Open `data/portfolio.js` and add an entry:

```js
{
  id: 7,                                    // next sequential number
  title: 'My New Project',
  category: 'UI Design',                    // must match an existing category, or add new
  image: '/images/portfolio/my-image.jpg',  // filename you just dropped in
  description: 'Short description here.',
},
```

3. Commit and push to `main` → GitHub Actions auto-deploys.

---

## 🌐 Deploying to GitHub Pages

### First-time setup

1. Create a GitHub repo named **`your-username.github.io`**  
   (this gives you `https://your-username.github.io`)

2. Push this folder as the repo:

```bash
cd dani-portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

3. In your GitHub repo → **Settings → Pages**  
   Set source to **GitHub Actions**

4. Every push to `main` auto-deploys via `.github/workflows/deploy.yml`

### If deploying to a sub-path (e.g. `username.github.io/portfolio`)

Open `next.config.js` and set:
```js
basePath: '/portfolio',
```

---

## ✏️ Customisation

All personal details live in one file: **`data/portfolio.js`**

| What               | Where in portfolio.js      |
|--------------------|---------------------------|
| Name, title, tagline | `siteConfig`            |
| Email / social links | `siteConfig`            |
| About paragraph    | `aboutText`               |
| Skills & levels    | `skills` array            |
| Portfolio projects | `portfolioItems` array    |

### Contact form

The form uses [Formspree](https://formspree.io) (free tier: 50 submissions/month).  
1. Sign up at formspree.io  
2. Create a form, copy your form ID  
3. Open `components/Contact.jsx` and replace `YOUR_FORM_ID`

### Resume / CV

Place your PDF at `public/resume.pdf` — the "Download CV" button links to it automatically.

### Profile photo

Place your photo at `public/images/profile.jpg` then uncomment the `<Image>` line in `components/About.jsx`.

---

## 🗂 Project Structure

```
dani-portfolio/
├── app/                  Next.js App Router
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/           One file per section
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Portfolio.jsx     ← filterable gallery + lightbox
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── portfolio.js      ← edit this to customise everything
├── public/
│   ├── images/
│   │   └── portfolio/    ← drop images here
│   └── resume.pdf        ← place CV here
├── .github/workflows/
│   └── deploy.yml        ← auto-deploy to GitHub Pages
└── next.config.js        ← static export config
```
