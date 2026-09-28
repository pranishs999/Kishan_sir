# DATA.md
### Data / Content Model — Kishan Bastola Portfolio

This document defines the complete content model. The implementation must
use centralized data (`src/data/`) referenced by every route in `UX.md` —
never hardcoded, duplicated copy per page.

Content values themselves (dates, statistics, award names, etc.) must come
from `CONTEXT.md` or explicit verification, per the Content Accuracy Rules.
Where no verified value exists, the field should be present with an empty/
placeholder value and a `verified: false` flag, not a fabricated value.

---

## 1. Recommended File Structure

```
src/data/
  person.ts
  education.ts
  experience.ts
  leadership.ts
  work.ts
  institutions.ts
  initiatives.ts
  ecosystem.ts
  articles.ts
  media.ts
  achievements.ts
  gallery.ts
  cv.ts
  contact.ts
  index.ts        // re-exports everything for convenient import
```

Each file exports a typed array (or single object, for `person`/
`ecosystem`/`cv`/`contact`) of its entity. IDs are stable strings
(kebab-case slugs), never array indices, so relationships survive
reordering.

---

## 2. Entities

### `person` (singleton object)
| Field | Type | Notes |
|---|---|---|
| `fullName` | string | "Kishan Bastola" |
| `nepaliName` | string | नैत्र प्रसाद बास्तोला (किशन बास्तोला) |
| `professionalTitle` | string | "Educationist \| Mathematician \| Research & Innovation Ecosystem Builder" |
| `tagline` | string | "From Curiosity to Commerce" |
| `shortBiography` | string | See `CONTEXT.md` §6 for verified source text |
| `biography` | string (long-form) | Full narrative biography |
| `currentFocus` | string[] | See `CONTEXT.md` §4 |
| `profileImage` | image ref | Real portrait asset — never a stock placeholder |
| `professionalIdentity` | string[] | The 5–6 "positioning" identities in `CONTEXT.md` §6 |

### `education[]`
| Field | Type |
|---|---|
| `degree` | string |
| `field` | string |
| `institution` | string |
| `location` | string |
| `year` | string \| `[VERIFY]` |
| `description` | string |

### `experience[]`
| Field | Type |
|---|---|
| `position` | string |
| `organization` | string |
| `startDate` | string \| `[VERIFY]` |
| `endDate` | string \| "Present" \| `[VERIFY]` |
| `location` | string |
| `description` | string |
| `responsibilities` | string[] |
| `achievements` | string[] |
| `evidence` | link[] — reference to `media` IDs or external URLs |

### `leadership[]`
| Field | Type |
|---|---|
| `role` | string |
| `organization` | string |
| `organizationType` | string (e.g. "Foundation", "Research Center", "Professional Society") |
| `period` | string \| `[VERIFY]` |
| `description` | string |
| `responsibilities` | string[] |

Initial known entries (from `CONTEXT.md` §3): President/Astronova
Foundation Nepal; Founder & Director/HRIC; Country Leader/TISF; Province
Secretary/MAN Bagmati; Executive Member/NMS Bagmati.

### `work[]`
| Field | Type |
|---|---|
| `id` | string |
| `title` | string |
| `slug` | string — matches `/work/[slug]` routes |
| `category` | enum: `education` \| `mathematics` \| `science` \| `research` \| `innovation` \| `entrepreneurship` |
| `description` | string |
| `principles` | string[] |
| `relatedInitiatives` | `initiatives[].id`[] |

Six seed records, one per `/work/*` route.

### `institutions[]`
| Field | Type |
|---|---|
| `id` | string |
| `name` | string |
| `type` | string (e.g. "Foundation", "Research & Innovation Center") |
| `role` | string — the person's role there (cross-reference `leadership`) |
| `description` | string |
| `logo` | image ref |
| `coverImage` | image ref |
| `websiteUrl` | url \| null |

Seed records: Astronova Foundation Nepal, Hetauda Research and Innovation
Center (HRIC). Additional institutions (MAN, NMS, TISF) may be modeled
here too, marked `type: "Professional Society"` / `"International Fair"`.

