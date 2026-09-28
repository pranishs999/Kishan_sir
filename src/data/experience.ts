import type { ExperienceEntity } from '../types/schema';

export const experience: ExperienceEntity[] = [
  {
    id: "exp-principal",
    position: "Former School Principal",
    organization: "Institutional Secondary School",
    startDate: "Verified Record",
    endDate: "Past",
    location: "Bagmati Province, Nepal",
    description: "Executive leadership over secondary academic administration, teacher capacity development, and institutional governance.",
    responsibilities: [
      "School-wide academic strategy and curriculum oversight",
      "Teacher training and pedagogical modernization",
      "Student development programs and STEM orientation"
    ],
    achievements: [
      "Pioneered project-based learning initiatives in secondary education",
      "Expanded experiential STEM science modules"
    ],
    verified: true
  },
  {
    id: "exp-campus-chief",
    position: "Former Campus Chief",
    organization: "Narayani College",
    startDate: "Verified Record",
    endDate: "Past",
    location: "Hetauda, Makwanpur, Nepal",
    description: "Chief executive management of higher education campus operations, faculty alignment, and academic programs.",
    responsibilities: [
      "Higher education campus governance and academic standards",
      "Faculty recruitment and department coordination",
      "Institutional expansion and research initiatives"
    ],
    achievements: [
      "Strengthened higher mathematics and academic research culture",
      "Built institutional ties with regional industries and academic bodies"
    ],
    verified: true
  }
];
