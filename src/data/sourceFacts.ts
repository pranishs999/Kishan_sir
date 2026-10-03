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
  SupportVisionData
} from '../types/portfolio';

import type {
  PersonEntity,
  EducationEntity,
  ExperienceEntity,
  LeadershipEntity,
  WorkEntity,
  InstitutionEntity as InstitutionSchemaEntity,
  InitiativeEntity,
  EcosystemEntity,
  ArticleEntity,
  MediaEntity,
  AchievementEntity,
  GalleryEntity,
  ContactEntity
} from '../types/schema';

// =====================================================
// PERSON
// =====================================================

export const person: PersonEntity = {
  fullName: {
    en: "Kishan Bastola",
    ne: "किशन बास्तोला"
  },
  nepaliName: "नैत्र प्रसाद बास्तोला (किशन बास्तोला)",
  professionalTitle: {
    en: "Educationist | Mathematician | Research & Innovation Ecosystem Builder",
    ne: "शिक्षाविद् | गणितज्ञ | अनुसन्धान तथा नवप्रवर्तन इकोसिस्टम निर्माता"
  },
  tagline: {
    en: "From Curiosity to Commerce",
    ne: "जिज्ञासादेखि व्यापारसम्म"
  },
  shortBiography: {
    en: "Kishan Bastola is an educationist, mathematician and Research & Innovation Ecosystem Builder with 18 years of experience in education. He holds a Master's Degree in Mathematics and has served as a School Principal and Campus Chief. He has served as Country Leader for the Taiwan International Science Fair (TISF), Province Secretary of the Mathematical Association of Nepal (MAN), Bagmati, and Executive Member of the Nepal Mathematical Society (NMS), Bagmati. He is the President of Astronova Foundation Nepal and the Founder & Director of Hetauda Research and Innovation Center (HRIC).",
    ne: "किशन बास्तोला १८ वर्षको शैक्षिक अनुभव भएका शिक्षाविद्, गणितज्ञ र अनुसन्धान तथा नवप्रवर्तन इकोसिस्टम निर्माता हुन्। उनीसँग गणित विषयमा स्नातकोत्तर (M.Sc.) उपाधि छ र उनले प्रिन्सिपल तथा क्याम्पस प्रमुखको रूपमा नेतृत्वदायी भूमिका निर्वाह गरिसकेका छन्। उनले ताइवान अन्तर्राष्ट्रिय विज्ञान प्रदर्शनी (TISF) को कन्ट्री लिडर, गणित समाज नेपाल (MAN) बागमती प्रदेशको सचिव, र नेपाल म्याथमेटिकल सोसाइटी (NMS) बागमतीको कार्यकारिणी सदस्यको रूपमा सेवा गरेका छन्। उनी एष्ट्रोनोभा फाउण्डेशन नेपालका अध्यक्ष तथा हेटौंडा रिसर्च एण्ड इनोभेसन सेन्टर (HRIC) का संस्थापक तथा निर्देशक हुन्।"
  },
  biography: {
    en: [
      "Kishan Bastola (Netra Prasad Bastola) is an Educationist, Mathematician, STEM Advocate, and Research & Innovation Ecosystem Builder with over 18 years of executive leadership in Nepal's educational sector. Holding a Master's Degree in Mathematics, his work seamlessly integrates academic rigor with systemic institution building.",
      "Having served as School Principal and Campus Chief, he currently leads nationwide and provincial initiatives as Chairperson of Astronova Foundation Nepal, Secretary of the Mathematical Association of Nepal (MAN) Bagmati Province, Executive Member of the Nepal Mathematical Society (NMS) Bagmati Province, and Founder & Director of the Hetauda Research & Innovation Center (HRIC).",
      "On international platforms, he serves as Country Leader for Nepal at global scientific competitions including the Taiwan International Science Fair (TISF, Taiwan) and the International Science & Technology Competition (IOSTC, Indonesia), guiding young Nepalese researchers to international recognition."
    ],
    ne: [
      "किशन बास्तोला (नेत्र प्रसाद बास्तोला) नेपालको शिक्षा क्षेत्रमा १८ वर्षभन्दा बढीको कार्यकारी नेतृत्व अनुभव बोकेका शिक्षाविद्, गणितज्ञ, STEM अभियन्ता र अनुसन्धान तथा नवप्रवर्तन इकोसिस्टम निर्माता हुन्। गणितमा स्नातकोत्तर उपाधि हासिल गरेका उनको कार्यले प्राज्ञिक गम्भीरता र संस्थागत संरचना निर्माणलाई सहज रूपमा जोड्दछ।",
      "प्रिन्सिपल तथा क्याम्पस प्रमुखको रूपमा सेवा गरिसकेका उनले हाल एष्ट्रोनोभा फाउण्डेशन नेपालको अध्यक्ष, गणित समाज नेपाल (MAN) बागमती प्रदेशको सचिव, नेपाल म्याथमेटिकल सोसाइटी (NMS) बागमती प्रदेशको कार्यकारिणी सदस्य र हेटौंडा रिसर्च एण्ड इनोभेसन सेन्टर (HRIC) को संस्थापक तथा निर्देशकको रूपमा राष्ट्रिय तथा प्रादेशिक पहलहरूको नेतृत्व गरिरहेका छन्।",
      "अन्तर्राष्ट्रिय मञ्चहरूमा उनले ताइवान अन्तर्राष्ट्रिय विज्ञान प्रदर्शनी (TISF, ताइवान) र अन्तर्राष्ट्रिय विज्ञान तथा प्रविधि प्रतियोगिता (IOSTC, इन्डोनेसिया) लगायतका विश्वव्यापी वैज्ञानिक प्रतियोगिताहरूमा नेपालको कन्ट्री लिडरको रूपमा सेवा गर्दै युवा नेपाली अनुसन्धानकर्ताहरूलाई अन्तर्राष्ट्रिय पहिचान दिलाउन मार्गदर्शन गरिरहेका छन्।"
    ]
  },
  currentFocus: [
    { en: "Education", ne: "शिक्षा" },
    { en: "Mathematics", ne: "गणित" },
    { en: "Science", ne: "विज्ञान" },
    { en: "Research", ne: "अनुसन्धान" },
    { en: "Innovation", ne: "नवप्रवर्तन" },
    { en: "STEAM", ne: "STEAM शिक्षा" },
    { en: "Young Scientist Development", ne: "युवा वैज्ञानिक विकास" },
    { en: "Mentorship", ne: "मार्गदर्शन तथा मेन्टरशिप" },
    { en: "Technology", ne: "प्रविधि" },
    { en: "Entrepreneurship", ne: "उद्यमशीलता" },
    { en: "Ecosystem Development", ne: "इकोसिस्टम विकास" }
  ],
  profileImage: "/images/hero.png",
  professionalIdentity: [
    {
      title: { en: "Educationist", ne: "शिक्षाविद्" },
      description: { en: "18 years in education, including leadership as School Principal and Campus Chief.", ne: "प्रिन्सिपल र क्याम्पस प्रमुखको रूपमा १८ वर्षको शैक्षिक नेतृत्व अनुभव।" }
    },
    {
      title: { en: "Mathematician", ne: "गणितज्ञ" },
      description: { en: "Master's Degree in Mathematics; active in mathematics education and mathematical organizations.", ne: "गणितमा स्नातकोत्तर; गणित शिक्षा र पेशागत गणितीय संस्थाहरूमा सक्रिय योगदान।" }
    },
    {
      title: { en: "Science & Research Advocate", ne: "विज्ञान तथा अनुसन्धान अभियन्ता" },
      description: { en: "Developing scientific thinking, research culture, and young scientific talent.", ne: "वैज्ञानिक सोच, अनुसन्धान संस्कृति र युवा वैज्ञानिक प्रतिभाको विकास।" }
    },
    {
      title: { en: "Innovation Ecosystem Builder", ne: "नवप्रवर्तन इकोसिस्टम निर्माता" },
      description: { en: "Developing HRIC and the HRIC Scientific Ecosystem.", ne: "HRIC र HRIC वैज्ञानिक इकोसिस्टमको पूर्वाधार निर्माण।" }
    },
    {
      title: { en: "Youth Development Leader", ne: "युवा विकास नेता" },
      description: { en: "Creating pathways for students to learn, experiment, undertake projects, access mentors, and discover potential.", ne: "विद्यार्थीहरूलाई सिक्न, प्रयोग गर्न, आयोजना सञ्चालन गर्न र सम्भावना पहिल्याउन मार्गदर्शन।" }
    },
    {
      title: { en: "Entrepreneurship & Economic Value Advocate", ne: "उद्यमशीलता तथा आर्थिक मूल्य अभियन्ता" },
      description: { en: "Connecting research and innovation with enterprise, market application, and commerce.", ne: "अनुसन्धान र नवप्रवर्तनलाई उद्यमशीलता, बजार प्रयोग र व्यापारसँग जोड्ने कार्य।" }
    }
  ]
};

// =====================================================
// EDUCATION
// =====================================================

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

// =====================================================
// EXPERIENCE
// =====================================================

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

// =====================================================
// LEADERSHIP
// =====================================================

