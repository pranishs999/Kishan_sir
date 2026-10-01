# UX.md
### Information Architecture & UX Specification — Kishan Bastola Portfolio

This document defines every route, its purpose, and its UX requirements.
It assumes `CONTEXT.md` as ground truth for tone, content rules, and design
direction. No CSS values, component code, or visual mockups are specified
here — only structure, behavior, and content intent.

---

## 1. Primary Navigation

Top-level nav (desktop, persistent header):

```
About | Work | Initiatives | Ecosystem | Thought | Media | CV | Contact

                                      EN | नेपाली
```

**Dropdown structure:**

- **About** → About (overview), Education, Experience, Leadership
- **Work** → Work (overview), Education, Mathematics, Science, Research,
  Innovation, Entrepreneurship
- **Initiatives** → Initiatives (overview/archive), HRIC, Astronova,
  Young Scientists, STEAM, Science & Engineering Fair, Workshops
- **Ecosystem** → Ecosystem (overview), Vision, Education, Research,
  Innovation, Mentorship, Enterprise
- **Thought** → no dropdown (archive → detail pattern)
- **Media** → Media (overview), Newspapers, Interviews, Events, Gallery
- **CV** → no dropdown, single page
- **Contact** → no dropdown, single page

Home (`/`) is reached via the logo/wordmark, not a nav item.

---

## 2. Global UX Rules

**Breadcrumbs**
Shown on every page below the top level (i.e. everything except `/`,
and the six top-level section landing pages, which show wordmark only).
Pattern: `Section / Subsection`. Breadcrumbs are clickable at every level.

**Internal linking**
Every detail page (initiative, article, media item, gallery item) must
link back to: its parent archive, its related initiative/person entity
(via ID, see `DATA.md`), and at least one contextually related page
(e.g. an HRIC-tagged article links to `/initiatives/hric`).

**Contextual navigation**
Each subsection landing page (e.g. `/work`) surfaces its own children as
in-page cards/links, not just via the dropdown — the dropdown is a
convenience, not the only path.

**Active navigation state**
The top-level nav item is visually marked active whenever the current
route is that section or any of its children. The dropdown item matching
the exact current route is marked active within the open menu.

**Mobile navigation**
Collapses to a single menu (hamburger or equivalent). Top-level sections
are expandable/accordion rows revealing their children — no hover-based
dropdowns on touch devices. CV and Contact remain single top-level rows.

**Responsive content hierarchy**
On narrow viewports, multi-column layouts (e.g. timelines, stakeholder
maps, media grids) collapse to a single stacked column in the same
reading order as desktop — no content is hidden, only re-flowed.

**Image behavior**
Every image requires descriptive alt text. Portrait/identity images of
Kishan Bastola are never cropped in a way that loses recognizability.
Newspaper clippings and scanned documents display at a size that keeps
text legible or link out to a full-resolution/original view.

**Accessibility (site-wide baseline)**
- Semantic heading order (single `h1` per page, no skipped levels)
- Visible focus states on all interactive elements
- Sufficient color contrast for an "editorial/institutional" palette
- All interactive elements reachable and operable by keyboard
- Descriptive link text (no bare "click here")
- Long-form pages (Thought articles, About/Ecosystem essays) support
  readable line length and scalable text

**Long-form reading**
Thought articles and any essay-length About/Ecosystem copy use a
single-column reading layout, distinct from the wider institutional
layout used elsewhere, prioritizing legibility over density.

**Archive/filter behavior**
Archives (Initiatives, Thought, Media, Gallery) support category
filtering. Filters are additive within a single archive, never combined
across archives. Empty filter results show an explicit empty state, never
a blank page. Filter state is reflected in the URL where feasible so
results are shareable/bookmarkable.

**External-link behavior**
Any link leaving the site (news source, social post, external
organization site) opens in a new tab and is visually/iconographically
marked as external, consistent with the "external media must be
identified" rule in `CONTEXT.md`.

---

## 3. Route Specifications