### `initiatives[]`
| Field | Type |
|---|---|
| `id` | string |
| `title` | string |
| `category` | enum: `education` \| `astronova` \| `hric` \| `young-scientists` \| `steam` \| `science-engineering-fair` \| `workshops` \| other |
| `organization` | `institutions[].id` |
| `role` | string |
| `description` | string |
| `location` | string |
| `startDate` | string \| `[VERIFY]` |
| `endDate` | string \| `[VERIFY]` |
| `participants` | number \| `[VERIFY]` — omit rather than guess |
| `activities` | string[] |
| `images` | image ref[] |
| `videos` | video ref[] |
| `media` | `media[].id`[] |
| `relatedPeople` | string[] |
| `relatedOrganizations` | string[] |
| `externalLinks` | url[] |

### `ecosystem` (singleton object)
| Field | Type |
|---|---|
| `stakeholders` | `{ id, name, description }[]` — Students, Teachers, Mentors, Researchers, Universities, Government, Industry, Entrepreneurs |
| `connections` | `{ from: stakeholderId, to: stakeholderId, description }[]` |
| `pipeline` | ordered string[] — Curiosity → Learning → Research → Prototype → Innovation → Enterprise → Commerce |
| `focusAreas` | string[] |
| `outcomes` | **leave empty unless verified numeric/qualitative outcomes exist** — do not populate with invented figures |

### `articles[]` (Thought)
| Field | Type |
|---|---|
| `id` | string |
| `title` | string |
| `slug` | string |
| `author` | string (default "Kishan Bastola") |
| `date` | string |
| `category` | string |
| `excerpt` | string |
| `content` | string (long-form) |
| `coverImage` | image ref |
| `tags` | string[] |
| `relatedInitiatives` | `initiatives[].id`[] |

No seed content exists yet — this entity starts empty pending authored
essays; do not fabricate articles.

### `media[]`
| Field | Type |
|---|---|
| `id` | string |
| `headline` | string |
| `publication` | string |
| `date` | string \| `[VERIFY]` |
| `category` | enum: `newspaper` \| `interview` \| `event` |
| `thumbnail` | image ref |
| `summary` | string — only populate once source content is verified; otherwise leave blank |
| `externalUrl` | url |
| `verified` | boolean — `false` for all seed entries in §4 below until confirmed |
| `language` | string (e.g. `ne` for Nepali sources) |

### `achievements[]`
| Field | Type |
|---|---|
| `id` | string |
| `type` | string |
| `title` | string |
| `organization` | string |
| `date` | string \| `[VERIFY]` |
| `description` | string |
| `evidence` | link \| `media[].id` |

No seed content exists — do not populate until specific achievements are
supplied and verified.

### `gallery[]`
| Field | Type |
|---|---|
| `id` | string |
| `image` | image ref |
| `caption` | string |
| `event` | string |
| `date` | string \| `[VERIFY]` |
| `location` | string |
| `category` | string |
| `relatedInitiative` | `initiatives[].id` |

### `cv` (singleton object)
| Field | Type |
|---|---|
| `profile` | references `person.shortBiography` |
| `education` | references `education[]` |
| `experience` | references `experience[]` |
| `leadership` | references `leadership[]` |
| `organizations` | references `institutions[]` |
| `research` | references `work[]` filtered to `category: research` (or a dedicated list once available) |
| `teaching` | string[] / references `experience[]` filtered where applicable |
| `internationalEngagement` | e.g. TISF role, from `leadership[]` |
| `media` | selected subset of `media[]` |

The `cv` entity is a **composition/view**, not a duplicate data store — it
should be built by referencing the other entities' IDs at render time
wherever possible, to satisfy the "no duplication" rule below.

### `contact` (singleton object)
| Field | Type |
|---|---|
| `name` | string |
| `title` | string |
| `description` | string |
| `email` | string \| `[VERIFY]` |
| `phone` | string \| `[VERIFY]` |
| `office` | string \| `[VERIFY]` |
| `address` | string \| `[VERIFY]` |
| `professionalLinks` | `{ label, url }[]` |
| `contactPurposes` | string[] — Research, Education, Institutional Collaboration, Mentorship, Speaking, Media, Partnership, Other |

---

## 3. Data Relationship Rules

- **No duplication of factual content.** A fact (e.g. HRIC's mission
  statement) is written once, in `institutions[]`, and every other
  entity references it by `id` rather than restating it.