export const leadership: LeadershipEntity[] = [
  {
    id: "lead-astronova",
    role: { en: "President / Chairperson", ne: "अध्यक्ष" },
    organization: { en: "Astronova Foundation Nepal", ne: "एष्ट्रोनोभा फाउण्डेशन नेपाल" },
    organizationType: { en: "Registered Educational & Scientific Foundation", ne: "दर्ताकृत शैक्षिक तथा वैज्ञानिक फाउण्डेशन" },
    period: "Present",
    description: { en: "Leading nationwide and provincial initiatives promoting STEAM education, mathematical pedagogy, and youth research incubation across Nepal.", ne: "नेपालभर STEAM शिक्षा, गणितीय शिक्षण विधि र युवा अनुसन्धान प्रवर्द्धन गर्ने राष्ट्रिय तथा प्रादेशिक पहलहरूको नेतृत्व।" },
    responsibilities: [
      { en: "Executive board leadership and organizational vision", ne: "कार्यकारिणी बोर्ड नेतृत्व र संस्थागत दृष्टि" },
      { en: "Organizing Summer STEAM Expos and youth science fairs", ne: "समर STEAM एक्सपो तथा युवा विज्ञान प्रदर्शनी सञ्चालन" },
      { en: "Mentoring national student delegations for global science competitions", ne: "अन्तर्राष्ट्रिय विज्ञान प्रतियोगिताका लागि राष्ट्रिय विद्यार्थी प्रतिनिधिमण्डलको मेन्टरशिप" }
    ],
    relatedInitiativeId: "astronova",
    verified: true
  },
  {
    id: "lead-hric",
    role: { en: "Founder & Director", ne: "संस्थापक तथा निर्देशक" },
    organization: { en: "Hetauda Research and Innovation Center (HRIC)", ne: "हेटौंडा रिसर्च एण्ड इनोभेसन सेन्टर (HRIC)" },
    organizationType: { en: "Regional Research & Innovation Center", ne: "क्षेत्रीय अनुसन्धान तथा नवप्रवर्तन केन्द्र" },
    period: "Present",
    description: { en: "Directing Bagmati Province's regional center of excellence for technological prototyping, scientific research, and youth incubation in Hetauda.", ne: "हेटौंडामा बागमती प्रदेशको प्राविधिक प्रोटोटाइपिङ, वैज्ञानिक अनुसन्धान र युवा इन्क्युबेशनको उत्कृष्ट क्षेत्रीय केन्द्रको निर्देशन।" },
    responsibilities: [
      { en: "Establishing laboratory facilities and technical mentorship desks", ne: "प्रयोगशाला सुविधा र प्राविधिक मेन्टरशिप डेस्क स्थापना" },
      { en: "Directing curiosity-to-commerce incubation pipelines", ne: "जिज्ञासादेखि व्यापारसम्मको इन्क्युबेशन रूपरेखाको निर्देशन" },
      { en: "Fostering collaboration between students, researchers, industry, and government", ne: "विद्यार्थी, अनुसन्धानकर्ता, उद्योग र सरकारबीच सहकार्य प्रवर्द्धन" }
    ],
    relatedInitiativeId: "hric",
    verified: true
  },
  {
    id: "lead-tisf",
    role: { en: "Country Leader & Delegation Head", ne: "कन्ट्री लिडर तथा प्रतिनिधिमण्डल प्रमुख" },
    organization: { en: "Taiwan International Science Fair (TISF)", ne: "ताइवान अन्तर्राष्ट्रिय विज्ञान प्रदर्शनी (TISF)" },
    organizationType: { en: "International Science Competition", ne: "अन्तर्राष्ट्रिय विज्ञान प्रतियोगिता" },
    period: "Present",
    description: { en: "Selecting, preparing, and escorting Nepal's national team of secondary school researchers to present projects at TISF Taipei.", ne: "TISF ताइपेईमा अनुसन्धान प्रस्तुत गर्न नेपालको राष्ट्रिय टोलीको छनोट, तयारी र नेतृत्व।" },
    responsibilities: [
      { en: "National selection and research mentorship for student projects", ne: "विद्यार्थी आयोजनाका लागि राष्ट्रिय छनोट र अनुसन्धान मेन्टरशिप" },
      { en: "Guiding international jury defense and scientific presentations", ne: "अन्तर्राष्ट्रिय निर्णायक मण्डलसमक्ष प्रस्तुतीकरण र वैज्ञानिक बचाउ मार्गदर्शन" },
      { en: "Cross-border academic networking with 30+ participating nations", ne: "३० भन्दा बढी सहभागी राष्ट्रहरूसँग अन्तर्राष्ट्रिय प्राज्ञिक सम्बन्ध विस्तार" }
    ],
    relatedInitiativeId: "tisf-delegation",
    verified: true
  },
  {
    id: "lead-man",
    role: { en: "Province Secretary", ne: "प्रदेश सचिव" },
    organization: { en: "Mathematical Association of Nepal (MAN), Bagmati", ne: "गणित समाज नेपाल (MAN) बागमती" },
    organizationType: { en: "Professional Academic Society", ne: "पेशागत प्राज्ञिक समाज" },
    period: "Present",
    description: { en: "Advancing mathematical education standards, teacher development programs, and pedagogical innovation across Bagmati Province.", ne: "बागमती प्रदेशभर गणित शिक्षाको स्तर, शिक्षक विकास कार्यक्रम र शिक्षण नवप्रवर्तन प्रवर्द्धन।" },
    responsibilities: [
      { en: "Provincial teacher training workshops in mathematics", ne: "गणितमा प्रादेशिक शिक्षक तालिम कार्यशालाहरू" },
      { en: "Curriculum alignment and analytical problem-solving initiatives", ne: "पाठ्यक्रम संरेखण र विश्लेषणात्मक समस्या समाधान पहलहरू" }
    ],
    verified: true
  },
  {
    id: "lead-nms",
    role: { en: "Executive Member", ne: "कार्यकारिणी सदस्य" },
    organization: { en: "Nepal Mathematical Society (NMS), Bagmati", ne: "नेपाल म्याथमेटिकल सोसाइटी (NMS) बागमती" },
    organizationType: { en: "Professional Academic Society", ne: "पेशागत प्राज्ञिक समाज" },
    period: "Present",
    description: { en: "Promoting higher mathematical research, conferences, and academic collaboration across Bagmati Province.", ne: "बागमती प्रदेशभर उच्च गणितीय अनुसन्धान, सम्मेलन र प्राज्ञिक सहकार्य प्रवर्द्धन।" },
    responsibilities: [
      { en: "Executive governance and regional mathematical conferences", ne: "कार्यकारी सञ्चालन र क्षेत्रीय गणितीय सम्मेलनहरू" },
      { en: "Fostering student mathematical research", ne: "विद्यार्थी गणितीय अनुसन्धान प्रवर्द्धन" }
    ],
    verified: true
  }
];

// =====================================================
// WORK
// =====================================================

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

// =====================================================
// INSTITUTIONS
// =====================================================

