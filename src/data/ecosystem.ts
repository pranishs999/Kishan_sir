import type { EcosystemEntity } from '../types/schema';

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
