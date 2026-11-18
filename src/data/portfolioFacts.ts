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
  SupportVisionData,
  QuestionSitemapItem,
  ProblemStatement
} from '../types/portfolio';

// ORIGINAL sourceFacts EXPORTS (portfolio types)
// =====================================================

export const HERO_DATA = {
  name: "KISHAN BASTOLA",
  fullNameNep: "किशन बास्तोला",
  nameWithAlias: "Kishan Bastola ",
  title: "Chairperson- Astronova Foundation Nepal · STEM & Mathematics Advocate",
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
    "Chairperson- Astronova Foundation Nepal",
    "Province Secretary- Mathematical Association of Nepal (MAN), Bagmati",
    "Executive Member- Nepal Mathematical Society (NMS), Bagmati",
    "Founder & Director- Hetauda Research & Innovation Center (HRIC)",
    "Country Leader & Delegation Head- Taiwan International Science Fair (TISF, Taiwan)",
    "Delegation Head- International Science & Technology Competition (IOSTC, Indonesia)",
    "Former School Principal & Campus Chief"
  ]
};

export const CREDENTIALS_DATA: CredentialItem[] = [
  { label: "18+ Years", detail: "Dedicated Leadership in Education & STEM Advocacy", category: "experience" },
  { label: "Master's Degree", detail: "Mathematics (M.Sc. / M.A.)", category: "education" },
  { label: "President", detail: "Astronova Foundation Nepal", category: "current" },
  { label: "Province Secretary", detail: "Mathematical Association of Nepal (MAN), Bagmati", category: "current" },
  { label: "Executive Member", detail: "Nepal Mathematical Society (NMS), Bagmati", category: "current" },
  { label: "Founder & Director", detail: "Hetauda Research & Innovation Center (HRIC)", category: "current" },
  { label: "Global Delegations", detail: "Country Leader: TISF (Taiwan) & IOSTC (Indonesia)", category: "current" },
  { label: "Former Principal", detail: "School Principal- Institutional Governance", category: "leadership" },
  { label: "Former Campus Chief", detail: "Higher Education & Campus Management (Narayani College)", category: "leadership" }
];

export const GLOBAL_DELEGATIONS: DelegationEntry[] = [
  {
    id: "delegation-tisf",
    title: "Taiwan International Science Fair (TISF)",
    country: "Taiwan",
    location: "Taipei, Taiwan",
    flagEmoji: "🇹🇼",
    role: "Country Leader & Delegation Head- Nepal Contingent",
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
    role: "Delegation Leader- Nepal National Team",
    event: "International Olympiad / Science & Technology Competition",
    summary: "Escorting and mentoring Nepalese student innovators competing in technology prototyping, applied mathematics, and STEAM solutions.",
    achievements: [
      "International awards and medals secured for youth hardware & software prototypes",
      "Bilateral academic exchange between Nepalese and Southeast Asian science institutions",
      "Systematic incubation of student projects leading up to international competition"
    ],
    imageUrl: "/images/IOSTC.jpg"
  }
];

