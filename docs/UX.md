# UX.md
### Information Architecture & UX Specification — Kishan Bastola Portfolio
#### Based on: Developer Handoff & Website Content Brief (`Kishan_Bastola_Portfolio_Website_Developer_Brief.docx`)

This document defines the user experience, information architecture, navigation model, and page-level specifications for the portfolio website of **Kishan Bastola**. It operationalizes the core brief: replacing traditional generic resume menus (`About / Skills / Experience`) with a question-led editorial narrative that guides visitors through Kishan's background, philosophy, institutional achievements, and collaboration vision.

---

## 1. Information Architecture & Navigation Strategy

### The 6 Primary Destinations
Per Section 3, 7, and 12 of the Developer Brief, the website replaces traditional generic resume menus (`About / Skills / Experience`) with the **6 Questions as Primary Destinations**. Each question is a dedicated route and primary navigation destination:

```
01. WHAT SHAPED ME?        → 02. WHAT DRIVES ME?        → 03. PROBLEMS I SOLVE
(/what-shaped-me)            (/what-drives-me)            (/what-problems-am-i-solving)

04. WHAT I CREATE          → 05. CREATE VALUE           → 06. FUTURE VISION
(/what-am-i-creating)        (/how-do-i-create-value)     (/what-future-am-i-building)
```

### Route-to-Question Mapping (Primary Destinations)

| Route | Primary Destination | Conceptual Question Addressed (Brief §3 & §12) | Core UX Focus |
|:---|:---|:---|:---|
| `/` or `/what-shaped-me` | **01. What Shaped Me?**<br/>*(०१. पृष्ठभूमि र यात्रा)* | **01. WHAT SHAPED ME?**<br/>*(मेरो पृष्ठभूमि, शिक्षा र यात्राले मलाई कसरी निर्माण गर्‍यो?)* | Personal story, Master’s Degree in Mathematics, 18 years in education, former School Principal and Campus Chief, career timeline, key turning points, credentials bento, and verified CV document viewer. |
| `/what-drives-me` | **02. What Drives Me?**<br/>*(०२. उद्देश्य र दर्शन)* | **02. WHAT DRIVES ME?**<br/>*(मलाई कुन उद्देश्य, विश्वास र दर्शनले अघि बढाउँछ?)* | Education philosophy, student-centred learning, curiosity, mathematics and scientific thinking, belief that lack of resources should not prevent student potential, and the purpose behind the work. |
| `/what-problems-am-i-solving` | **03. Problems I Solve**<br/>*(०३. समस्या समाधान)* | **03. WHAT PROBLEMS AM I SOLVING?**<br/>*(शिक्षा, अनुसन्धान र नवप्रवर्तन क्षेत्रमा म कुन समस्या समाधान गर्न खोज्दैछु?)* | Systemic gaps in Nepal: limited hands-on learning, weak research culture, missing innovation pipeline, talent brain drain, and the concrete institutional solutions via decentralized research infrastructure. |
| `/what-am-i-creating` | **04. What I Create**<br/>*(०४. संस्था र इकोसिस्टम)* | **04. WHAT AM I CREATING?**<br/>*(म कुन संस्था, प्रणाली र अवसर निर्माण गर्दैछु?)* | Scientific Ecosystem Relationship Diagram (Astronova, HRIC, STEAM, Pathways, Mentors, Partners) + 4 flagship initiatives with status badges + 4-tab interactive verified archive (Theses, Thoughts, Media, Gallery). |
| `/how-do-i-create-value` | **05. Create Value**<br/>*(०५. मूल्य सिर्जना)* | **05. HOW DO I CREATE VALUE?**<br/>*(म ज्ञान, अनुसन्धान र नवप्रवर्तनलाई वास्तविक मूल्यमा कसरी रूपान्तरण गर्छु?)* | Signature framework *From Curiosity to Commerce*: 7-stage interactive pipeline (Curiosity → Learning → Research → Prototype → Innovation → Enterprise → Commerce), commerce definition, and multi-stakeholder connection matrix. |
| `/what-future-am-i-building` | **06. Future Vision**<br/>*(०६. भविष्य र सहकार्य)* | **06. WHAT FUTURE AM I BUILDING?**<br/>*(म कस्तो भविष्य निर्माण गर्न चाहन्छु र कोसँग सहकार्य गर्न चाहन्छु?)* | Long-term vision for Nepal and Bagmati Province, decentralizing innovation hubs, 4 invitation profiles, 5 partnership focus domains, direct accessible inquiry composer, and verified non-profit bank details. |

