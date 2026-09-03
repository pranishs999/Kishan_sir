import type { 
  CredentialItem, 
  FrameworkStep, 
  WorkEntry, 
  InstitutionEntry, 
  MediaEntry, 
  ThoughtEntry 
} from '../types/portfolio';

export const HERO_DATA = {
  name: "KISHAN BASTOLA",
  title: "Educationist · Mathematician · Research & Innovation Ecosystem Builder",
  frameworkHeader: "FROM CURIOSITY TO COMMERCE",
  frameworkTagline: "Building pathways that transform curiosity into learning, research, innovation, enterprise and value.",
  primaryCTA: "Explore the Work",
  secondaryCTA: "View CV"
};

export const PROFILE_DATA = {
  sectionNumber: "01 / PROFILE",
  title: "18 Years of Educational Leadership, Mathematical Rigor, and Ecosystem Building",
  bodyParagraphs: [
    "Kishan Bastola is an Educationist, Mathematician, and Research & Innovation Ecosystem Builder with over 18 years of dedicated service in the educational sector. Holding a Master's Degree in Mathematics, his career combines foundational academic excellence with systemic institutional governance.",
    "Having served as School Principal and Campus Chief, his leadership has evolved beyond institutional management to building regional and national ecosystems. His work bridges pure mathematics education with applied science, research, technology, innovation, and enterprise.",
    "As Country Leader for the Taiwan International Science Fair, President of Astronova Foundation Nepal, and Founder & Director of Hetauda Research & Innovation Center, he creates structured pathways that empower students, researchers, and young innovators to convert intellectual curiosity into tangible societal and economic value."
  ],
  credentialsSummary: [
    "18+ Years in Education",
    "Master's Degree in Mathematics",
    "Former School Principal",
    "Former Campus Chief",
    "Country Leader — Taiwan International Science Fair",
    "President — Astronova Foundation Nepal",
    "Founder & Director — Hetauda Research & Innovation Center",
    "Province Secretary — Mathematical Association of Nepal, Bagmati",
    "Executive Member — Nepal Mathematical Society, Bagmati"
  ]
};

export const CREDENTIALS_DATA: CredentialItem[] = [
  { label: "18+ Years", detail: "Dedicated Experience in Education & Academic Leadership", category: "experience" },
  { label: "Master's Degree", detail: "Mathematics (M.Sc. / M.A.)", category: "education" },
  { label: "Former Principal", detail: "School Principal — Institutional Direction & Governance", category: "leadership" },
  { label: "Former Campus Chief", detail: "Campus Chief — Higher Education Management", category: "leadership" },
  { label: "Country Leader", detail: "Taiwan International Science Fair (TISF Nepal Delegation)", category: "current" },
  { label: "President", detail: "Astronova Foundation Nepal", category: "current" },
  { label: "Founder & Director", detail: "Hetauda Research & Innovation Center (HRIC)", category: "current" },
  { label: "Province Secretary", detail: "Mathematical Association of Nepal, Bagmati Province", category: "current" },
  { label: "Executive Member", detail: "Nepal Mathematical Society, Bagmati Province", category: "current" }
];

