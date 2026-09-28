import type { InitiativeEntity } from '../types/schema';

export const initiatives: InitiativeEntity[] = [
  {
    id: "astronova-foundation-initiative",
    slug: "astronova",
    title: "Astronova Foundation Nepal Initiatives",
    category: "astronova",
    categoryLabel: "Foundation Leadership",
    institutionId: "astronova",
    role: "President / Chairperson",
    summary: "Leading nationwide scientific foundation initiatives promoting STEAM education, mathematical pedagogy, and youth research incubation across Nepal.",
    description: "Under Kishan Bastola's leadership, Astronova Foundation Nepal organizes regional science fairs, teacher development workshops, and national student delegations to international scientific competitions.",
    location: "Nationwide & Bagmati Province, Nepal",
    startDate: "Verified Ongoing Program",
    activities: [
      "Organizer of Summer STEAM Expo & Youth Science Fairs",
      "Pioneering provincial STEM learning frameworks",
      "Mentoring young scientists for global international fairs (TISF Taiwan, IOSTC Indonesia)"
    ],
    highlights: [
      "Nationwide youth scientific advocacy",
      "Teacher training in STEAM pedagogy",
      "International delegation mentorship"
    ],
    image: "/images/astronova.png",
    externalLink: "https://astronovafoundation.com",
    verified: true
  },
  {
    id: "hric-center-initiative",
    slug: "hric",
    title: "Hetauda Research & Innovation Center (HRIC)",
    category: "hric",
    categoryLabel: "Research & Incubation Hub",
    institutionId: "hric",
    role: "Founder & Director",
    summary: "Establishing a regional center of excellence for technological prototyping, scientific research, and innovation in Hetauda, Makwanpur.",
    description: "HRIC provides regional youth, researchers, and educators with dedicated laboratories, technical mentorship, and prototype testing environments in Hetauda Sub-Metropolitan City, Makwanpur, Bagmati Province.",
    location: "Hetauda, Makwanpur, Bagmati Province, Nepal",
    startDate: "Verified Ongoing Program",
    activities: [
      "State-of-the-art incubation facilities for regional youth in Makwanpur",
      "Direct technical mentorship for prototype creation and research supervision",
      "Collaborative research projects targeting regional agricultural and technological challenges"
    ],
    highlights: [
      "Prototyping & hardware testing lab",
      "Regional innovation ecosystem model",
      "Local problem-solving through youth tech"
    ],
    image: "/images/hric.png",
    verified: true
  },
  {
    id: "tisf-delegation",
    slug: "tisf",
    title: "Taiwan International Science Fair (TISF) Delegation",
    category: "delegation",
    categoryLabel: "International Scientific Representation",
    institutionId: "astronova",
    role: "Country Leader & Delegation Head — Nepal Contingent",
    summary: "Leading Nepal's top young scientific minds to present original research projects before international scientific juries at the National Taiwan Science Education Center.",
    description: "As Country Leader for Nepal, Kishan Bastola selects, mentors, and escorts secondary student researchers to represent Nepal alongside delegates from over 30 countries at TISF in Taipei.",
    location: "Taipei, Taiwan 🇹🇼",
    startDate: "Annual Delegation",
    activities: [
      "National selection and rigorous research mentorship for Nepalese secondary students",
      "Global platform exposure alongside delegates from 30+ nations",
      "Award-winning student research presentations in engineering and environmental science"
    ],
    highlights: [
      "Official Country Leader for Nepal",
      "Global scientific jury presentations",
      "Student research excellence awards"
    ],
    image: "/images/tisf.png",
    externalLink: "https://www.ntsec.gov.tw",
    verified: true
  },
  {
    id: "iostc-delegation",
    slug: "iostc",
    title: "International Science & Technology Competition (IOSTC) Delegation",
    category: "delegation",
    categoryLabel: "International Scientific Representation",
    institutionId: "astronova",
    role: "Delegation Leader — Nepal National Team",
    summary: "Escorting and mentoring Nepalese student innovators competing in technology prototyping, applied mathematics, and STEAM solutions in Indonesia.",
    description: "Guiding young Nepalese inventors and hardware creators to compete on international stages, earning awards and fostering international academic exchange.",
    location: "Bali / Jakarta, Indonesia 🇮🇩",
    startDate: "Annual Delegation",
    activities: [
      "International awards and medals secured for youth hardware & software prototypes",
      "Bilateral academic exchange between Nepalese and Southeast Asian science institutions",
      "Systematic incubation of student projects leading up to international competition"
    ],
    highlights: [
      "International medals in technology prototyping",
      "Cross-border academic exchange",
      "Youth hardware mentorship"
    ],
    image: "/images/press2.jpeg",
    verified: true
  },
  {
    id: "summer-steam-expo",
    slug: "steam-expo",
    title: "Summer STEAM Expo Hetauda",
    category: "steam",
    categoryLabel: "STEAM Expo & Outreach",
    institutionId: "astronova",
    role: "Organizer & Chairperson",
    summary: "Organizing regional science expos bringing interactive astronomy, robotics, and physical experiments to thousands of students in Hetauda.",
    description: "Bringing experiential science exhibits, telescopes, and student prototypes directly to regional schools and community centers in Makwanpur.",
    location: "Hetauda, Makwanpur, Nepal",
    startDate: "Annual Event",
    activities: [
      "Interactive robotics and microcontroller exhibitions",
      "Astronomy observation sessions and telescope workshops",
      "Student project competitions and live demonstrations"
    ],
    highlights: [
      "Democratizing STEM education outside capital cities",
      "Over 1,000+ participating students and teachers",
      "Hands-on scientific discovery"
    ],
    image: "/images/camp.png",
    verified: true
  },
  {
    id: "hric-robotics-workshop",
    slug: "workshops",
    title: "HRIC Prototyping & Robotics Workshop",
    category: "workshops",
    categoryLabel: "Technical Workshops",
    institutionId: "hric",
    role: "Director & Workshop Mentor",
    summary: "Conducting intensive incubation workshops on microcontrollers, robotics, artificial intelligence, and automation at HRIC Hetauda.",
    description: "Providing hands-on engineering training where young researchers build physical prototypes, program micro-controllers, and test working solutions.",
    location: "HRIC Prototyping Lab, Hetauda, Nepal",
    startDate: "Recurring Workshops",
    activities: [
      "Hardware micro-controller assembly and sensor integration",
      "Software programming and automation testing",
      "Project incubation for regional science competitions"
    ],
    highlights: [
      "Practical hardware skills building",
      "Free community robotics workshops",
      "Prototype testing and iteration"
    ],
    image: "/images/workshop.jpg",
    verified: true
  }
];