export const SIX_QUESTIONS: QuestionSitemapItem[] = [
  {
    id: "q1",
    number: "01",
    titleEn: "WHAT SHAPED ME?",
    titleNe: "मेरो पृष्ठभूमि, शिक्षा र यात्राले मलाई कसरी निर्माण गर्यो?",
    meaningNe: "मेरो पृष्ठभूमि, शिक्षा र यात्राले मलाई कसरी निर्माण गर्यो?",
    summaryEn: "Personal story, Master’s Degree in Mathematics, 18 years in education, former School Principal and Campus Chief, career timeline, key turning points and professional development.",
    summaryNe: "व्यक्तिगत कथा, गणितमा स्नातकोत्तर, १८ वर्ष शिक्षामा, पूर्व विद्यालय प्रधानाध्यापक तथा क्याम्पस प्रमुख, क्यारियर टाइमलाइन र मुख्य मोडहरू।",
    route: "/what-shaped-me",
    anchor: ""
  },
  {
    id: "q2",
    number: "02",
    titleEn: "WHAT DRIVES ME?",
    titleNe: "मलाई कुन उद्देश्य, विश्वास र दर्शनले अघि बढाउँछ?",
    meaningNe: "मलाई कुन उद्देश्य, विश्वास र दर्शनले अघि बढाउँछ?",
    summaryEn: "Education philosophy, student-centred learning, curiosity, mathematics and scientific thinking, belief that lack of resources should not prevent student potential, and the purpose behind the work.",
    summaryNe: "शैक्षिक दर्शन, विद्यार्थी केन्द्रित सिकाइ, जिज्ञासा, गणित तथा वैज्ञानिक सोच, स्रोतको अभावले विद्यार्थीको सम्भावना रोकिनु हुँदैन भन्ने विश्वास।",
    route: "/what-drives-me",
    anchor: ""
  },
  {
    id: "q3",
    number: "03",
    titleEn: "WHAT PROBLEMS AM I SOLVING?",
    titleNe: "शिक्षा, अनुसन्धान र नवप्रवर्तन क्षेत्रमा म कुन समस्या समाधान गर्न खोज्दैछु?",
    meaningNe: "शिक्षा, अनुसन्धान र नवप्रवर्तन क्षेत्रमा म कुन समस्या समाधान गर्न खोज्दैछु?",
    summaryEn: "Explain the gaps being addressed: limited hands-on learning, weak access to mentors and laboratories, limited student research pathways, and weak links between learning, innovation and real-world application. Present these as problem statements and validate with evidence where possible.",
    summaryNe: "सीमित व्यावहारिक सिकाइ, मेन्टर र प्रयोगशालामा कमजोर पहुँच, सीमित विद्यार्थी अनुसन्धान मार्ग, र सिकाइ-आविष्कार-प्रयोगबीचको कमजोर सम्बन्धको समाधान।",
    route: "/what-problems-am-i-solving",
    anchor: ""
  },
  {
    id: "q4",
    number: "04",
    titleEn: "WHAT AM I CREATING?",
    titleNe: "म कुन संस्था, प्रणाली र अवसर निर्माण गर्दैछु?",
    meaningNe: "म कुन संस्था, प्रणाली र अवसर निर्माण गर्दैछु?",
    summaryEn: "Astronova Foundation Nepal, Hetauda Research and Innovation Center (HRIC), HRIC Scientific Ecosystem, STEAM learning initiatives, student research and science fair pathways, mentor networks and institutional partnerships. Show the relationship among these initiatives with a clear ecosystem diagram.",
    summaryNe: "एष्ट्रोनोभा फाउण्डेशन नेपाल, हेटौंडा रिसर्च एण्ड इनोभेसन सेन्टर (HRIC), HRIC वैज्ञानिक इकोसिस्टम, STEAM सिकाइ पहलहरू, विद्यार्थी अनुसन्धान र विज्ञान प्रदर्शनी मार्ग, मेन्टर सञ्जाल र संस्थागत साझेदारी।",
    route: "/what-am-i-creating",
    anchor: ""
  },
  {
    id: "q5",
    number: "05",
    titleEn: "HOW DO I CREATE VALUE?",
    titleNe: "म ज्ञान, अनुसन्धान र नवप्रवर्तनलाई वास्तविक मूल्यमा कसरी रूपान्तरण गर्छु?",
    meaningNe: "म ज्ञान, अनुसन्धान र नवप्रवर्तनलाई वास्तविक मूल्यमा कसरी रूपान्तरण गर्छु?",
    summaryEn: "This page explains the signature framework From Curiosity to Commerce: Curiosity → Learning → Research → Prototype → Innovation → Enterprise → Commerce. Clarify that commerce means real-world application, market relevance and social/economic value—not simply pushing students into business.",
    summaryNe: "हस्ताक्षर ढाँचा 'जिज्ञासादेखि वाणिज्यसम्म': जिज्ञासा → सिकाइ → अनुसन्धान → प्रोटोटाइप → नवप्रवर्तन → उद्यम → वाणिज्य। वाणिज्यको अर्थ वास्तविक प्रयोग, बजार सान्दर्भिकता र सामाजिक/आर्थिक मूल्य हो।",
    route: "/how-do-i-create-value",
    anchor: ""
  },
  {
    id: "q6",
    number: "06",
    titleEn: "WHAT FUTURE AM I BUILDING?",
    titleNe: "म कस्तो भविष्य निर्माण गर्न चाहन्छु र कोसँग सहकार्य गर्न चाहन्छु?",
    meaningNe: "म कस्तो भविष्य निर्माण गर्न चाहन्छु र कोसँग सहकार्य गर्न चाहन्छु?",
    summaryEn: "Long-term vision for Nepal, future direction for HRIC and scientific ecosystem development, research interests, desired partnerships with universities, schools, government, researchers, industry and international organizations. Include a clear collaboration/contact invitation.",
    summaryNe: "नेपालका लागि दीर्घकालीन दृष्टि, HRIC र वैज्ञानिक इकोसिस्टम विकासको आगामी दिशा, अनुसन्धान रुचि, विश्वविद्यालय, विद्यालय, सरकार, अनुसन्धानकर्ता, उद्योग र अन्तर्राष्ट्रिय संस्थाहरूसँगको साझेदारी तथा सहकार्य निमन्त्रणा।",
    route: "/what-future-am-i-building",
    anchor: ""
  }
];

