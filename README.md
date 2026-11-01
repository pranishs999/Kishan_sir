# Kishan Bastola — Executive Portfolio & Scientific Ecosystem

> **Educationist | Mathematician | Research & Innovation Ecosystem Builder**  
> *From Curiosity to Commerce (जिज्ञासादेखि वाणिज्यसम्म)*

Personal portfolio and executive archive of **Kishan Bastola**, built strictly according to the **Developer Handoff & Website Content Brief** (`Kishan_Bastola_Portfolio_Website_Developer_Brief.docx`).

---

## 🧭 The 6-Question Conceptual Sitemap (आधिकारिक साइटम्याप)

The entire digital experience is driven by six foundational inquiries, structured across 4 primary destination chapters:

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

## 🗺️ Multi-Page Route Architecture

| Route | Primary Title | Included Questions | Key Features |
|:---|:---|:---|:---|
| `/who-am-i` | **Who am I ?**<br/>*(म को हुँ ?)* | **01. WHAT SHAPED ME?**<br/>**02. WHAT DRIVES ME?** | Executive portrait, bilingual bio, 9-item credentials bento, Master's in Mathematics narrative, 18-year expandable career timeline, verified CV viewer modal. |
| `/how-it-works` | **How does it work ?**<br/>*(यो कसरी चल्छ ?)* | **03. WHAT PROBLEMS AM I SOLVING?**<br/>**05. HOW DO I CREATE VALUE?** | 4 validated problem statement cards with evidence, 7-stage interactive pathway stepper (*Curiosity to Commerce*), philosophical foundations. |
| `/what-we-built` | **What have we built ?**<br/>*(हामीले के बनायौं ?)* | **04. WHAT AM I CREATING?** | **Scientific Ecosystem Relationship Diagram** (Astronova, HRIC, STEAM, Pathways, Mentors, Partners), 4 flagship initiatives with lifecycle badges (`active`, `pilot`, `planned`), 4-tab interactive verified archive (Theses, Publications, Media Clippings, Gallery). |
| `/collaborate` | **Shall we collaborate ?**<br/>*(सहकार्य गरौं ?)* | **06. WHAT FUTURE AM I BUILDING?** | 3 strategic vision pillars for Nepal, 4 collaboration profiles, 5 partnership focus domains, verified direct contact info, direct `mailto:` inquiry generator, and Astronova non-profit bank details. |

---

## 🛠️ Technology Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Custom Vanilla CSS Design System (Warm Ivory `#F9F8F3`, Academic Blue `#0E2A47`, Restrained Gold `#9E8256`) — Light mode only
- **Routing:** React Router v7 (`/who-am-i`, `/how-it-works`, `/what-we-built`, `/collaborate`)
- **Icons:** Lucide React
- **Testing:** Vitest

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run test suite
npx vitest run

# Type check
npx tsc -b

# Build production bundle
npm run build
```

---

## 📚 Documentation Reference

- [docs/UX.md](docs/UX.md) — Information architecture, navigation model, and page-level UX specifications.
- [docs/DATA.md](docs/DATA.md) — Data models, schemas, and relational integrity.
- [docs/CONTEXT.md](docs/CONTEXT.md) — Identity, factual boundaries, verified credentials, and institutional context.
