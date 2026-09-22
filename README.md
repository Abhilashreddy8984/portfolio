# Abhilash Reddy — Personal Portfolio

A modern, responsive personal portfolio built with **React + Vite + Tailwind CSS**.
Designed for deployment as a static website on **AWS S3 + CloudFront**.

---

## 🚀 Local Setup

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📝 Updating Content

All portfolio content lives in one file:

```
src/data/portfolio.js
```

Edit that file to update:
- Your name, email, GitHub, LinkedIn
- Skills
- Projects (add/remove/edit)
- Experiences
- Hackathons
- What you're currently learning

Search for `YOUR_` to find every placeholder that needs your real data.

---

## 🏗️ Production Build

```bash
npm run build
```

This outputs a `dist/` folder containing your static site.
You can preview it locally before deploying:

```bash
npm run preview
```

---

## ☁️ AWS Deployment Architecture

```
React/Vite App
      │
      ▼
  npm run build
      │
      ▼
  dist/ folder  (static HTML, CSS, JS)
      │
      ▼
  AWS S3 Bucket  (static website hosting)
      │
      ▼
  AWS CloudFront  (CDN, HTTPS, caching)
      │
      ▼
  Custom Domain  (optional — via Route 53 or any registrar)
```

### AWS Resources Required

| Resource | Purpose |
|---|---|
| S3 Bucket | Stores your built static files |
| CloudFront Distribution | Delivers files globally with HTTPS |
| Route 53 (optional) | Manages your custom domain DNS |
| ACM Certificate (optional) | Free SSL/TLS certificate for HTTPS |

---

## 📦 Step-by-Step AWS S3 Deployment

### Step 1 — Build the site

```bash
npm run build
```

### Step 2 — Create an S3 Bucket

1. Go to **AWS Console → S3 → Create bucket**
2. Choose a bucket name (e.g. `abhilash-portfolio`)
3. Select your preferred region (e.g. `ap-south-1` for Mumbai)
4. **Uncheck** "Block all public access" (required for static hosting)
5. Acknowledge the warning and create the bucket

### Step 3 — Enable Static Website Hosting

1. Open your bucket → **Properties** tab
2. Scroll to **Static website hosting** → click **Edit**
3. Enable it
4. Set **Index document** to `index.html`
5. Set **Error document** to `index.html` (handles React client-side routing)
6. Save changes

### Step 4 — Set Bucket Policy (Public Read)

Go to **Permissions → Bucket policy** and paste:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}
```

Replace `YOUR-BUCKET-NAME` with your actual bucket name.

### Step 5 — Upload the `dist/` folder

**Option A — AWS Console:**
1. Go to your bucket → **Objects** tab → **Upload**
2. Upload all files and folders from the `dist/` directory

**Option B — AWS CLI (faster):**
```bash
aws s3 sync dist/ s3://YOUR-BUCKET-NAME --delete
```

Your site is now live at the S3 static website URL shown in the Properties tab.

---

## 🌐 CloudFront Setup (HTTPS + CDN)

CloudFront gives you HTTPS and fast global delivery.

### Step 1 — Create a CloudFront Distribution

1. Go to **AWS Console → CloudFront → Create distribution**
2. **Origin domain**: paste your S3 static website endpoint URL
   (found in S3 → Properties → Static website hosting)
   > ⚠️ Use the **website endpoint**, not the bucket ARN
3. **Viewer protocol policy**: Redirect HTTP to HTTPS
4. **Default root object**: `index.html`
5. Click **Create distribution** — wait ~5 minutes to deploy

### Step 2 — Handle Client-Side Routing

Because React handles routing client-side, 404s need to be redirected to `index.html`:

1. Go to your distribution → **Error pages** tab
2. Click **Create custom error response**
3. HTTP error code: `403`  →  Response page path: `/index.html`  →  HTTP response code: `200`
4. Repeat for HTTP error code `404`

### Step 3 (Optional) — Custom Domain

1. Register a domain (Route 53, Namecheap, etc.)
2. Request a free **ACM certificate** in `us-east-1` for your domain
3. Add the certificate to your CloudFront distribution
4. Add a CNAME DNS record pointing your domain to the CloudFront URL

---

## 🔄 How to Update the Deployed Website

After making changes locally:

```bash
# 1. Rebuild
npm run build

# 2. Sync to S3
aws s3 sync dist/ s3://YOUR-BUCKET-NAME --delete

# 3. Invalidate CloudFront cache (so changes appear immediately)
aws cloudfront create-invalidation --distribution-id YOUR-DISTRIBUTION-ID --paths "/*"
```

---

## 🌍 Environment Variables

This project currently has no required environment variables.

If you add any API keys in the future, create a `.env` file:

```bash
VITE_MY_API_KEY=your_key_here
```

Access it in code as `import.meta.env.VITE_MY_API_KEY`.

> ⚠️ Never commit `.env` files. Add `.env` to `.gitignore`.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Hackathons.jsx
│   │   ├── Education.jsx
│   │   ├── CurrentlyLearning.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js       ← Edit this to update content
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS | Utility-first styling |
| Lucide React | Icon library |
| AWS S3 | Static file hosting |
| AWS CloudFront | CDN + HTTPS |

---

Built by **Abhilash Reddy** · Learning · Building · Experimenting
