import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Plus, Minus, Award, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';
import { person, CREDENTIALS_DATA, education, experience, leadership } from '../data/sourceFacts';
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
              {language === 'ne' ? 'अध्याय ०१' : 'CHAPTER 01'}
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
              {language === 'ne' ? 'म को हुँ ?' : 'WHO AM I ?'}
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
                  {language === 'ne' ? 'अध्यक्ष — एष्ट्रोनोभा फाउण्डेशन नेपाल · निर्देशक — HRIC' : 'Chairperson — Astronova Foundation Nepal · Director — HRIC'}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Editorial Biography and Credentials Grid */}
        <div className="grid-12" style={{ gap: '2.5rem', alignItems: 'start', paddingTop: '2.5rem', borderTop: '1px solid var(--border-light)' }}>
          
          {/* Detailed Narrative Biography */}
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
              {language === 'ne' ? 'दर्शन तथा यात्रा' : 'PHILOSOPHY & TRAJECTORY'}
            </span>

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
              {language === 'ne' ? 'अर्को खण्ड · प्रणाली संरचना' : 'NEXT CHAPTER · THE FRAMEWORK'}
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
                ? 'जिज्ञासालाई वाणिज्यमा रूपान्तरण गर्ने ७-चरणको इकोसिस्टम कसरी चल्छ ?'
                : 'How does curiosity transform into commerce? Discover the 7-stage pathway.'}
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
                ? 'अनुसन्धान, नवप्रवर्तन, मेन्टरसिप र उद्यमलाई जोड्ने व्यावहारिक प्रणाली।'
                : 'A systemic bridge connecting schools, research labs, industry, and young innovators.'}
            </p>
          </div>

          <Link 
            to="/how-it-works"
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
            <span>{language === 'ne' ? 'इकोसिस्टम अन्वेषण गर्नुहोस्' : 'Explore Framework'}</span>
            <ChevronRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};
