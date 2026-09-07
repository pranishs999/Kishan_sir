import type { 
  CredentialItem, 
  FrameworkStep, 
  WorkEntry, 
  InstitutionEntry, 
  DelegationEntry,
  ThesisEntry,
  GalleryItem,
  MediaEntry, 
  ThoughtEntry,
  SupportVisionData
} from '../types/portfolio';

export const HERO_DATA = {
  name: "KISHAN BASTOLA",
  fullNameNep: "किशन बाँस्टोला (नेत्र प्रसाद बाँस्टोला)",
  nameWithAlias: "Kishan Bastola (Netra Prasad Bastola)",
  title: "Chairperson — Astronova Foundation Nepal · STEM & Mathematics Advocate",
  subtitle: "Educationist · Mathematician · Research & Innovation Ecosystem Builder",
  frameworkHeader: "FROM CURIOSITY TO COMMERCE",
  frameworkTagline: "Building pathways that transform curiosity into learning, research, innovation, enterprise and value.",
  primaryCTA: "Explore Initiatives",
  secondaryCTA: "Download CV",
  heroImageUrl: "/images/hero.png"
};

export const PROFILE_DATA = {
  sectionNumber: "EXECUTIVE PROFILE",
  title: "18 Years of Academic Governance, Mathematical Pedagogy & STEM Advocacy",
  bodyParagraphs: [
    "Kishan Bastola (Netra Prasad Bastola) is an Educationist, Mathematician, STEM Advocate, and Research & Innovation Ecosystem Builder with over 18 years of executive leadership in Nepal's educational sector. Holding a Master's Degree in Mathematics, his work seamlessly integrates academic rigor with systemic institution building.",
    "Having served as School Principal and Campus Chief, he currently leads nationwide and provincial initiatives as Chairperson of Astronova Foundation Nepal, Secretary of the Mathematical Association of Nepal (MAN) Bagmati Province, Executive Member of the Nepal Mathematical Society (NMS) Bagmati Province, and Founder & Director of the Hetauda Research & Innovation Center (HRIC).",
    "On international platforms, he serves as Country Leader for Nepal at global scientific competitions including the Taiwan International Science Fair (TISF, Taiwan) and the International Science & Technology Competition (IOSTC, Indonesia), guiding young Nepalese researchers to international recognition."
  ],
  credentialsSummary: [
    "18+ Years Experience in Education & Academic Leadership",
    "Master's Degree in Mathematics",
    "Chairperson — Astronova Foundation Nepal",
    "Province Secretary — Mathematical Association of Nepal (MAN), Bagmati",
    "Executive Member — Nepal Mathematical Society (NMS), Bagmati",
    "Founder & Director — Hetauda Research & Innovation Center (HRIC)",
    "Country Leader & Delegation Head — Taiwan International Science Fair (TISF, Taiwan)",
    "Delegation Head — International Science & Technology Competition (IOSTC, Indonesia)",
    "Former School Principal & Campus Chief"
  ]
};

export const CREDENTIALS_DATA: CredentialItem[] = [
  { label: "18+ Years", detail: "Dedicated Leadership in Education & STEM Advocacy", category: "experience" },
  { label: "Master's Degree", detail: "Mathematics (M.Sc. / M.A.)", category: "education" },
  { label: "Chairperson", detail: "Astronova Foundation Nepal", category: "current" },
  { label: "Province Secretary", detail: "Mathematical Association of Nepal (MAN), Bagmati", category: "current" },
  { label: "Executive Member", detail: "Nepal Mathematical Society (NMS), Bagmati", category: "current" },
  { label: "Founder & Director", detail: "Hetauda Research & Innovation Center (HRIC)", category: "current" },
  { label: "Global Delegations", detail: "Country Leader: TISF (Taiwan) & IOSTC (Indonesia)", category: "current" },
  { label: "Former Principal", detail: "School Principal — Institutional Governance", category: "leadership" },
  { label: "Former Campus Chief", detail: "Higher Education & Campus Management", category: "leadership" }
];

