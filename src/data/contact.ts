import type { ContactEntity } from '../types/schema';

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
