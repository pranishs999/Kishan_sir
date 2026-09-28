import type { GalleryItemEntity } from '../types/schema';

export const gallery: GalleryItemEntity[] = [
  {
    id: "gallery-1",
    image: "/images/camp.png",
    caption: "Students showcasing experiential science projects, robotics, and astronomical models at the Summer STEAM Expo.",
    event: "Summer STEAM Expo",
    date: "Annual Event",
    location: "Hetauda, Makwanpur, Nepal",
    category: "STEAM Expo",
    relatedInitiativeId: "summer-steam-expo"
  },
  {
    id: "gallery-2",
    image: "/images/tisf.png",
    caption: "Country Leader Kishan Bastola with Nepalese student researchers presenting engineering posters in Taiwan.",
    event: "Taiwan International Science Fair (TISF)",
    date: "Taipei Event",
    location: "Taipei, Taiwan 🇹🇼",
    category: "International Fair",
    relatedInitiativeId: "tisf-delegation"
  },
  {
    id: "gallery-3",
    image: "/images/press1.jpeg",
    caption: "Nepalese national team delegates at the IOSTC awards ceremony in Indonesia.",
    event: "International Science & Tech Competition (IOSTC)",
    date: "Indonesia Event",
    location: "Indonesia 🇮🇩",
    category: "International Fair",
    relatedInitiativeId: "iostc-delegation"
  },
  {
    id: "gallery-4",
    image: "/images/workshop.jpg",
    caption: "Young researchers assembling micro-controller prototypes and hardware testing at HRIC Hetauda.",
    event: "HRIC Prototyping & Robotics Workshop",
    date: "Hetauda Program",
    location: "Hetauda, Makwanpur",
    category: "Workshop",
    relatedInitiativeId: "hric-robotics-workshop"
  }
];