export const institutions: InstitutionSchemaEntity[] = [
  {
    id: "astronova",
    name: {
      en: "Astronova Foundation Nepal",
      ne: "एष्ट्रोनोभा फाउण्डेशन नेपाल"
    },
    type: {
      en: "Registered Educational & Scientific Foundation",
      ne: "दर्ताकृत शैक्षिक तथा वैज्ञानिक फाउण्डेशन"
    },
    role: {
      en: "President / Chairperson",
      ne: "अध्यक्ष"
    },
    establishedNotice: {
      en: "REGISTERED EDUCATIONAL & SCIENTIFIC FOUNDATION · NEPAL",
      ne: "दर्ताकृत शैक्षिक तथा वैज्ञानिक संस्था · नेपाल"
    },
    description: {
      en: "Astronova Foundation Nepal serves as an institutional umbrella for experiential learning, developing creative, innovative, and entrepreneurial mindsets in students nationwide.",
      ne: "एष्ट्रोनोभा फाउण्डेशन नेपालले देशभरका विद्यार्थीहरूमा सिर्जनात्मक, नवप्रवर्तनकारी र उद्यमशील सोचको विकास गर्दै व्यावहारिक सिकाइका लागि संस्थागत छाताको रूपमा कार्य गर्दछ।"
    },
    mission: {
      en: "To systematically connect Mathematics → Science → Technology → Innovation → Research → Entrepreneurship, emphasizing practical learning, scientific thinking, creativity, problem-solving, and youth development.",
      ne: "व्यावहारिक सिकाइ, वैज्ञानिक सोच, सिर्जनशीलता, समस्या समाधान र युवा विकासलाई जोड दिँदै गणित → विज्ञान → प्रविधि → नवप्रवर्तन → अनुसन्धान → उद्यमशीलतालाई प्रणालीगत रूपमा जोड्ने।"
    },
    governance: {
      en: "Executive Board Leadership, Provincial Coordination Councils, and Academic Advisory Committees.",
      ne: "कार्यकारिणी समिति नेतृत्व, प्रादेशिक समन्वय परिषद् र प्राज्ञिक सल्लाहकार समिति।"
    },
    keyPillars: [
      { en: "Summer STEAM Expo & Student Science Fairs", ne: "समर STEAM एक्सपो तथा विद्यार्थी विज्ञान प्रदर्शनी" },
      { en: "STEM Pedagogy & Teacher Capacity Building", ne: "STEM शिक्षण विधि तथा शिक्षक क्षमता अभिवृद्धि" },
      { en: "Youth Scientific Mentorship for Global Delegations (TISF & IOSTC)", ne: "अन्तर्राष्ट्रिय प्रतिनिधिमण्डल (TISF र IOSTC) का लागि युवा वैज्ञानिक मेन्टरशिप" }
    ],
    impactSummary: {
      en: "Directly impacts schools, educators, and thousands of students across Bagmati Province and nationwide through structured STEM modules and research advocacy.",
      ne: "व्यवस्थित STEM मोड्युल र अनुसन्धान प्रवर्द्धनमार्फत बागमती प्रदेश र देशभरका हजारौं विद्यार्थी, शिक्षक र विद्यालयहरूमा प्रत्यक्ष प्रभाव।"
    },
    coverImage: "/images/astronova.png",
    websiteUrl: "https://astronovafoundation.com",
    verified: true
  },
  {
    id: "hric",
    name: {
      en: "Hetauda Research & Innovation Center (HRIC)",
      ne: "हेटौंडा रिसर्च एण्ड इनोभेसन सेन्टर (HRIC)"
    },
    type: {
      en: "Regional Innovation & Research Hub",
      ne: "क्षेत्रीय नवप्रवर्तन तथा अनुसन्धान केन्द्र"
    },
    role: {
      en: "Founder & Director",
      ne: "संस्थापक तथा निर्देशक"
    },
    establishedNotice: {
      en: "REGIONAL INNOVATION & RESEARCH HUB · HETAUDA, MAKWANPUR, NEPAL",
      ne: "क्षेत्रीय नवप्रवर्तन तथा अनुसन्धान केन्द्र · हेटौंडा, मकवानपुर, नेपाल"
    },
    description: {
      en: "HRIC is a regional platform for science, technology, research, and innovation in Hetauda, conceived as an integrated ecosystem connecting Students, Teachers, Mentors, Researchers, Universities, Government, Industry, and Entrepreneurs.",
      ne: "HRIC हेटौंडामा विज्ञान, प्रविधि, अनुसन्धान र नवप्रवर्तनका लागि एक क्षेत्रीय मञ्च हो, जसले विद्यार्थी, शिक्षक, मेन्टर, अनुसन्धानकर्ता, विश्वविद्यालय, सरकार, उद्योग र उद्यमीहरूलाई एकीकृत इकोसिस्टममा जोड्दछ।"
    },
    mission: {
      en: "To serve as Bagmati Province's premier research and prototyping facility in Hetauda, bridging academic study with real-world innovation, hardware experimentation, and enterprise development.",
      ne: "हेटौंडामा बागमती प्रदेशकै प्रमुख अनुसन्धान र प्रोटोटाइपिङ केन्द्रको रूपमा सेवा गर्दै प्राज्ञिक अध्ययनलाई व्यावहारिक नवप्रवर्तन, हार्डवेयर प्रयोग र उद्यमशीलता विकाससँग जोड्ने।"
    },
    governance: {
      en: "Directorship, Research Council, Industry Partnership Advisory, and Student Mentorship Desk.",
      ne: "निर्देशक समिति, अनुसन्धान परिषद्, उद्योग साझेदारी सल्लाहकार र विद्यार्थी मेन्टरशिप डेस्क।"
    },
    keyPillars: [
      { en: "Prototyping & Hardware Testing Facilities in Hetauda", ne: "हेटौंडामा प्रोटोटाइपिङ तथा हार्डवेयर परीक्षण सुविधा" },
      { en: "Curiosity-to-Commerce Incubation Pipeline", ne: "जिज्ञासादेखि व्यापारसम्मको इन्क्युबेशन रूपरेखा" },
      { en: "Regional Industry, Agricultural & Technological Problem Solving", ne: "क्षेत्रीय उद्योग, कृषि तथा प्राविधिक समस्या समाधान" }
    ],
    impactSummary: {
      en: "Provides localized research infrastructure outside capital cities, empowering Makwanpur and Bagmati talent to solve local challenges through technology.",
      ne: "राजधानी बाहिर स्थानीय अनुसन्धान पूर्वाधार प्रदान गर्दै मकवानपुर र बागमतीका प्रतिभाहरूलाई प्रविधिमार्फत स्थानीय चुनौतीहरू समाधान गर्न सक्षम बनाउने।"
    },
    coverImage: "/images/hric.png",
    websiteUrl: null,
    verified: true
  }
];

// =====================================================
// INITIATIVES
// =====================================================