export const GLOBAL_DELEGATIONS: DelegationEntry[] = [
  {
    id: "delegation-tisf",
    title: "Taiwan International Science Fair (TISF)",
    country: "Taiwan",
    location: "Taipei, Taiwan",
    flagEmoji: "🇹🇼",
    role: "Country Leader & Delegation Head — Nepal Contingent",
    event: "Taiwan International Science Fair (Annual)",
    summary: "Leading Nepal's top young scientific minds to present original research projects before international scientific juries at the National Taiwan Science Education Center.",
    achievements: [
      "National selection and rigorous research mentorship for Nepalese secondary students",
      "Global platform exposure alongside delegates from 30+ nations",
      "Award-winning student research presentations in engineering and environmental science"
    ],
    imageUrl: "/images/tisf.png"
  },
  {
    id: "delegation-iostc",
    title: "International Science & Technology Competition (IOSTC)",
    country: "Indonesia",
    location: "Bali / Jakarta, Indonesia",
    flagEmoji: "🇮🇩",
    role: "Delegation Leader — Nepal National Team",
    event: "International Olympiad / Science & Technology Competition",
    summary: "Escorting and mentoring Nepalese student innovators competing in technology prototyping, applied mathematics, and STEAM solutions.",
    achievements: [
      "International awards and medals secured for youth hardware & software prototypes",
      "Bilateral academic exchange between Nepalese and Southeast Asian science institutions",
      "Systematic incubation of student projects leading up to international competition"
    ],
    imageUrl: "/images/iostc_indonesia.svg"
  }
];

export const FRAMEWORK_STEPS: FrameworkStep[] = [
  {
    id: "curiosity",
    stepNumber: "01",
    title: "CURIOSITY",
    subtitle: "Inquiry & Questioning",
    description: "Fostering an environment in secondary and higher education where students move beyond textbook memorization to formulate analytical, real-world questions.",
    impact: "Democratizes inquiry; activates innate problem-solving interest across urban and regional classrooms."
  },
  {
    id: "learning",
    stepNumber: "02",
    title: "LEARNING",
    subtitle: "Rigorous Pedagogy",
    description: "Grounding initial curiosity in rigorous mathematical logic, scientific principles, and structured academic study under qualified mentorship.",
    impact: "Builds deep subject-matter mastery and logical problem-solving frameworks."
  },
  {
    id: "research",
    stepNumber: "03",
    title: "RESEARCH",
    subtitle: "Hypothesis & Method",
    description: "Guiding students to design original experiments, gather empirical data, and formulate scientific hypotheses suited for jury defense.",
    impact: "Produces verifiable student research projects worthy of national and international scientific competition."
  },
  {
    id: "innovation",
    stepNumber: "04",
    title: "INNOVATION",
    subtitle: "Hardware & Software Prototyping",
    description: "Providing regional laboratory infrastructure at HRIC Hetauda to translate research papers into physical prototypes and digital solutions.",
    impact: "Transforms abstract ideas into functional technological artifacts and working hardware models."
  },
  {
    id: "enterprise",
    stepNumber: "05",
    title: "ENTERPRISE",
    subtitle: "Social & Commercial Viability",
    description: "Evaluating prototypes for community utility, scalability, and market readiness, connecting student creators with institutional partners.",
    impact: "Instills entrepreneurial vision and practical problem-solving tailored to local economic needs."
  },
  {
    id: "value",
    stepNumber: "06",
    title: "VALUE",
    subtitle: "Socio-Economic Impact",
    description: "Deploying validated innovations to solve agricultural, educational, or municipal challenges across Bagmati Province.",
    impact: "Generates tangible societal value, employment opportunities, and technological autonomy."
  },
  {
    id: "commerce",
    stepNumber: "07",
    title: "COMMERCE",
    subtitle: "Sustainable Ecosystem",
    description: "Reinvesting economic and institutional yields back into youth mentorship, research grants, and regional center expansion.",
    impact: "Establishes a self-sustaining cycle where research fuels enterprise and enterprise funds future curiosity."
  }
];