### Official Question-Led Sitemap (Verbatim Specification)

```
01. WHAT SHAPED ME?
मेरो पृष्ठभूमि, शिक्षा र यात्राले मलाई कसरी निर्माण गर्‍यो?
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

## 2. Global Navigation & Header UX

### Desktop Navigation Header (Viewports $> 1024\text{px}$)
- **Left:** Brand wordmark linking to `/what-shaped-me`:
  - English: `Kishan Bastola · Portfolio`
  - Nepali: `किशन बास्तोला · पोर्टफोलियो`
- **Center / Right:** Exactly the 6 Primary Navigation Destinations:
  1. `01. What Shaped Me` / `०१. पृष्ठभूमि र यात्रा` (`/what-shaped-me`)
  2. `02. What Drives Me` / `०२. उद्देश्य र दर्शन` (`/what-drives-me`)
  3. `03. Problems I Solve` / `०३. समस्या समाधान` (`/what-problems-am-i-solving`)
  4. `04. What I Create` / `०४. संस्था र इकोसिस्टम` (`/what-am-i-creating`)
  5. `05. Create Value` / `०५. मूल्य सिर्जना` (`/how-do-i-create-value`)
  6. `06. Future Vision` / `०६. भविष्य र सहकार्य` (`/what-future-am-i-building`)
- **Right Utility:** Bilingual Toggle Button (`EN | नेपाली`) with globe icon.
- **Active State:** Solid gold indicator underline (`#9A8055`) and deep navy text color (`#0F2C4A`) matching current `location.pathname`.
- **Hamburger Button:** **Strictly hidden on desktop** via `.mobile-only` (`display: none !important`).

### Mobile Navigation Header (Viewports $\le 1024\text{px}$)
- **Desktop Links:** Hidden via `.desktop-only` (`display: none !important`).
- **Mobile Menu Trigger:** Accessible hamburger button (`Menu` / `X` icon, `aria-expanded`, touch target $\ge 44\text{px}$).
- **Mobile Navigation Drawer:**
  - Slides down smoothly from the sticky header.
  - Lists all 6 primary destinations with question number pills (`01`–`06`), bilingual titles, and informative subtitles.
  - Active destination displays an active background tint and gold bullet indicator.
  - Automatically closes upon link navigation or when the viewport expands past $1024\text{px}$.
  - Includes the persistent global language switcher.

---

## 3. Page-by-Page Detailed UX Specifications

### Page 1: "Who am I ?" (`/who-am-i`)
*Addressing: What Shaped Me? & What Drives Me?*

1. **Chapter Eyebrow:** `CHAPTER 01 / WHO AM I ? · BAGMATI PROVINCE · NEPAL`
2. **Hero Typographic Grid:**
   - **Full Name:** `Kishan Bastola` / `किशन बास्तोला` in elegant Fraunces Serif ($H_1$).
   - **Professional Title:** `Educationist | Mathematician | Research & Innovation Ecosystem Builder`.
   - **Signature Concept Badge:** `"From Curiosity to Commerce"`.
   - **Short Introductory Bio:** Concise, verified 80–120 word narrative from Section 2 of Brief.
   - **Call-to-Action Group:**
     - Primary button: `Download CV ↓` (opens accessible, printable CV modal).
     - Secondary button: `Discover How It Works →` (navigates to `/how-it-works`).
   - **Authentic Portrait Frame:** High-resolution portrait (`/images/hero.png`) with dignified gradient overlay and location caption.