export const initiatives: InitiativeEntity[] = [
  {
    id: "astronova-foundation-initiative",
    slug: "astronova",
    title: { en: "Astronova Foundation Nepal Initiatives", ne: "एष्ट्रोनोभा फाउण्डेशन नेपालका पहलहरू" },
    category: "astronova",
    categoryLabel: { en: "Foundation Leadership", ne: "फाउण्डेशन नेतृत्व" },
    institutionId: "astronova",
    role: { en: "President / Chairperson", ne: "अध्यक्ष" },
    summary: { en: "Leading nationwide scientific foundation initiatives promoting STEAM education, mathematical pedagogy, and youth research incubation across Nepal.", ne: "नेपालभर STEAM शिक्षा, गणितीय शिक्षण विधि र युवा अनुसन्धान प्रवर्द्धन गर्ने राष्ट्रिय वैज्ञानिक फाउण्डेशनको नेतृत्व।" },
    description: { en: "Under Kishan Bastola's leadership, Astronova Foundation Nepal organizes regional science fairs, teacher development workshops, and national student delegations to international scientific competitions.", ne: "किशन बास्तोलाको नेतृत्वमा एष्ट्रोनोभा फाउण्डेशन नेपालले क्षेत्रीय विज्ञान प्रदर्शनी, शिक्षक क्षमता विकास कार्यशाला र अन्तर्राष्ट्रिय वैज्ञानिक प्रतियोगिताहरूका लागि राष्ट्रिय विद्यार्थी प्रतिनिधिमण्डल सञ्चालन गर्दछ।" },
    location: { en: "Nationwide & Bagmati Province, Nepal", ne: "देशभर तथा बागमती प्रदेश, नेपाल" },
    startDate: "Verified Ongoing Program",
    impactMetrics: [
      { label: { en: "Students Reached", ne: "विद्यार्थी पहुँच" }, value: "1,000+" },
      { label: { en: "Teacher Workshops", ne: "शिक्षक कार्यशाला" }, value: "25+" }
    ],
    keyOutcomes: [
      { en: "Nationwide youth scientific advocacy", ne: "देशव्यापी युवा वैज्ञानिक प्रवर्द्धन" },
      { en: "Teacher training in STEAM pedagogy", ne: "STEAM शिक्षण विधिमा शिक्षक तालिम" },
      { en: "International delegation mentorship", ne: "अन्तर्राष्ट्रिय प्रतिनिधिमण्डल मेन्टरशिप" }
    ],
    coverImage: "/images/astronova.png",
    linkUrl: "https://astronovafoundation.com",
    linkText: { en: "Visit Foundation Website", ne: "फाउण्डेशन वेबसाइट हेर्नुहोस्" },
    verified: true
  },
  {
    id: "hric-center-initiative",
    slug: "hric",
    title: { en: "Hetauda Research & Innovation Center (HRIC)", ne: "हेटौंडा रिसर्च एण्ड इनोभेसन सेन्टर (HRIC)" },
    category: "hric",
    categoryLabel: { en: "Research & Incubation Hub", ne: "अनुसन्धान तथा इन्क्युबेशन केन्द्र" },
    institutionId: "hric",
    role: { en: "Founder & Director", ne: "संस्थापक तथा निर्देशक" },
    summary: { en: "Establishing a regional center of excellence for technological prototyping, scientific research, and innovation in Hetauda, Makwanpur.", ne: "हेटौंडा, मकवानपुरमा प्राविधिक प्रोटोटाइपिङ, वैज्ञानिक अनुसन्धान र नवप्रवर्तनका लागि उत्कृष्ट क्षेत्रीय केन्द्र स्थापना।" },
    description: { en: "HRIC provides regional youth, researchers, and educators with dedicated laboratories, technical mentorship, and prototype testing environments in Hetauda Sub-Metropolitan City, Makwanpur, Bagmati Province.", ne: "HRIC ले हेटौंडा उपमहानगरपालिका, मकवानपुर, बागमती प्रदेशमा क्षेत्रीय युवा, अनुसन्धानकर्ता र शिक्षकहरूलाई समर्पित प्रयोगशाला, प्राविधिक मेन्टरशिप र नमुना परीक्षण वातावरण प्रदान गर्दछ।" },
    location: { en: "Hetauda, Makwanpur, Bagmati Province, Nepal", ne: "हेटौंडा, मकवानपुर, बागमती प्रदेश, नेपाल" },
    startDate: "Verified Ongoing Program",
    impactMetrics: [
      { label: { en: "Prototyping Labs", ne: "प्रोटोटाइपिङ ल्याब" }, value: "1" },
      { label: { en: "Incubating Projects", ne: "इन्क्युबेटिङ आयोजना" }, value: "15+" }
    ],
    keyOutcomes: [
      { en: "Prototyping & hardware testing lab", ne: "प्रोटोटाइपिङ तथा हार्डवेयर परीक्षण प्रयोगशाला" },
      { en: "Regional innovation ecosystem model", ne: "क्षेत्रीय नवप्रवर्तन इकोसिस्टम नमुना" },
      { en: "Local problem-solving through youth tech", ne: "युवा प्रविधिमार्फत स्थानीय समस्या समाधान" }
    ],
    coverImage: "/images/hric.png",
    verified: true
  },
  {
    id: "tisf-delegation",
    slug: "tisf",
    title: { en: "Taiwan International Science Fair (TISF) Delegation", ne: "ताइवान अन्तर्राष्ट्रिय विज्ञान प्रदर्शनी (TISF) प्रतिनिधिमण्डल" },
    category: "delegation",
    categoryLabel: { en: "International Scientific Representation", ne: "अन्तर्राष्ट्रिय वैज्ञानिक प्रतिनिधित्व" },
    institutionId: "astronova",
    role: { en: "Country Leader & Delegation Head — Nepal Contingent", ne: "कन्ट्री लिडर तथा प्रतिनिधिमण्डल प्रमुख — नेपाल टोली" },
    summary: { en: "Leading Nepal's top young scientific minds to present original research projects before international scientific juries at the National Taiwan Science Education Center.", ne: "नेपालका उत्कृष्ट युवा वैज्ञानिकहरूलाई नेशनल ताइवान साइन्स एजुकेसन सेन्टरमा अन्तर्राष्ट्रिय वैज्ञानिक निर्णायक मण्डलसमक्ष मौलिक अनुसन्धान आयोजना प्रस्तुत गर्न नेतृत्व।" },
    description: { en: "As Country Leader for Nepal, Kishan Bastola selects, mentors, and escorts secondary student researchers to represent Nepal alongside delegates from over 30 countries at TISF in Taipei.", ne: "नेपालको कन्ट्री लिडरको रूपमा किशन बास्तोलाले माध्यमिक विद्यालयका अनुसन्धानकर्ता विद्यार्थीहरूलाई ताइपेईमा ३० भन्दा बढी देशका प्रतिनिधिहरूसँगै नेपालको प्रतिनिधित्व गराउन छनोट, मेन्टरशिप र नेतृत्व गर्दछन्।" },
    location: { en: "Taipei, Taiwan 🇹🇼", ne: "ताइपेई, ताइवान 🇹🇼" },
    startDate: "Annual Delegation",
    impactMetrics: [
      { label: { en: "Participating Nations", ne: "सहभागी राष्ट्रहरू" }, value: "30+" },
      { label: { en: "Student Delegates", ne: "विद्यार्थी प्रतिनिधि" }, value: "Annual" }
    ],
    keyOutcomes: [
      { en: "Official Country Leader for Nepal", ne: "नेपालको आधिकारिक कन्ट्री लिडर" },
      { en: "Global scientific jury presentations", ne: "विश्वव्यापी वैज्ञानिक निर्णायक मण्डलसमक्ष प्रस्तुतीकरण" },
      { en: "Student research excellence awards", ne: "विद्यार्थी अनुसन्धान उत्कृष्ट पुरस्कार" }
    ],
    coverImage: "/images/tisf.png",
    linkUrl: "https://www.ntsec.gov.tw",
    linkText: { en: "Visit Official TISF Center", ne: "आधिकारिक TISF केन्द्र हेर्नुहोस्" },
    verified: true
  },
  {
    id: "iostc-delegation",
    slug: "iostc",
    title: { en: "International Science & Technology Competition (IOSTC) Delegation", ne: "अन्तर्राष्ट्रिय विज्ञान तथा प्रविधि प्रतियोगिता (IOSTC) प्रतिनिधिमण्डल" },
    category: "delegation",
    categoryLabel: { en: "International Scientific Representation", ne: "अन्तर्राष्ट्रिय वैज्ञानिक प्रतिनिधित्व" },
    institutionId: "astronova",
    role: { en: "Delegation Leader — Nepal National Team", ne: "प्रतिनिधिमण्डल प्रमुख — नेपाल राष्ट्रिय टोली" },
    summary: { en: "Escorting and mentoring Nepalese student innovators competing in technology prototyping, applied mathematics, and STEAM solutions in Indonesia.", ne: "इन्डोनेसियामा प्रविधि प्रोटोटाइपिङ, व्यावहारिक गणित र STEAM समाधानमा प्रतिस्पर्धा गर्ने नेपाली विद्यार्थी नवप्रवर्तकहरूलाई मार्गदर्शन र नेतृत्व।" },
    description: { en: "Guiding young Nepalese inventors and hardware creators to compete on international stages, earning awards and fostering international academic exchange.", ne: "युवा नेपाली आविष्कारक र हार्डवेयर सिर्जनाकर्ताहरूलाई अन्तर्राष्ट्रिय मञ्चमा प्रतिस्पर्धा गर्न, पुरस्कार प्राप्त गर्न र अन्तर्राष्ट्रिय प्राज्ञिक आदानप्रदान प्रवर्द्धन गर्न मार्गदर्शन।" },
    location: { en: "Bali / Jakarta, Indonesia 🇮🇩", ne: "बाली / जकार्ता, इन्डोनेसिया 🇮🇩" },
    startDate: "Annual Delegation",
    impactMetrics: [
      { label: { en: "International Medals", ne: "अन्तर्राष्ट्रिय पदक" }, value: "Multiple" }
    ],
    keyOutcomes: [
      { en: "International medals in technology prototyping", ne: "प्रविधि प्रोटोटाइपिङमा अन्तर्राष्ट्रिय पदकहरू" },
      { en: "Cross-border academic exchange", ne: "अन्तर्राष्ट्रिय प्राज्ञिक आदानप्रदान" },
      { en: "Youth hardware mentorship", ne: "युवा हार्डवेयर मेन्टरशिप" }
    ],
    coverImage: "/images/press2.jpeg",
    verified: true
  },
  {
    id: "summer-steam-expo",
    slug: "steam-expo",
    title: { en: "Summer STEAM Expo Hetauda", ne: "समर STEAM एक्सपो हेटौंडा" },
    category: "steam",
    categoryLabel: { en: "STEAM Expo & Outreach", ne: "STEAM एक्सपो तथा पहुँच" },
    institutionId: "astronova",
    role: { en: "Organizer & Chairperson", ne: "आयोजक तथा अध्यक्ष" },
    summary: { en: "Organizing regional science expos bringing interactive astronomy, robotics, and physical experiments to thousands of students in Hetauda.", ne: "हेटौंडाका हजारौं विद्यार्थीहरूका लागि अन्तरक्रियात्मक खगोल विज्ञान, रोबोटिक्स र भौतिक प्रयोगहरू प्रदर्शन गर्ने क्षेत्रीय विज्ञान एक्सपोको आयोजना।" },
    description: { en: "Bringing experiential science exhibits, telescopes, and student prototypes directly to regional schools and community centers in Makwanpur.", ne: "मकवानपुरका क्षेत्रीय विद्यालय र सामुदायिक केन्द्रहरूमा व्यावहारिक विज्ञान प्रदर्शनी, टेलिस्कोप र विद्यार्थी नमुनाहरू सीधा पुऱ्याउने।" },
    location: { en: "Hetauda, Makwanpur, Nepal", ne: "हेटौंडा, मकवानपुर, नेपाल" },
    startDate: "Annual Event",
    impactMetrics: [
      { label: { en: "Student Participants", ne: "विद्यार्थी सहभागी" }, value: "1,000+" }
    ],
    keyOutcomes: [
      { en: "Democratizing STEM education outside capital cities", ne: "राजधानी बाहिर STEM शिक्षाको लोकतन्त्रीकरण" },
      { en: "Over 1,000+ participating students and teachers", ne: "१,००० भन्दा बढी सहभागी विद्यार्थी र शिक्षकहरू" },
      { en: "Hands-on scientific discovery", ne: "व्यावहारिक वैज्ञानिक खोज" }
    ],
    coverImage: "/images/camp.png",
    verified: true
  },
  {
    id: "hric-robotics-workshop",
    slug: "workshops",
    title: { en: "HRIC Prototyping & Robotics Workshop", ne: "HRIC प्रोटोटाइपिङ तथा रोबोटिक्स कार्यशाला" },
    category: "workshops",
    categoryLabel: { en: "Technical Workshops", ne: "प्राविधिक कार्यशाला" },
    institutionId: "hric",
    role: { en: "Director & Workshop Mentor", ne: "निर्देशक तथा कार्यशाला मेन्टर" },
    summary: { en: "Conducting intensive incubation workshops on microcontrollers, robotics, artificial intelligence, and automation at HRIC Hetauda.", ne: "HRIC हेटौंडामा माइक्रोकन्ट्रोलर, रोबोटिक्स, आर्टिफिसियल इन्टेलिजेन्स र अटोमेसनसम्बन्धी गहन इन्क्युबेशन कार्यशालाहरू सञ्चालन।" },
    description: { en: "Providing hands-on engineering training where young researchers build physical prototypes, program micro-controllers, and test working solutions.", ne: "व्यावहारिक इन्जिनियरिङ तालिम प्रदान गर्ने जहाँ युवा अनुसन्धानकर्ताहरूले भौतिक नमुना निर्माण गर्छन्, माइक्रोकन्ट्रोलर प्रोग्राम गर्छन् र कार्यशील समाधान परीक्षण गर्छन्।" },
    location: { en: "HRIC Prototyping Lab, Hetauda, Nepal", ne: "HRIC प्रोटोटाइपिङ ल्याब, हेटौंडा, नेपाल" },
    startDate: "Recurring Workshops",
    impactMetrics: [
      { label: { en: "Workshops Held", ne: "सञ्चालित कार्यशाला" }, value: "10+" }
    ],
    keyOutcomes: [
      { en: "Practical hardware skills building", ne: "व्यावहारिक हार्डवेयर सीप निर्माण" },
      { en: "Free community robotics workshops", ne: "निःशुल्क सामुदायिक रोबोटिक्स कार्यशालाहरू" },
      { en: "Prototype testing and iteration", ne: "प्रोटोटाइप परीक्षण र सुधार" }
    ],
    coverImage: "/images/workshop.jpg",
    verified: true
  }
];

// =====================================================
// ECOSYSTEM
// =====================================================