export const SELECTED_WORK: WorkEntry[] = [
  {
    id: "astronova",
    number: "01",
    title: "Astronova Foundation Nepal",
    role: "Chairperson & Executive Leader",
    organization: "Astronova Foundation Nepal",
    category: "STEM & Mathematics Advocacy",
    summary: "Leading a nationwide scientific foundation dedicated to promoting STEAM education, mathematical pedagogy, and youth research incubation across Nepal.",
    fullDescription: "Astronova Foundation Nepal serves as an institutional umbrella for experiential learning. Under Kishan Bastola's leadership, the foundation organizes regional science fairs, teacher development workshops, and national student delegations to international scientific competitions.",
    highlights: [
      "Organizer of Summer STEAM Expo & Youth Science Fairs",
      "Pioneering provincial STEM learning frameworks",
      "Mentoring young scientists for global international fairs (TISF Taiwan, IOSTC Indonesia)"
    ],
    imagePlaceholderLabel: "OFFICIAL ARCHIVE: Astronova Foundation Nepal — Summer STEAM Expo & Conference",
    customImageUrl: "/images/astronova.png",
    linkText: "Visit Foundation Website",
    linkUrl: "https://astronovafoundation.com"
  },
  {
    id: "hric",
    number: "02",
    title: "Hetauda Research & Innovation Center",
    role: "Founder & Director",
    organization: "Hetauda Research & Innovation Center (HRIC)",
    category: "Research & Incubation Hub",
    summary: "Establishing a regional center of excellence for technological prototyping, scientific research, and innovation in Hetauda, Makwanpur.",
    fullDescription: "Founded and directed by Kishan Bastola, HRIC provides regional youth, researchers, and educators with dedicated laboratories, technical mentorship, and prototype testing environments in Hetauda Sub-Metropolitan City, Makwanpur, Bagmati Province.",
    highlights: [
      "State-of-the-art incubation facilities for regional youth in Makwanpur",
      "Direct technical mentorship for prototype creation and research supervision",
      "Collaborative research projects targeting regional agricultural and technological challenges"
    ],
    imagePlaceholderLabel: "INSTITUTIONAL ARCHIVE: Hetauda Research & Innovation Center — Prototyping Lab",
    customImageUrl: "/images/hric.png",
    linkText: "Explore Center Initiatives",
    linkUrl: "#institution-hric"
  },
  {
    id: "tisf-iostc",
    number: "03",
    title: "Global Science Delegations (TISF & IOSTC)",
    role: "Country Leader & Delegation Head",
    organization: "Taiwan International Science Fair & IOSTC Indonesia",
    category: "International Scientific Representation",
    summary: "Representing Nepal on global scientific platforms and mentoring high-school researchers for international competition in Taiwan and Indonesia.",
    fullDescription: "As Delegation Head for Nepal, Kishan Bastola selects, mentors, and escorts Nepal's top young scientific minds to present research projects to international juries of scientists in Taiwan and Indonesia.",
    highlights: [
      "National selection and rigorous research preparation",
      "Global platform exposure for Nepalese student researchers in Taiwan & Indonesia",
      "International academic networking and cross-border scientific exchange"
    ],
    imagePlaceholderLabel: "INTERNATIONAL DELEGATION: Global Science Competitions — Nepal Delegation",
    customImageUrl: "/images/tisf_taiwan.svg",
    linkText: "TISF Official Site",
    linkUrl: "https://www.ntsec.gov.tw"
  },
  {
    id: "math-associations",
    number: "04",
    title: "Bagmati Mathematical Societies Leadership",
    role: "Province Secretary (MAN) & Executive Member (NMS)",
    organization: "Mathematical Association of Nepal & Nepal Mathematical Society, Bagmati",
    category: "Academic Governance & Pedagogy",
    summary: "Advancing mathematical education standards, teacher training, and curriculum development across Bagmati Province.",
    fullDescription: "Serving as Province Secretary for the Mathematical Association of Nepal (MAN) Bagmati and Executive Member of the Nepal Mathematical Society (NMS) Bagmati, Kishan Bastola advocates for modern pedagogical methods, analytical problem-solving skills, and mathematical research.",
    highlights: [
      "Organizing provincial mathematics teacher development programs",
      "Curriculum alignment between secondary and higher mathematics",
      "Promoting mathematical research and problem-solving competitions"
    ],
    imagePlaceholderLabel: "ACADEMIC ARCHIVE: Mathematical Association of Nepal — Bagmati Provincial Conference",
    customImageUrl: "/images/hero.png",
    linkText: "Academic Network Details",
    linkUrl: "https://www.facebook.com/profile.php?id=61571369803423"
  }
];

