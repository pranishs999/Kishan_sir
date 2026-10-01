import type { InstitutionEntity } from '../types/schema';

export const institutions: InstitutionEntity[] = [
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
