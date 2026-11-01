import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Plus, Minus, Award, GraduationCap, Briefcase, ChevronRight, ArrowRight, HelpCircle } from 'lucide-react';
import { person, CREDENTIALS_DATA, education, experience, leadership, SIX_QUESTIONS } from '../data/sourceFacts';
import { useLanguage } from '../context/LanguageContext';

interface ChapterWhoAmIProps {
  onOpenCV?: () => void;
}

export const ChapterWhoAmI: React.FC<ChapterWhoAmIProps> = ({ onOpenCV }) => {
  const { language, tF, tA } = useLanguage();
  const [showTimeline, setShowTimeline] = useState(false);

  const displayBio = tA(person.biography);

  const handleDownloadCV = () => {
    if (onOpenCV) {
      onOpenCV();
    } else {
      window.open('/cv.pdf', '_blank');
    }
  };

  return (
    <section 
      id="who-am-i"
      style={{
        paddingTop: 'clamp(2.5rem, 5vw, 4.5rem)',
        paddingBottom: 'clamp(3.5rem, 7vw, 6rem)',
        borderBottom: '1px solid var(--border-light)',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      <div className="container">
        
        {/* Chapter Metatag */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-light)',
            paddingBottom: '0.85rem',
            marginBottom: '2.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)'
              }}
            >
              {language === 'ne' ? 'प्रश्न ०१' : 'QUESTION 01'}
            </span>
            <span style={{ color: 'var(--border-dark)', fontSize: '0.78rem' }}>/</span>
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)'
              }}
            >
              {language === 'ne' ? 'मेरो पृष्ठभूमि, शिक्षा र यात्रा' : 'WHAT SHAPED ME ?'}
            </span>
          </div>

          <span 
            style={{ 
              fontFamily: 'var(--font-sans)', 
              fontSize: '0.75rem', 
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            BAGMATI PROVINCE · NEPAL
          </span>
        </div>

        {/* Hero Section: Asymmetric Composition */}
        <div className="grid-12" style={{ alignItems: 'center', rowGap: '3rem', marginBottom: '4rem' }}>
          
          {/* Left Column: Typographic Hero */}
          <div style={{ gridColumn: 'span 7', width: '100%' }}>
            
            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                marginBottom: '1rem'
              }}
            >
              {language === 'ne' ? 'कार्यकारी पोर्टफोलियो तथा अभिलेख' : 'EXECUTIVE PORTFOLIO & ARCHIVE'}
            </p>

            <h1 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 4.8vw, 4rem)',
                fontWeight: 700,
                lineHeight: 1.06,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                marginBottom: '1.25rem'
              }}
            >
              {language === 'ne' ? person.nepaliName : tF(person.fullName)}
            </h1>

            <p 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                fontStyle: 'italic',
                color: 'var(--accent-blue)',
                lineHeight: 1.4,
                marginBottom: '1.5rem',
                maxWidth: '640px'
              }}
            >
              {tF(person.professionalTitle)}
            </p>

            {/* Signature Concept */}
            <div 
              style={{
                display: 'inline-block',
                borderLeft: '3px solid var(--accent-gold)',
                paddingLeft: '1.25rem',
                marginBottom: '2rem',
                backgroundColor: 'rgba(180, 130, 34, 0.04)',
                paddingTop: '0.6rem',
                paddingBottom: '0.6rem',
                paddingRight: '1rem',
                borderRadius: '0 4px 4px 0'
              }}
            >
              <span 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  display: 'block',
                  marginBottom: '0.2rem'
                }}
              >
                {language === 'ne' ? 'मार्गदर्शन अवधारणा' : 'SIGNATURE CONCEPT'}
              </span>
              <p 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)',
                  fontWeight: 600,
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                  margin: 0
                }}
              >
                "{tF(person.tagline)}"
              </p>
            </div>

            {/* Concise Mission / Bio summary */}
            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '2.25rem',
                maxWidth: '620px'
              }}
            >
              {tF(person.shortBiography)}
            </p>

            {/* Action Group: CV Download + Visual Link to Ecosystem */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
              <button 
                onClick={handleDownloadCV}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  backgroundColor: 'var(--text-primary)',
                  padding: '0.85rem 1.6rem',
                  border: 'none',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  letterSpacing: '0.03em',
                  transition: 'background-color 0.2s ease, transform 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-blue)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--text-primary)')}
              >
                <Download size={18} />
                {language === 'ne' ? 'CV डाउनलोड गर्नुहोस् ↓' : 'Download CV ↓'}
              </button>

              <Link
                to="/how-it-works"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  backgroundColor: 'transparent',
                  padding: '0.85rem 1.4rem',
                  border: '1px solid var(--border-dark)',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-alt)';
                  e.currentTarget.style.borderColor = 'var(--accent-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'var(--border-dark)';
                }}
              >
                <span>{language === 'ne' ? 'इकोसिस्टम कसरी चल्छ हेर्नुहोस्' : 'Discover How It Works'}</span>
                <ChevronRight size={16} />
              </Link>
            </div>

          </div>

          {/* Right Column: Carefully Cropped Photography */}
          <div style={{ gridColumn: 'span 5', width: '100%' }}>
            <div 
              style={{
                position: 'relative',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
                backgroundColor: 'var(--card-bg)',
                boxShadow: '0 16px 36px rgba(24, 27, 30, 0.08)'
              }}
            >
              <img 
                src={person.profileImage}
                alt={tF(person.fullName)}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                  maxHeight: '480px'
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(180deg, transparent 0%, rgba(24, 27, 30, 0.92) 100%)',
                  padding: '1.5rem 1.5rem 1.25rem 1.5rem',
                  color: '#FFFFFF'
                }}
              >
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600, color: '#FFFFFF', margin: 0 }}>
                  {language === 'ne' ? person.nepaliName : tF(person.fullName)}
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--accent-gold-light)', margin: '0.25rem 0 0 0', lineHeight: 1.35 }}>
                  {language === 'ne' ? 'अध्यक्ष — एष्ट्रोनोभा फाउण्डेशन नेपाल · निर्देशक — HRIC' : 'President — Astronova Foundation Nepal · Director — HRIC'}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SIX-QUESTION NARRATIVE ROADMAP (Developer Brief Section 4) */}
        {/* ========================================================================= */}
        <div 
          style={{
            marginTop: '1rem',
            marginBottom: '4.5rem',
            padding: '2.5rem 2rem',
            backgroundColor: 'var(--bg-alt)',
            border: '1px solid var(--border-light)',
            borderRadius: '4px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.02)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
            <HelpCircle size={18} style={{ color: 'var(--accent-gold)' }} />
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)'
              }}
            >
              {language === 'ne' ? '६-प्रश्नमा आधारित कथा रूपरेखा' : 'THE 6-QUESTION NARRATIVE ROADMAP'}
            </span>
          </div>

          <h2 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: 'var(--text-primary)',
              margin: '0 0 0.75rem 0'
            }}
          >
            {language === 'ne' 
              ? 'आगन्तुकलाई व्यक्तिको कथा र प्रणाली बुझ्न प्रेरित गर्ने ६ मूल प्रश्नहरू'
              : 'Six Inquiries That Define the Trajectory from Curiosity to Commerce'}
          </h2>

          <p 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.94rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: '780px',
              margin: '0 0 2rem 0'
            }}
          >
            {language === 'ne'
              ? 'परम्परागत बायोडाटाभन्दा पर, यो वेबसाइटले व्यक्तिको पृष्ठभूमि, दर्शन, समाधान, संस्थागत संरचना, ७-चरणीय मूल्य सिर्जना र सहकार्यलाई उत्तरका रूपमा प्रस्तुत गर्दछ। कुनै पनि प्रश्नमा क्लिक गरी सिधै जानुहोस्:'
              : 'Instead of a conventional resume, this portfolio unfolds as six purposeful inquiries—guiding you through personal roots, educational philosophy, systemic problem solving, institutional creation, value translation, and future collaboration:'}
          </p>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {SIX_QUESTIONS.map((q) => (
              <Link
                key={q.id}
                to={`${q.route}#${q.anchor}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px',
                  padding: '1.4rem 1.25rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-gold)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(180, 130, 34, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.02)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                    <span 
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: 'var(--accent-gold)'
                      }}
                    >
                      {q.number}
                    </span>
                    <ArrowRight size={15} style={{ color: 'var(--text-muted)' }} />
                  </div>

                  <h3 
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.08rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.3,
                      margin: '0 0 0.35rem 0'
                    }}
                  >
                    {language === 'ne' ? q.titleNe : q.titleEn}
                  </h3>

                  <p 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.82rem',
                      fontStyle: 'italic',
                      color: 'var(--accent-blue)',
                      margin: '0 0 0.65rem 0',
                      lineHeight: 1.4
                    }}
                  >
                    {language === 'ne' ? q.meaningNe : q.titleNe}
                  </p>

                  <p 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.84rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      margin: 0
                    }}
                  >
                    {language === 'ne' ? q.summaryNe : q.summaryEn}
                  </p>
                </div>

                <div 
                  style={{
                    marginTop: '1rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--accent-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}
                >
                  <span>{language === 'ne' ? 'अध्याय हेर्नुहोस्' : 'Explore Question'}</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 02. WHAT DRIVES ME? (मलाई कुन उद्देश्य, विश्वास र दर्शनले अघि बढाउँछ?) */}
        {/* ========================================================================= */}
        <div id="what-drives-me" style={{ scrollMarginTop: '6rem', marginTop: '4.5rem', paddingTop: '3rem', borderTop: '1px solid var(--border-light)' }}>
          
          {/* Question 02 Narrative Framework Banner */}
          <div 
            style={{
              backgroundColor: 'var(--bg-alt)',
              border: '1px solid var(--border-light)',
              borderLeft: '4px solid var(--accent-gold)',
              borderRadius: '4px',
              padding: '1.25rem 1.5rem',
              marginBottom: '2.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
              <span 
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  backgroundColor: 'var(--accent-gold)',
                  color: '#FFFFFF',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '2px',
                  letterSpacing: '0.05em'
                }}
              >
                02. WHAT DRIVES ME?
              </span>
              <span 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)'
                }}
              >
                {language === 'ne' 
                  ? 'मलाई कुन उद्देश्य, विश्वास र दर्शनले अघि बढाउँछ?' 
                  : 'What Purpose, Conviction & Philosophy Drives Me?'}
              </span>
            </div>
            <p 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.96rem',
                fontStyle: 'italic',
                color: 'var(--accent-blue)',
                margin: '0 0 0.25rem 0'
              }}
            >
              {language === 'ne'
                ? 'शैक्षिक दर्शन, विद्यार्थी केन्द्रित सिकाइ, जिज्ञासा, गणित तथा वैज्ञानिक सोच, स्रोतको अभावले विद्यार्थीको सम्भावना रोकिनु हुँदैन भन्ने विश्वास।'
                : 'Education philosophy, student-centred learning, curiosity, mathematics and scientific thinking, belief that lack of resources should not prevent student potential, and the purpose behind the work.'}
            </p>
          </div>

          <div style={{ maxWidth: '820px', marginBottom: '2.5rem' }}>
            <h2 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}
            >
              {language === 'ne' 
                ? 'शैक्षिक दर्शन: स्रोतको अभावले कुनै पनि विद्यार्थीको सम्भावना रोकिनुहुन्न'
                : 'Educational Philosophy: Resource Constraints Must Never Limit Student Potential'}
            </h2>

            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                margin: 0
              }}
            >
              {language === 'ne'
                ? 'शिक्षा केवल कक्षाकोठामा घोकन्ते परीक्षा पास गर्नु होइन। मेरो उद्देश्य प्रत्येक विद्यार्थीभित्रको प्राकृतिक जिज्ञासालाई जगाउनु, तार्किक गणितीय सोच विकास गर्नु र उनीहरूलाई वास्तविक अनुसन्धान तथा नवप्रवर्तन गर्न सक्ने अवसर प्रदान गर्नु हो।'
                : 'True education transcends rote examination. My driving purpose is to awaken natural inquiry in learners, ground them in rigorous mathematical reasoning, and ensure that lack of funding or geographical isolation never stops a young mind from creating world-class scientific breakthroughs.'}
            </p>
          </div>

          {/* 4 Driving Pillars Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
              marginBottom: '3.5rem'
            }}
          >
            {[
              {
                num: '01',
                titleEn: 'Student-Centred Curiosity',
                titleNe: 'विद्यार्थी केन्द्रित जिज्ञासा',
                descEn: 'Shifting pedagogy from textbook memorization to active inquiry, hypothesis testing, and experiential project design.',
                descNe: 'पाठ्यपुस्तकको घोकन्ते सिकाइलाई हटाएर प्रश्न सोध्ने, प्रयोग गर्ने र परियोजना निर्माण गर्ने वातावरणको विकास।'
              },
              {
                num: '02',
                titleEn: 'Mathematics as Foundational Logic',
                titleNe: 'तर्क र समस्या समाधानको आधारका रूपमा गणित',
                descEn: 'Approaching mathematics not as dry formulae, but as the universal language of reasoning and systemic problem solving.',
                descNe: 'गणितलाई केवल शुष्क सूत्रका रूपमा नभई जीवन र विज्ञानका जटिल समस्या समाधान गर्ने तार्किक भाषाका रूपमा सिकाउने।'
              },
              {
                num: '03',
                titleEn: 'Democratizing Scientific Opportunity',
                titleNe: 'वैज्ञानिक अवसरको लोकतन्त्रीकरण',
                descEn: 'Ensuring public and regional school students receive equal access to advanced robotics, labs, and international jury competitions.',
                descNe: 'सहरी र दुर्गम दुवै क्षेत्रका विद्यार्थीलाई आधुनिक प्रयोगशाला, रोबोटिक्स र अन्तर्राष्ट्रिय मञ्चमा समान पहुँच।'
              },
              {
                num: '04',
                titleEn: 'Purpose-Driven Value Creation',
                titleNe: 'उद्देश्यमूलक मूल्य सिर्जना',
                descEn: 'Connecting classroom research with tangible community challenges, agriculture, regional technology, and sustainable enterprise.',
                descNe: 'कक्षाकोठाको अनुसन्धानलाई समुदाय, कृषि र स्थानीय प्रविधिमा लागू गरी वास्तविक सामाजिक तथा आर्थिक मूल्य सिर्जना गर्ने।'
              }
            ].map((pillar) => (
              <div
                key={pillar.num}
                style={{
                  backgroundColor: 'var(--bg-alt)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                }}
              >
                <div>
                  <span 
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: 'var(--accent-gold)',
                      display: 'block',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {pillar.num}
                  </span>
                  <h3 
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.08rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.3,
                      margin: '0 0 0.5rem 0'
                    }}
                  >
                    {language === 'ne' ? pillar.titleNe : pillar.titleEn}
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.86rem',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}
                  >
                    {language === 'ne' ? pillar.descNe : pillar.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 01. WHAT SHAPED ME? (मेरो पृष्ठभूमि, शिक्षा र यात्राले मलाई कसरी निर्माण गर्यो?) */}
        {/* ========================================================================= */}
        <div id="what-shaped-me" style={{ scrollMarginTop: '6rem', marginBottom: '4.5rem' }}>
          
          {/* Question 01 Narrative Framework Banner */}
          <div 
            style={{
              backgroundColor: 'var(--bg-alt)',
              border: '1px solid var(--border-light)',
              borderLeft: '4px solid var(--accent-gold)',
              borderRadius: '4px',
              padding: '1.25rem 1.5rem',
              marginBottom: '2.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
              <span 
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  backgroundColor: 'var(--accent-gold)',
                  color: '#FFFFFF',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '2px',
                  letterSpacing: '0.05em'
                }}
              >
                01. WHAT SHAPED ME?
              </span>
              <span 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)'
                }}
              >
                {language === 'ne' 
                  ? 'मेरो पृष्ठभूमि, शिक्षा र यात्राले मलाई कसरी निर्माण गर्यो?'
                  : 'How Did My Background, Education & Journey Shape Me?'}
              </span>
            </div>
            <p 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.96rem',
                fontStyle: 'italic',
                color: 'var(--accent-blue)',
                margin: '0 0 0.25rem 0'
              }}
            >
              {language === 'ne'
                ? 'व्यक्तिगत कथा, गणितमा स्नातकोत्तर, १८ वर्ष शिक्षामा, पूर्व विद्यालय प्रधानाध्यापक तथा क्याम्पस प्रमुख, क्यारियर टाइमलाइन र मुख्य मोडहरू।'
                : 'Personal story, Master’s Degree in Mathematics, 18 years in education, former School Principal and Campus Chief, career timeline, key turning points and professional development.'}
            </p>
          </div>

          <div className="grid-12" style={{ gap: '2.5rem', alignItems: 'start' }}>
            
            {/* Detailed Narrative Biography */}
            <div style={{ gridColumn: 'span 6', width: '100%' }}>
              <h2 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: 'var(--text-primary)',
                  marginBottom: '1.5rem'
                }}
              >
                {language === 'ne' 
                  ? 'कक्षाकोठादेखि अन्तर्राष्ट्रिय अनुसन्धान मञ्चसम्मको १८ वर्षे नेतृत्व'
                  : '18 Years of Bridging Classrooms, Mathematics & Innovation Ecosystems'}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                {displayBio.map((paragraph, idx) => (
                  <p 
                    key={idx}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.96rem',
                      lineHeight: 1.75,
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Bento Grid: Verified Credentials & Academic Qualifications */}
            <div style={{ gridColumn: 'span 6', width: '100%' }}>
              
              <span 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  display: 'block',
                  marginBottom: '0.75rem'
                }}
              >
                {language === 'ne' ? 'प्रमाणित योग्यता तथा नेतृत्व' : 'VERIFIED CREDENTIALS & LEADERSHIP'}
              </span>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem'
              }}
            >
              {/* Credentials Highlights from CREDENTIALS_DATA */}
              {CREDENTIALS_DATA.slice(0, 4).map((cred, idx) => (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: 'var(--bg-alt)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '4px',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--accent-gold)',
                      marginBottom: '0.35rem'
                    }}
                  >
                    {cred.label}
                  </span>
                  <span 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.82rem',
                      lineHeight: 1.4,
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {cred.detail}
                  </span>
                </div>
              ))}

              {/* Academic Foundation Box (Full Width in Grid) */}
              {education.map((edu) => (
                <div 
                  key={edu.id}
                  style={{
                    gridColumn: 'span 2',
                    backgroundColor: 'var(--bg-alt)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '4px',
                    padding: '1.35rem',
                    borderLeft: '4px solid var(--accent-blue)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <GraduationCap size={18} style={{ color: 'var(--accent-blue)' }} />
                    <span 
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-blue)'
                      }}
                    >
                      {language === 'ne' ? 'शैक्षिक योग्यता' : 'ACADEMIC FOUNDATION'}
                    </span>
                  </div>
                  <h3 
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      margin: '0 0 0.25rem 0'
                    }}
                  >
                    {tF(edu.degree)}
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.86rem',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}
                  >
                    {tF(edu.institution)} · {tF(edu.location)}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Progressive Disclosure: Academic & Executive Timeline */}
        <div style={{ marginTop: '3.5rem', paddingTop: '1.75rem', borderTop: '1px solid var(--border-light)' }}>
          <button 
            onClick={() => setShowTimeline(!showTimeline)}
            style={{
              background: 'transparent',
              border: 'none',
              fontFamily: 'var(--font-serif)',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: 'var(--accent-blue)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.4rem 0'
            }}
          >
            {showTimeline ? <Minus size={20} /> : <Plus size={20} />}
            {language === 'ne' 
              ? 'विस्तृत शैक्षिक तथा कार्यकारी समयरेखा हेर्नुहोस्'
              : 'View Complete Academic & Executive Governance Timeline'}
          </button>

          {showTimeline && (
            <div 
              style={{
                marginTop: '2rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem',
                backgroundColor: 'var(--bg-alt)',
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
                padding: '2.25rem'
              }}
            >
              {/* Institutional & Community Leadership */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <Award size={18} style={{ color: 'var(--accent-gold)' }} />
                  <h3 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-gold)',
                      margin: 0
                    }}
                  >
                    {language === 'ne' ? 'कार्यकारी तथा संस्थागत नेतृत्व' : 'Executive & Institutional Leadership'}
                  </h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                  {leadership.map((item) => (
                    <div key={item.id} style={{ borderLeft: '2px solid var(--border-dark)', paddingLeft: '1.1rem' }}>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                        {item.period}
                      </span>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.02rem', fontWeight: 600, margin: '0.15rem 0' }}>
                        {tF(item.role)}
                      </h4>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                        {tF(item.organization)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Past Professional Experience */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <Briefcase size={18} style={{ color: 'var(--accent-gold)' }} />
                  <h3 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-gold)',
                      margin: 0
                    }}
                  >
                    {language === 'ne' ? 'पूर्व अनुभव तथा शैक्षिक प्रशासन' : 'Past Experience & Academic Governance'}
                  </h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                  {experience.map((item) => (
                    <div key={item.id} style={{ borderLeft: '2px solid var(--border-dark)', paddingLeft: '1.1rem' }}>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                        {item.startDate} — {item.endDate}
                      </span>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.02rem', fontWeight: 600, margin: '0.15rem 0' }}>
                        {tF(item.position)}
                      </h4>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                        {tF(item.organization)}
                      </p>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.3rem', lineHeight: 1.45 }}>
                        {tF(item.description)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>
        </div>

        {/* Visual Link / Bridge Inviting Visitors to Section Two */}
        <div 
          style={{
            marginTop: '3.5rem',
            padding: '2rem 2.25rem',
            backgroundColor: 'var(--bg-alt)',
            border: '1px solid var(--border-light)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
          }}
        >
          <div>
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                display: 'block',
                marginBottom: '0.35rem'
              }}
            >
              {language === 'ne' ? 'अर्को मुख्य गन्तव्य · प्रश्न ०२' : 'NEXT PRIMARY DESTINATION · QUESTION 02'}
            </span>
            <h4 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                margin: '0 0 0.35rem 0'
              }}
            >
              {language === 'ne'
                ? '०२. मलाई कुन उद्देश्य, विश्वास र दर्शनले अघि बढाउँछ ?'
                : '02. WHAT DRIVES ME ?'}
            </h4>
            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
                margin: 0
              }}
            >
              {language === 'ne'
                ? 'शैक्षिक दर्शन, विद्यार्थी केन्द्रित सिकाइ, गणित तथा वैज्ञानिक चिन्तन, र काम पछाडिको उद्देश्य।'
                : 'Educational philosophy, student-centred learning, curiosity, mathematical thinking, and the purpose behind the work.'}
            </p>
          </div>

          <Link 
            to="/what-drives-me"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#FFFFFF',
              backgroundColor: 'var(--accent-blue)',
              padding: '0.75rem 1.4rem',
              borderRadius: '2px',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'opacity 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <span>{language === 'ne' ? '०२. उद्देश्य र दर्शन हेर्नुहोस् →' : 'Explore What Drives Me →'}</span>
            <ChevronRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};