export const INSTITUTIONS_DATA: InstitutionEntry[] = [
  {
    id: "institution-astronova",
    name: "Astronova Foundation Nepal",
    role: "Chairperson & Executive Leader",
    establishedNotice: "REGISTERED EDUCATIONAL & SCIENTIFIC FOUNDATION · NEPAL",
    mission: "To systematically cultivate scientific temperament, mathematical clarity, and technological creativity in young learners regardless of geographic or socioeconomic background.",
    governance: "Executive Board Leadership, Provincial Coordination Councils, and Academic Advisory Committees.",
    keyPillars: [
      "Summer STEAM Expo & Student Science Fairs",
      "STEM Pedagogy & Teacher Capacity Building",
      "Youth Scientific Mentorship for Global Delegations (TISF & IOSTC)"
    ],
    impactSummary: "Directly impacts schools, educators, and thousands of students across Bagmati Province and nationwide through structured STEM modules and research advocacy.",
    imagePlaceholderLabel: "EXECUTIVE PORTRAIT: Astronova Foundation Nepal — Institutional Assembly",
    customImageUrl: "/images/camp.png"
  },
  {
    id: "institution-hric",
    name: "Hetauda Research & Innovation Center (HRIC)",
    role: "Founder & Center Director",
    establishedNotice: "REGIONAL INNOVATION & RESEARCH HUB · HETAUDA, MAKWANPUR, NEPAL",
    mission: "To serve as Bagmati Province's premier research and prototyping facility in Hetauda, bridging academic study with real-world innovation, hardware experimentation, and enterprise development.",
    governance: "Directorship, Research Council, Industry Partnership Advisory, and Student Mentorship Desk.",
    keyPillars: [
      "Prototyping & Hardware Testing Facilities in Hetauda",
      "Curiosity-to-Commerce Incubation Pipeline",
      "Regional Industry, Agricultural & Technological Problem Solving"
    ],
    impactSummary: "Provides localized research infrastructure outside capital cities, empowering Makwanpur and Bagmati talent to solve local challenges through technology.",
    imagePlaceholderLabel: "FACILITY PORTRAIT: Hetauda Research & Innovation Center — Innovation Hub",
    customImageUrl: "/images/hric.png"
  }
];

export const SUPERVISED_THESES: ThesisEntry[] = [
  {
    id: "thesis-1",
    title: "A Comparative Analysis of Problem-Solving Pedagogy in Bagmati Secondary Mathematics Classrooms",
    authorOrStudent: "Supervised Research Project",
    role: "Supervisor",
    year: "Academic Paper",
    field: "Mathematics Pedagogy",
    abstract: "Investigating the pedagogical shift from rote algorithmic execution to conceptual mathematical reasoning among secondary school students in Bagmati Province."
  },
  {
    id: "thesis-2",
    title: "Integrating Physical Prototyping in Secondary STEM Curricula: Lessons from Hetauda HRIC",
    authorOrStudent: "Research Action Report",
    role: "Author & Lead Investigator",
    year: "Research Publication",
    field: "STEM Education",
    abstract: "Evaluating the empirical impact of hands-on prototyping laboratories on student retention, analytical inquiry, and project completion in regional science centers."
  },
  {
    id: "thesis-3",
    title: "From Classroom Inquiry to International Delegations: A Mentorship Model for TISF & IOSTC Competitors",
    authorOrStudent: "Special Academic Report",
    role: "Author",
    year: "International Report",
    field: "Applied Science & Mentorship",
    abstract: "Documenting the selection, preparation, and international jury defense methodology utilized for Nepalese youth delegations in Taiwan and Indonesia."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Summer STEAM Expo",
    event: "Astronova Foundation Nepal Expo",
    category: "STEAM Expo",
    date: "Annual Event",
    location: "Hetauda, Makwanpur, Nepal",
    imageUrl: "/images/camp.png",
    caption: "Students showcasing experiential science projects, robotics, and astronomical models at the Summer STEAM Expo."
  },
  {
    id: "gallery-2",
    title: "Taiwan International Science Fair (TISF)",
    event: "Nepal Delegation Presentation",
    category: "International Fair",
    date: "Taipei Event",
    location: "Taipei, Taiwan 🇹🇼",
    imageUrl: "/images/tisf.png",
    caption: "Country Leader Kishan Bastola with Nepalese student researchers presenting engineering posters in Taiwan."
  },
  {
    id: "gallery-3",
    title: "International Science & Tech Competition (IOSTC)",
    event: "Indonesia Delegation Summit",
    category: "International Fair",
    date: "Indonesia Event",
    location: "Indonesia 🇮🇩",
    imageUrl: "/images/iostc_indonesia.svg",
    caption: "Nepalese national team delegates at the IOSTC awards ceremony in Indonesia."
  },
  {
    id: "gallery-4",
    title: "HRIC Prototyping & Robotics Workshop",
    event: "Innovation Center Incubation",
    category: "Workshop",
    date: "Hetauda Program",
    location: "Hetauda, Makwanpur",
    imageUrl: "/images/workshop.jpg",
    caption: "Young researchers assembling micro-controller prototypes and hardware testing at HRIC Hetauda."
  }
];