3. **At-a-Glance Credentials Bento (Section 4 & 5 of Brief):**
   - 3×3 structured grid presenting:
     1. Master’s Degree in Mathematics (Tribhuvan University)
     2. 18 Years in Education Leadership
     3. Former School Principal
     4. Former Campus Chief (Narayani College)
     5. Country Leader (Taiwan International Science Fair)
     6. Province Secretary (Mathematical Association of Nepal, Bagmati)
     7. Executive Member (Nepal Mathematical Society, Bagmati)
     8. President (Astronova Foundation Nepal)
     9. Founder & Director (Hetauda Research & Innovation Center)
4. **Academic Credentials & Degree Narrative:**
   - Detailed breakdown of mathematical background, academic specialization, and thesis focus.
5. **Expandable 18-Year Leadership Timeline:**
   - Chronological progression from pure mathematics educator to national science delegation leader and ecosystem builder.
   - Collapsible drawer pattern to keep the page clean while allowing deep-dive inspection.
6. **Next Chapter Bridge:** Seamless transition banner linking directly to `/how-it-works`.

---

### Page 2: "How does it work ?" (`/how-it-works`)
*Addressing: What Problems Am I Solving? & How Do I Create Value?*

1. **Chapter Eyebrow:** `CHAPTER 02 / HOW DOES IT WORK ? · 7-STAGE ECOSYSTEM BLUEPRINT`
2. **Problem Statement & Philosophy:**
   - Clarifying the fundamental educational bottleneck in Nepal: rote memorization, underfunded labs, and zero pre-university research culture.
   - Philosophical core quote: *"A question can become knowledge. Knowledge can become research. Research can become innovation. Innovation can become an enterprise. An enterprise can create value for society."*
3. **Interactive 7-Stage Pathway Stepper:**
   - Keyboard-accessible visual pipeline tabs:
     1. **Curiosity** (जिज्ञासा) — Student inquiry & questioning.
     2. **Learning** (सिकाइ) — Structured study & mathematical fundamentals.
     3. **Research** (अनुसन्धान) — Empirical methodology & experimentation.
     4. **Prototype** (प्रोटोटाइप) — Working model fabrication in lab.
     5. **Innovation** (नवप्रवर्तन) — Scalable solution to real problems.
     6. **Enterprise** (उद्यम) — Institutional & operational venture building.
     7. **Commerce** (वाणिज्य) — Real-world relevance & economic/social value.
   - **Active Stage Panel:** Highlights the definition, educational objective, and institutional anchor for the selected stage.
4. **Five-Stakeholder Connectivity Mapping:**
   - Interactive ecosystem filter allowing visitors to see how HRIC and Astronova connect:
     - Students & Young Innovators
     - Teachers & STEAM Mentors
     - Researchers & Academic Universities
     - Industry & Tech Enterprises
     - Government & Local Municipalities
5. **Next Chapter Bridge:** Directional button linking directly to `/what-we-built`.

---

### Page 3: "What have we built ?" (`/what-we-built`)
*Addressing: What Am I Creating?*

1. **Chapter Eyebrow:** `CHAPTER 03 / WHAT HAVE WE BUILT ? · EVIDENCED ACHIEVEMENTS`
2. **Curated Flagship Initiatives (2×2 Grid):**
   - **Hetauda Research & Innovation Center (HRIC):** Regional hub for science, innovation, and young scientist incubation.
   - **Astronova Foundation Nepal:** Non-profit institutional platform championing mathematics and STEAM across Bagmati province.
   - **Taiwan International Science Fair (TISF) Delegation:** National leadership, mentoring students representing Nepal globally.
   - **International Olympiad on Science, Technology & Chemistry (IOSTC) Indonesia:** Global science competitions and delegation leadership.
   - Each card displays authentic photography, verified key metric badge, narrative summary, and outbound verification link.
