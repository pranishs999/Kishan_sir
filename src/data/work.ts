import type { WorkEntity } from '../types/schema';

export const work: WorkEntity[] = [
  {
    id: "work-education",
    slug: "education",
    title: { en: "STEM & STEAM Education", ne: "STEM तथा STEAM शिक्षा" },
    category: "education",
    categoryLabel: { en: "Education & Pedagogy", ne: "शिक्षा तथा शिक्षण विधि" },
    description: {
      en: "Modernizing educational frameworks to bridge theoretical classroom instruction with hands-on, experiential learning across secondary and higher education.",
      ne: "कक्षाकोठाको सैद्धान्तिक शिक्षणलाई प्रयोगात्मक र व्यावहारिक सिकाइसँग जोड्न माध्यमिक तथा उच्च शिक्षामा आधुनिक शैक्षिक रूपरेखाको विकास।"
    },
    principles: [
      { en: "Shift from rote memorization to analytical enquiry and critical thinking", ne: "गोकन्ते विद्याबाट विश्लेषणात्मक जिज्ञासा र समालोचनात्मक सोचतर्फ रूपान्तरण" },
      { en: "Integration of Science, Technology, Engineering, Arts, and Mathematics (STEAM)", ne: "विज्ञान, प्रविधि, इन्जिनियरिङ, कला र गणित (STEAM) को एकीकृत सिकाइ" },
      { en: "Teacher development and capacity building across Bagmati Province", ne: "बागमती प्रदेशभर शिक्षक विकास तथा क्षमता अभिवृद्धि" }
    ],
    relatedInitiativeIds: ["astronova", "steam-expo", "workshops"]
  },
  {
    id: "work-mathematics",
    slug: "mathematics",
    title: { en: "Mathematics Education & Advocacy", ne: "गणित शिक्षा तथा प्रवर्द्धन" },
    category: "mathematics",
    categoryLabel: { en: "Mathematical Sciences", ne: "गणितीय विज्ञान" },
    description: {
      en: "Promoting mathematical clarity, logical reasoning, and conceptual problem-solving as foundational tools for scientific inquiry and engineering.",
      ne: "वैज्ञानिक अनुसन्धान र इन्जिनियरिङका लागि आधारभूत औजारको रूपमा गणितीय स्पष्टता, तार्किक चिन्तन र समस्या समाधान प्रवर्द्धन।"
    },
    principles: [
      { en: "Grounding abstract mathematical concepts in physical prototypes and real-world data", ne: "अमूर्त गणितीय अवधारणालाई भौतिक नमुना र वास्तविक तथ्यांकमा आधारित बनाउने" },
      { en: "Provincial teacher training in innovative mathematical pedagogy", ne: "अभिनव गणितीय शिक्षण विधिमा प्रादेशिक शिक्षक तालिम" },
      { en: "Building professional networks through MAN and NMS Bagmati", ne: "MAN र NMS बागमतीमार्फत पेशागत सञ्जाल निर्माण" }
    ],
    relatedInitiativeIds: ["man-bagmati", "nms-bagmati"]
  },
  {
    id: "work-science",
    slug: "science",
    title: { en: "Young Scientist Development", ne: "युवा वैज्ञानिक विकास" },
    category: "science",
    categoryLabel: { en: "Science Advocacy", ne: "विज्ञान प्रवर्द्धन" },
    description: {
      en: "Identifying and nurturing young scientific talent in secondary schools, preparing them for national and international research platforms.",
      ne: "माध्यमिक विद्यालयहरूमा युवा वैज्ञानिक प्रतिभाको पहिचान र प्रवर्द्धन गर्दै राष्ट्रिय तथा अन्तर्राष्ट्रिय अनुसन्धान मञ्चका लागि तयार पार्ने।"
    },
    principles: [
      { en: "Cultivating scientific temperament and hypothesis-driven research", ne: "वैज्ञानिक संस्कार र परिकल्पनामा आधारित अनुसन्धानको विकास" },
      { en: "Rigorous pre-competition mentorship and presentation preparation", ne: "प्रतियोगितापूर्व गहन मेन्टरशिप र प्रस्तुतीकरण तयारी" },
      { en: "Democratizing access to scientific equipment and mentorship outside capital cities", ne: "राजधानी बाहिर पनि वैज्ञानिक उपकरण र मेन्टरशिपमा पहुँच विस्तार" }
    ],
    relatedInitiativeIds: ["tisf-delegation", "iostc-delegation", "science-fair"]
  },
  {
    id: "work-research",
    slug: "research",
    title: { en: "Applied Scientific Research", ne: "व्यावहारिक वैज्ञानिक अनुसन्धान" },
    category: "research",
    categoryLabel: { en: "Research Supervision", ne: "अनुसन्धान सुपरिवेक्षण" },
    description: {
      en: "Guiding students and regional researchers to formulate hypotheses, collect empirical data, and publish actionable scientific papers.",
      ne: "विद्यार्थी तथा क्षेत्रीय अनुसन्धानकर्ताहरूलाई परिकल्पना निर्माण, तथ्यांक संकलन र उपयोगी वैज्ञानिक पत्र प्रकाशनमा मार्गदर्शन।"
    },
    principles: [
      { en: "Focus on regional environmental, agricultural, and technological challenges", ne: "क्षेत्रीय वातावरणीय, कृषि र प्रविधिक चुनौतीहरूमा ध्यान केन्द्रित" },
      { en: "Structured research methodology suited for international jury defense", ne: "अन्तर्राष्ट्रिय निर्णायक मण्डलसमक्ष प्रस्तुतीकरणयोग्य व्यवस्थित अनुसन्धान विधि" },
      { en: "Connecting secondary research projects with university and industry experts", ne: "विद्यालय अनुसन्धान आयोजनाहरूलाई विश्वविद्यालय र उद्योग विज्ञहरूसँग जोड्ने" }
    ],
    relatedInitiativeIds: ["hric", "supervised-theses"]
  },
  {
    id: "work-innovation",
    slug: "innovation",
    title: { en: "Prototyping & Hardware Innovation", ne: "प्रोटोटाइपिङ तथा हार्डवेयर नवप्रवर्तन" },
    category: "innovation",
    categoryLabel: { en: "Innovation Ecosystem", ne: "नवप्रवर्तन इकोसिस्टम" },
    description: {
      en: "Establishing regional laboratory infrastructure in Hetauda to translate paper proposals into functional hardware and digital prototypes.",
      ne: "कागजी प्रस्तावहरूलाई कार्यमूलक हार्डवेयर र डिजिटल नमुनामा रूपान्तरण गर्न हेटौंडामा क्षेत्रीय प्रयोगशाला पूर्वाधार स्थापना।"
    },
    principles: [
      { en: "Hands-on robotics, IoT, automation, and microcontroller testing", ne: "रोबोटिक्स, IoT, अटोमेसन र माइक्रोकन्ट्रोलर परीक्षणको व्यावहारिक अभ्यास" },
      { en: "Collaborative innovation spaces uniting students, teachers, and technical mentors", ne: "विद्यार्थी, शिक्षक र प्राविधिक मेन्टरहरूलाई जोड्ने सामूहिक नवप्रवर्तन स्थल" },
      { en: "Iterative design and engineering validation", ne: "निरन्तर ढाँचा सुधार र इन्जिनियरिङ प्रमाणीकरण" }
    ],
    relatedInitiativeIds: ["hric", "robotics-workshop"]
  },
  {
    id: "work-entrepreneurship",
    slug: "entrepreneurship",
    title: { en: "Youth Enterprise & Economic Value", ne: "युवा उद्यमशीलता तथा आर्थिक मूल्य" },
    category: "entrepreneurship",
    categoryLabel: { en: "Enterprise & Value", ne: "उद्यमशीलता तथा मूल्य" },
    description: {
      en: "Connecting research and validated prototypes with commercial viability, social enterprise models, and regional economic value.",
      ne: "अनुसन्धान र प्रमाणित नमुनाहरूलाई व्यावसायिक उपयोगिता, सामाजिक उद्यम मोडल र क्षेत्रीय आर्थिक मूल्यसँग जोड्ने।"
    },
    principles: [
      { en: "Evaluating technological prototypes for local utility and market readiness", ne: "स्थानीय उपयोगिता र बजार तयारीका लागि प्राविधिक नमुनाको मूल्याङ्कन" },
      { en: "Fostering an entrepreneurial mindset in young researchers", ne: "युवा अनुसन्धानकर्ताहरूमा उद्यमशील सोचको विकास" },
      { en: "Creating self-sustaining feedback loops between commerce and education", ne: "व्यापार र शिक्षाबीच आत्मनिर्भर निरन्तर अन्तरक्रियात्मक सञ्जाल निर्माण" }
    ],
    relatedInitiativeIds: ["curiosity-to-commerce", "hric-incubation"]
  }
];
