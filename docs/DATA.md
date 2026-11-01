# DATA.md
### Data Architecture & Content Model — Kishan Bastola Portfolio

This document defines the complete data architecture and content model for the personal portfolio of **Kishan Bastola**. All data models, entity relationships, and schemas documented here adhere strictly to the **Developer Handoff & Website Content Brief** (`Kishan_Bastola_Portfolio_Website_Developer_Brief.docx`).

Implementation lives in `src/data/sourceFacts.ts`, typed by `src/types/portfolio.ts` and `src/types/schema.ts`. Data must never be hardcoded ad-hoc inside UI components.

---

## 1. Core Principles & Standards

1. **Official Brief Fidelity**: All personal information, credentials, titles, signature lines, organizational roles, and philosophical frameworks directly mirror the verified Developer Brief.
2. **Zero Fabrication**: No awards, impact figures, student metrics, or institutional relationships may be fabricated. Where data is unverified or awaiting owner confirmation, it is explicitly flagged with `verified: false` or documented in the handoff checklist.
3. **Program Lifecycle Categorization**: Every institutional program and initiative is explicitly tagged with its operational status:
   - `active`: Fully operational, currently running programs with verifiable evidence.
   - `pilot`: Initial cohort or experimental execution phase.
   - `planned`: Conceptual, roadmap, or upcoming initiatives.
4. **Bilingual Parity**: All human-readable content supports English (`en`) and Nepali (`ne`) natively via `LocalizedString`.
5. **Relational Normalization**: Core entities (institutions, credentials, initiatives, media) use stable kebab-case string IDs and are referenced across views rather than duplicated.

---

## 2. Global Type Definitions

### 2.1 Multilingual Types

```typescript
export type LocalizedString = string | {
  en: string;
  ne: string;
};

export type Language = 'en' | 'ne';

export function tField(field: LocalizedString | undefined, lang: Language): string {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[lang] || field.en || '';
}
```

### 2.2 Program Status Enum

```typescript
export type ProgramStatus = 'active' | 'pilot' | 'planned';
```

---

## 3. Entity Schemas & Models

### 3.1 `PersonProfile` (Singleton)

Captures the core personal brand, identity, and narrative biography.

```typescript
export interface PersonProfile {
  fullName: LocalizedString;          // "Kishan Bastola" / "किशन बास्तोला"
  formalNepaliName?: string;          // "नैत्र प्रसाद बास्तोला" (Citizenship/Legal record)
  professionalTitle: LocalizedString; // "Educationist | Mathematician | Research & Innovation Ecosystem Builder"
  signatureLine: LocalizedString;     // "FROM CURIOSITY TO COMMERCE"
  tagline: LocalizedString;           // "Building an ecosystem that transforms curiosity into knowledge, research, innovation, enterprise and value creation."
  shortIntro: LocalizedString;        // 80–120 word homepage synopsis
  biography: {
    en: string[];                     // Multi-paragraph narrative bio
    ne: string[];
  };
  currentFocus: LocalizedString[];    // Focus areas (Education, Mathematics, STEAM, Research, Innovation, etc.)
  profileImage: string;               // Verified portrait asset path
  professionalIdentity: {
    title: LocalizedString;           // e.g., "Educationist", "Mathematician", "Innovation Ecosystem Builder"
    description: LocalizedString;
  }[];
}
```

**Verified Values from Brief:**
- **English Name**: Kishan Bastola
- **Nepali Name**: किशन बास्तोला (Formal: नैत्र प्रसाद बास्तोला)
- **Title**: Educationist | Mathematician | Research & Innovation Ecosystem Builder
- **Signature Line**: FROM CURIOSITY TO COMMERCE
- **Tagline**: "Building an ecosystem that transforms curiosity into knowledge, research, innovation, enterprise and value creation."
- **Experience**: 18 Years in the Education Sector
- **Highest Degree**: Master's Degree in Mathematics (M.Sc. / M.A.)

---

### 3.2 `QuestionSitemapItem[]` (The 6-Question Framework)

The six core inquiry pillars established in Section 3 & Section 12 of the Developer Brief, mapped to the website's 4 multi-page destination routes.