export const PROBLEM_STATEMENTS: ProblemStatement[] = [
  {
    id: "gap-handson",
    number: "01",
    titleEn: "Limited Hands-on Learning",
    titleNe: "व्यावहारिक सिकाइको अभाव",
    descriptionEn: "Most school science and mathematics remain confined to rote memorization and theoretical textbooks, leaving students with little experiential or inquiry-based learning.",
    descriptionNe: "धेरैजसो विद्यालयमा विज्ञान र गणित केवल घोकन्ते विद्या र पाठ्यपुस्तकमा सीमित छ, जसले गर्दा विद्यार्थीहरूले प्रयोगात्मक र खोजमूलक सिकाइको अवसर पाउँदैनन्।",
    solutionEn: "Deploying interactive STEAM workshops, robotics, and hands-on experimentation via Astronova Foundation Nepal.",
    solutionNe: "एष्ट्रोनोभा फाउण्डेशनमार्फत अन्तरक्रियात्मक STEAM कार्यशाला, रोबोटिक्स र व्यावहारिक प्रयोगहरूको विस्तार।"
  },
  {
    id: "gap-mentors-labs",
    number: "02",
    titleEn: "Weak Access to Mentors & Labs",
    titleNe: "प्रयोगशाला तथा मेन्टरको कमजोर पहुँच",
    descriptionEn: "Outside central metropolitan hubs, rural and regional students have virtually zero access to modern prototyping labs, computational tools, and qualified academic mentors.",
    descriptionNe: "मुख्य सहरहरू बाहिर, ग्रामीण र मोफसलका विद्यार्थीहरूलाई आधुनिक प्रोटोटाइपिङ प्रयोगशाला, कम्प्युटेसनल उपकरण र दक्ष प्राज्ञिक मेन्टरको पहुँच शून्यप्रायः छ।",
    solutionEn: "Establishing regional research hubs like HRIC in Hetauda with dedicated lab facilities and expert mentorship.",
    solutionNe: "हेटौंडामा HRIC जस्ता क्षेत्रीय अनुसन्धान केन्द्र स्थापना गरी समर्पित प्रयोगशाला र विज्ञ मेन्टरशिप उपलब्ध गराउने।"
  },
  {
    id: "gap-student-research",
    number: "03",
    titleEn: "Isolated Student Research Pathways",
    titleNe: "विद्यार्थी अनुसन्धान मार्गको अभाव",
    descriptionEn: "Talented young minds with original project ideas lack structural platforms to defend their research, obtain validation, and compete on national or international stages.",
    descriptionNe: "मौलिक सोच भएका प्रतिभाशाली विद्यार्थीहरूसँग आफ्नो अनुसन्धान पुष्टि गर्ने, राष्ट्रिय वा अन्तर्राष्ट्रिय मञ्चमा प्रतिस्पर्धा गर्ने संस्थागत संयन्त्र छैन।",
    solutionEn: "Leading national cohorts via the Young Scientist Development Program (YSDP) and delegations to TISF Taiwan & IOSTC Indonesia.",
    solutionNe: "युवा वैज्ञानिक विकास कार्यक्रम (YSDP) र ताइवान TISF तथा इन्डोनेसिया IOSTC जस्ता विश्वस्तरीय मञ्चहरूमा राष्ट्रिय टोलीको नेतृत्व।"
  },
  {
    id: "gap-market-application",
    number: "04",
    titleEn: "Weak Link Between Research & Market Value",
    titleNe: "सिकाइ, नवप्रवर्तन र बजार मूल्यबीचको खाडल",
    descriptionEn: "Academic research and science fair projects rarely translate into working prototypes or enterprise solutions that address tangible societal and economic needs.",
    descriptionNe: "प्राज्ञिक अनुसन्धान र विज्ञान प्रदर्शनीका मोडलहरू वास्तविक समाज र बजारका आवश्यकता समाधान गर्ने कार्यशील प्रोटोटाइप वा उद्यममा रूपान्तरण हुन सक्दैनन्।",
    solutionEn: "Operating the 'From Curiosity to Commerce' framework to link youth innovations to municipal and economic relevance.",
    solutionNe: "'जिज्ञासादेखि वाणिज्यसम्म' को ७-चरणीय रूपरेखामार्फत युवा नवप्रवर्तनलाई स्थानीय आवश्यकता र बजार मूल्यसँग जोड्ने।"
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
    id: "prototype",
    stepNumber: "04",
    title: "PROTOTYPE",
    subtitle: "Hardware & Software Prototyping",
    description: "Providing regional laboratory infrastructure at HRIC Hetauda to translate research papers into physical prototypes and digital solutions.",
    impact: "Transforms abstract ideas into functional technological artifacts and working hardware models."
  },
  {
    id: "innovation",
    stepNumber: "05",
    title: "INNOVATION",
    subtitle: "Validation & Refinement",
    description: "Testing prototypes under real-world conditions, validating engineering assumptions, and refining user experience for local community utility.",
    impact: "Ensures technical robustness and practical utility for local community and municipal challenges."
  },
  {
    id: "enterprise",
    stepNumber: "06",
    title: "ENTERPRISE",
    subtitle: "Social & Commercial Viability",
    description: "Evaluating prototypes for community utility, scalability, and market readiness, connecting student creators with institutional partners.",
    impact: "Instills entrepreneurial vision and practical problem-solving tailored to local economic needs."
  },
  {
    id: "commerce",
    stepNumber: "07",
    title: "COMMERCE",
    subtitle: "Sustainable Socio-Economic Value",
    description: "Real-world societal deployment, market relevance, and economic value creation—reinvesting yields back into youth mentorship, research grants, and regional center expansion.",
    impact: "Establishes a self-sustaining cycle where research fuels enterprise and enterprise funds future curiosity."
  }
];