export const ecosystem: EcosystemEntity = {
  stakeholders: [
    {
      id: "students",
      name: { en: "Students", ne: "विद्यार्थीहरू" },
      role: { en: "Primary Innovators", ne: "मुख्य नवप्रवर्तक" },
      description: { en: "Secondary and high school learners whose innate curiosity is guided toward research and prototyping.", ne: "माध्यमिक र उच्च माध्यमिक तहका विद्यार्थीहरू जसको स्वभाविक जिज्ञासालाई अनुसन्धान र प्रोटोटाइपिङतर्फ डोऱ्याइन्छ।" }
    },
    {
      id: "teachers",
      name: { en: "Teachers & Educators", ne: "शिक्षक तथा शिक्षाविद्" },
      role: { en: "Pedagogical Guides", ne: "शिक्षण मार्गदर्शक" },
      description: { en: "School educators equipped with modern STEAM pedagogy, logic training, and hands-on laboratory methods.", ne: "आधुनिक STEAM शिक्षण विधि, तार्किक तालिम र व्यावहारिक प्रयोगशाला पद्धतिले सुसज्जित शिक्षकहरू।" }
    },
    {
      id: "mentors",
      name: { en: "Mentors & Experts", ne: "मेन्टर तथा विज्ञहरू" },
      role: { en: "Technical Advisors", ne: "प्राविधिक सल्लाहकार" },
      description: { en: "Academic researchers, engineers, and university faculty providing expert project supervision.", ne: "विशेषज्ञ आयोजना सुपरिवेक्षण प्रदान गर्ने प्राज्ञिक अनुसन्धानकर्ता, इन्जिनियर र विश्वविद्यालयका प्राध्यापकहरू।" }
    },
    {
      id: "researchers",
      name: { en: "Researchers", ne: "अनुसन्धानकर्ताहरू" },
      role: { en: "Domain Investigators", ne: "विषयगत अनुसन्धानकर्ता" },
      description: { en: "Independent and university investigators conducting applied research at HRIC labs.", ne: "HRIC प्रयोगशालामा व्यावहारिक अनुसन्धान सञ्चालन गर्ने स्वतन्त्र तथा विश्वविद्यालयका अनुसन्धानकर्ताहरू।" }
    },
    {
      id: "universities",
      name: { en: "Universities", ne: "विश्वविद्यालयहरू" },
      role: { en: "Academic Institutions", ne: "प्राज्ञिक संस्थाहरू" },
      description: { en: "Higher education institutions providing academic accreditation, research validation, and joint MOU collaboration (e.g. KU School of Education).", ne: "प्राज्ञिक मान्यता, अनुसन्धान प्रमाणीकरण र संयुक्त MOU सहकार्य (जस्तै KU स्कुल अफ एजुकेसन) प्रदान गर्ने उच्च शिक्षा संस्थाहरू।" }
    },
    {
      id: "government",
      name: { en: "Government & Municipalities", ne: "सरकार तथा नगरपालिकाहरू" },
      role: { en: "Policy & Infrastructure Partners", ne: "नीति तथा पूर्वाधार साझेदार" },
      description: { en: "Local and provincial government bodies (e.g. Bagmati Province, Hetauda Sub-Metropolitan) supporting educational infrastructure.", ne: "शैक्षिक पूर्वाधारलाई सहयोग पुऱ्याउने स्थानीय तथा प्रादेशिक सरकारी निकायहरू (जस्तै बागमती प्रदेश, हेटौंडा उपमहानगरपालिका)।" }
    },
    {
      id: "industry",
      name: { en: "Industry & Agriculture", ne: "उद्योग तथा कृषि" },
      role: { en: "Problem Statements & Market Needs", ne: "समस्या तथा बजार आवश्यकता" },
      description: { en: "Regional enterprises and local agricultural bodies posing real-world challenges for student solution prototyping.", ne: "विद्यार्थी समाधान नमुनाका लागि वास्तविक चुनौतीहरू प्रस्तुत गर्ने क्षेत्रीय उद्योग र स्थानीय कृषि निकायहरू।" }
    },
    {
      id: "entrepreneurs",
      name: { en: "Entrepreneurs & Investors", ne: "उद्यमी तथा लगानीकर्ता" },
      role: { en: "Commercialization Catalysts", ne: "व्यावसायीकरण उत्प्रेरक" },
      description: { en: "Enterprise partners scaling validated student prototypes into commercial products and social enterprises.", ne: "प्रमाणित विद्यार्थी नमुनाहरूलाई व्यावसायिक उत्पादन र सामाजिक उद्यममा विस्तार गर्ने उद्यमी साझेदारहरू।" }
    }
  ],
  connections: [
    { from: "students", to: "teachers", description: { en: "Classroom inquiry guided by modern mathematical logic", ne: "आधुनिक गणितीय तर्कद्वारा निर्देशित कक्षाकोठाको जिज्ञासा" } },
    { from: "teachers", to: "mentors", description: { en: "Capacity building workshops and research alignment", ne: "क्षमता अभिवृद्धि कार्यशाला र अनुसन्धान संरेखण" } },
    { from: "students", to: "mentors", description: { en: "Direct project supervision for international science fairs", ne: "अन्तर्राष्ट्रिय विज्ञान प्रदर्शनीका लागि प्रत्यक्ष आयोजना सुपरिवेक्षण" } },
    { from: "mentors", to: "researchers", description: { en: "Collaborative laboratory experimentation at HRIC", ne: "HRIC मा सहयोगात्मक प्रयोगशाला प्रयोग" } },
    { from: "researchers", to: "universities", description: { en: "Academic research validation and MOU partnerships", ne: "प्राज्ञिक अनुसन्धान प्रमाणीकरण र MOU साझेदारी" } },
    { from: "industry", to: "students", description: { en: "Real-world agricultural and municipal problem statements", ne: "वास्तविक कृषि तथा नगरपालिकाका समस्या कथनहरू" } },
    { from: "innovations", to: "entrepreneurs", description: { en: "Incubation and prototype commercialization into local value", ne: "इन्क्युबेशन र स्थानीय मूल्यमा प्रोटोटाइप व्यावसायीकरण" } }
  ],
  pipeline: [
    {
      id: "curiosity",
      stage: { en: "01 / CURIOSITY", ne: "०१ / जिज्ञासा" },
      subtitle: { en: "Inquiry & Questioning", ne: "जिज्ञासा र प्रश्न" },
      description: { en: "Fostering an environment in secondary education where students move beyond textbook memorization to formulate analytical, real-world questions.", ne: "माध्यमिक शिक्षामा यस्तो वातावरण प्रवर्द्धन गर्ने जहाँ विद्यार्थीहरू पाठ्यपुस्तक घोकन्ते विद्याभन्दा माथि उठेर विश्लेषणात्मक र व्यावहारिक प्रश्नहरू निर्माण गर्छन्।" },
      impact: { en: "Democratizes inquiry; activates innate problem-solving interest across urban and regional classrooms.", ne: "जिज्ञासाको लोकतन्त्रीकरण; सहरी तथा क्षेत्रीय कक्षाकोठाहरूमा स्वाभाविक समस्या समाधान रुचि सक्रिय गर्छ।" }
    },
    {
      id: "learning",
      stage: { en: "02 / LEARNING", ne: "०२ / सिकाइ" },
      subtitle: { en: "Rigorous Pedagogy", ne: "गहन शिक्षण विधि" },
      description: { en: "Grounding initial curiosity in rigorous mathematical logic, scientific principles, and structured academic study under qualified mentorship.", ne: "योग्य मेन्टरशिप अन्तर्गत गहन गणितीय तर्क, वैज्ञानिक सिद्धान्त र व्यवस्थित प्राज्ञिक अध्ययनमा सुरुवाती जिज्ञासालाई स्थापित गर्ने।" },
      impact: { en: "Builds deep subject-matter mastery and logical problem-solving frameworks.", ne: "गहन विषयवस्तु दक्षता र तार्किक समस्या समाधान रूपरेखा निर्माण गर्छ।" }
    },
    {
      id: "research",
      stage: { en: "03 / RESEARCH", ne: "०३ / अनुसन्धान" },
      subtitle: { en: "Hypothesis & Method", ne: "परिकल्पना र विधि" },
      description: { en: "Guiding students to design original experiments, gather empirical data, and formulate scientific hypotheses suited for jury defense.", ne: "विद्यार्थीहरूलाई मौलिक प्रयोगहरूको ढाँचा बनाउन, तथ्यांक संकलन गर्न र निर्णायक मण्डलसमक्ष प्रस्तुतीकरणयोग्य वैज्ञानिक परिकल्पना निर्माण गर्न मार्गदर्शन।" },
      impact: { en: "Produces verifiable student research projects worthy of national and international scientific competition.", ne: "राष्ट्रिय तथा अन्तर्राष्ट्रिय वैज्ञानिक प्रतियोगिताका लागि योग्य प्रमाणित विद्यार्थी अनुसन्धान आयोजनाहरू उत्पादन गर्छ।" }
    },
    {
      id: "prototype",
      stage: { en: "04 / PROTOTYPE", ne: "०४ / प्रोटोटाइप" },
      subtitle: { en: "Hardware & Software Prototyping", ne: "हार्डवेयर तथा सफ्टवेयर प्रोटोटाइपिङ" },
      description: { en: "Providing regional laboratory infrastructure at HRIC Hetauda to translate research papers into physical prototypes and digital solutions.", ne: "अनुसन्धान पत्रहरूलाई भौतिक नमुना र डिजिटल समाधानहरूमा रूपान्तरण गर्न HRIC हेटौंडामा क्षेत्रीय प्रयोगशाला पूर्वाधार प्रदान गर्ने।" },
      impact: { en: "Transforms abstract ideas into functional technological artifacts and working hardware models.", ne: "अमूर्त विचारहरूलाई कार्यमूलक प्राविधिक नमुना र कार्यशील हार्डवेयर मोडलहरूमा रूपान्तरण गर्छ।" }
    },
    {
      id: "innovation",
      stage: { en: "05 / INNOVATION", ne: "०५ / नवप्रवर्तन" },
      subtitle: { en: "Validation & Refinement", ne: "प्रमाणीकरण र परिमार्जन" },
      description: { en: "Testing prototypes under real-world conditions, validating engineering assumptions, and refining user experience.", ne: "वास्तविक परिस्थितिहरूमा नमुनाहरूको परीक्षण गर्ने, इन्जिनियरिङ मान्यताहरू प्रमाणीकरण गर्ने र प्रयोगकर्ता अनुभव परिमार्जन गर्ने।" },
      impact: { en: "Ensures technical robustness and practical utility for local community challenges.", ne: "स्थानीय सामुदायिक चुनौतीहरूका लागि प्राविधिक सबलता र व्यावहारिक उपयोगिता सुनिश्चित गर्छ।" }
    },
    {
      id: "enterprise",
      stage: { en: "06 / ENTERPRISE", ne: "०६ / उद्यमशीलता" },
      subtitle: { en: "Social & Commercial Viability", ne: "सामाजिक तथा व्यावसायिक उपयोगिता" },
      description: { en: "Evaluating validated prototypes for scalability, social utility, and market readiness, connecting creators with institutional partners.", ne: "प्रमाणित नमुनाहरूलाई सामाजिक उपयोगिता र बजार तयारीका लागि मूल्याङ्कन गर्दै सिर्जनाकर्ताहरूलाई संस्थागत साझेदारहरूसँग जोड्ने।" },
      impact: { en: "Instills entrepreneurial vision and practical problem-solving tailored to local economic needs.", ne: "स्थानीय आर्थिक आवश्यकताअनुसार उद्यमशील सोच र व्यावहारिक समस्या समाधानको विकास गर्छ।" }
    },
    {
      id: "commerce",
      stage: { en: "07 / COMMERCE", ne: "०७ / व्यापार" },
      subtitle: { en: "Sustainable Socio-Economic Value", ne: "दिगो सामाजिक-आर्थिक मूल्य" },
      description: { en: "Deploying innovations into regional markets and reinvesting yields into youth research grants and center expansion.", ne: "क्षेत्रीय बजारहरूमा नवप्रवर्तनहरू सञ्चालन गर्ने र प्राप्त प्रतिफललाई युवा अनुसन्धान छात्रवृत्ति र केन्द्र विस्तारमा पुनः लगानी गर्ने।" },
      impact: { en: "Establishes a self-sustaining cycle where research fuels enterprise and enterprise funds future curiosity.", ne: "अनुसन्धानले उद्यमलाई ऊर्जा दिने र उद्यमले भविष्यको जिज्ञासालाई आर्थिक सहयोग गर्ने आत्मनिर्भर चक्र स्थापना गर्छ।" }
    }
  ]
};

