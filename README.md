# Classic Smiles - Premier Dental Clinics Mumbai (Website Replica)

A modern, responsive website for **Classic Smiles Dental Clinics** in Mumbai, India.

Built with **React 19**, **TypeScript**, **Tailwind CSS**, **Lucide Icons**, and pre-configured for **1-click GitHub Pages deployment**.

---

## 🌟 Key Features & Sub-Pages Included

- **Home Page**:
  - Hero with clinical statistics (25,000+ Smiles, 6 Mumbai Centers, 16+ Years Experience, ISO 9001:2015).
  - Fast-track appointment reservation card.
  - Clinical features: 7-step autoclave sterilization, in-house CAD/CAM milling lab, lifetime implant warranties.
  - Featured treatments showcase.
  - Doctor spotlight on Chief Implantologist **Dr. Rahul Oza**.
  - Interactive Before & After smile makeover showcase.
  - 6 Mumbai clinics preview.
  - Real patient testimonials from Mumbai, UK, USA, UAE.

- **Treatments Sub-Pages** (`#/treatments` and dedicated sub-pages):
  - `#/treatment/dental-implants` - Nobel Biocare & Straumann Implants, All-on-4 / All-on-6.
  - `#/treatment/cosmetic-dentistry` - Porcelain E-max Veneers & Digital Smile Design (DSD).
  - `#/treatment/orthodontics-invisalign` - Invisalign Clear Aligners & Orthodontics.
  - `#/treatment/teeth-whitening` - Philips Zoom WhiteSpeed Laser Whitening.
  - `#/treatment/root-canal-treatment` - Single-sitting microscopic rotary endodontics.
  - `#/treatment/full-mouth-rehabilitation` - Full mouth bite reconstruction & monolithic zirconia crowns.
  - `#/treatment/pediatric-dentistry` - Gentle child dentistry and cavity prevention.
  - `#/treatment/laser-dentistry-gum-care` - Biolase soft-tissue laser periodontal therapies.

- **About Us Sub-Page** (`#/about`):
  - Clinic founding vision & ISO 9001:2015 standards.
  - Specialist doctor profiles: Dr. Rahul Oza, Dr. Palak Oza, Dr. Smriti Khanna, Dr. Amit Shah.
  - Advanced clinical infrastructure: 3D iTero intraoral scanner, surgical microscopes, Class-B autoclaves.

- **Smile Gallery Sub-Page** (`#/gallery`):
  - Clinical before & after cases with category filtering (All, Implants, Veneers, Whitening, Aligners).
  - Case duration, patient profiles, and clinical notes.

- **Dental Tourism Sub-Page** (`#/tourism`):
  - Dedicated hub for NRI & international patients (USA, UK, Australia, UAE).
  - Treatment fee comparison table showing 75% to 90% savings.
  - 4-step travel and dental care roadmap.
  - International concierge support (complimentary airport pickup, vetted hotel recommendations, medical visa letters).

- **Mumbai Clinics Sub-Page** (`#/locations`):
  - Detailed directory of all 6 centers:
    1. **Bandra West** (Linking Road)
    2. **Juhu** (JVPD Scheme)
    3. **Andheri West** (Lokhandwala)
    4. **Borivali West** (Shimpoli / Link Road)
    5. **Santacruz West** (Near Station)
    6. **Powai** (Hiranandani Gardens)
  - Addresses, phone numbers, consultation hours, nearest metro transit stations, and map layout placeholders.

- **Pricing & FAQs Sub-Page** (`#/pricing`):
  - Transparent procedure fee schedule (INR and USD).
  - Lifetime implant and zirconia crown warranty guidelines.
  - 0% interest EMI options.
  - Comprehensive categorized FAQs.

- **Contact Us Sub-Page** (`#/contact`):
  - Centralized helpline (+91 98765 43210 / info@classicsmiles.in).
  - Direct telephone lines for each clinic branch.
  - Inquiry form simulator (validates inputs and demonstrates flow without breaking external network dependencies).

- **Google Ads & Contact Space Design**:
  - Tailored reserved advertising banner slots (`728x90` Leaderboard, `300x250` Rectangle, responsive banners) and inquiry spaces to keep the original page design intact without layout shift or broken scripts.

---

## 🚀 How to Deploy on GitHub (Easy 3-Step Setup)

This project has been pre-configured specifically for hassle-free GitHub Pages hosting:
- `vite.config.ts` includes `base: './'` so assets work on any sub-path (e.g. `username.github.io/repo-name/`).
- Hash-based client routing (`#/treatments`, `#/about`, etc.) eliminates 404 errors on browser refresh.
- Includes `public/404.html` and `.github/workflows/deploy.yml` for automated CI/CD builds.

### Step 1: Create a GitHub Repository
1. Go to [https://github.com/new](https://github.com/new).
2. Name your repository (e.g., `classicsmiles-mumbai`).
3. Leave "Initialize with README" **unchecked**.

### Step 2: Push your code to GitHub
Run the following commands in your project root terminal:

```bash
git init
git add .
git commit -m "Initial commit - Classic Smiles website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/classicsmiles-mumbai.git
git push -u origin main
```

*(Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username).*

### Step 3: Turn on GitHub Pages (Automated via GitHub Actions)
1. On your GitHub repository page, click **Settings**.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. That's it! GitHub will automatically trigger the workflow in `.github/workflows/deploy.yml` and publish your site at:
   `https://YOUR_GITHUB_USERNAME.github.io/classicsmiles-mumbai/`

---

## 💻 Local Development

To run the project on your machine:

```bash
# 1. Install dependencies
npm install

# 2. Start the local Vite server
npm run dev
```

Visit `http://localhost:3000` in your browser.

To create a production build:
```bash
npm run build
```
The output files will be generated in the `dist` folder.

---

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   └── 404.html                # SPA redirect fallback for GitHub Pages
├── src/
│   ├── components/
│   │   ├── AdPlaceholder.tsx   # Reserved Google Ads slot (no layout shift)
│   │   ├── AppointmentModal.tsx # Simulated consultation booking modal
│   │   ├── Footer.tsx          # Full footer with 6 Mumbai clinics
│   │   ├── GitHubDeployGuideModal.tsx # Interactive GitHub deployment guide modal
│   │   └── Header.tsx          # Navbar with dropdowns, helpline, mobile menu
│   ├── data/
│   │   └── mockData.ts         # Authentic clinics, doctors, treatments & FAQs
│   ├── pages/
│   │   ├── AboutPage.tsx       # About Dr. Rahul Oza, team & 3D tech
│   │   ├── ContactPage.tsx     # Contact & non-breaking inquiry layout
│   │   ├── GalleryPage.tsx     # Before & After smile makeover cases
│   │   ├── HomePage.tsx        # Signature Smiles main landing page
│   │   ├── LocationsPage.tsx   # 6 Mumbai clinics directory & timings
│   │   ├── PricingFaqPage.tsx  # Cost guide, warranties, 15+ FAQs
│   │   ├── TourismPage.tsx     # International dental tourism & savings table
│   │   └── TreatmentsPage.tsx  # Hub + 8 dedicated treatment sub-pages
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── App.tsx                 # Root app & hash routing controller
│   ├── index.css               # Tailwind CSS & typography setup
│   └── main.tsx                # App entry point
├── index.html                  # HTML entry point with meta tags
├── package.json
├── tsconfig.json
├── vite.config.ts              # Configured with base: './' for GitHub Pages
└── README.md
```
