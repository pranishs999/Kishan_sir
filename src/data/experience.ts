import type { ExperienceEntity } from '../types/schema';

export const experience: ExperienceEntity[] = [
  {
    id: "exp-principal",
    position: { en: "Former School Principal", ne: "पूर्व विद्यालय प्रिन्सिपल" },
    organization: { en: "Institutional Secondary School", ne: "संस्थागत माध्यमिक विद्यालय" },
    startDate: "Verified Record",
    endDate: "Past",
    location: { en: "Bagmati Province, Nepal", ne: "बागमती प्रदेश, नेपाल" },
    description: { en: "Executive leadership over secondary academic administration, teacher capacity development, and institutional governance.", ne: "माध्यमिक शैक्षिक प्रशासन, शिक्षक क्षमता विकास र संस्थागत सञ्चालनमा कार्यकारी नेतृत्व।" },
    responsibilities: [
      { en: "School-wide academic strategy and curriculum oversight", ne: "विद्यालयस्तरीय प्राज्ञिक रणनीति र पाठ्यक्रम सुपरिवेक्षण" },
      { en: "Teacher training and pedagogical modernization", ne: "शिक्षक तालिम र शिक्षण पद्धतिको आधुनिकीकरण" },
      { en: "Student development programs and STEM orientation", ne: "विद्यार्थी विकास कार्यक्रम र STEM अभिमूखीकरण" }
    ],
    achievements: [
      { en: "Pioneered project-based learning initiatives in secondary education", ne: "माध्यमिक शिक्षामा परियोजनामा आधारित सिकाइ पहलहरूको सुरुवात" },
      { en: "Expanded experiential STEM science modules", ne: "व्यावहारिक STEM विज्ञान मोड्युलहरूको विस्तार" }
    ],
    verified: true
  },
  {
    id: "exp-campus-chief",
    position: { en: "Former Campus Chief", ne: "पूर्व क्याम्पस प्रमुख" },
    organization: { en: "Narayani College", ne: "नारायणी कलेज" },
    startDate: "Verified Record",
    endDate: "Past",
    location: { en: "Hetauda, Makwanpur, Nepal", ne: "हेटौंडा, मकवानपुर, नेपाल" },
    description: { en: "Chief executive management of higher education campus operations, faculty alignment, and academic programs.", ne: "उच्च शिक्षा क्याम्पस सञ्चालन, प्राध्यापक व्यवस्थापन र प्राज्ञिक कार्यक्रमहरूको कार्यकारी व्यवस्थापन।" },
    responsibilities: [
      { en: "Higher education campus governance and academic standards", ne: "उच्च शिक्षा क्याम्पस सञ्चालन र प्राज्ञिक स्तर कायम" },
      { en: "Faculty recruitment and department coordination", ne: "प्राध्यापक पदपूर्ति र विभाग समन्वय" },
      { en: "Institutional expansion and research initiatives", ne: "संस्थागत विस्तार र अनुसन्धान पहलहरू" }
    ],
    achievements: [
      { en: "Strengthened higher mathematics and academic research culture", ne: "उच्च गणित र प्राज्ञिक अनुसन्धान संस्कृतिलाई सुदृढ बनाएको" },
      { en: "Built institutional ties with regional industries and academic bodies", ne: "क्षेत्रीय उद्योग र प्राज्ञिक निकायहरूसँग संस्थागत सम्बन्ध विस्तार" }
    ],
    verified: true
  }
];