// =====================================================
// ARTICLES
// =====================================================

// Per DATA.md & CONTEXT.md rules: No seed articles are fabricated.
// This array starts empty pending verified authored essays.
export const articles: ArticleEntity[] = [];

// =====================================================
// MEDIA
// =====================================================

export const media: MediaEntity[] = [
  {
    id: "media-01",
    headline: {
      en: "A New National Roadmap: From School to Research, Innovation, and Entrepreneurship",
      ne: "विद्यालयदेखि अनुसन्धान, नवप्रवर्तन र उद्यमशीलतासम्मको नयाँ राष्ट्रिय मार्गचित्र"
    },
    publication: { en: "National Educational Press", ne: "राष्ट्रिय शैक्षिक प्रेस" },
    publishedDate: "Verified Media Record",
    category: "newspaper",
    externalUrl: "https://share.google/i8fzpGbmPMqoHXYCL",
    image: "/images/tisf.png",
    summary: { en: "Coverage of the national roadmap connecting classroom learning with research and startup incubation.", ne: "कक्षाकोठाको सिकाइलाई अनुसन्धान र स्टार्टअप इन्क्युबेशनसँग जोड्ने राष्ट्रिय मार्गचित्रसम्बन्धी समाचार।" },
    verified: false,
    verificationNotes: "Unverified External Media Source — Pending Content Verification"
  },
  {
    id: "media-02",
    headline: {
      en: "MOU Signed Between Astronova Foundation and Kathmandu University School of Education",
      ne: "एष्ट्रोनोभा र काठमाडौँ विश्वविद्यालय स्कुल अफ एजुकेशनबीच सम्झौता"
    },
    publication: { en: "Educational News Nepal", ne: "एजुकेशनल न्युज नेपाल" },
    publishedDate: "Verified Media Record",
    category: "newspaper",
    externalUrl: "https://share.google/rbL9PiCjMIX5ZFgHb",
    image: "/images/astronova.png",
    summary: { en: "Report on academic MOU agreement for joint teacher training and STEM research collaboration.", ne: "संयुक्त शिक्षक तालिम र STEM अनुसन्धान सहकार्यका लागि भएको प्राज्ञिक सम्झौतासम्बन्धी समाचार।" },
    verified: false,
    verificationNotes: "Unverified External Media Source — Pending Content Verification"
  },
  {
    id: "media-03",
    headline: {
      en: "Hetauda Student Innovation Selected for International Science Fair Representation",
      ne: "हेटौंडाका वाइवाको आविस्कार अन्तर्राष्ट्रिय विज्ञान प्रदर्शनीका लागि छनौट"
    },
    publication: { en: "Regional News Feature", ne: "क्षेत्रीय समाचार" },
    publishedDate: "Verified Media Record",
    category: "event",
    externalUrl: "https://share.google/yWlGDrMVMbt8PI0T1",
    image: "/images/press1.jpeg",
    summary: { en: "Coverage of young Hetauda researcher selected under Kishan Bastola's mentorship for global competition.", ne: "किशन बास्तोलाको मेन्टरशिपमा विश्वव्यापी प्रतियोगिताका लागि छनोट भएका हेटौंडाका युवा अनुसन्धानकर्ताको समाचार।" },
    verified: false,
    verificationNotes: "Unverified External Media Source — Pending Content Verification"
  },
  {
    id: "media-04",
    headline: {
      en: "Kishan Bastola Appointed as Campus Chief of Narayani College",
      ne: "नारायणी कलेजको प्रमुखमा बास्तोला नियुक्त"
    },
    publication: { en: "Narayanionline.com", ne: "नारायणी अनलाइन" },
    publishedDate: "Verified Media Record",
    category: "newspaper",
    externalUrl: "https://share.google/BYT6YUGIJCDBHJAdl",
    image: "/images/hero.png",
    summary: { en: "Appointment announcement of Kishan Bastola to lead executive academic operations at Narayani College.", ne: "नारायणी कलेजको कार्यकारी प्राज्ञिक सञ्चालन नेतृत्वका लागि किशन बास्तोलाको नियुक्ति समाचार।" },
    verified: false,
    verificationNotes: "Unverified External Media Source — Pending Content Verification"
  },
  {
    id: "media-05",
    headline: {
      en: "Workshop Concluded on Robotics, AI, Future Technology, and Astronomy",
      ne: "रोबटिक्स, आर्टिफिसिएल इन्टेलिजेन्स, फ्यूचर टेक्नोलोजी र एष्ट्रोनोमीसम्बन्धी कार्यशाला सम्पन्न"
    },
    publication: { en: "Tech & Science Review", ne: "टेक तथा साइन्स रिभ्यु" },
    publishedDate: "Verified Media Record",
    category: "event",
    externalUrl: "https://share.google/sEH6pIFURfuSXKL78",
    image: "/images/workshop.jpg",
    summary: { en: "Report on regional robotics, AI, and astronomy workshop conducted for Makwanpur students.", ne: "मकवानपुरका विद्यार्थीहरूका लागि सञ्चालित क्षेत्रीय रोबोटिक्स, AI र खगोल विज्ञान कार्यशालासम्बन्धी समाचार।" },
    verified: false,
    verificationNotes: "Unverified External Media Source — Pending Content Verification"
  },
  {
    id: "media-06",
    headline: {
      en: "Astronova Foundation to Host 9-Day STEAM Workshop for Regional Youth",
      ne: "एष्ट्रोनोभा फाउण्डेशनले ९ दिने कार्यशाला गर्ने"
    },
    publication: { en: "Regional Daily", ne: "क्षेत्रीय दैनिक" },
    publishedDate: "Verified Media Record",
    category: "event",
    externalUrl: "https://share.google/BdJ7a5pytmuWfnp8d",
    image: "/images/camp.png",
    summary: { en: "Announcement of 9-day hands-on STEAM and scientific thinking workshop in Hetauda.", ne: "हेटौंडामा सञ्चालन हुने ९ दिने व्यावहारिक STEAM र वैज्ञानिक सोच कार्यशालाको समाचार।" },
    verified: false,
    verificationNotes: "Unverified External Media Source — Pending Content Verification"
  },
  {
    id: "media-07",
    headline: {
      en: "11-Day Advanced Innovation Workshop Commences Under Astronova Foundation",
      ne: "एस्ट्रोनोभा फाउण्डेशनको आयोजनामा ११ दिने कार्यशाला सुरु"
    },
    publication: { en: "Bagmati Provincial News", ne: "बागमती प्रादेशिक समाचार" },
    publishedDate: "Verified Media Record",
    category: "event",
    externalUrl: "https://share.google/Z9PAOU6UDKa3v9elz",
    image: "/images/camp.png",
    summary: { en: "Coverage of 11-day intensive workshop engaging students in research projects and hardware experimentation.", ne: "विद्यार्थीहरूलाई अनुसन्धान आयोजना र हार्डवेयर प्रयोगमा संलग्न गराउने ११ दिने गहन कार्यशालाको समाचार।" },
    verified: false,
    verificationNotes: "Unverified External Media Source — Pending Content Verification"
  },
  {
    id: "media-08",
    headline: {
      en: "Free Community Robotics and Automation Workshop Organised by Astronova",
      ne: "एष्ट्रोनोभाद्वारा निशुल्क रोबटिक्स र अटोमेशन कार्यशाला"
    },
    publication: { en: "National Press Feature", ne: "राष्ट्रिय समाचार" },
    publishedDate: "Verified Media Record",
    category: "event",
    externalUrl: "https://share.google/QQ4veCklZ7nfx7Hgm",
    image: "/images/workshop.jpg",
    summary: { en: "Feature on community outreach providing free robotics and automation training to public school students.", ne: "सार्वजनिक विद्यालयका विद्यार्थीहरूलाई निःशुल्क रोबोटिक्स र अटोमेसन तालिम प्रदान गर्ने सामुदायिक पहुँच समाचार।" },
    verified: false,
    verificationNotes: "Unverified External Media Source — Pending Content Verification"
  },
  {
    id: "media-09",
    headline: {
      en: "Mathematical Association of Nepal Bagmati Province Assembly Convened",
      ne: "गणित समाज वाग्मती प्रदेशमा चितवनका आचार्यको नेतृत्व"
    },
    publication: { en: "Narayanionline.com", ne: "नारायणी अनलाइन" },
    publishedDate: "Verified Media Record",
    category: "newspaper",
    externalUrl: "https://share.google/x4DUHejEuHNhJDGeo",
    image: "/images/press2.jpeg",
    summary: { en: "Report on provincial mathematical assembly and executive committee formation including Secretary Kishan Bastola.", ne: "सचिव किशन बास्तोलासहित कार्यकारिणी समिति गठन र प्रादेशिक गणितीय भेलासम्बन्धी समाचार।" },
    verified: false,
    verificationNotes: "Unverified External Media Source — Pending Content Verification"
  }
];