export const AREAS_OF_WORK = [
  { title: "STEM & STEAM Education", description: "Integrated Science, Technology, Engineering, Arts, and Mathematics experiential curricula." },
  { title: "Young Scientist Development", description: "Identifying, training, and mentoring youth researchers for TISF (Taiwan) and IOSTC (Indonesia)." },
  { title: "Mathematics Education & Advocacy", description: "Modernizing mathematical pedagogy, logical reasoning, and conceptual problem-solving frameworks." },
  { title: "Research & Innovation", description: "Establishing structured methodologies for applied scientific inquiry and technology development." },
  { title: "Scientific Ecosystems", description: "Connecting academic institutions, government bodies, local centers, and community leaders." },
  { title: "Mentorship & Thesis Supervision", description: "Direct one-on-one guidance for aspiring researchers, educators, and student thesis projects." },
  { title: "Technology & Prototyping", description: "Supporting physical, digital, and mechanical prototype creation at HRIC Hetauda." },
  { title: "Entrepreneurship", description: "Guiding research outcomes toward commercialization, social enterprise, and economic value." }
];

export const MEDIA_ARCHIVE: MediaEntry[] = [
  {
    id: "media-1",
    headline: "Nepal's Young Scientists Represent Nation at Taiwan International Science Fair (TISF)",
    publication: "National Educational & Science Press",
    date: "Annual Feature",
    category: "International Delegation",
    excerpt: "Country Leader Kishan Bastola heads Nepal's scientific delegation to TISF Taiwan, presenting breakthrough youth research projects on the international stage.",
    fullSummary: "Coverage highlighting the selection, preparation, and international representation of Nepalese secondary students at the Taiwan International Science Fair in Taipei under the leadership of Country Leader Kishan Bastola.",
    clippingPlaceholderLabel: "NEWSPAPER CLIPPING ARCHIVE: Press Feature — Nepal Delegation at Taiwan International Science Fair",
    customImageUrl: "/images/",
    sourceNotice: "Verified Newspaper Feature — National Press Archive"
  },
  {
    id: "media-2",
    headline: "IOSTC Indonesia: Nepalese Youth Team Secures Global Recognition in Science & Tech",
    publication: "International Academic & Tech Review",
    date: "International Feature",
    category: "International Delegation",
    excerpt: "Delegation Leader Kishan Bastola escorts Nepalese young researchers to international honors at IOSTC in Indonesia.",
    fullSummary: "Detailed news report on the achievements of the Nepalese delegation at the International Science & Technology Competition (IOSTC) in Indonesia, celebrating student prototype innovations.",
    clippingPlaceholderLabel: "NEWSPAPER CLIPPING ARCHIVE: Press Feature — IOSTC Indonesia Delegation",
    customImageUrl: "/images/media_iostc.svg",
    sourceNotice: "Verified International Coverage"
  },
  {
    id: "media-3",
    headline: "Summer STEAM Expo in Hetauda Inspires Next Generation of Nepalese Innovators",
    publication: "Bagmati Provincial News & Daily",
    date: "Regional Feature",
    category: "Astronova Initiative",
    excerpt: "Chairperson Kishan Bastola introduces the Summer STEAM Expo, bringing interactive science exhibits, telescopes, and robotics to Hetauda, Makwanpur.",
    fullSummary: "Detailed report on Astronova Foundation Nepal's flagship Summer STEAM Expo in Hetauda, highlighting its mission to democratize experiential STEM education.",
    clippingPlaceholderLabel: "NEWSPAPER CLIPPING ARCHIVE: Press Feature — Summer STEAM Expo Hetauda",
    customImageUrl: "/images/media_steam_expo.svg",
    sourceNotice: "Verified Print Clipping — Provincial Daily"
  }
];