Each route below defines: Purpose · Audience · Primary User Question ·
Sections (in order) · Primary CTA · Secondary CTA · Related Pages ·
Data Required · Mobile Behavior · Accessibility Notes.

---

### `/` — HOME

- **Purpose:** Orient any visitor to who Kishan Bastola is and route them
  toward the area they care about (journalist, university partner,
  student/parent, funder, general public).
- **Audience:** Mixed/first-time visitors of all types.
- **Primary user question:** "Who is this person and why should I keep
  reading?"
- **Sections (order):**
  1. Hero — name, title, signature line, portrait
  2. Professional Snapshot — credentials at a glance
  3. Short Profile — condensed biography
  4. Curiosity → Commerce framework — the pathway diagram, explained
  5. Selected Work — cross-section highlights (education, research,
     innovation, etc.)
  6. Institutions — Astronova, HRIC, and other affiliated bodies
  7. Selected Media — 3–5 pulled media items
  8. Latest Thought — most recent 1–3 articles
  9. Vision — the professional vision statement
  10. Contact/Collaboration CTA
- **Primary CTA:** "View CV" or "Explore the Ecosystem" (route this
  through a single decision point, not both competing).
- **Secondary CTA:** "Get in Touch" → `/contact`
- **Related pages:** All top-level sections (Home is the hub).
- **Data required:** `person`, `institutions` (featured subset),
  `work` (featured subset), `media` (featured subset), `articles`
  (latest), `ecosystem` (pipeline summary).
- **Mobile behavior:** Sections stack vertically in the same order;
  the pathway diagram (§4) becomes a vertical stepper instead of a
  horizontal flow.
- **Accessibility:** Hero heading is the page's single `h1`; the pathway
  diagram must have a text-equivalent list, not rely on graphic-only
  representation.

---

### `/about` — ABOUT

- **Purpose:** Give a fuller narrative answer to "who is this person"
  than Home, before branching into Education/Experience/Leadership.
- **Audience:** Visitors who want depth — researchers, partners,
  journalists.
- **Primary user question:** "What is his story and how did he get here?"
- **Sections (order):** Profile, Professional Journey, Philosophy,
  Current Focus
- **Primary CTA:** "See Education" or "See Experience" (links into
  children)
- **Secondary CTA:** "Download CV" → `/cv`
- **Related pages:** `/about/education`, `/about/experience`,
  `/about/leadership`, `/cv`
- **Data required:** `person` (biography, currentFocus), `education`
  (summary), `experience` (summary), `leadership` (summary)
- **Mobile behavior:** Four sections stack; each section header is
  sticky-scoped only if the pattern is used elsewhere consistently,
  otherwise plain stacked headers.
- **Accessibility:** Philosophy quote content marked up as a `blockquote`
  with attribution, not styled text alone.

---

### `/about/education` — EDUCATION

- **Purpose:** Present formal academic credentials.
- **Audience:** Academic partners, institutions, journalists verifying
  credentials.
- **Primary user question:** "What are his qualifications?"
- **Sections (order):** Degree record(s), field/institution detail,
  narrative context (how mathematics shaped his later work)
- **Primary CTA:** "See Experience" → `/about/experience`
- **Secondary CTA:** "View CV" → `/cv`
- **Related pages:** `/about`, `/about/experience`, `/cv`
- **Data required:** `education[]`
- **Mobile behavior:** Each degree record becomes a single stacked card.
- **Accessibility:** Records presented as a list (`ul`/`ol` or definition
  list), not a table that would require horizontal scrolling on mobile.

---

### `/about/experience` — EXPERIENCE

- **Purpose:** Present professional roles in chronological/institutional
  order (School Principal, Campus Chief, etc.).
- **Audience:** Institutional partners, employers, journalists.
- **Primary user question:** "What has he done professionally?"
- **Sections (order):** Timeline of positions, per-position detail
  (organization, dates, responsibilities, achievements, evidence)
- **Primary CTA:** "See Leadership" → `/about/leadership`
- **Secondary CTA:** "View CV" → `/cv`
- **Related pages:** `/about`, `/about/leadership`, `/cv`,
  relevant `/initiatives/*` if a role connects to one