export const SELECTED_WORK: WorkEntry[] = [
  {
    id: "astronova",
    number: "01",
    title: "Astronova Foundation Nepal",
    role: "President / Chairperson",
    organization: "Astronova Foundation Nepal",
    category: "STEM & Mathematics Advocacy",
    status: "active",
    summary: "Leading a nationwide scientific foundation dedicated to promoting STEAM education, mathematical pedagogy, and youth research incubation across Nepal.",
    fullDescription: "Astronova Foundation Nepal serves as an institutional umbrella for experiential learning. Under Kishan Bastola's leadership, the foundation organizes regional science fairs, teacher development workshops, and national student delegations to international scientific competitions.",
    highlights: [
      "Organizer of Summer STEAM Expo & Youth Science Fairs",
      "Pioneering provincial STEM learning frameworks",
      "Mentoring young scientists for global international fairs (TISF Taiwan, IOSTC Indonesia)"
    ],
    imagePlaceholderLabel: "OFFICIAL ARCHIVE: Astronova Foundation Nepal- Summer STEAM Expo & Conference",
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
    status: "active",
    summary: "Establishing a regional center of excellence for technological prototyping, scientific research, and innovation in Hetauda, Makwanpur.",
    fullDescription: "Founded and directed by Kishan Bastola, HRIC provides regional youth, researchers, and educators with dedicated laboratories, technical mentorship, and prototype testing environments in Hetauda Sub-Metropolitan City, Makwanpur, Bagmati Province.",
    highlights: [
      "State-of-the-art incubation facilities for regional youth in Makwanpur",
      "Direct technical mentorship for prototype creation and research supervision",
      "Collaborative research projects targeting regional agricultural and technological challenges"
    ],
    imagePlaceholderLabel: "INSTITUTIONAL ARCHIVE: Hetauda Research & Innovation Center- Prototyping Lab",
    customImageUrl: "/images/hric.png",
    linkText: "Explore Center Initiatives",
    linkUrl: "#institution-hric"
  },
  {
    id: "ysdp",
    number: "03",
    title: "Young Scientist Development Program (YSDP)",
    role: "Program Lead & Senior Mentor",
    organization: "Astronova Foundation Nepal & HRIC",
    category: "Youth Research & Mentorship",
    status: "active",
    summary: "Identifying, training, and incubating secondary school students with high potential in STEM inquiry and applied research.",
    fullDescription: "The Young Scientist Development Program (YSDP) creates structured learning pathways for school students, providing laboratory access, research design guidance, and direct mentorship from university professors and engineers.",
    highlights: [
      "Incubation of youth research papers and working prototypes",
      "Hands-on scientific inquiry modules across Bagmati Province",
      "Pathway for students to qualify for international science fairs"
    ],
    imagePlaceholderLabel: "YOUTH PROGRAM: Young Scientist Development Program- Research Cohort",
    customImageUrl: "/images/workshop.jpg",
    linkText: "Explore YSDP Pathways",
    linkUrl: "/how-it-works"
  },
  {
    id: "nsef",
    number: "04",
    title: "National Science & Engineering Fair (NSEF)",
    role: "Chief Organizer & Convener",
    organization: "Astronova Foundation Nepal",
    category: "National Science Competition",
    status: "pilot",
    summary: "Nepal's premier competitive science and engineering platform evaluating original secondary student inventions.",
    fullDescription: "NSEF provides a national jury-evaluated arena where student researchers from across Nepal present empirical projects in environmental science, robotics, mathematics, and biomedical engineering.",
    highlights: [
      "Rigorous peer-reviewed judging rubric modeled on international science fairs",
      "National qualifying ground for TISF Taiwan delegations",
      "Exhibition of student hardware and software prototypes"
    ],
    imagePlaceholderLabel: "NATIONAL FAIR: National Science & Engineering Fair (NSEF)",
    customImageUrl: "/images/camp.png",
    linkText: "NSEF Guidelines & Highlights",
    linkUrl: "/what-we-built"
  },
  {
    id: "tisf-iostc",
    number: "05",
    title: "Global Science Delegations (TISF & IOSTC)",
    role: "Country Leader & Delegation Head",
    organization: "Taiwan International Science Fair & IOSTC Indonesia",
    category: "International Scientific Representation",
    status: "active",
    summary: "Representing Nepal on global scientific platforms and mentoring high-school researchers for international competition in Taiwan and Indonesia.",
    fullDescription: "As Delegation Head for Nepal, Kishan Bastola selects, mentors, and escorts Nepal's top young scientific minds to present research projects to international juries of scientists in Taiwan and Indonesia.",
    highlights: [
      "National selection and rigorous research preparation",
      "Global platform exposure for Nepalese student researchers in Taiwan & Indonesia",
      "International academic networking and cross-border scientific exchange"
    ],
    imagePlaceholderLabel: "INTERNATIONAL DELEGATION: Global Science Competitions- Nepal Delegation",
    customImageUrl: "/images/tisf.png",
    linkText: "TISF Official Site",
    linkUrl: "https://www.ntsec.gov.tw"
  },
  {
    id: "steam-workshops",
    number: "06",
    title: "Astronova STEAM & Community Robotics Workshops",
    role: "Director of Pedagogy",
    organization: "Astronova Foundation Nepal",
    category: "Hands-on Technical Workshops",
    status: "active",
    summary: "Free community robotics, artificial intelligence, astronomy, and automation workshops for school learners.",
    fullDescription: "Multi-day intensive bootcamps delivering practical training in microcontrollers, sensory robotics, algorithms, and observational astronomy to demystify advanced technology for public and institutional students.",
    highlights: [
      "9-day and 11-day free hands-on robotics workshops conducted in Bagmati Province",
      "Hands-on soldering, sensor integration, and coding modules",
      "Participation of diverse student cohorts across Makwanpur schools"
    ],
    imagePlaceholderLabel: "WORKSHOP ARCHIVE: Community Robotics & AI Workshop",
    customImageUrl: "/images/workshop.jpg",
    linkText: "View Workshop Highlights",
    linkUrl: "/what-we-built"
  },
  {
    id: "math-associations",
    number: "07",
    title: "Bagmati Mathematical Societies Leadership",
    role: "Province Secretary (MAN) & Executive Member (NMS)",
    organization: "Mathematical Association of Nepal & Nepal Mathematical Society, Bagmati",
    category: "Academic Governance & Pedagogy",
    status: "active",
    summary: "Advancing mathematical education standards, teacher training, and curriculum development across Bagmati Province.",
    fullDescription: "Serving as Province Secretary for the Mathematical Association of Nepal (MAN) Bagmati and Executive Member of the Nepal Mathematical Society (NMS) Bagmati, Kishan Bastola advocates for modern pedagogical methods, analytical problem-solving skills, and mathematical research.",
    highlights: [
      "Organizing provincial mathematics teacher development programs",
      "Curriculum alignment between secondary and higher mathematics",
      "Promoting mathematical research and problem-solving competitions"
    ],
    imagePlaceholderLabel: "ACADEMIC ARCHIVE: Mathematical Association of Nepal- Bagmati Provincial Conference",
    customImageUrl: "/images/MAN_logo.jpg",
    linkText: "Academic Network Details",
    linkUrl: "https://www.facebook.com/profile.php?id=61571369803423"
  },
  {
    id: "innovation-labs",
    number: "08",
    title: "Regional Innovation Labs & Maker Spaces",
    role: "Strategic Lead & Planner",
    organization: "HRIC & Municipal Partners",
    category: "Future Infrastructure",
    status: "planned",
    summary: "Planning decentralized maker spaces and community digital fabrication labs across Bagmati Province municipalities.",
    fullDescription: "Collaborating with local governments, schools, and private donors to establish accessible maker spaces equipped with 3D printers, laser cutters, and electronics benches outside capital cities.",
    highlights: [
      "Decentralized innovation hubs for district-level youth",
      "Public-private-academic partnership model",
      "Dedicated incubation support for grassroots municipal technology solutions"
    ],
    imagePlaceholderLabel: "FUTURE LAB: Regional Digital Fabrication & Innovation Space",
    customImageUrl: "/images/hric.png",
    linkText: "Collaborate on Lab Setup",
    linkUrl: "/collaborate"
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
    imagePlaceholderLabel: "EXECUTIVE PORTRAIT: Astronova Foundation Nepal- Institutional Assembly",
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
    imagePlaceholderLabel: "FACILITY PORTRAIT: Hetauda Research & Innovation Center- Innovation Hub",
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
    imageUrl: "/images/IOSTC.jpg",
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
    clippingPlaceholderLabel: "NEWSPAPER CLIPPING ARCHIVE: Press Feature- Nepal Delegation at Taiwan International Science Fair",
    customImageUrl: "/images/tisf.png",
    sourceNotice: ""
  },
  {
    id: "media-2",
    headline: "IOSTC Indonesia: Nepalese Youth Team Secures Global Recognition in Science & Tech",
    publication: "International Academic & Tech Review",
    date: "International Feature",
    category: "International Delegation",
    excerpt: "Delegation Leader Kishan Bastola escorts Nepalese young researchers to international honors at IOSTC in Indonesia.",
    fullSummary: "Detailed news report on the achievements of the Nepalese delegation at the International Science & Technology Competition (IOSTC) in Indonesia, celebrating student prototype innovations.",
    clippingPlaceholderLabel: "NEWSPAPER CLIPPING ARCHIVE: Press Feature- IOSTC Indonesia Delegation",
    customImageUrl: "/images/IOSTC.jpg",
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
    clippingPlaceholderLabel: "NEWSPAPER CLIPPING ARCHIVE: Press Feature- Summer STEAM Expo Hetauda",
    customImageUrl: "/images/camp.png",
    sourceNotice: "Verified Print Clipping- Provincial Daily"
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
  fullNameNep: "किशन बास्तोला ",
  titleStack: [
    "Chairperson- Astronova Foundation Nepal",
    "STEM & Mathematics Advocate",
    "Province Secretary- Mathematical Association of Nepal (MAN), Bagmati Province",
    "Executive Member- Nepal Mathematical Society (NMS), Bagmati Province",
    "Founder & Director- Hetauda Research & Innovation Center (HRIC)",
    "Country Leader & Delegation Head- TISF (Taiwan) & IOSTC (Indonesia)"
  ],
  credentialsLine: "18+ Years in Education | Master's Degree in Mathematics | Former School Principal & Campus Chief",
  email: "kishan.htdfren@gmail.com ",
  altEmail: "kishan.htdfren@gmail.com ",
  phone: "+977-9855030706",
  whatsapp: "+9779855030706",
  location: "Hetauda Sub-Metropolitan City, Makwanpur, Bagmati Province, Nepal (हेटौंडा उपमहानगरपालिका, मकवानपुर, नेपाल)",
  facebookUrl: "https://www.facebook.com/kishan.bastola",
  linkedinUrl: "https://www.linkedin.com/in/kishan-bastola/",
  astronovaUrl: "https://astronovafoundation.com",
  hricUrl: "#institution-hric",
  tisfUrl: "https://www.ntsec.gov.tw",
  MANBagmatiUrl: "https://www.facebook.com/share/18Re3ajNqx/"
};