export const THOUGHT_ENTRIES: ThoughtEntry[] = [
  {
    id: "thought-1",
    title: "Bridging Mathematical Pedagogy and Technological Prototyping",
    category: "Mathematics & STEM",
    date: "Selected Essay",
    readTime: "6 min read",
    excerpt: "How foundational mathematical thinking directly influences hardware, software, and engineering prototypes in youth innovation programs.",
    keyTakeaways: [
      "Mathematical logic as the foundation for algorithm and hardware design",
      "Demystifying abstract equations through physical prototyping",
      "Pedagogical strategies for secondary school mathematics educators"
    ]
  },
  {
    id: "thought-2",
    title: "Building Regional Research Ecosystems: The HRIC Hetauda Framework",
    category: "Institutional Governance",
    date: "Selected Essay",
    readTime: "8 min read",
    excerpt: "Decentralizing scientific research facilities to bring world-class prototyping, mentorship, and incubation to regional centers like Hetauda, Makwanpur.",
    keyTakeaways: [
      "Why capital-centric research models miss regional talent",
      "Establishing sustainable community-backed innovation centers in Hetauda",
      "Curiosity-to-Commerce as a regional economic catalyst"
    ]
  },
  {
    id: "thought-3",
    title: "From Curiosity to Commerce: Cultivating Youth Scientific Enterprise",
    category: "Ecosystem Building",
    date: "Keynote Address",
    readTime: "7 min read",
    excerpt: "A seven-stage structured pathway designed to guide students from raw classroom questions to viable societal enterprise and economic value.",
    keyTakeaways: [
      "Removing friction points between secondary education and research",
      "Mentorship models for young scientists entering TISF Taiwan & IOSTC Indonesia",
      "Converting research outcomes into community applications"
    ]
  }
];

export const VISION_DATA = {
  headerQuote: "EVERY CHILD SHOULD HAVE THE OPPORTUNITY TO ASK A QUESTION.",
  lines: [
    "Every student should be able to experiment.",
    "Every promising idea should find a mentor.",
    "Every research project should find support.",
    "Every innovation should find a pathway to application.",
    "Every capable young person should have the opportunity to create value."
  ]
};

export const SUPPORT_VISION_DATA: SupportVisionData = {
  bankName: "Rastriya Banijya Bank",
  accountHolder: "ASTRONOVA FOUNDATION NEPAL",
  accountNumber: "130010006086001",
  branch: "Hetauda Branch, Makwanpur, Nepal",
  note: "Contributions directly empower rural STEM workshops, Summer STEAM Expos, student research grants, and international competition delegations (TISF & IOSTC)."
};

export const CONTACT_DATA = {
  name: "KISHAN BASTOLA",
  fullNameNep: "किशन बाँस्टोला (नेत्र प्रसाद बाँस्टोला)",
  titleStack: [
    "Chairperson — Astronova Foundation Nepal",
    "STEM & Mathematics Advocate",
    "Province Secretary — Mathematical Association of Nepal (MAN), Bagmati Province",
    "Executive Member — Nepal Mathematical Society (NMS), Bagmati Province",
    "Founder & Director — Hetauda Research & Innovation Center (HRIC)",
    "Country Leader & Delegation Head — TISF (Taiwan) & IOSTC (Indonesia)"
  ],
  credentialsLine: "18+ Years in Education | Master's Degree in Mathematics | Former School Principal & Campus Chief",
  email: "contact@astronovafoundation.com",
  altEmail: "contact@kishanbastola.edu.np",
  phone: "+977-9855030706",
  whatsapp: "+9779855030706",
  location: "Hetauda Sub-Metropolitan City, Makwanpur, Bagmati Province, Nepal (हेटौंडा उपमहानगरपालिका, मकवानपुर, नेपाल)",
  facebookUrl: "https://www.facebook.com/kishan.bastola",
  linkedinUrl: "https://www.linkedin.com/in/kishan-bastola/",
  astronovaUrl: "https://astronovafoundation.com",
  hricUrl: "#institution-hric",
  tisfUrl: "https://www.ntsec.gov.tw",
  MANBagmatiUrl: "https://www.facebook.com/profile.php?id=61571369803423"
};
