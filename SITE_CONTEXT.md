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

---

## 3. The 6-Question Conceptual Sitemap (आधिकारिक साइटम्याप)

The site structure is driven by six inquiries, organized across 4 primary multi-page routes:

```
01. WHAT SHAPED ME?
मेरो पृष्ठभूमि, शिक्षा र यात्राले मलाई कसरी निर्माण गर्यो?
Personal story, Master’s Degree in Mathematics, 18 years in education, former School Principal and Campus Chief, career timeline, key turning points and professional development.

02. WHAT DRIVES ME?
मलाई कुन उद्देश्य, विश्वास र दर्शनले अघि बढाउँछ?
Education philosophy, student-centred learning, curiosity, mathematics and scientific thinking, belief that lack of resources should not prevent student potential, and the purpose behind the work.

03. WHAT PROBLEMS AM I SOLVING?
शिक्षा, अनुसन्धान र नवप्रवर्तन क्षेत्रमा म कुन समस्या समाधान गर्न खोज्दैछु?
Explain the gaps being addressed: limited hands-on learning, weak access to mentors and laboratories, limited student research pathways, and weak links between learning, innovation and real-world application. Present these as problem statements and validate with evidence where possible.

04. WHAT AM I CREATING?
म कुन संस्था, प्रणाली र अवसर निर्माण गर्दैछु?
Astronova Foundation Nepal, Hetauda Research and Innovation Center (HRIC), HRIC Scientific Ecosystem, STEAM learning initiatives, student research and science fair pathways, mentor networks and institutional partnerships. Show the relationship among these initiatives with a clear ecosystem diagram.

05. HOW DO I CREATE VALUE?
म ज्ञान, अनुसन्धान र नवप्रवर्तनलाई वास्तविक मूल्यमा कसरी रूपान्तरण गर्छु?
This page explains the signature framework From Curiosity to Commerce: Curiosity → Learning → Research → Prototype → Innovation → Enterprise → Commerce. Clarify that commerce means real-world application, market relevance and social/economic value—not simply pushing students into business.

06. WHAT FUTURE AM I BUILDING?
म कस्तो भविष्य निर्माण गर्न चाहन्छु र कोसँग सहकार्य गर्न चाहन्छु?
Long-term vision for Nepal, future direction for HRIC and scientific ecosystem development, research interests, desired partnerships with universities, schools, government, researchers, industry and international organizations. Include a clear collaboration/contact invitation.
```

---

## 4. Multi-Page Component Architecture

```
Kishan_sir/
├── host.sh                      # Shell script for network hosting on 0.0.0.0:5173
├── README.md                    # Project overview and site map specification
├── SITE_CONTEXT.md              # Technical architecture & design documentation
├── docs/                        # Complete technical and UX specifications
│   ├── CONTEXT.md               # Fact base, credentials, roles & verbatim site map
│   ├── DATA.md                  # Schema definitions & data models
│   └── UX.md                    # Navigation model, route mapping & UX standards
└── src/
    ├── index.css                # Global CSS design system, grid & typography tokens
    ├── types/
    │   ├── portfolio.ts         # TypeScript interfaces for portfolio data models
    │   └── schema.ts            # Relational database schemas
    ├── data/
    │   └── sourceFacts.ts       # Single source of truth for text content, data & SIX_QUESTIONS
    ├── components/
    │   ├── AppLayout.tsx        # Persistent global header (4 links + language toggle) & footer
    │   ├── ChapterWhoAmI.tsx    # Page 1: "Who am I ?" (Q01: What Shaped Me? + Q02: What Drives Me?)
    │   ├── ChapterHowItWorks.tsx # Page 2: "How does it work ?" (Q03: What Problems Am I Solving? + Q05: How Do I Create Value?)
    │   ├── ChapterWhatWeBuilt.tsx # Page 3: "What have we built ?" (Q04: What Am I Creating? + Ecosystem Diagram + Flagship Initiatives + 4-Part Archive)
    │   ├── ChapterCollaborate.tsx # Page 4: "Shall we collaborate ?" (Q06: What Future Am I Building? + Inquiry Composer + Direct Contacts)
    │   └── CVModal.tsx          # Printable verified CV document viewer modal
    └── App.tsx                  # Main router setup with 4 core pages
```

---

## 4. Multi-Device Network Hosting

To host the application so that other devices (smartphones, tablets, laptops, smart TVs, or projectors) on the same Wi-Fi or LAN network can open the site:

```bash
./host.sh
```
*(Or via `npm run host`)*

Binds Vite to `0.0.0.0:5173` and outputs the exact local IP addresses (e.g. `http://192.168.x.x:5173/`).