| No. | Question (EN) | Nepali Subtitle | Narrative Core & Scope | Destination Page |
|:---:|:---|:---|:---|:---:|
| **01** | **WHAT SHAPED ME?** | मेरो पृष्ठभूमि, शिक्षा र यात्राले मलाई कसरी निर्माण गर्यो? | Personal story, Master’s Degree in Mathematics, 18 years in education, former School Principal and Campus Chief, career timeline, key turning points and professional development. | `/who-am-i#what-shaped-me` |
| **02** | **WHAT DRIVES ME?** | मलाई कुन उद्देश्य, विश्वास र दर्शनले अघि बढाउँछ? | Education philosophy, student-centred learning, curiosity, mathematics and scientific thinking, belief that lack of resources should not prevent student potential, and the purpose behind the work. | `/who-am-i#what-drives-me` |
| **03** | **WHAT PROBLEMS AM I SOLVING?** | शिक्षा, अनुसन्धान र नवप्रवर्तन क्षेत्रमा म कुन समस्या समाधान गर्न खोज्दैछु? | Explain the gaps being addressed: limited hands-on learning, weak access to mentors and laboratories, limited student research pathways, and weak links between learning, innovation and real-world application. Present these as problem statements and validate with evidence where possible. | `/how-it-works#problems` |
| **04** | **WHAT AM I CREATING?** | म कुन संस्था, प्रणाली र अवसर निर्माण गर्दैछु? | Astronova Foundation Nepal, Hetauda Research and Innovation Center (HRIC), HRIC Scientific Ecosystem, STEAM learning initiatives, student research and science fair pathways, mentor networks and institutional partnerships. Show the relationship among these initiatives with a clear ecosystem diagram. | `/what-we-built#creating` |
| **05** | **HOW DO I CREATE VALUE?** | म ज्ञान, अनुसन्धान र नवप्रवर्तनलाई वास्तविक मूल्यमा कसरी रूपान्तरण गर्छु? | This page explains the signature framework From Curiosity to Commerce: Curiosity → Learning → Research → Prototype → Innovation → Enterprise → Commerce. Clarify that commerce means real-world application, market relevance and social/economic value—not simply pushing students into business. | `/how-it-works#pathway` |
| **06** | **WHAT FUTURE AM I BUILDING?** | म कस्तो भविष्य निर्माण गर्न चाहन्छु र कोसँग सहकार्य गर्न चाहन्छु? | Long-term vision for Nepal, future direction for HRIC and scientific ecosystem development, research interests, desired partnerships with universities, schools, government, researchers, industry and international organizations. Include a clear collaboration/contact invitation. | `/collaborate#future` |

### Verbatim Site Map Specification (आधिकारिक साइटम्याप)
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

```typescript
export interface QuestionSitemapItem {
  id: string;
  questionNumber: string;             // "01" through "06"
  title: LocalizedString;
  nepaliMeaning: string;
  coreSummary: LocalizedString;
  pageRoute: '/who-am-i' | '/how-it-works' | '/what-we-built' | '/collaborate';
  sectionAnchor: string;
  keyTopics: LocalizedString[];
}
```

---

### 3.3 `FrameworkStep[]` (From Curiosity to Commerce)

The 7-stage pipeline defining how curiosity transforms into societal and economic value. Note that **Commerce** represents real-world application, market relevance, and social/economic value—not simply pushing students into commercial business.

```typescript
export interface FrameworkStep {
  id: string;
  stepNumber: string;                 // "01" through "07"
  title: LocalizedString;             // Curiosity, Learning, Research, Prototype, Innovation, Enterprise, Commerce
  nepaliTitle: string;
  subtitle: LocalizedString;
  description: LocalizedString;
  impact: LocalizedString;
}
```

**The 7 Stages:**
1. **Curiosity (जिज्ञासा)**: Igniting wonder, asking questions, challenging assumptions.
2. **Learning (सिकाई)**: Hands-on exploration, theoretical foundations, rigorous scientific method.
3. **Research (अनुसन्धान)**: In-depth inquiry, data collection, mentorship from active domain experts.
4. **Prototype (प्रारूप / प्रोटोटाइप)**: Building physical and computational models to test hypotheses.
5. **Innovation (नवप्रवर्तन)**: Solving concrete local and global challenges through novel approaches.
6. **Enterprise (उद्यमशीलता)**: Structuring sustainable operations, intellectual property, and teams.
7. **Commerce (व्यापार तथा मूल्य सिर्जना)**: Real-world societal deployment, market adoption, and tangible economic value creation.

---

### 3.4 `CredentialItem[]` & `LeadershipEntity[]`

Verified executive appointments, institutional governance, and academic credentials.

