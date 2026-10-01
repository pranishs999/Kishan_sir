import type { GalleryEntity } from '../types/schema';

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