3. **Self-Contained 4-Tab Interactive Archive:**
   - **Tab 1: Supervised Graduate Theses** — Title, candidate, institution, academic year, and domain of research.
   - **Tab 2: Published Thoughts & Papers** — Essays and articles on pedagogy, mathematics education, and science policy.
   - **Tab 3: Verified Press & Media Clippings** — Official newspaper clippings, external headlines, and source links.
   - **Tab 4: Summer STEAM Expo Gallery** — Authentic photographic documentation of student prototypes, robotics kits, and astronomy workshops.
4. **Next Chapter Bridge:** Transition banner linking to `/collaborate`.

---

### Page 4: "Shall we collaborate ?" (`/collaborate`)
*Addressing: What Future Am I Building?*

1. **Chapter Eyebrow:** `CHAPTER 04 / SHALL WE COLLABORATE ? · PARTNERSHIPS & INQUIRIES`
2. **Future Vision Statement:**
   - Expanding scientific infrastructure to secondary schools across Nepal.
   - Developing regional incubation centers where rural students can access high-grade laboratories.
3. **Five Partnership Focus Domains (Direct `mailto:` triggers):**
   1. *Academic Research & Graduate Mentorship*
   2. *Institutional Science Fairs & STEAM Labs*
   3. *Keynote Lectures & Mathematics Workshops*
   4. *Ecosystem Incubation & Policy Advisory*
   5. *Young Scientist Sponsorship & Delegation Support*
4. **Accessible Collaboration Inquiry Composer:**
   - Name, Email, Organization, Domain Selection, and Proposal Message.
   - Generates a pre-formatted verified `mailto:` payload directly addressed to `contact@astronovafoundation.com`.
   - Clear feedback stating that submissions trigger an official email client without third-party form trackers.
5. **Verified Direct Contacts:**
   - Email: `contact@astronovafoundation.com` (with one-click copy feedback)
   - Phone: `+977-9855030706` (with copy feedback)
   - Location: Hetauda Sub-Metropolitan City, Makwanpur, Bagmati Province, Nepal
   - Official Links: Astronova Foundation Portal, LinkedIn Profile, Mathematical Association of Nepal (MAN) Bagmati
6. **Support the Vision (Non-Profit Contribution Drawer):**
   - Collapsible panel disclosing verified bank account details for Astronova Foundation Nepal:
     - Bank: Rastriya Banijya Bank
     - Account Name: ASTRONOVA FOUNDATION NEPAL
     - Account Number: `130010006086001`
     - Branch: Hetauda
7. **Concluding Statement:**
   - Re-stating the core commitment: *"From Curiosity to Commerce"*.

---

## 4. Multi-Page Editorial Routing Footer

Every page is anchored by an editorial 4-column footer:
- **Col 1 (Identity & Mission):** Full name, titles, and italicized philosophy quote.
- **Col 2 (Portfolio Pages):** Direct router links with chevron indicators to the 4 destinations.
- **Col 3 (Ecosystem Anchors):** Outbound links with external arrow icons to Astronova Foundation, HRIC, MAN Bagmati, and LinkedIn.
- **Col 4 (Direct Inquiries):** Verified email, telephone, and postal address in Hetauda.
- **Bottom Bar:** Copyright year, rights declaration, and signature motto.

---

## 5. Responsive Design & Accessibility Standards

1. **Breakpoints:**
   - Desktop / Wide: $> 1024\text{px}$ (12-column grid, persistent horizontal nav)
   - Tablet / Medium: $861\text{px} - 1024\text{px}$ (2-column grids, horizontal nav)
   - Mobile: $\le 860\text{px}$ (single-column stack, hamburger drawer, full-width buttons)
   - Small Mobile: $\le 480\text{px}$ (compact padding, responsive typography clamp)
2. **Accessibility (WCAG 2.1 AA):**
   - Color contrast ratio exceeds $4.5:1$ for all text against backgrounds.
   - Explicit `aria-label`, `role="tab"`, `role="tablist"`, and keyboard navigation support (`ArrowLeft`, `ArrowRight`, `Enter`, `Space`).
   - `prefers-reduced-motion` fully respected for all CSS transitions.
   - Focus indicators (`outline: 2px solid var(--accent-gold)`) on all interactive buttons and inputs.