```typescript
export interface CredentialItem {
  id: string;
  label: LocalizedString;
  detail: LocalizedString;
  category: 'education' | 'leadership' | 'experience' | 'governance';
  verified: boolean;
  period?: string;
  institutionId?: string;
}

export interface LeadershipEntity {
  id: string;
  role: LocalizedString;
  organization: LocalizedString;
  organizationType: 'Foundation' | 'Research Center' | 'Professional Society' | 'Academic Institution' | 'Global Fair';
  period: string;
  description: LocalizedString;
  verified: boolean;
}
```

**Verified Leadership Records:**
- **President**: Astronova Foundation Nepal (Nonprofit platform & leadership)
- **Founder & Director**: Hetauda Research and Innovation Center (HRIC)
- **Country Leader**: Taiwan International Science Fair (TISF), National Science and Technology Council (NSTC) / NTSEC Taiwan
- **Province Secretary**: Mathematical Association of Nepal (MAN), Bagmati Province
- **Executive Member**: Nepal Mathematical Society (NMS), Bagmati Province
- **Former Campus Chief**: Narayani College
- **Former School Principal**: Secondary Educational Institution (18 years total leadership)

---

### 3.5 `InstitutionEntity[]` (Ecosystem Architecture)

Defines the institutional vehicles through which initiatives are executed.

```typescript
export interface InstitutionEntity {
  id: string;
  name: LocalizedString;
  role: LocalizedString;
  type: 'Nonprofit Foundation' | 'Research Center' | 'Professional Society' | 'Academic Institution';
  establishedNotice?: LocalizedString;
  mission: LocalizedString;
  governance: LocalizedString;
  keyPillars: LocalizedString[];
  impactSummary: LocalizedString;
  websiteUrl?: string;
  logoUrl?: string;
  coverImageUrl?: string;
  verified: boolean;
}
```

**Primary Institutions:**
- `astronova`: **Astronova Foundation Nepal** — Nonprofit institutional vehicle providing governance, educational programs, and youth science leadership.
- `hric`: **Hetauda Research and Innovation Center (HRIC)** — Regional research, technology, and incubation hub in Bagmati Province.
- `man-bagmati`: **Mathematical Association of Nepal (MAN) Bagmati Province** — Professional mathematics pedagogy body.
- `nms-bagmati`: **Nepal Mathematical Society (NMS) Bagmati Province** — Mathematical research and academic dissemination.
- `tisf`: **Taiwan International Science Fair (TISF)** — Global platform connecting Nepalese student innovators to international competitions.

---

### 3.6 `InitiativeEntity[]` / `WorkEntry[]` (With Operational Status)

Each initiative must state its lifecycle phase per Section 6 of the brief (`active`, `pilot`, or `planned`).

```typescript
export interface InitiativeEntity {
  id: string;
  number: string;
  title: LocalizedString;
  role: LocalizedString;
  organizationId: string;             // References InstitutionEntity.id
  category: 'STEAM' | 'Research' | 'Ecosystem' | 'Mathematics' | 'Innovation';
  status: ProgramStatus;              // 'active' | 'pilot' | 'planned'
  summary: LocalizedString;
  fullDescription: LocalizedString;
  highlights: LocalizedString[];
  participantsCount?: number;         // Populated only with verified figures
  customImageUrl?: string;
  linkText?: LocalizedString;
  linkUrl?: string;
  verified: boolean;
}
```

**Core Initiatives List:**
1. **Young Scientist Development Program (YSDP)**: `status: 'active'`
2. **National Science & Engineering Fair (NSEF)**: `status: 'pilot'`
3. **Astronova STEAM & Robotics Community Workshops**: `status: 'active'`
4. **HRIC Scientific Incubation Ecosystem**: `status: 'active'`
5. **International Science Fair Delegations (TISF Taiwan & IOSTC Indonesia)**: `status: 'active'`
6. **Mathematics Enrichment & Olympiad Mentorship**: `status: 'active'`
7. **Advanced Regional Innovation Labs & Maker Spaces**: `status: 'planned'`

---

### 3.7 `DelegationEntry[]` (International Science Delegations)

```typescript
export interface DelegationEntry {
  id: string;
  title: LocalizedString;
  country: string;
  location: string;
  flagEmoji: string;
  role: LocalizedString;              // e.g. "Country Leader / Head of Delegation"
  event: LocalizedString;             // "Taiwan International Science Fair (TISF)" / "IOSTC Indonesia"
  summary: LocalizedString;
  achievements: LocalizedString[];
  imageUrl: string;
  verified: boolean;
}
```

---