export const FRAMEWORK_STEPS: FrameworkStep[] = [
  {
    id: "curiosity",
    stepNumber: "01",
    title: "CURIOSITY",
    subtitle: "Inquiry & Questioning",
    description: "Fostering natural wonder, critical inquiry, and analytical questioning in classrooms and community learning environments.",
    impact: "Transforms passive learning into active, student-driven scientific investigation."
  },
  {
    id: "learning",
    stepNumber: "02",
    title: "LEARNING",
    subtitle: "Mathematical & Scientific Rigor",
    description: "Building deep conceptual understanding in Mathematics, Science, and STEAM subjects through structured pedagogical models.",
    impact: "Equips learners with logical reasoning and problem-solving tools."
  },
  {
    id: "research",
    stepNumber: "03",
    title: "RESEARCH",
    subtitle: "Systematic Investigation",
    description: "Guiding students and researchers through hypothesis formulation, data gathering, methodology, and evidence-based analysis.",
    impact: "Establishes research culture early in secondary and tertiary education."
  },
  {
    id: "prototype",
    stepNumber: "04",
    title: "PROTOTYPE",
    subtitle: "Practical Experimentation",
    description: "Translating theoretical calculations and hypotheses into physical models, hardware, software, and practical experimental setups.",
    impact: "Bridges the gap between textbook concepts and hands-on technical execution."
  },
  {
    id: "innovation",
    stepNumber: "05",
    title: "INNOVATION",
    subtitle: "Scalable Value Creation",
    description: "Refining experimental prototypes into structured, repeatable, and impactful solutions for societal and regional challenges.",
    impact: "Elevates raw ideas into recognized technological and scientific innovations."
  },
  {
    id: "enterprise",
    stepNumber: "06",
    title: "ENTERPRISE",
    subtitle: "Incubation & Governance",
    description: "Establishing institutional incubation, mentorship pipelines, and organizational frameworks to support emerging innovators.",
    impact: "Provides structural stability, resources, and leadership for youth ventures."
  },
  {
    id: "commerce",
    stepNumber: "07",
    title: "COMMERCE",
    subtitle: "Societal & Economic Value",
    description: "Connecting research outcomes and innovative ventures with regional economic networks, industry partners, and community applications.",
    impact: "Delivers sustainable economic growth and real-world utility from curiosity-driven work."
  }
];

export const SELECTED_WORK: WorkEntry[] = [
  {
    id: "astronova",
    number: "01",
    title: "Astronova Foundation Nepal",
    role: "President",
    organization: "Astronova Foundation Nepal",
    category: "Foundation & STEAM Ecosystem",
    summary: "Leading nationwide and provincial initiatives in STEAM education, scientific inquiry, and youth empowerment.",
    fullDescription: "Astronova Foundation Nepal serves as a beacon for scientific exploration and educational transformation. Under Kishan Bastola's leadership as President, the foundation designs experiential learning modules, STEAM workshops, and research mentorship programs across Bagmati Province and throughout Nepal.",
    highlights: [
      "Pioneering provincial STEAM learning frameworks",
      "Mentoring young scientists for international fairs",
      "Establishing community science centers and resource hubs"
    ],
    imagePlaceholderLabel: "OFFICIAL ARCHIVE: Astronova Foundation Nepal — Educational Summit & STEAM Workshop",
    linkText: "Learn More",
    linkUrl: "#institution-astronova"
  },
  {
    id: "hric",
    number: "02",
    title: "Hetauda Research & Innovation Center",
    role: "Founder & Director",
    organization: "Hetauda Research & Innovation Center (HRIC)",
    category: "Research & Incubation Hub",
    summary: "Establishing a regional center of excellence for technological prototyping, scientific research, and innovation.",
    fullDescription: "Founded and directed by Kishan Bastola, HRIC provides regional youth, researchers, and educators with dedicated laboratories, technical mentorship, and prototype testing environments in Hetauda, Bagmati Province.",
    highlights: [
      "State-of-the-art incubation facilities for regional youth",
      "Direct technical mentorship for prototype creation",
      "Collaborative research projects targeting regional challenges"
    ],
    imagePlaceholderLabel: "INSTITUTIONAL ARCHIVE: Hetauda Research & Innovation Center — Prototyping Lab & Faculty Review",
    linkText: "Explore Center",
    linkUrl: "#institution-hric"
  },
  {
    id: "tisf",
    number: "03",
    title: "Taiwan International Science Fair (TISF)",
    role: "Country Leader — Nepal Delegation",
    organization: "Taiwan International Science Fair",
    category: "International Scientific Representation",
    summary: "Representing Nepal on global scientific platforms and mentoring high-school researchers for international competition.",
    fullDescription: "As Country Leader for Nepal at the Taiwan International Science Fair, Kishan Bastola selects, mentors, and escorts Nepal's top young scientific minds to present rigorous research projects to international juries of scientists.",
    highlights: [
      "National selection and rigorous research preparation",
      "Global platform exposure for Nepalese student researchers",
      "International academic networking and cross-border scientific exchange"
    ],
    imagePlaceholderLabel: "INTERNATIONAL DELEGATION: Taiwan International Science Fair — Nepal Scientific Contingent",
    linkText: "Delegation Details",
    linkUrl: "#tisf-details"
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
    linkText: "Society Initiatives",
    linkUrl: "#math-societies"
  }
];