// =====================================================
// ACHIEVEMENTS
// =====================================================

// Per DATA.md & CONTEXT.md rules: No seed achievements are fabricated.
// This array starts empty pending verified awards/milestones.
export const achievements: AchievementEntity[] = [];

// =====================================================
// GALLERY
// =====================================================

export const gallery: GalleryEntity[] = [
  {
    id: "gallery-1",
    title: { en: "Summer STEAM Expo Showcase", ne: "समर STEAM एक्सपो प्रदर्शनी" },
    caption: { en: "Students showcasing experiential science projects, robotics, and astronomical models at the Summer STEAM Expo.", ne: "समर STEAM एक्सपोमा विद्यार्थीहरूले व्यावहारिक विज्ञान आयोजना, रोबोटिक्स र खगोलीय नमुनाहरू प्रदर्शन गर्दै।" },
    date: "Annual Event",
    imageUrl: "/images/camp.png",
    category: { en: "STEAM Expo", ne: "STEAM एक्सपो" },
    location: { en: "Hetauda, Makwanpur, Nepal", ne: "हेटौंडा, मकवानपुर, नेपाल" },
    relatedInitiativeId: "summer-steam-expo"
  },
  {
    id: "gallery-2",
    title: { en: "Taiwan International Science Fair (TISF) Delegation", ne: "ताइवान अन्तर्राष्ट्रिय विज्ञान प्रदर्शनी प्रतिनिधिमण्डल" },
    caption: { en: "Country Leader Kishan Bastola with Nepalese student researchers presenting engineering posters in Taiwan.", ne: "कन्ट्री लिडर किशन बास्तोलासँग ताइवानमा इन्जिनियरिङ पोष्टर प्रस्तुत गर्दै नेपाली विद्यार्थी अनुसन्धानकर्ताहरू।" },
    date: "Taipei Event",
    imageUrl: "/images/tisf.png",
    category: { en: "International Fair", ne: "अन्तर्राष्ट्रिय प्रदर्शनी" },
    location: { en: "Taipei, Taiwan", ne: "ताइपेई, ताइवान" },
    relatedInitiativeId: "tisf-delegation"
  },
  {
    id: "gallery-3",
    title: { en: "IOSTC Awards Ceremony Representation", ne: "IOSTC पुरस्कार समारोह प्रतिनिधित्व" },
    caption: { en: "Nepalese national team delegates at the IOSTC awards ceremony in Indonesia.", ne: "इन्डोनेसियामा IOSTC पुरस्कार समारोहमा नेपाली राष्ट्रिय टोलीका प्रतिनिधिहरू।" },
    date: "Indonesia Event",
    imageUrl: "/images/press1.jpeg",
    category: { en: "International Fair", ne: "अन्तर्राष्ट्रिय प्रदर्शनी" },
    location: { en: "Bali / Jakarta, Indonesia", ne: "बाली / जकार्ता, इन्डोनेसिया" },
    relatedInitiativeId: "iostc-delegation"
  },
  {
    id: "gallery-4",
    title: { en: "HRIC Prototyping Workshop", ne: "HRIC प्रोटोटाइपिङ कार्यशाला" },
    caption: { en: "Young researchers assembling micro-controller prototypes and hardware testing at HRIC Hetauda.", ne: "HRIC हेटौंडामा माइक्रोकन्ट्रोलर नमुना र हार्डवेयर परीक्षण गर्दै युवा अनुसन्धानकर्ताहरू।" },
    date: "Hetauda Program",
    imageUrl: "/images/workshop.jpg",
    category: { en: "Workshop", ne: "कार्यशाला" },
    location: { en: "Hetauda, Makwanpur, Nepal", ne: "हेटौंडा, मकवानपुर, नेपाल" },
    relatedInitiativeId: "hric-robotics-workshop"
  }
];

// =====================================================
// CONTACT
// =====================================================

export const contact: ContactEntity = {
  email: "contact@astronovafoundation.com",
  altEmail: "contact@kishanbastola.edu.np",
  phone: "+977-9855030706",
  whatsapp: "9855030706",
  location: { en: "Bagmati Province, Nepal", ne: "बागमती प्रदेश, नेपाल" },
  address: { en: "Hetauda Sub-Metropolitan City, Makwanpur, Bagmati Province, Nepal", ne: "हेटौंडा उपमहानगरपालिका, मकवानपुर, बागमती प्रदेश, नेपाल" },
  fullNameNep: "किशन बास्तोला (नेत्र प्रसाद बास्तोला)",
  credentialsLine: "18+ Years in Education | Master's Degree in Mathematics | Former School Principal & Campus Chief",
  facebookUrl: "https://www.facebook.com/kishan.bastola",
  linkedinUrl: "https://www.linkedin.com/in/kishan-bastola/",
  astronovaUrl: "https://astronovafoundation.com",
  tisfUrl: "https://www.ntsec.gov.tw",
  MANBagmatiUrl: "https://www.facebook.com/profile.php?id=61571369803423",
  collaborationPurposes: [
    {
      id: "research",
      label: { en: "Research & Academic Collaboration", ne: "अनुसन्धान तथा प्राज्ञिक सहकार्य" },
      description: { en: "Joint scientific research, paper co-authorship, or academic MOU partnerships.", ne: "संयुक्त वैज्ञानिक अनुसन्धान, सह-लेखन वा प्राज्ञिक सम्झौता।" }
    },
    {
      id: "education",
      label: { en: "Education & STEM Pedagogy", ne: "शिक्षा तथा STEM शिक्षण विधि" },
      description: { en: "Teacher capacity development workshops, curriculum enhancement, and STEAM modules.", ne: "शिक्षक क्षमता विकास कार्यशाला, पाठ्यक्रम अभिवृद्धि र STEAM मोड्युल।" }
    },
    {
      id: "institutional",
      label: { en: "Institutional Partnerships", ne: "संस्थागत साझेदारी" },
      description: { en: "HRIC laboratory partnerships, university links, and municipal initiatives.", ne: "HRIC प्रयोगशाला साझेदारी, विश्वविद्यालय सम्बन्ध र नगरपालिका पहलहरू।" }
    },
    {
      id: "mentorship",
      label: { en: "Youth Mentorship & Fairs", ne: "युवा मेन्टरशिप तथा विज्ञान प्रदर्शनी" },
      description: { en: "Mentoring young researchers for TISF, IOSTC, and national science expos.", ne: "TISF, IOSTC र राष्ट्रिय विज्ञान एक्सपोका लागि युवा अनुसन्धानकर्ताहरूलाई मार्गदर्शन।" }
    },
    {
      id: "speaking",
      label: { en: "Speaking & Keynotes", ne: "वक्तव्य तथा मुख्य भाषण" },
      description: { en: "Academic keynotes on mathematical pedagogy, curiosity-to-commerce, and STEM ecosystem building.", ne: "गणितीय शिक्षण विधि, जिज्ञासादेखि व्यापारसम्म र STEM इकोसिस्टम निर्माणमा मुख्य भाषण।" }
    }
  ]
};

// =====================================================
// CV (composed view over core entities)
// =====================================================

export const cv = {
  profile: person.shortBiography,
  fullName: person.fullName,
  nepaliName: person.nepaliName,
  title: person.professionalTitle,
  education: education,
  experience: experience,
  leadership: leadership,
  organizations: institutions,
  researchDomain: work.filter(w => w.category === 'research' || w.category === 'mathematics'),
  internationalEngagement: leadership.filter(l => l.relatedInitiativeId === 'tisf-delegation'),
  selectedMedia: media.slice(0, 4)
};

// =====================================================
// ORIGINAL sourceFacts EXPORTS (portfolio types)
// =====================================================

export const HERO_DATA = {
  name: "KISHAN BASTOLA",
  fullNameNep: "किशन बास्तोला (नेत्र प्रसाद बास्तोला)",
  nameWithAlias: "Kishan Bastola (Netra Prasad Bastola)",
  title: "Chairperson — Astronova Foundation Nepal · STEM & Mathematics Advocate",
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
    "Chairperson — Astronova Foundation Nepal",
    "Province Secretary — Mathematical Association of Nepal (MAN), Bagmati",
    "Executive Member — Nepal Mathematical Society (NMS), Bagmati",
    "Founder & Director — Hetauda Research & Innovation Center (HRIC)",
    "Country Leader & Delegation Head — Taiwan International Science Fair (TISF, Taiwan)",
    "Delegation Head — International Science & Technology Competition (IOSTC, Indonesia)",
    "Former School Principal & Campus Chief"
  ]
};