### 3.8 `ThesisEntry[]` (Academic Theses & Research)

```typescript
export interface ThesisEntry {
  id: string;
  title: LocalizedString;
  authorOrStudent: string;
  role: 'Supervisor' | 'Author' | 'Mentor';
  year: string;
  field: 'Mathematics Pedagogy' | 'Applied Mathematics' | 'STEAM Curriculum';
  abstract: LocalizedString;
  pdfUrl?: string;
  verified: boolean;
}
```

---

### 3.9 `MediaEntry[]` (Press Clippings & Public Record)

Media entries catalog verified news reporting, television interviews, and institutional announcements.

```typescript
export interface MediaEntry {
  id: string;
  headline: LocalizedString;
  publication: string;
  date: string;
  category: 'Newspaper' | 'Online Press' | 'Institutional Notice' | 'Broadcast';
  excerpt: LocalizedString;
  fullSummary: LocalizedString;
  customImageUrl?: string;
  sourceUrl?: string;
  verified: boolean;
}
```

**Seed Media Records from Verified Brief Sources:**
- `media-01`: *विद्यालयदेखि अनुसन्धान, नवप्रवर्तन र उद्यमशीलतासम्मको नयाँ राष्ट्रिय मार्गचित्र*
- `media-02`: *एष्ट्रोनोभा र काठमाडौँ विश्वविद्यालय स्कुल अफ एजुकेशनबीच सम्झौता*
- `media-03`: *हेटौंडाका वाइवाको आविस्कार अन्तर्राष्ट्रिय विज्ञान प्रदर्शनीका लागि छनौट (TISF)*
- `media-04`: *नारायणी कलेजको प्रमुखमा बास्तोला नियुक्त*
- `media-05`: *रोबटिक्स, आर्टिफिसिएल इन्टेलिजेन्स, फ्युचर टेक्नोलोजी र एष्ट्रोनोमी कार्यशाला*
- `media-06`: *एष्ट्रोनोभा फाउण्डेशनले ९ दिने कार्यशाला गर्ने*
- `media-07`: *एस्ट्रोनोभा फाउण्डेशनको आयोजनामा ११ दिने कार्यशाला सम्पन्न*
- `media-08`: *एष्ट्रोनोभाद्वारा निशुल्क रोबटिक्स र अटोमेशन कार्यशाला*
- `media-09`: *गणित समाज वाग्मती प्रदेशमा नेतृत्व चयन (Narayanionline)*

---

### 3.10 `ThoughtEntry[]` (Articles & Educational Philosophy)

Long-form thought leadership and essays authored by Kishan Bastola.

```typescript
export interface ThoughtEntry {
  id: string;
  title: LocalizedString;
  category: LocalizedString;
  date: string;
  readTime: string;
  excerpt: LocalizedString;
  keyTakeaways: LocalizedString[];
  content?: LocalizedString;
}
```

---

### 3.11 `SupportVisionData` & Contact Entities

```typescript
export interface SupportVisionData {
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  branch: string;
  swiftCode?: string;
  note: LocalizedString;
}

export interface ContactEntity {
  email: string;
  phone?: string;
  officeLocation: LocalizedString;
  socialLinks: {
    platform: string;
    label: string;
    url: string;
  }[];
  collaborationCategories: LocalizedString[];
}
```

**Verified Contact & Support Baseline:**
- **Institutional Bank**: Astronova Foundation Nepal institutional account details for research grants and STEAM program support.
- **Office Location**: Hetauda, Bagmati Province, Nepal.
- **Inquiry Categories**: Academic Partnerships, Research Collaboration, STEAM Lab Mentorship, Speaking Engagements, Philanthropic Ecosystem Grants.

---

## 4. Developer Handoff Checklist & Open Items

Per Section 14 of the Developer Brief, the following items must be confirmed with Kishan Bastola before finalizing public release:

- [x] Master's Degree in Mathematics (M.Sc. / M.A.) confirmed.
- [x] 18-Year Education Sector Leadership timeframe confirmed.
- [x] Primary leadership titles: President (Astronova Foundation Nepal), Founder & Director (HRIC) confirmed.
- [x] TISF Country Leader title and scope documented.
- [x] MAN and NMS Bagmati Province executive roles cataloged.
- [x] Programs categorized by status (`active`, `pilot`, `planned`).
- [ ] Final confirmation of public bank account display for Astronova Foundation.
- [ ] Final confirmation of high-resolution portrait photograph preferences.
- [ ] Owner approval of final bilingual text strings before production deployment.
