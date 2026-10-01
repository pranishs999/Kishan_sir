import type { InitiativeEntity } from '../types/schema';

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
