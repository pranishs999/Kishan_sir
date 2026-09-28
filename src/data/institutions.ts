import type { InstitutionEntity } from '../types/schema';

export const institutions: InstitutionEntity[] = [
  {
    id: "astronova",
    name: "Astronova Foundation Nepal",
    type: "Registered Educational & Scientific Foundation",
    role: "President / Chairperson",
    establishedNotice: "REGISTERED EDUCATIONAL & SCIENTIFIC FOUNDATION · NEPAL",
    description: "Astronova Foundation Nepal serves as an institutional umbrella for experiential learning, developing creative, innovative, and entrepreneurial mindsets in students nationwide.",
    mission: "To systematically connect Mathematics → Science → Technology → Innovation → Research → Entrepreneurship, emphasizing practical learning, scientific thinking, creativity, problem-solving, and youth development.",
    governance: "Executive Board Leadership, Provincial Coordination Councils, and Academic Advisory Committees.",
    keyPillars: [
      "Summer STEAM Expo & Student Science Fairs",
      "STEM Pedagogy & Teacher Capacity Building",
      "Youth Scientific Mentorship for Global Delegations (TISF & IOSTC)"
    ],
    impactSummary: "Directly impacts schools, educators, and thousands of students across Bagmati Province and nationwide through structured STEM modules and research advocacy.",
    coverImage: "/images/astronova.png",
    websiteUrl: "https://astronovafoundation.com",
    verified: true
  },
  {
    id: "hric",
    name: "Hetauda Research & Innovation Center (HRIC)",
    type: "Regional Innovation & Research Hub",
    role: "Founder & Director",
    establishedNotice: "REGIONAL INNOVATION & RESEARCH HUB · HETAUDA, MAKWANPUR, NEPAL",
    description: "HRIC is a regional platform for science, technology, research, and innovation in Hetauda, conceived as an integrated ecosystem connecting Students, Teachers, Mentors, Researchers, Universities, Government, Industry, and Entrepreneurs.",
    mission: "To serve as Bagmati Province's premier research and prototyping facility in Hetauda, bridging academic study with real-world innovation, hardware experimentation, and enterprise development.",
    governance: "Directorship, Research Council, Industry Partnership Advisory, and Student Mentorship Desk.",
    keyPillars: [
      "Prototyping & Hardware Testing Facilities in Hetauda",
      "Curiosity-to-Commerce Incubation Pipeline",
      "Regional Industry, Agricultural & Technological Problem Solving"
    ],
    impactSummary: "Provides localized research infrastructure outside capital cities, empowering Makwanpur and Bagmati talent to solve local challenges through technology.",
    coverImage: "/images/hric.png",
    websiteUrl: null,
    verified: true
  }
];
