import type { LeadershipEntity } from '../types/schema';

export const leadership: LeadershipEntity[] = [
  {
    id: "lead-astronova",
    role: "President / Chairperson",
    organization: "Astronova Foundation Nepal",
    organizationType: "Registered Educational & Scientific Foundation",
    period: "Present",
    description: "Leading nationwide and provincial initiatives promoting STEAM education, mathematical pedagogy, and youth research incubation across Nepal.",
    responsibilities: [
      "Executive board leadership and organizational vision",
      "Organizing Summer STEAM Expos and youth science fairs",
      "Mentoring national student delegations for global science competitions"
    ],
    relatedInitiativeId: "astronova",
    verified: true
  },
  {
    id: "lead-hric",
    role: "Founder & Director",
    organization: "Hetauda Research and Innovation Center (HRIC)",
    organizationType: "Regional Research & Innovation Center",
    period: "Present",
    description: "Directing Bagmati Province's regional center of excellence for technological prototyping, scientific research, and youth incubation in Hetauda.",
    responsibilities: [
      "Establishing laboratory facilities and technical mentorship desks",
      "Directing curiosity-to-commerce incubation pipelines",
      "Fostering collaboration between students, researchers, industry, and government"
    ],
    relatedInitiativeId: "hric",
    verified: true
  },
  {
    id: "lead-tisf",
    role: "Country Leader & Delegation Head",
    organization: "Taiwan International Science Fair (TISF)",
    organizationType: "International Science Competition",
    period: "Present",
    description: "Selecting, preparing, and escorting Nepal's national team of secondary school researchers to present projects at TISF Taipei.",
    responsibilities: [
      "National selection and research mentorship for student projects",
      "Guiding international jury defense and scientific presentations",
      "Cross-border academic networking with 30+ participating nations"
    ],
    relatedInitiativeId: "tisf-delegation",
    verified: true
  },
  {
    id: "lead-man",
    role: "Province Secretary",
    organization: "Mathematical Association of Nepal (MAN), Bagmati",
    organizationType: "Professional Academic Society",
    period: "Present",
    description: "Advancing mathematical education standards, teacher development programs, and pedagogical innovation across Bagmati Province.",
    responsibilities: [
      "Provincial teacher training workshops in mathematics",
      "Curriculum alignment and analytical problem-solving initiatives"
    ],
    verified: true
  },
  {
    id: "lead-nms",
    role: "Executive Member",
    organization: "Nepal Mathematical Society (NMS), Bagmati",
    organizationType: "Professional Academic Society",
    period: "Present",
    description: "Promoting higher mathematical research, conferences, and academic collaboration across Bagmati Province.",
    responsibilities: [
      "Executive governance and regional mathematical conferences",
      "Fostering student mathematical research"
    ],
    verified: true
  }
];
