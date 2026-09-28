import type { WorkEntity } from '../types/schema';

export const work: WorkEntity[] = [
  {
    id: "work-education",
    slug: "education",
    title: "STEM & STEAM Education",
    category: "education",
    categoryLabel: "Education & Pedagogy",
    description: "Modernizing educational frameworks to bridge theoretical classroom instruction with hands-on, experiential learning across secondary and higher education.",
    principles: [
      "Shift from rote memorization to analytical enquiry and critical thinking",
      "Integration of Science, Technology, Engineering, Arts, and Mathematics (STEAM)",
      "Teacher development and capacity building across Bagmati Province"
    ],
    relatedInitiativeIds: ["astronova", "steam-expo", "workshops"]
  },
  {
    id: "work-mathematics",
    slug: "mathematics",
    title: "Mathematics Education & Advocacy",
    category: "mathematics",
    categoryLabel: "Mathematical Sciences",
    description: "Promoting mathematical clarity, logical reasoning, and conceptual problem-solving as foundational tools for scientific inquiry and engineering.",
    principles: [
      "Grounding abstract mathematical concepts in physical prototypes and real-world data",
      "Provincial teacher training in innovative mathematical pedagogy",
      "Building professional networks through MAN and NMS Bagmati"
    ],
    relatedInitiativeIds: ["man-bagmati", "nms-bagmati"]
  },
  {
    id: "work-science",
    slug: "science",
    title: "Young Scientist Development",
    category: "science",
    categoryLabel: "Science Advocacy",
    description: "Identifying and nurturing young scientific talent in secondary schools, preparing them for national and international research platforms.",
    principles: [
      "Cultivating scientific temperament and hypothesis-driven research",
      "Rigorous pre-competition mentorship and presentation preparation",
      "Democratizing access to scientific equipment and mentorship outside capital cities"
    ],
    relatedInitiativeIds: ["tisf-delegation", "iostc-delegation", "science-fair"]
  },
  {
    id: "work-research",
    slug: "research",
    title: "Applied Scientific Research",
    category: "research",
    categoryLabel: "Research Supervision",
    description: "Guiding students and regional researchers to formulate hypotheses, collect empirical data, and publish actionable scientific papers.",
    principles: [
      "Focus on regional environmental, agricultural, and technological challenges",
      "Structured research methodology suited for international jury defense",
      "Connecting secondary research projects with university and industry experts"
    ],
    relatedInitiativeIds: ["hric", "supervised-theses"]
  },
  {
    id: "work-innovation",
    slug: "innovation",
    title: "Prototyping & Hardware Innovation",
    category: "innovation",
    categoryLabel: "Innovation Ecosystem",
    description: "Establishing regional laboratory infrastructure in Hetauda to translate paper proposals into functional hardware and digital prototypes.",
    principles: [
      "Hands-on robotics, IoT, automation, and microcontroller testing",
      "Collaborative innovation spaces uniting students, teachers, and technical mentors",
      "Iterative design and engineering validation"
    ],
    relatedInitiativeIds: ["hric", "robotics-workshop"]
  },
  {
    id: "work-entrepreneurship",
    slug: "entrepreneurship",
    title: "Youth Enterprise & Economic Value",
    category: "entrepreneurship",
    categoryLabel: "Enterprise & Value",
    description: "Connecting research and validated prototypes with commercial viability, social enterprise models, and regional economic value.",
    principles: [
      "Evaluating technological prototypes for local utility and market readiness",
      "Fostering an entrepreneurial mindset in young researchers",
      "Creating self-sustaining feedback loops between commerce and education"
    ],
    relatedInitiativeIds: ["curiosity-to-commerce", "hric-incubation"]
  }
];
