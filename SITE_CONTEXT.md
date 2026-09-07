# SITE CONTEXT & TECHNICAL ARCHITECTURE

## Executive Overview
- **Subject:** Kishan Bastola (Netra Prasad Bastola) — *किशन बाँस्टोला (नेत्र प्रसाद बाँस्टोला)*
- **Primary Title:** Chairperson — Astronova Foundation Nepal | STEM & Mathematics Advocate
- **Primary Audience:** Senior dignitaries, government officials, institutional leaders, and international delegation heads.
- **Visual Design Identity:** High-end academic institution meets modern editorial publication.
- **Hosting / Network Access:** Exposed on `0.0.0.0:5173` via `./host.sh` for multi-device viewing (tablets, smartphones, laptops, projectors).

---

## 1. Design System & Aesthetic Specifications

### Color Palette (Strictly Enforced)
| Token Name | Hex Value | Application / Purpose |
|---|---|---|
| `--bg-primary` | `#F9F8F3` | Warm Ivory / Off-white main background |
| `--bg-surface` | `#FFFFFF` | Pure off-white card/container background |
| `--bg-alt` | `#F2EFE8` | Neutral cream contrast background |
| `--text-primary` | `#121316` | Deep charcoal, near-black primary body & title text |
| `--text-secondary` | `#4A4D55` | Muted slate charcoal for subheadings & captions |
| `--text-muted` | `#757985` | Editorial grey for meta tags and line numbers |
| `--accent-blue` | `#0E2A47` | Deep Academic Blue for key highlights & CTAs |
| `--accent-gold` | `#9E8256` | Muted bronze / restrained gold for eyebrows & accents |
| `--accent-gold-light`| `#C4B296` | Soft gold accent for dark mode canvas contrast |
| `--dark-bg` | `#121316` | Immersive dark canvas for signature sections |
| `--dark-surface` | `#1B1C21` | Dark card surface for framework inspection |
| `--border-light` | `rgba(18, 19, 22, 0.12)` | 1px hairline horizontal/vertical rules |
| `--border-dark` | `rgba(245, 243, 236, 0.14)` | 1px dark hairline divider |

### Typography System
- **Display Serif:** `Cormorant Garamond` (Weights: 400, 500, 600, 700; Italic) paired with `Instrument Serif`.
- **Body & UI Sans:** `Inter` / `Manrope` (Weights: 300, 400, 500, 600, 700).

---

## 2. Source Facts & Copy Enforcement

### Primary Roles & Leadership
- **Full Name:** Kishan Bastola (Netra Prasad Bastola) / *किशन बाँस्टोला (नेत्र प्रसाद बाँस्टोला)*
- **Primary Title:** Chairperson — Astronova Foundation Nepal | STEM & Mathematics Advocate
- **Roles:**
  - Chairperson — Astronova Foundation Nepal
  - Secretary — Mathematical Association of Nepal (MAN), Bagmati Province
  - Executive Member — Nepal Mathematical Society (NMS), Bagmati Province
  - Founder & Director — Hetauda Research & Innovation Center (HRIC)
  - Country Leader & Delegation Head — Taiwan International Science Fair (TISF, Taiwan 🇹🇼)
  - Delegation Head — International Science & Technology Competition (IOSTC, Indonesia 🇮🇩)

### Support Our Vision (Bank & QR Details)
- **Bank Name:** Rastriya Banijya Bank
- **Account Holder Name:** ASTRONOVA FOUNDATION NEPAL
- **Account Number:** `130010006086001`
- **Location / Branch:** Hetauda Branch, Makwanpur, Nepal
- **Features:** Direct one-click copy account number and Fonepay / Bank QR Modal.

### Contact Directory & Socials
- **Office Location:** Hetauda Sub-Metropolitan City, Makwanpur, Bagmati Province, Nepal *(हेटौंडा उपमहानगरपालिका, मकवानपुर, नेपाल)*
- **Email:** `contact@astronova.org.np` / `contact@kishanbastola.edu.np`
- **Phone / WhatsApp:** `+977-9855068222` (`https://wa.me/9779855068222`)
- **Facebook:** `https://www.facebook.com/astronovafoundation`
- **LinkedIn:** `https://www.linkedin.com/in/kishan-bastola/`
- **Interactive Contact Form:** Included in `ContactFormSection.tsx` with instant feedback state.

---

## 3. Full Component Architecture

```
Kishan_sir/
├── host.sh                      # Shell script for network hosting on 0.0.0.0:5173
├── SITE_CONTEXT.md              # Complete developer guide, architecture & design documentation
├── package.json                 # Node dependencies, build scripts & "host" script
├── index.html                   # HTML entry point with Google Fonts
└── src/
    ├── index.css                # Global CSS design system, grid, typography & dark modes
    ├── types/
    │   └── portfolio.ts         # TypeScript interfaces for portfolio data models
    ├── data/
    │   └── sourceFacts.ts       # Single source of truth for text content & bank details
    ├── components/
    │   ├── Navbar.tsx           # Restrained header with section navigation links
    │   ├── Hero.tsx             # Asymmetric 12-column editorial hero with exact copy
    │   ├── Profile.tsx          # 01 / PROFILE section with 2-column layout & profile drawer
    │   ├── Credentials.tsx      # 02 / CREDENTIALS text-focused credential grid
    │   ├── Delegations.tsx      # 03 / GLOBAL DELEGATIONS (TISF Taiwan & IOSTC Indonesia)
    │   ├── CuriosityFramework.tsx # 04 / FROM CURIOSITY TO COMMERCE interactive dark section
    │   ├── SelectedWork.tsx     # 05 / SELECTED WORK editorial entry list & detail drawer
    │   ├── InstitutionBuilding.tsx # 06 / INSTITUTION BUILDING (Astronova & HRIC)
    │   ├── SupervisedTheses.tsx # 07 / ARTICLES & SUPERVISED THESES list & abstract viewer
    │   ├── AreasOfWork.tsx      # 08 / AREAS OF WORK typographic list with thin separators
    │   ├── GallerySection.tsx   # 09 / MEDIA & GALLERY (Summer STEAM Expo & delegations)
    │   ├── MediaArchive.tsx     # 10 / MEDIA newspaper clipping press archive
    │   ├── ThoughtLeadership.tsx # 11 / THOUGHT editorial article entries & takeaway viewer
    │   ├── Vision.tsx           # 12 / VISION dark minimal canvas with exact 6-line vision quote
    │   ├── SupportVision.tsx    # 13 / SUPPORT OUR VISION (Rastriya Banijya Bank A/C & QR)
    │   ├── ContactFormSection.tsx # 14 / DIRECT CONTACT, PHONE/WHATSAPP, HETAUDA ADDRESS & FORM
    │   ├── ProfileModal.tsx     # Executive dossier drawer
    │   ├── CVModal.tsx          # Printable verified CV document viewer modal
    │   └── DetailModal.tsx      # Reusable detail modal for work, media, thought & thesis items
    └── App.tsx                  # Main application orchestrator
```

---

## 4. Multi-Device Network Hosting

To host the application so that other devices (smartphones, tablets, laptops, smart TVs, or projectors) on the same Wi-Fi or LAN network can open the site:

```bash
./host.sh
```
*(Or via `npm run host`)*

Binds Vite to `0.0.0.0:5173` and outputs the exact local IP addresses (e.g. `http://192.168.x.x:5173/`).