- **Data required:** `experience[]`
- **Mobile behavior:** Timeline collapses to a vertical stacked list in
  chronological order; no horizontal timeline scroll.
- **Accessibility:** Dates and organization names are real text (not
  embedded in images); evidence links clearly labeled.

---

### `/about/leadership` — LEADERSHIP

- **Purpose:** Present current and notable institutional/organizational
  leadership roles distinct from employment history.
- **Audience:** Institutional partners, media, collaborators.
- **Primary user question:** "What organizations does he lead or
  represent?"
- **Sections (order):** Role list (President — Astronova, Founder &
  Director — HRIC, Country Leader — TISF, Province Secretary — MAN,
  Executive Member — NMS), per-role description
- **Primary CTA:** "Explore Initiatives" → `/initiatives`
- **Secondary CTA:** "View CV" → `/cv`
- **Related pages:** `/initiatives/hric`, `/initiatives/astronova`,
  `/about/experience`, `/cv`
- **Data required:** `leadership[]`
- **Mobile behavior:** Roles stack as individual cards, each linking to
  its related initiative where one exists.
- **Accessibility:** Organization type (e.g. "Foundation," "Society")
  stated in visible text, not conveyed by icon/color alone.

---

### `/work` — WORK (overview)

- **Purpose:** Explain the professional *domains* Kishan Bastola works
  across, as fields of expertise — not as a portfolio of projects.
- **Audience:** Anyone assessing his professional range.
- **Primary user question:** "What does he actually do, professionally?"
- **Sections (order):** Intro framing ("work as domains, not projects"),
  six domain cards (Education, Mathematics, Science, Research,
  Innovation, Entrepreneurship), cross-link to Ecosystem
- **Primary CTA:** Into a specific domain (contextual, varies by visitor)
- **Secondary CTA:** "See the Ecosystem model" → `/ecosystem`
- **Related pages:** all six `/work/*` children, `/ecosystem`
- **Data required:** `work[]` (all categories)
- **Mobile behavior:** Domain cards stack in the fixed order listed
  above.
- **Accessibility:** Domain cards are real links (not click-only `div`s).

---

### `/work/education`, `/work/mathematics`, `/work/science`,
### `/work/research`, `/work/innovation`, `/work/entrepreneurship`

These six routes share one template (content differs, structure does
not):

- **Purpose:** Explain this professional domain — approach, principles,
  and how it connects to the wider ecosystem. **Not** a project archive.
- **Audience:** Domain-specific: educators, mathematicians, scientists,
  researchers, innovators/students, entrepreneurs/investors respectively.
- **Primary user question:** "How does he approach [domain], and what
  has he built in it?"
- **Sections (order):** Domain description, guiding principles list,
  related initiatives (pulled by relationship, not duplicated content),
  connection back to the Curiosity→Commerce pathway
- **Primary CTA:** Into the most relevant related initiative
- **Secondary CTA:** "Back to Work overview" → `/work`
- **Related pages:** `/work`, relevant `/initiatives/*`,
  relevant `/ecosystem/*` stage
- **Data required:** `work` (single entity by slug), `initiatives[]`
  (filtered by `relatedInitiatives`)
- **Mobile behavior:** Principles list and related-initiative cards
  stack; no loss of content.
- **Accessibility:** Related-initiative cards include the initiative name
  as real link text, not "read more."

---

### `/initiatives` — INITIATIVES (archive)

- **Purpose:** Central archive of all named initiatives, programs, and
  institution-building efforts.
- **Audience:** Partners, media, participants, general public.
- **Primary user question:** "What has he actually built or run?"
- **Sections (order):** Category filters, initiative grid/list, featured
  initiatives (HRIC, Astronova) pinned/prioritized
- **Primary CTA:** Into an initiative detail page
- **Secondary CTA:** Filter by category
- **Related pages:** all `/initiatives/*` children, `/ecosystem`
- **Data required:** `initiatives[]`
- **Mobile behavior:** Grid becomes single-column list; filters become a
  dropdown/accordion rather than an inline filter bar.