- **Reference chain:**
  ```
  person
    → institutions   (via leadership roles)
      → initiatives   (via institution id)
        → media       (via initiative id)
          → gallery    (via initiative id)
        → articles     (via relatedInitiatives)
  ```
- **Example — HRIC:** defined once in `institutions[]` (`id: "hric"`),
  then referenced by:
  - `/` (Home → Institutions section)
  - `/initiatives/hric` (primary detail page)
  - `/about/leadership` (via `leadership[]` entry pointing at
    `institution: "hric"`)
  - `/ecosystem` (as the practical example of the model)
  - `/media` (via `media[].relatedOrganizations` or initiative linkage)
  - `/cv` (via `organizations` composition)
- Any UI component that needs "related content" must query by these IDs
  at render/build time, not receive hand-copied prose.

---

## 4. Media Sources — Seed Data (UNVERIFIED)

The following should be loaded into `media[]` as seed records with
`verified: false`, `language: "ne"` (Nepali) unless noted, and no
`summary` populated until someone confirms the article content:

| id | headline (as supplied) | url |
|---|---|---|
| `media-01` | विद्यालयदेखि अनुसन्धान, नवप्रवर्तन र उद्यमशीलतासम्मको नयाँ राष्ट्रिय मार्गचित्र | https://share.google/i8fzpGbmPMqoHXYCL |
| `media-02` | एष्ट्रोनोभा र काठमाडौँ विश्वविद्यालय स्कुल अफ एजुकेशनबीच सम्झौता | https://share.google/rbL9PiCjMIX5ZFgHb |
| `media-03` | हेटौंडाका वाइवाको आविस्कार अन्तर्राष्ट्रिय विज्ञान प्रदर्शनीका लागि छनौट | https://share.google/yWlGDrMVMbt8PI0T1 |
| `media-04` | नारायणी कलेजको प्रमुखमा बास्तोला नियुक्त | https://share.google/BYT6YUGIJCDBHJAdl |
| `media-05` | रोबटिक्स, आर्टिफिसिएल इन्टेलिजेन्स, फ्यूचर टेक्नोलोजी र एष्ट्रोनोमीसम्बन्धी कार्यशाला सम्पन्न | https://share.google/sEH6pIFURfuSXKL78 |
| `media-06` | एष्ट्रोनोभा फाउण्डेशनले ९ दिने कार्यशाला गर्ने | https://share.google/BdJ7a5pytmuWfnp8d |
| `media-07` | एस्ट्रोनोभा फाउण्डेशनको आयोजनामा ११ दिने कार्यशाला सुरु | https://share.google/Z9PAOU6UDKa3v9elz |
| `media-08` | एष्ट्रोनोभाद्वारा निशुल्क रोबटिक्स र अटोमेशन कार्यशाला | https://share.google/QQ4veCklZ7nfx7Hgm |
| `media-09` | गणित समाज वाग्मती प्रदेशमा चितवनका आचार्यको नेतृत्व (Narayanionline.com) | https://share.google/x4DUHejEuHNhJDGeo |

Plus three unclassified Facebook references (model as `category:
"event"` or a new `social` category, `verified: false`):
- https://www.facebook.com/share/p/1Hty84niRw/
- https://www.facebook.com/story.php?story_fbid=27525063983764092&id=100000615823037&rdid=QTa2DTjfSHMOJw5g
- https://www.facebook.com/story.php?story_fbid=27525063983764092&id=100000615823037&rdid=J2S3huBdMfJQRMnC

`category` (newspaper/interview/event) for each of `media-01`–`media-09`
should be assigned once content is verified — do not guess based on the
headline alone beyond an initial best-effort tag that is clearly
revisable.

---

## 5. Notes for the Implementing Agent

- Treat `[VERIFY]` as a hard stop for that specific field, not for the
  whole entity — render the rest of the entity normally with that one
  field omitted or visibly marked.
- Do not add a `stats`/`outcomes` UI component anywhere until
  `ecosystem.outcomes` or an equivalent verified field actually has
  content — an empty stats bar is worse than no stats bar.
- `cv`, as a singleton composed view, should be implemented as a
  function/selector over the other entities rather than a separately
  maintained data file, to guarantee it never drifts out of sync.
