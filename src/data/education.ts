import type { EducationEntity } from '../types/schema';

export const education: EducationEntity[] = [
  {
    id: "edu-masters-math",
    degree: { en: "Master's Degree in Mathematics (M.Sc. / M.A.)", ne: "गणित विषयमा स्नातकोत्तर उपाधि (M.Sc. / M.A.)" },
    field: { en: "Mathematics (Pure & Applied)", ne: "गणित (सैद्धान्तिक तथा व्यावहारिक)" },
    institution: { en: "Tribhuvan University", ne: "त्रिभुवन विश्वविद्यालय" },
    location: { en: "Nepal", ne: "नेपाल" },
    year: "Verified Academic Record",
    verified: true,
    description: { en: "Advanced mathematical study focusing on foundational logic, analytical problem solving, and pedagogical applications.", ne: "आधारभूत तर्क, विश्लेषणात्मक समस्या समाधान र शिक्षण अनुप्रयोगहरूमा केन्द्रित उच्च गणितीय अध्ययन।" }
  }
];