- **Accessibility:** Filter controls are properly labeled form controls;
  filter results are announced (e.g. result count) for screen readers.

---

### `/initiatives/hric` — HRIC

Treated as a major institutional initiative, not a standard archive
entry.

- **Purpose:** Fully represent HRIC as an institution in its own right.
- **Audience:** Partners, government/university stakeholders, students,
  media.
- **Primary user question:** "What is HRIC and how does it work?"
- **Sections (order):** Identity (name/what it is), Mission, Vision,
  Ecosystem model (stakeholders + pathway), Focus areas, Programs,
  Activities, Network (partner organizations), Media, Gallery
- **Primary CTA:** "Partner with HRIC" / "Get Involved" → `/contact`
  (pre-filtered to relevant purpose)
- **Secondary CTA:** "See the wider Ecosystem" → `/ecosystem`
- **Related pages:** `/ecosystem`, `/initiatives/young-scientists`,
  `/initiatives/steam`, `/initiatives/science-engineering-fair`,
  `/media`, `/about/leadership`
- **Data required:** `institutions` (HRIC entity), `initiatives[]`
  (filtered to HRIC), `ecosystem`, `media[]` (filtered), `gallery[]`
  (filtered)
- **Mobile behavior:** Nine sections stack; a persistent "on this page"
  jump menu is optional given length, collapsible on mobile.
- **Accessibility:** Long page — each section has its own heading level
  for landmark/skip-navigation support.

---

### `/initiatives/astronova` — ASTRONOVA

- **Purpose:** Represent Astronova Foundation Nepal as an institution.
- **Audience:** Same as HRIC (partners, students, media).
- **Primary user question:** "What is Astronova and what does it run?"
- **Sections (order):** Identity, Mission focus (creative/innovative/
  entrepreneurial mindset development), Programs (workshops etc.),
  Media, Gallery
- **Primary CTA:** "Get Involved" → `/contact`
- **Secondary CTA:** "See related workshops" → `/initiatives/workshops`
- **Related pages:** `/initiatives/workshops`,
  `/initiatives/young-scientists`, `/about/leadership`, `/media`
- **Data required:** `institutions` (Astronova entity), `initiatives[]`
  (filtered), `media[]` (filtered), `gallery[]` (filtered)
- **Mobile behavior:** Standard stacked sections.
- **Accessibility:** Same baseline as §2.

---

### `/initiatives/young-scientists`, `/initiatives/steam`,
### `/initiatives/science-engineering-fair`, `/initiatives/workshops`

Shared template:

- **Purpose:** Represent this specific initiative category — its intent,
  activities, and evidence — within the HRIC/Astronova ecosystem.
- **Audience:** Students/parents, educators, media, fellow organizers.
- **Primary user question:** "What is this program and can I/my
  student take part?"
- **Sections (order):** Description, activities list, documentary
  evidence (media + gallery), how to participate/get involved
- **Primary CTA:** "Get Involved" / "Contact" → `/contact`
- **Secondary CTA:** Link to parent institution (HRIC or Astronova)
- **Related pages:** `/initiatives`, `/initiatives/hric` and/or
  `/initiatives/astronova`, `/media/gallery`
- **Data required:** `initiatives[]` (filtered by category),
  `media[]`, `gallery[]`
- **Mobile behavior:** Standard stacked sections; gallery becomes a
  swipeable single-row or stacked grid.
- **Accessibility:** Gallery images carry individual captions, not a
  single generic alt text repeated across images.

---

### `/ecosystem` — ECOSYSTEM (overview)

This is a major conceptual section, distinct from Initiatives (which is
concrete/programmatic).

- **Purpose:** Explain the *model* — how stakeholders connect and how
  curiosity becomes commerce.
- **Audience:** Partners, policymakers, university/government
  stakeholders, serious researchers of the model itself.