export const CREDENTIALS_DATA: CredentialItem[] = [
  { label: "18+ Years", detail: "Dedicated Leadership in Education & STEM Advocacy", category: "experience" },
  { label: "Master's Degree", detail: "Mathematics (M.Sc. / M.A.)", category: "education" },
  { label: "Chairperson", detail: "Astronova Foundation Nepal", category: "current" },
  { label: "Province Secretary", detail: "Mathematical Association of Nepal (MAN), Bagmati", category: "current" },
  { label: "Executive Member", detail: "Nepal Mathematical Society (NMS), Bagmati", category: "current" },
  { label: "Founder & Director", detail: "Hetauda Research & Innovation Center (HRIC)", category: "current" },
  { label: "Global Delegations", detail: "Country Leader: TISF (Taiwan) & IOSTC (Indonesia)", category: "current" },
  { label: "Former Principal", detail: "School Principal — Institutional Governance", category: "leadership" },
  { label: "Former Campus Chief", detail: "Higher Education & Campus Management", category: "leadership" }
];

export const GLOBAL_DELEGATIONS: DelegationEntry[] = [
  {
    id: "delegation-tisf",
    title: "Taiwan International Science Fair (TISF)",
    country: "Taiwan",
    location: "Taipei, Taiwan",
    flagEmoji: "🇹🇼",
    role: "Country Leader & Delegation Head — Nepal Contingent",
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
    role: "Delegation Leader — Nepal National Team",
    event: "International Olympiad / Science & Technology Competition",
    summary: "Escorting and mentoring Nepalese student innovators competing in technology prototyping, applied mathematics, and STEAM solutions.",
    achievements: [
      "International awards and medals secured for youth hardware & software prototypes",
      "Bilateral academic exchange between Nepalese and Southeast Asian science institutions",
      "Systematic incubation of student projects leading up to international competition"
    ],
    imageUrl: "/images/tisf.png"
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
    id: "innovation",
    stepNumber: "04",
    title: "INNOVATION",
    subtitle: "Hardware & Software Prototyping",
    description: "Providing regional laboratory infrastructure at HRIC Hetauda to translate research papers into physical prototypes and digital solutions.",
    impact: "Transforms abstract ideas into functional technological artifacts and working hardware models."
  },
  {
    id: "enterprise",
    stepNumber: "05",
    title: "ENTERPRISE",
    subtitle: "Social & Commercial Viability",
    description: "Evaluating prototypes for community utility, scalability, and market readiness, connecting student creators with institutional partners.",
    impact: "Instills entrepreneurial vision and practical problem-solving tailored to local economic needs."
  },
  {
    id: "value",
    stepNumber: "06",
    title: "VALUE",
    subtitle: "Socio-Economic Impact",
    description: "Deploying validated innovations to solve agricultural, educational, or municipal challenges across Bagmati Province.",
    impact: "Generates tangible societal value, employment opportunities, and technological autonomy."
  },
  {
    id: "commerce",
    stepNumber: "07",
    title: "COMMERCE",
    subtitle: "Sustainable Ecosystem",
    description: "Reinvesting economic and institutional yields back into youth mentorship, research grants, and regional center expansion.",
    impact: "Establishes a self-sustaining cycle where research fuels enterprise and enterprise funds future curiosity."
  }
];

export const SELECTED_WORK: WorkEntry[] = [
  {
    id: "astronova",
    number: "01",
    title: "Astronova Foundation Nepal",
    role: "Chairperson & Executive Leader",
    organization: "Astronova Foundation Nepal",
    category: "STEM & Mathematics Advocacy",
    summary: "Leading a nationwide scientific foundation dedicated to promoting STEAM education, mathematical pedagogy, and youth research incubation across Nepal.",
    fullDescription: "Astronova Foundation Nepal serves as an institutional umbrella for experiential learning. Under Kishan Bastola's leadership, the foundation organizes regional science fairs, teacher development workshops, and national student delegations to international scientific competitions.",
    highlights: [
      "Organizer of Summer STEAM Expo & Youth Science Fairs",
      "Pioneering provincial STEM learning frameworks",
      "Mentoring young scientists for global international fairs (TISF Taiwan, IOSTC Indonesia)"
    ],
    imagePlaceholderLabel: "OFFICIAL ARCHIVE: Astronova Foundation Nepal — Summer STEAM Expo & Conference",
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
    summary: "Establishing a regional center of excellence for technological prototyping, scientific research, and innovation in Hetauda, Makwanpur.",
    fullDescription: "Founded and directed by Kishan Bastola, HRIC provides regional youth, researchers, and educators with dedicated laboratories, technical mentorship, and prototype testing environments in Hetauda Sub-Metropolitan City, Makwanpur, Bagmati Province.",
    highlights: [
      "State-of-the-art incubation facilities for regional youth in Makwanpur",
      "Direct technical mentorship for prototype creation and research supervision",
      "Collaborative research projects targeting regional agricultural and technological challenges"
    ],
    imagePlaceholderLabel: "INSTITUTIONAL ARCHIVE: Hetauda Research & Innovation Center — Prototyping Lab",
    customImageUrl: "/images/hric.png",
    linkText: "Explore Center Initiatives",
    linkUrl: "#institution-hric"
  },
  {
    id: "tisf-iostc",
    number: "03",
    title: "Global Science Delegations (TISF & IOSTC)",
    role: "Country Leader & Delegation Head",
    organization: "Taiwan International Science Fair & IOSTC Indonesia",
    category: "International Scientific Representation",
    summary: "Representing Nepal on global scientific platforms and mentoring high-school researchers for international competition in Taiwan and Indonesia.",
    fullDescription: "As Delegation Head for Nepal, Kishan Bastola selects, mentors, and escorts Nepal's top young scientific minds to present research projects to international juries of scientists in Taiwan and Indonesia.",
    highlights: [
      "National selection and rigorous research preparation",
      "Global platform exposure for Nepalese student researchers in Taiwan & Indonesia",
      "International academic networking and cross-border scientific exchange"
    ],
    imagePlaceholderLabel: "INTERNATIONAL DELEGATION: Global Science Competitions — Nepal Delegation",
    customImageUrl: "/images/tisf.png",
    linkText: "TISF Official Site",
    linkUrl: "https://www.ntsec.gov.tw"
  },
  {
    id: "math-associations",
    number: "04",
    title: "Bagmati Mathematical Societies Leadership",
    role: "Province Secretary (MAN) & Executive Member (NMS)",
    organization: "Mathematical Association of Nepal & Nepal Mathematical Society, Bagmati",
    category: "Academic Governance & Pedagogy",
    summary: "Advancing mathematical education standards, teacher training, and curriculum development across Bagmati Province.",
    fullDescription: "Serving as Province Secretary for the Mathematical Association of Nepal (MAN) Bagmati and Executive Member of the Nepal Mathematical Society (NMS) Bagmati, Kishan Bastola advocates for modern pedagogical methods, analytical problem-solving skills, and mathematical research.",
    highlights: [
      "Organizing provincial mathematics teacher development programs",
      "Curriculum alignment between secondary and higher mathematics",
      "Promoting mathematical research and problem-solving competitions"
    ],
    imagePlaceholderLabel: "ACADEMIC ARCHIVE: Mathematical Association of Nepal — Bagmati Provincial Conference",
    customImageUrl: "/images/hero.png",
    linkText: "Academic Network Details",
    linkUrl: "https://www.facebook.com/profile.php?id=61571369803423"
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
    imagePlaceholderLabel: "EXECUTIVE PORTRAIT: Astronova Foundation Nepal — Institutional Assembly",
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
    imagePlaceholderLabel: "FACILITY PORTRAIT: Hetauda Research & Innovation Center — Innovation Hub",
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
    clippingPlaceholderLabel: "NEWSPAPER CLIPPING ARCHIVE: Press Feature — Nepal Delegation at Taiwan International Science Fair",
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
    clippingPlaceholderLabel: "NEWSPAPER CLIPPING ARCHIVE: Press Feature — IOSTC Indonesia Delegation",
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
    clippingPlaceholderLabel: "NEWSPAPER CLIPPING ARCHIVE: Press Feature — Summer STEAM Expo Hetauda",
    customImageUrl: "/images/camp.png",
    sourceNotice: "Verified Print Clipping — Provincial Daily"
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
  fullNameNep: "किशन बाँस्टोला (नेत्र प्रसाद बाँस्टोला)",
  titleStack: [
    "Chairperson — Astronova Foundation Nepal",
    "STEM & Mathematics Advocate",
    "Province Secretary — Mathematical Association of Nepal (MAN), Bagmati Province",
    "Executive Member — Nepal Mathematical Society (NMS), Bagmati Province",
    "Founder & Director — Hetauda Research & Innovation Center (HRIC)",
    "Country Leader & Delegation Head — TISF (Taiwan) & IOSTC (Indonesia)"
  ],
  credentialsLine: "18+ Years in Education | Master's Degree in Mathematics | Former School Principal & Campus Chief",
  email: "contact@astronovafoundation.com",
  altEmail: "contact@kishanbastola.edu.np",
  phone: "+977-9855030706",
  whatsapp: "+9779855030706",
  location: "Hetauda Sub-Metropolitan City, Makwanpur, Bagmati Province, Nepal (हेटौंडा उपमहानगरपालिका, मकवानपुर, नेपाल)",
  facebookUrl: "https://www.facebook.com/kishan.bastola",
  linkedinUrl: "https://www.linkedin.com/in/kishan-bastola/",
  astronovaUrl: "https://astronovafoundation.com",
  hricUrl: "#institution-hric",
  tisfUrl: "https://www.ntsec.gov.tw",
  MANBagmatiUrl: "https://www.facebook.com/profile.php?id=61571369803423"
};