export const INSTITUTIONS_DATA: InstitutionEntry[] = [
  {
    id: "institution-astronova",
    name: "Astronova Foundation Nepal",
    role: "President & Executive Leader",
    establishedNotice: "REGISTERED EDUCATIONAL & SCIENTIFIC FOUNDATION · NEPAL",
    mission: "To systematically cultivate scientific temperament, mathematical clarity, and technological creativity in young learners regardless of geographic or socioeconomic background.",
    governance: "Executive Board Leadership, Provincial Coordination Councils, and Academic Advisory Committees.",
    keyPillars: [
      "STEAM Pedagogy & Teacher Capacity Building",
      "Youth Scientific Mentorship & Project Incubation",
      "Community Research & Demonstration Centers"
    ],
    impactSummary: "Directly impacts schools, educators, and thousands of students across Bagmati Province through structured STEAM modules, research fairs, and science advocacy.",
    imagePlaceholderLabel: "EXECUTIVE PORTRAIT / ASSET: Astronova Foundation Nepal — Institutional Assembly"
  },
  {
    id: "institution-hric",
    name: "Hetauda Research & Innovation Center (HRIC)",
    role: "Founder & Center Director",
    establishedNotice: "REGIONAL INNOVATION & RESEARCH HUB · HETAUDA, BAGMATI PROVINCE",
    mission: "To serve as Bagmati Province's premier research and prototyping facility, bridging academic study with real-world innovation, hardware experimentation, and enterprise development.",
    governance: "Directorship, Research Council, Industry Partnership Advisory, and Student Mentorship Desk.",
    keyPillars: [
      "Prototyping & Hardware Testing Facilities",
      "Curiosity-to-Commerce Incubation Pipeline",
      "Regional Industry & Agricultural Problem Solving"
    ],
    impactSummary: "Provides localized research infrastructure outside capital cities, empowering regional talent to solve local challenges through technology.",
    imagePlaceholderLabel: "FACILITY PORTRAIT / ASSET: Hetauda Research & Innovation Center — Innovation Hub"
  }
];

export const AREAS_OF_WORK = [
  { title: "STEAM Education", description: "Integrated Science, Technology, Engineering, Arts, and Mathematics experiential curricula." },
  { title: "Young Scientist Development", description: "Identifying, training, and mentoring youth researchers for national and international science fairs." },
  { title: "Mathematics Education", description: "Modernizing mathematical pedagogy, logical reasoning, and conceptual problem-solving frameworks." },
  { title: "Research & Innovation", description: "Establishing structured methodologies for applied scientific inquiry and technology development." },
  { title: "Scientific Ecosystems", description: "Connecting academic institutions, government bodies, local centers, and community leaders." },
  { title: "Mentorship", description: "Direct one-on-one and institutional guidance for aspiring researchers, educators, and student innovators." },
  { title: "Technology & Prototyping", description: "Supporting physical, digital, and mechanical prototype creation for regional problem solving." },
  { title: "Entrepreneurship", description: "Guiding research outcomes toward commercialization, social enterprise, and economic value." }
];