- **Primary user question:** "How does this all actually fit together?"
- **Sections (order):** Framing intro, stakeholder map (Students,
  Teachers, Mentors, Researchers, Universities, Government, Industry,
  Entrepreneurs and their relationships), the central pathway
  (Curiosity → Learning → Research → Prototype → Innovation →
  Enterprise → Commerce), links into the five ecosystem sub-pages
- **Primary CTA:** Into a specific ecosystem stage page
- **Secondary CTA:** "See it in practice at HRIC" →
  `/initiatives/hric`
- **Related pages:** all five `/ecosystem/*` children,
  `/initiatives/hric`, `/work`
- **Data required:** `ecosystem` (stakeholders, connections, pipeline,
  focusAreas — explicitly **not** `outcomes` unless verified numbers
  exist; see Content Accuracy Rules)
- **Mobile behavior:** Stakeholder map, which is inherently relational/
  diagrammatic, must degrade to a plain stacked list of stakeholders
  with their described relationships in text — never an unreadable
  shrunk diagram.
- **Accessibility:** The stakeholder map and pathway diagram must both
  have full text equivalents; do not rely on an SVG/diagram alone to
  convey the model.

---

### `/ecosystem/vision`, `/ecosystem/education`, `/ecosystem/research`,
### `/ecosystem/innovation`, `/ecosystem/mentorship`,
### `/ecosystem/enterprise`

Shared template:

- **Purpose:** Explain this specific stage/dimension of the ecosystem in
  depth.
- **Audience:** Stakeholders relevant to that stage (e.g. `/mentorship`
  → potential mentors; `/enterprise` → potential
  investors/entrepreneurship partners).
- **Primary user question:** "What role does [stage] play, and how do I
  fit in?"
- **Sections (order):** Description of the stage, its stakeholders,
  its connection to adjacent stages in the pathway, related
  initiatives/work
