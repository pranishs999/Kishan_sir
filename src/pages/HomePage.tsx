import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Briefcase, 
  ArrowRight, 
  Download, 
  Sparkles, 
  Lightbulb, 
  Building2, 
  Users, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone, 
  FlaskConical, 
  Globe, 
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { 
  person, 
  leadership, 
  ecosystem, 
  contact
} from '../data/sourceFacts';
import { CVModal } from '../components/CVModal';

export const HomePage: React.FC = () => {
  const { language, tF } = useLanguage();
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  // Six-Question Cards Data
  const questionCards = [
    {
      num: '01',
      route: '/who-am-i?tab=01',
      titleEn: 'What Shaped Me?',
      titleNe: 'मलाई केले निर्माण गर्‍यो?',
      descEn: 'Personal story, Master’s in Mathematics, 18 years in education, former School Principal & Campus Chief, career timeline, and professional milestones.',
      descNe: 'मेरो पृष्ठभूमि, शिक्षा र १८ वर्षे शैक्षिक यात्रा, प्रिन्सिपल र क्याम्पस प्रमुखको अनुभव तथा मुख्य मोडहरू।',
      icon: <GraduationCap size={22} style={{ color: 'var(--accent-gold)' }} />,
      tagEn: 'Background & Timeline',
      tagNe: 'पृष्ठभूमि र यात्रा'
    },
    {
      num: '02',
      route: '/who-am-i?tab=02',
      titleEn: 'What Drives Me?',
      titleNe: 'मलाई केले अघि बढाउँछ?',
      descEn: 'Educational philosophy, student-centred inquiry learning, curiosity, mathematics as foundational logic, and the purpose behind grassroots education.',
      descNe: 'उद्देश्य, विश्वास, शैक्षिक दर्शन, विद्यार्थी केन्द्रित सिकाइ र स्रोतको अभावले प्रतिभा रोकिनु हुँदैन भन्ने निष्ठा।',
      icon: <Lightbulb size={22} style={{ color: 'var(--accent-gold)' }} />,
      tagEn: 'Philosophy & Conviction',
      tagNe: 'उद्देश्य र दर्शन'
    },
    {
      num: '03',
      route: '/how-it-works?tab=03',
      titleEn: 'What Problems Am I Solving?',
      titleNe: 'म कुन समस्या समाधान गर्दैछु?',
      descEn: 'Addressing systemic gaps in Nepal: limited hands-on experimentation, weak research culture, missing innovation pipelines, and youth talent leaving.',
      descNe: 'घोकन्ते सिकाइ, प्रयोगशाला र मेन्टरको अभाव, र स्वदेशमै अवसर नपाएर प्रतिभा पलायन हुने समस्याको संस्थागत समाधान।',
      icon: <FlaskConical size={22} style={{ color: 'var(--accent-gold)' }} />,
      tagEn: 'Systemic Gaps & Fixes',
      tagNe: 'समस्या र समाधान'
    },
    {
      num: '04',
      route: '/what-we-built',
      titleEn: 'What Am I Creating?',
      titleNe: 'म के निर्माण गर्दैछु?',
      descEn: 'Hetauda Research & Innovation Center (HRIC), AstroNova Foundation Nepal, community STEM maker labs, youth incubation, and international science fair delegations.',
      descNe: 'HRIC, एष्ट्रोनोभा फाउण्डेशन, सामुदायिक मेकर स्पेस, रोबोटिक्स ल्याब र अन्तर्राष्ट्रिय मञ्चका अवसरहरू।',
      icon: <Building2 size={22} style={{ color: 'var(--accent-gold)' }} />,
      tagEn: 'Institutions & Ecosystem',
      tagNe: 'संस्था र प्रणाली'
    },
    {
      num: '05',
      route: '/how-it-works?tab=05',
      titleEn: 'How I Create Value?',
      titleNe: 'म कसरी मूल्य सिर्जना गर्छु?',
      descEn: 'Signature framework "From Curiosity to Commerce": 7-stage pathway transforming classroom ideas into prototypes, mentors, industry, and societal value.',
      descNe: 'जिज्ञासादेखि वाणिज्यसम्म: अनुसन्धान र प्रोटोटाइपलाई बजार, उद्योग र सामाजिक मूल्यमा रूपान्तरण गर्ने ७ चरणको विधि।',
      icon: <TrendingUp size={22} style={{ color: 'var(--accent-gold)' }} />,
      tagEn: 'Curiosity to Commerce',
      tagNe: 'मूल्य सिर्जना ढाँचा'
    },
    {
      num: '06',
      route: '/collaborate',
      titleEn: 'What Future Am I Building?',
      titleNe: 'म कस्तो भविष्य निर्माण गर्दैछु?',
      descEn: 'Long-term vision for Bagmati Province and Nepal as an innovation hub; partnership invitations for schools, universities, municipalities, and global mentors.',
      descNe: 'बागमती प्रदेश र नेपाललाई विज्ञान-प्रविधिको केन्द्र बनाउने दीर्घकालीन दृष्टि तथा सहकार्यको आह्वान।',
      icon: <Globe size={22} style={{ color: 'var(--accent-gold)' }} />,
      tagEn: 'Vision & Collaboration',
      tagNe: 'भविष्य र सहकार्य'
    }
  ];

  // At-a-glance four core credentials
  const coreCredentials = [
    {
      titleEn: "Master's in Mathematics",
      titleNe: "गणितमा स्नातकोत्तर",
      detailEn: "Tribhuvan University (Pure & Applied Mathematics)",
      detailNe: "त्रिभुवन विश्वविद्यालय (सैद्धान्तिक तथा व्यावहारिक गणित)",
      icon: <GraduationCap size={24} style={{ color: 'var(--accent-gold)' }} />
    },
    {
      titleEn: "18+ Years in Education",
      titleNe: "१८+ वर्ष शैक्षिक अनुभव",
      detailEn: "Classroom teaching, curriculum pedagogy & teacher mentorship",
      detailNe: "कक्षाकोठा शिक्षण, पाठ्यक्रम विकास र शिक्षक क्षमता अभिवृद्धि",
      icon: <BookOpen size={24} style={{ color: 'var(--accent-gold)' }} />
    },
    {
      titleEn: "Former School Principal",
      titleNe: "पूर्व विद्यालय प्रधानाध्यापक",
      detailEn: "Bal Sahitya Kendra — Institutional governance & STEM labs",
      detailNe: "बाल साहित्य केन्द्र — शैक्षिक नेतृत्व तथा व्यावहारिक प्रयोगशाला",
      icon: <Award size={24} style={{ color: 'var(--accent-gold)' }} />
    },
    {
      titleEn: "Former Campus Chief",
      titleNe: "पूर्व क्याम्पस प्रमुख",
      detailEn: "Higher Education Management & Academic Administration",
      detailNe: "उच्च शिक्षा व्यवस्थापन, प्राज्ञिक प्रशासन तथा शोध निर्देशन",
      icon: <Briefcase size={24} style={{ color: 'var(--accent-gold)' }} />
    }
  ];

  // Verified Work & Impact Highlights
  const verifiedImpact = [
    {
      titleEn: "Taiwan International Science Fair (TISF)",
      titleNe: "ताइवान अन्तर्राष्ट्रिय विज्ञान प्रदर्शनी (TISF)",
      roleEn: "Country Leader & Delegation Head for Nepal",
      roleNe: "कन्ट्री लिडर तथा प्रतिनिधिमण्डल प्रमुख — नेपाल",
      descEn: "Led Nepal's national student delegations to Taipei, showcasing youth research in engineering, technology, and environmental science before global juries.",
      descNe: "नेपाली विद्यार्थी अनुसन्धानकर्ताहरूको राष्ट्रिय टोलीलाई ताइपेईमा नेतृत्व गर्दै विश्व निर्णायक मण्डलसमक्ष अनुसन्धान प्रस्तुत गराएको।",
      image: "/images/tisf.png",
      badge: "International Delegation"
    },
    {
      titleEn: "Hetauda Research & Innovation Center (HRIC)",
      titleNe: "हेटौंडा रिसर्च एण्ड इनोभेसन सेन्टर (HRIC)",
      roleEn: "Founder & Director",
      roleNe: "संस्थापक तथा निर्देशक",
      descEn: "Established Bagmati Province's pioneering decentralized public innovation lab, equipping public school students with 3D prototyping, IoT robotics, and mentor desks.",
      descNe: "हेटौंडामा बागमती प्रदेशकै पहिलो विकेन्द्रित सार्वजनिक नवप्रवर्तन केन्द्र स्थापना गरी विद्यार्थीहरूलाई थ्रीडी प्रोटोटाइपिङ र रोबोटिक्स सुविधा उपलब्ध गराएको।",
      image: "/images/hric.png",
      badge: "Grassroots Lab"
    },
    {
      titleEn: "Summer STEAM & Space Expos (AstroNova)",
      titleNe: "समर STEAM तथा अन्तरिक्ष एक्सपो (एष्ट्रोनोभा)",
      roleEn: "President, AstroNova Foundation Nepal",
      roleNe: "अध्यक्ष, एष्ट्रोनोभा फाउण्डेशन नेपाल",
      descEn: "Organizing regional science congresses, telescope astronomy workshops, and hands-on maker fairs inspiring thousands of rural and urban learners.",
      descNe: "हजारौं विद्यार्थीलाई लक्षित गरी टेलिस्कोप अवलोकन, रकेटरी, र व्यावहारिक विज्ञान कार्यशालाहरूको निरन्तर आयोजना।",
      image: "/images/astronova.png",
      badge: "Youth Outreach"
    },
    {
      titleEn: "Mathematical Association of Nepal (MAN)",
      titleNe: "गणित समाज नेपाल (MAN) बागमती",
      roleEn: "Province Secretary & Pedagogical Mentor",
      roleNe: "प्रदेश सचिव तथा शिक्षण विधि मेन्टर",
      descEn: "Spearheading modern conceptual mathematics education, teacher pedagogical training, and student olympiad pathways across Bagmati Province.",
      descNe: "बागमती प्रदेशभर गणित शिक्षण विधिलाई व्यावहारिक बनाउन शिक्षक तालिम, प्राज्ञिक गोष्ठी र गणित ओलम्पियाड सञ्चालन।",
      image: "/images/math-society.png",
      badge: "Academic Society"
    }
  ];

  return (
    <div className="animate-fade-in" style={{ backgroundColor: 'var(--bg-primary)' }}>
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section 
        style={{
          paddingTop: 'clamp(3rem, 5.5vw, 5.5rem)',
          paddingBottom: 'clamp(3.5rem, 6vw, 6rem)',
          borderBottom: '1px solid var(--border-light)',
          backgroundColor: 'var(--bg-primary)'
        }}
      >
        <div className="container">
          <div className="grid-12" style={{ alignItems: 'center', rowGap: '3rem' }}>
            
            {/* Left Column: Typographic Executive Presentation */}
            <div style={{ gridColumn: 'span 7', width: '100%' }}>
              
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span 
                  style={{
                    fontFamily: 'var(--font-mono, monospace)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    backgroundColor: 'var(--bg-alt)',
                    color: 'var(--accent-gold)',
                    border: '1px solid var(--border-light)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '2px'
                  }}
                >
                  {language === 'ne' ? 'कार्यकारी पोर्टफोलियो' : 'EXECUTIVE PORTFOLIO'}
                </span>
                <span 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.08em'
                  }}
                >
                  BAGMATI PROVINCE · NEPAL
                </span>
              </div>

              {/* Full Name */}
              <h1 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.6rem, 5.2vw, 4.2rem)',
                  fontWeight: 700,
                  lineHeight: 1.08,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem'
                }}
              >
                {language === 'ne' ? person.nepaliName : tF(person.fullName)}
              </h1>

              {/* Professional Identity */}
              <p 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1rem, 1.8vw, 1.22rem)',
                  fontWeight: 600,
                  color: 'var(--accent-blue)',
                  lineHeight: 1.45,
                  marginBottom: '0.75rem'
                }}
              >
                {language === 'ne' 
                  ? 'शिक्षासेवी · गणितज्ञ · अनुसन्धान तथा नवप्रवर्तन इकोसिस्टम निर्माता'
                  : 'Educationist | Mathematician | Research & Innovation Ecosystem Builder'}
              </p>

              {/* Signature Line */}
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.08rem',
                  fontStyle: 'italic',
                  color: 'var(--accent-gold)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Sparkles size={16} />
                "{language === 'ne' ? 'जिज्ञासादेखि वाणिज्यसम्म' : 'From Curiosity to Commerce'}"
              </p>

              {/* One-Sentence Introduction */}
              <p 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.02rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  maxWidth: '640px',
                  marginBottom: '2rem'
                }}
              >
                {language === 'ne'
                  ? '१८ वर्षको प्राज्ञिक नेतृत्वलाई स्थानीय अनुसन्धान, युवा मेन्टरशिप र आधुनिक आविष्कारसँग जोडेर नेपालका विद्यार्थीहरूको प्रतिभालाई वास्तविक सामाजिक र आर्थिक मूल्यमा रूपान्तरण गर्ने अभियान।'
                  : 'Uniting 18 years of academic leadership with grassroots research and youth mentorship to transform curious minds into real-world scientific innovators across Nepal.'}
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="#six-questions"
                  className="btn-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none'
                  }}
                >
                  <span>{language === 'ne' ? '६ मुख्य प्रश्नहरू हेर्नुहोस् ↓' : 'Explore 6 Questions ↓'}</span>
                </a>

                <button
                  onClick={() => setIsCVModalOpen(true)}
                  className="btn-secondary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer'
                  }}
                >
                  <Download size={15} style={{ color: 'var(--accent-gold)' }} />
                  <span>{language === 'ne' ? 'प्रमाणित CV हेर्नुहोस्' : 'View Verified CV'}</span>
                </button>
              </div>

            </div>

            {/* Right Column: Professional Authentic Portrait */}
            <div style={{ gridColumn: 'span 5', width: '100%' }}>
              <div 
                style={{
                  position: 'relative',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  padding: '0.75rem',
                  borderRadius: '4px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.06)'
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '2px', backgroundColor: '#EDEAE2' }}>
                  <img 
                    src={person.profileImage}
                    alt="Kishan Bastola Portrait"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '480px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(15, 44, 74, 0.85) 0%, rgba(15, 44, 74, 0) 100%)',
                      padding: '2rem 1.25rem 1rem 1.25rem',
                      color: '#FFFFFF'
                    }}
                  >
                    <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700 }}>
                      {language === 'ne' ? 'किशन बास्तोला' : 'Kishan Bastola'}
                    </p>
                    <p style={{ margin: '0.2rem 0 0 0', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', opacity: 0.9 }}>
                      {language === 'ne' ? 'संस्थापक तथा निर्देशक, HRIC · अध्यक्ष, एष्ट्रोनोभा' : 'Founder & Director, HRIC · President, AstroNova'}
                    </p>
                  </div>
                </div>

                {/* Subtle verified pill badge */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    borderRadius: '20px',
                    padding: '0.3rem 0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                  }}
                >
                  <ShieldCheck size={14} style={{ color: 'var(--accent-gold)' }} />
                  <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {language === 'ne' ? 'प्रमाणित रेकर्ड' : 'Verified Profile'}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. AT-A-GLANCE CREDENTIALS */}
      {/* ========================================================================= */}
      <section 
        style={{
          paddingTop: '3.5rem',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid var(--border-light)',
          backgroundColor: 'var(--bg-alt)'
        }}
      >
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <span 
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                display: 'block',
                marginBottom: '0.25rem'
              }}
            >
              {language === 'ne' ? 'प्राज्ञिक तथा नेतृत्व योग्यता' : 'ACADEMIC & LEADERSHIP SUMMARY'}
            </span>
            <h2 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.85rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                margin: 0
              }}
            >
              {language === 'ne' ? 'प्रमुख योग्यता र नेतृत्व पृष्ठभूमि' : 'At-a-Glance Credentials'}
            </h2>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {coreCredentials.map((cred, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  borderLeft: '4px solid var(--accent-gold)',
                  borderRadius: '4px',
                  padding: '1.5rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem'
                }}
              >
                <div>{cred.icon}</div>
                <div>
                  <h3 
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.18rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      margin: '0 0 0.35rem 0'
                    }}
                  >
                    {language === 'ne' ? cred.titleNe : cred.titleEn}
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.84rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      margin: 0
                    }}
                  >
                    {language === 'ne' ? cred.detailNe : cred.detailEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SIX-QUESTION NAVIGATION TILES */}
      {/* ========================================================================= */}
      <section 
        id="six-questions"
        style={{
          paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
          borderBottom: '1px solid var(--border-light)',
          backgroundColor: 'var(--bg-primary)'
        }}
      >
        <div className="container">
          
          <div style={{ maxWidth: '780px', marginBottom: '3rem' }}>
            <span 
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                display: 'block',
                marginBottom: '0.35rem'
              }}
            >
              {language === 'ne' ? 'मुख्य ६ प्रश्नहरू · प्राथमिक गन्तव्यहरू' : 'PRIMARY DESTINATIONS · 6 QUESTIONS'}
            </span>
            <h2 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.18,
                margin: '0 0 0.85rem 0'
              }}
            >
              {language === 'ne' 
                ? 'व्यक्तिको यात्रा र काम बुझ्ने ६ आधारभूत प्रश्नहरू' 
                : 'Explore the Journey Through Six Core Inquiries'}
            </h2>
            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.98rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                margin: 0
              }}
            >
              {language === 'ne'
                ? 'परम्परागत "About / Skills" शैलीभन्दा पर, आगन्तुकलाई व्यक्तिको पृष्ठभूमि, उद्देश्य, समस्या समाधान र भविष्यको दृष्टिसँग जोड्ने समर्पित पृष्ठहरू।'
                : 'Moving beyond conventional resume menus to a question-led editorial narrative that guides you through Kishan Bastola’s background, philosophy, institutional achievements, and future vision.'}
            </p>
          </div>

          {/* 6 Visual Cards Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {questionCards.map((card) => (
              <Link
                key={card.num}
                to={card.route}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  borderRadius: '6px',
                  padding: '2rem 1.75rem',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
                  transition: 'all 0.25s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-gold)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 44, 74, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.03)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <span 
                      style={{
                        fontFamily: 'var(--font-mono, monospace)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        backgroundColor: 'var(--bg-alt)',
                        color: 'var(--accent-blue)',
                        border: '1px solid var(--border-light)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '3px'
                      }}
                    >
                      {card.num}
                    </span>
                    <span 
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        color: 'var(--accent-gold)',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {language === 'ne' ? card.tagNe : card.tagEn}
                    </span>
                  </div>

                  <h3 
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.25,
                      marginBottom: '0.75rem'
                    }}
                  >
                    {language === 'ne' ? card.titleNe : card.titleEn}
                  </h3>

                  <p 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      lineHeight: 1.55,
                      color: 'var(--text-secondary)',
                      margin: '0 0 1.5rem 0'
                    }}
                  >
                    {language === 'ne' ? card.descNe : card.descEn}
                  </p>
                </div>

                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    color: 'var(--accent-blue)',
                    borderTop: '1px solid var(--border-light)',
                    paddingTop: '1rem'
                  }}
                >
                  <span>{language === 'ne' ? 'विस्तृत हेर्नुहोस्' : 'Explore'}</span>
                  <ArrowRight size={15} style={{ color: 'var(--accent-gold)' }} />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. LEADERSHIP SNAPSHOT */}
      {/* ========================================================================= */}
      <section 
        style={{
          paddingTop: 'clamp(3rem, 5vw, 5rem)',
          paddingBottom: 'clamp(3rem, 5vw, 5rem)',
          borderBottom: '1px solid var(--border-light)',
          backgroundColor: 'var(--bg-alt)'
        }}
      >
        <div className="container">
          
          <div style={{ maxWidth: '720px', marginBottom: '2.5rem' }}>
            <span 
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                display: 'block',
                marginBottom: '0.25rem'
              }}
            >
              {language === 'ne' ? 'संस्थागत भूमिका' : 'INSTITUTIONAL ROLES'}
            </span>
            <h2 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.95rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                margin: 0
              }}
            >
              {language === 'ne' ? 'वर्तमान नेतृत्व तथा जिम्मेवारी' : 'Leadership Snapshot'}
            </h2>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {leadership.slice(0, 4).map((item) => (
              <div 
                key={item.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px',
                  padding: '1.5rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono, monospace)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: 'var(--accent-gold)'
                    }}
                  >
                    {item.period}
                  </span>
                  <CheckCircle2 size={15} style={{ color: 'var(--accent-blue)' }} />
                </div>

                <h3 
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: '0 0 0.35rem 0'
                  }}
                >
                  {language === 'ne' ? tF(item.role) : tF(item.role)}
                </h3>

                <p 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--accent-blue)',
                    margin: '0 0 0.75rem 0'
                  }}
                >
                  {language === 'ne' ? tF(item.organization) : tF(item.organization)}
                </p>

                <p 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.82rem',
                    lineHeight: 1.5,
                    color: 'var(--text-secondary)',
                    margin: 0
                  }}
                >
                  {language === 'ne' ? tF(item.description) : tF(item.description)}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FEATURED CONCEPT: FROM CURIOSITY TO COMMERCE PATHWAY GRAPHIC */}
      {/* ========================================================================= */}
      <section 
        style={{
          paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
          borderBottom: '1px solid var(--border-light)',
          backgroundColor: 'var(--bg-primary)'
        }}
      >
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
            <span 
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                display: 'block',
                marginBottom: '0.4rem'
              }}
            >
              {language === 'ne' ? 'हस्ताक्षर अवधारणा' : 'SIGNATURE FRAMEWORK'}
            </span>
            <h2 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                margin: '0 0 1rem 0'
              }}
            >
              {language === 'ne' ? 'जिज्ञासादेखि वाणिज्यसम्मको रूपरेखा' : 'From Curiosity to Commerce'}
            </h2>
            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.98rem',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                margin: 0
              }}
            >
              {language === 'ne'
                ? 'वाणिज्यको अर्थ विद्यार्थीलाई व्यापारमा धकेल्नु होइन; यसको अर्थ अनुसन्धानलाई वास्तविक सामाजिक उपयोग, स्थानीय उद्योग र अर्थतन्त्रसँग जोडेर दिगो मूल्य सिर्जना गर्नु हो।'
                : 'Clarifying that commerce does not mean simply pushing students into businesses—it means translating curiosity and academic research into tangible real-world application, social impact, and market relevance.'}
            </p>
          </div>

          {/* Simple 7-Stage Horizontal / Grid Pathway Graphic */}
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border-light)',
              borderRadius: '8px',
              padding: '2.5rem 1.75rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              marginBottom: '2.5rem'
            }}
          >
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1rem',
                alignItems: 'center'
              }}
            >
              {ecosystem.pipeline.map((step, idx) => (
                <div 
                  key={step.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '1rem 0.5rem',
                    backgroundColor: 'var(--bg-alt)',
                    borderRadius: '4px',
                    border: '1px solid var(--border-light)',
                    position: 'relative'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono, monospace)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: 'var(--accent-gold)',
                      marginBottom: '0.35rem'
                    }}
                  >
                    STEP 0{idx + 1}
                  </span>
                  <span 
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem'
                    }}
                  >
                    {tF(step.stage)}
                  </span>
                  <span 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.3
                    }}
                  >
                    {language === 'ne' ? tF(step.description).slice(0, 45) + '...' : tF(step.description).slice(0, 45) + '...'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              to="/how-it-works?tab=05"
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none'
              }}
            >
              <span>{language === 'ne' ? 'पूर्ण ७-चरणीय विधि र स्टेकहोल्डर म्याट्रिक्स हेर्नुहोस्': 'Explore 7-Stage Framework & Matrix'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SELECTED WORK AND IMPACT */}
      {/* ========================================================================= */}
      <section 
        style={{
          paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
          borderBottom: '1px solid var(--border-light)',
          backgroundColor: 'var(--bg-alt)'
        }}
      >
        <div className="container">
          
          <div style={{ maxWidth: '780px', marginBottom: '3rem' }}>
            <span 
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                display: 'block',
                marginBottom: '0.35rem'
              }}
            >
              {language === 'ne' ? 'प्रमाणित परिणाम र तस्बिरहरू' : 'VERIFIED IMPACT & DOCUMENTATION'}
            </span>
            <h2 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                margin: '0 0 0.85rem 0'
              }}
            >
              {language === 'ne' ? 'प्रमुख कार्य तथा ऐतिहासिक उपलब्धिहरू' : 'Selected Work & Impact'}
            </h2>
            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.98rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                margin: 0
              }}
            >
              {language === 'ne'
                ? 'केवल प्रमाणित परियोजनाहरू, अन्तर्राष्ट्रिय मञ्चका तस्बिरहरू र बागमती प्रदेशमा हासिल गरिएका ठोस उपलब्धिहरू।'
                : 'Displaying strictly verified projects, youth research delegations, grassroots maker milestones, and authentic event documentation.'}
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {verifiedImpact.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ position: 'relative', height: '210px', backgroundColor: '#EDEAE2', overflow: 'hidden' }}>
                  <img 
                    src={item.image}
                    alt={item.titleEn}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      backgroundColor: 'rgba(15, 44, 74, 0.9)',
                      color: '#FFFFFF',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-mono, monospace)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '2px',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {item.badge}
                  </div>
                </div>

                <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.22rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '0.35rem'
                      }}
                    >
                      {language === 'ne' ? item.titleNe : item.titleEn}
                    </h3>
                    <p 
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--accent-blue)',
                        marginBottom: '0.75rem'
                      }}
                    >
                      {language === 'ne' ? item.roleNe : item.roleEn}
                    </p>
                    <p 
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.86rem',
                        lineHeight: 1.55,
                        color: 'var(--text-secondary)',
                        margin: 0
                      }}
                    >
                      {language === 'ne' ? item.descNe : item.descEn}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link
              to="/what-am-i-creating"
              className="btn-secondary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none'
              }}
            >
              <span>{language === 'ne' ? 'संस्थागत इकोसिस्टम तथा पूर्ण अभिलेख हेर्नुहोस्' : 'Explore Initiatives & Archive'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. COLLABORATION INVITATION AND CONTACT LINKS */}
      {/* ========================================================================= */}
      <section 
        style={{
          paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
          backgroundColor: 'var(--bg-primary)'
        }}
      >
        <div className="container">
          
          <div 
            style={{
              backgroundColor: 'var(--bg-alt)',
              border: '1px solid var(--border-light)',
              borderLeft: '5px solid var(--accent-gold)',
              borderRadius: '6px',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
            }}
          >
            <div className="grid-12" style={{ alignItems: 'center', rowGap: '2rem' }}>
              
              <div style={{ gridColumn: 'span 8', width: '100%' }}>
                <span 
                  style={{
                    fontFamily: 'var(--font-mono, monospace)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold)',
                    display: 'block',
                    marginBottom: '0.4rem'
                  }}
                >
                  {language === 'ne' ? 'सहकार्यको आह्वान' : 'COLLABORATION INVITATION'}
                </span>
                <h2 
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    lineHeight: 1.2,
                    margin: '0 0 1rem 0'
                  }}
                >
                  {language === 'ne' 
                    ? 'नेपाललाई नवप्रवर्तनको केन्द्र बनाउन हातेमालो गरौं' 
                    : 'Shall We Build the Future of Science in Nepal Together?'}
                </h2>
                <p 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.98rem',
                    lineHeight: 1.65,
                    color: 'var(--text-secondary)',
                    maxWidth: '680px',
                    margin: '0 0 1.5rem 0'
                  }}
                >
                  {language === 'ne'
                    ? 'हामी विद्यालय, विश्वविद्यालय, स्थानीय सरकार, अनुसन्धानकर्ता र दातृ निकायहरूसँग संयुक्त अनुसन्धान, STEAM प्रयोगशाला स्थापना, र युवा मेन्टरशिपमा सहकार्य गर्न सधैं खुला छौं।'
                    : 'Open to active partnerships with schools, universities, municipal leaders, researchers, and global mentors to establish innovation labs and mentor the next generation.'}
                </p>

                {/* Direct Contact Badges */}
                <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Mail size={16} style={{ color: 'var(--accent-gold)' }} />
                    <a 
                      href={`mailto:${contact.email}`} 
                      style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-primary)', textDecoration: 'none' }}
                    >
                      {contact.email}
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Phone size={16} style={{ color: 'var(--accent-gold)' }} />
                    <a 
                      href={`tel:${contact.phone}`} 
                      style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-primary)', textDecoration: 'none' }}
                    >
                      {contact.phone}
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MapPin size={16} style={{ color: 'var(--accent-gold)' }} />
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      Hetauda-4, Makwanpur, Nepal
                    </span>
                  </div>
                </div>

                <Link
                  to="/collaborate"
                  className="btn-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none'
                  }}
                >
                  <span>{language === 'ne' ? 'विस्तृत सहकार्य प्रस्ताव तथा संवाद पृष्ठ' : 'Send Direct Collaboration Inquiry'}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div style={{ gridColumn: 'span 4', width: '100%', textAlign: 'center' }}>
                <div 
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    borderRadius: '6px',
                    padding: '1.75rem',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.03)'
                  }}
                >
                  <Users size={32} style={{ color: 'var(--accent-gold)', marginBottom: '0.75rem' }} />
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.5rem 0' }}>
                    {language === 'ne' ? 'साझेदारी प्रोफाइलहरू' : 'Partnership Profiles'}
                  </h4>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {language === 'ne'
                      ? 'विद्यालय, विश्वविद्यालय, पालिका तथा उद्योगीहरूका लागि छुट्टाछुट्टै सहकार्य ढाँचाहरू।'
                      : 'Tailored pathways for Schools, Academic Researchers, Municipalities, and Philanthropic Partners.'}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Verified CV Modal */}
      <CVModal 
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

    </div>
  );
};