export const MEDIA_ARCHIVE: MediaEntry[] = [
  {
    id: "media-1",
    headline: "Nepal's Young Scientists Represent Nation at Taiwan International Science Fair",
    publication: "National Educational & Science Press",
    date: "Annual Coverage",
    category: "International Delegation",
    excerpt: "Country Leader Kishan Bastola heads Nepal's scientific delegation to TISF, presenting breakthrough youth research projects on the international stage.",
    fullSummary: "Coverage highlighting the selection, preparation, and international representation of Nepalese secondary students at the Taiwan International Science Fair under the leadership of Country Leader Kishan Bastola.",
    clippingPlaceholderLabel: "NEWSPAPER CLIPPING ARCHIVE: Press Feature — Nepal Delegation at Taiwan International Science Fair",
    sourceNotice: "Verified Newspaper Feature — National Press Archive"
  },
  {
    id: "media-2",
    headline: "Hetauda Research & Innovation Center Inauguration Marks New Era for Regional Science",
    publication: "Bagmati Provincial News & Academic Journal",
    date: "Regional Feature",
    category: "Institution Building",
    excerpt: "Founder & Director Kishan Bastola introduces a dedicated prototyping hub aimed at empowering regional youth to solve local community challenges.",
    fullSummary: "Detailed report on the establishment of HRIC in Hetauda, highlighting its mission to decentralize research facilities and foster youth innovation outside the capital region.",
    clippingPlaceholderLabel: "NEWSPAPER CLIPPING ARCHIVE: Press Feature — Hetauda Research & Innovation Center Launch",
    sourceNotice: "Verified Print Clipping — Provincial Daily"
  },
  {
    id: "media-3",
    headline: "Transforming Classroom Inquiry: 18 Years of Mathematics Pedagogy & Leadership",
    publication: "Nepal Journal of Mathematics Education",
    date: "Academic Special Issue",
    category: "Educational Leadership",
    excerpt: "Former School Principal and Campus Chief Kishan Bastola shares insights on moving from rote learning to analytical problem-solving in mathematics.",
    fullSummary: "In-depth article examining Kishan Bastola's 18-year career in education, tracing his journey from classroom teacher to School Principal, Campus Chief, and Bagmati Province Secretary of MAN.",
    clippingPlaceholderLabel: "NEWSPAPER CLIPPING ARCHIVE: Academic Press — 18 Years in Mathematics Education & Leadership",
    sourceNotice: "Verified Journal Feature — Mathematical Association of Nepal"
  }
];

export const THOUGHT_ENTRIES: ThoughtEntry[] = [
  {
    id: "thought-1",
    title: "Bridging Mathematical Pedagogy and Technological Prototyping",
    category: "Mathematics & Innovation",
    date: "Selected Paper / Essay",
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
    title: "Building Regional Research Ecosystems: The HRIC Framework",
    category: "Institutional Governance",
    date: "Selected Essay",
    readTime: "8 min read",
    excerpt: "Decentralizing scientific research facilities to bring world-class prototyping, mentorship, and incubation to regional centers like Hetauda.",
    keyTakeaways: [
      "Why capital-centric research models miss regional talent",
      "Establishing sustainable community-backed innovation centers",
      "Curiosity-to-Commerce as a regional economic catalyst"
    ]
  },
  {
    id: "thought-3",
    title: "From Curiosity to Commerce: Cultivating Youth Scientific Enterprise",
    category: "Ecosystem Building",
    date: "Keynote Address Transcript",
    readTime: "7 min read",
    excerpt: "A seven-stage structured pathway designed to guide students from raw classroom questions to viable societal enterprise and economic value.",
    keyTakeaways: [
      "Removing friction points between secondary education and research",
      "Mentorship models for young scientists entering international competitions",
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

export const CONTACT_DATA = {
  name: "KISHAN BASTOLA",
  titleStack: [
    "Educationist · Mathematician · Research & Innovation Ecosystem Builder",
    "Country Leader — Taiwan International Science Fair",
    "Province Secretary — Mathematical Association of Nepal, Bagmati Province",
    "Executive Member — Nepal Mathematical Society, Bagmati Province",
    "Founder & Director — Hetauda Research & Innovation Center",
    "President — Astronova Foundation Nepal"
  ],
  credentialsLine: "18+ Years in Education | Master's Degree in Mathematics | Former School Principal & Campus Chief",
  email: "contact@kishanbastola.edu.np",
  linkedinUrl: "https://www.linkedin.com/in/kishan-bastola/",
  location: "Bagmati Province, Nepal",
  astronovaUrl: "#institution-astronova",
  hricUrl: "#institution-hric"
};