- **Primary CTA:** Stage-appropriate ("Become a Mentor," "Partner on
  Research," etc.) → `/contact` (pre-filtered purpose)
- **Secondary CTA:** "Back to Ecosystem overview" → `/ecosystem`
- **Related pages:** `/ecosystem`, relevant `/work/*`,
  relevant `/initiatives/*`
- **Data required:** `ecosystem` (filtered to this stage),
  `work[]` (related), `initiatives[]` (related)
- **Mobile behavior:** Standard stacked sections.
- **Accessibility:** Standard baseline; stage name is the page `h1`.

---

### `/thought` — THOUGHT (archive)

- **Purpose:** House long-form written perspective (essays, reflections,
  commentary) separate from news/media coverage.
- **Audience:** Readers seeking his own voice/ideas, not third-party
  coverage.
- **Primary user question:** "What does he think, in his own words?"
- **Sections (order):** Intro framing, category filter (if categories
  exist), article list (reverse-chronological)
- **Primary CTA:** Into an article
- **Secondary CTA:** none required
- **Related pages:** individual `/thought/[slug]` detail pages (not
  separately enumerated in the route list, but implied by the
  `articles` entity)
- **Data required:** `articles[]`
- **Mobile behavior:** List becomes single column; excerpt length may
  shorten but must remain complete sentences, not mid-word truncation.
- **Accessibility:** Each list entry is a single link wrapping the whole
  card (or a clearly primary link), not multiple ambiguous links per
  card.

**Article detail (`/thought/[slug]`):**
- **Purpose:** Present one full article in a readable long-form layout.
- **Sections (order):** Title, author/date/category metadata, cover
  image, body content, related initiatives, related articles
- **Primary CTA:** "Read more Thought" → back to `/thought`
- **Data required:** single `articles` entity by slug
- **Accessibility:** Uses the long-form reading layout defined in §2.

---

### `/media` — MEDIA (overview)

- **Purpose:** Function as public/documentary evidence — proof of
  activity and coverage, distinct from self-authored Thought content.
- **Audience:** Journalists, partners verifying credibility, general
  public.
- **Primary user question:** "Where has this been covered/documented?"
- **Sections (order):** Intro framing, links into the four
  subcategories, a mixed recent-highlights feed
- **Primary CTA:** Into a subcategory
- **Secondary CTA:** none required
- **Related pages:** `/media/newspapers`, `/media/interviews`,
  `/media/events`, `/media/gallery`
- **Data required:** `media[]` (all), `gallery[]` (summary)
- **Mobile behavior:** Subcategory links stack; recent-highlights feed
  becomes single column.
- **Accessibility:** External-source items follow the external-link
  rules in §2 without exception.

---

### `/media/newspapers` — NEWSPAPERS

- **Purpose:** Present print/online newspaper coverage, prioritizing the
  actual clipping/image over paraphrase.
- **Audience:** Journalists, credibility-checking partners.
- **Primary user question:** "What has the press actually printed?"
- **Sections (order):** Filterable list/grid of newspaper items, each
  showing the clipping image first, then publication/date/short
  context, then external link
- **Primary CTA:** "View source" (external link)
- **Secondary CTA:** none required
- **Related pages:** `/media`, related `/initiatives/*` where tagged
- **Data required:** `media[]` (filtered to category = newspaper),
  each carrying `verified` status per `CONTEXT.md` §10
- **Mobile behavior:** Clipping images remain legible-sized; grid
  becomes single column.
- **Accessibility:** Unverified items are labeled as such in visible
  text, not color alone.

---

### `/media/interviews` — INTERVIEWS

- **Purpose:** Present interview coverage (video/audio/print Q&A).
- **Audience:** General public, media, partners.
- **Sections (order):** Filterable list of interviews, each with
  source, date, format, external link
- **Primary CTA:** "Watch/Read" (external link)
- **Secondary CTA:** none required
- **Related pages:** `/media`
- **Data required:** `media[]` (filtered to category = interview)
- **Mobile behavior:** Standard stacked list.
- **Accessibility:** Video/audio embeds (if any) require captions/
  transcripts where the source provides them; otherwise link out only.

---

### `/media/events` — EVENTS

- **Purpose:** Document participation in or organization of events
  (workshops, fairs, ceremonies).
- **Audience:** Partners, participants, press.
- **Sections (order):** Filterable list of event coverage, each with
  event name, date, location, related initiative, media/links
- **Primary CTA:** Into related initiative
- **Secondary CTA:** "View source" (external link, where applicable)
- **Related pages:** `/media`, `/initiatives/*` (related),
  `/media/gallery`
- **Data required:** `media[]` (filtered to category = event),
  `initiatives[]` (related)
- **Mobile behavior:** Standard stacked list.
- **Accessibility:** Standard baseline.

---

### `/media/gallery` — GALLERY

- **Purpose:** Visual documentary record across all events/initiatives.
- **Audience:** General public, participants, press.
- **Sections (order):** Category/initiative filter, image grid with
  captions
- **Primary CTA:** none required beyond viewing (lightbox/expand is a
  UI behavior, not a CTA)
- **Secondary CTA:** Into related initiative from an image's caption
- **Related pages:** `/media`, relevant `/initiatives/*`
- **Data required:** `gallery[]`
- **Mobile behavior:** Grid becomes single or double column; lightbox
  (if used) must be swipe- and keyboard-navigable.
- **Accessibility:** Every gallery image has a real caption/alt text
  (event, date, location at minimum) — never left blank.

---

### `/achievements` — ACHIEVEMENTS

- **Purpose:** Consolidated record of recognitions/milestones distinct
  from role-based Leadership content.
- **Audience:** Partners, press, credibility-checking visitors.
- **Primary user question:** "What has he been recognized for?"
- **Sections (order):** Filterable list by type, each entry with
  organization, date, description, evidence link
- **Primary CTA:** "View evidence" (where available)
- **Secondary CTA:** "View CV" → `/cv`
- **Related pages:** `/cv`, `/about/leadership`, `/media`
- **Data required:** `achievements[]`
- **Mobile behavior:** Standard stacked list.
- **Accessibility:** Entries with no public evidence are marked as such
  rather than left ambiguous.

---

### `/cv` — CV

- **Purpose:** Structured, comprehensive professional record; a formal
  counterpart to the narrative About/Work/Leadership pages.
- **Audience:** Institutional partners, employers, formal reviewers.
- **Primary user question:** "Can I see this as a single structured
  record, and can I download it?"
- **Sections (order):** Profile summary, Education, Experience,
  Leadership, Organizations, Research, Teaching, International
  Engagement, Media (selected)
- **Primary CTA:** "Download CV (PDF)" — placeholder until a real file
  exists; do not fabricate a download that isn't backed by a real
  document
- **Secondary CTA:** "Contact" → `/contact`
- **Related pages:** `/about/*`, `/achievements`, `/media`
- **Data required:** `cv` (aggregating references into `education`,
  `experience`, `leadership`, etc. — see `DATA.md` relationship rules)
- **Mobile behavior:** Sections stack; download action remains
  reachable without scrolling past the whole page (e.g. sticky or
  early-placed CTA).
- **Accessibility:** If rendered as structured HTML (not just a PDF
  embed), it must use real headings/lists so it is screen-reader
  navigable, not an image of a document.

---

### `/contact` — CONTACT

- **Purpose:** Enable professional collaboration inquiries, routed by
  purpose.
- **Audience:** Anyone initiating contact — researchers, educators,
  institutions, mentors, media, partners.
- **Primary user question:** "How do I reach him, and about what?"
- **Sections (order):** Intro framing, purpose selector (Research,
  Education, Institutional Collaboration, Mentorship, Speaking, Media,
  Partnership, Other), contact form/details, direct contact info
  (email/phone/office/address where available), professional links
- **Primary CTA:** Submit inquiry / send email
- **Secondary CTA:** none required
- **Related pages:** contextually linked from CTAs throughout the site
  (HRIC, Astronova, Ecosystem stages, CV)
- **Data required:** `contact`
- **Mobile behavior:** Purpose selector becomes a simple dropdown/select
  rather than a multi-button row; form fields stack full-width.
- **Accessibility:** Form fields have visible labels (not placeholder-
  only labels), clear error states, and a confirmable success state on
  submission.

---

## 4. Notes for the Implementing Agent

- Every route above must resolve to real data via `DATA.md` entities —
  no route should render literal hardcoded prose duplicating another
  page's content.
- Where a page says "related initiatives" or "related work," this must
  be computed from the ID relationships defined in `DATA.md`, not
  manually duplicated per page.
- Any route with no available verified content for a section should
  render an honest "content coming soon" or omit the section entirely —
  never a fabricated placeholder that reads as real content.

---

## 5. LANGUAGE SWITCHER

Global language control:

EN | नेपाली

Default:
English

Supported languages:
- English
- Nepali

### Behavior

The language switcher appears in the global header.

When the user selects Nepali:
- current page remains the same
- content changes to Nepali
- navigation changes to Nepali
- buttons and labels change to Nepali
- page metadata/content presentation changes appropriately
- user should not be unexpectedly redirected to the homepage

When the user selects English:
- the same page returns to English

### Persistence

Remember the user's selected language during the session and across normal navigation.

If appropriate for implementation, persist the preference locally.

### Mobile

The language switcher must remain accessible on mobile without occupying excessive header space.

### Accessibility

The control must:
- have a clear accessible label
- expose the current language
- be keyboard accessible
- have a visible selected state
- not rely only on color

Recommended accessible label:

"Language: English"

or

"भाषा: नेपाली"

### Content parity

Both language versions must represent the same information.

Do not remove important information merely because the page is in Nepali.

### Translation quality

Nepali should be professionally written rather than literal word-for-word machine translation.

Keep:
- people's names
- organization names
- technical terminology
- official titles
- event names

consistent unless an established Nepali form exists.

For official organization names, preserve the official English name where appropriate and provide the Nepali equivalent when useful.

### URL Strategy

Use a consistent strategy throughout the website.

Client-side language state (`LanguageContext`) with local preference persistence (`localStorage`), enabling instant seamless in-place language switching on all pages.

