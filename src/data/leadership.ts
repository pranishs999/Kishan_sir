import type { LeadershipEntity } from '../types/schema';

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
