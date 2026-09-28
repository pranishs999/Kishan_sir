import type { EcosystemEntity } from '../types/schema';

export const ecosystem: EcosystemEntity = {
  stakeholders: [
    { id: "students", name: "Students", role: "Primary Innovators", description: "Secondary and high school learners whose innate curiosity is guided toward research and prototyping." },
    { id: "teachers", name: "Teachers & Educators", role: "Pedagogical Guides", description: "School educators equipped with modern STEAM pedagogy, logic training, and hands-on laboratory methods." },
    { id: "mentors", name: "Mentors & Experts", role: "Technical Advisors", description: "Academic researchers, engineers, and university faculty providing expert project supervision." },
    { id: "researchers", name: "Researchers", role: "Domain Investigators", description: "Independent and university investigators conducting applied research at HRIC labs." },
    { id: "universities", name: "Universities", role: "Academic Institutions", description: "Higher education institutions providing academic accreditation, research validation, and joint MOU collaboration (e.g. KU School of Education)." },
    { id: "government", name: "Government & Municipalities", role: "Policy & Infrastructure Partners", description: "Local and provincial government bodies (e.g. Bagmati Province, Hetauda Sub-Metropolitan) supporting educational infrastructure." },
    { id: "industry", name: "Industry & Agriculture", role: "Problem Statements & Market Needs", description: "Regional enterprises and local agricultural bodies posing real-world challenges for student solution prototyping." },
    { id: "entrepreneurs", name: "Entrepreneurs & Investors", role: "Commercialization Catalysts", description: "Enterprise partners scaling validated student prototypes into commercial products and social enterprises." }
  ],
  connections: [
    { from: "students", to: "teachers", description: "Classroom inquiry guided by modern mathematical logic" },
    { from: "teachers", to: "mentors", description: "Capacity building workshops and research alignment" },
    { from: "students", to: "mentors", description: "Direct project supervision for international science fairs" },
    { from: "mentors", to: "researchers", description: "Collaborative laboratory experimentation at HRIC" },
    { from: "researchers", to: "universities", description: "Academic research validation and MOU partnerships" },
    { from: "industry", to: "students", description: "Real-world agricultural and municipal problem statements" },
    { from: "innovations", to: "entrepreneurs", description: "Incubation and prototype commercialization into local value" }
  ],
  pipeline: [
    {
      id: "curiosity",
      stage: "01 / CURIOSITY",
      subtitle: "Inquiry & Questioning",
      description: "Fostering an environment in secondary education where students move beyond textbook memorization to formulate analytical, real-world questions.",
      impact: "Democratizes inquiry; activates innate problem-solving interest across urban and regional classrooms."
    },
    {
      id: "learning",
      stage: "02 / LEARNING",
      subtitle: "Rigorous Pedagogy",
      description: "Grounding initial curiosity in rigorous mathematical logic, scientific principles, and structured academic study under qualified mentorship.",
      impact: "Builds deep subject-matter mastery and logical problem-solving frameworks."
    },
    {
      id: "research",
      stage: "03 / RESEARCH",
      subtitle: "Hypothesis & Method",
      description: "Guiding students to design original experiments, gather empirical data, and formulate scientific hypotheses suited for jury defense.",
      impact: "Produces verifiable student research projects worthy of national and international scientific competition."
    },
    {
      id: "prototype",
      stage: "04 / PROTOTYPE",
      subtitle: "Hardware & Software Prototyping",
      description: "Providing regional laboratory infrastructure at HRIC Hetauda to translate research papers into physical prototypes and digital solutions.",
      impact: "Transforms abstract ideas into functional technological artifacts and working hardware models."
    },
    {
      id: "innovation",
      stage: "05 / INNOVATION",
      subtitle: "Validation & Refinement",
      description: "Testing prototypes under real-world conditions, validating engineering assumptions, and refining user experience.",
      impact: "Ensures technical robustness and practical utility for local community challenges."
    },
    {
      id: "enterprise",
      stage: "06 / ENTERPRISE",
      subtitle: "Social & Commercial Viability",
      description: "Evaluating validated prototypes for scalability, social utility, and market readiness, connecting creators with institutional partners.",
      impact: "Instills entrepreneurial vision and practical problem-solving tailored to local economic needs."
    },
    {
      id: "commerce",
      stage: "07 / COMMERCE",
      subtitle: "Sustainable Socio-Economic Value",
      description: "Deploying innovations into regional markets and reinvesting yields into youth research grants and center expansion.",
      impact: "Establishes a self-sustaining cycle where research fuels enterprise and enterprise funds future curiosity."
    }
  ],
  focusAreas: [
    "STEAM Education",
    "Young Scientist Incubation",
    "Regional Research Infrastructure",
    "Mathematical Pedagogy",
    "Curiosity-to-Commerce Pathway",
    "Youth Entrepreneurship"
  ],
  outcomes: [] // Strictly left empty per DATA.md: "leave empty unless verified numeric/qualitative outcomes exist"
};
