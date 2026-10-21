import React from 'react';
import { Download } from 'lucide-react';
import { person } from '../data/sourceFacts';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenCV?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const { language, tF } = useLanguage();

  const handleDownloadCV = () => {
    if (onOpenCV) {
      onOpenCV();
    } else {
      window.open('/cv.pdf', '_blank');
    }
  };

  return (
    <section
      id="hero"
      style={{
        paddingTop: 'clamp(3rem, 6vw, 6rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        <div className="grid-12" style={{ alignItems: 'center', rowGap: '3rem' }}>
          
          {/* Left Column: Typographic Details */}
          <div style={{ gridColumn: 'span 7', width: '100%' }}>
            
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                marginBottom: '1rem'
              }}
            >
              {language === 'ne' ? 'कार्यकारी पोर्टफोलियो' : 'EXECUTIVE PORTFOLIO'}
            </p>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                marginBottom: '1.25rem'
              }}
            >
              {tF(person.fullName)}
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.15rem, 2vw, 1.5rem)',
                fontStyle: 'italic',
                color: 'var(--accent-blue)',
                lineHeight: 1.35,
                marginBottom: '1.5rem',
                maxWidth: '650px'
              }}
            >
              {tF(person.professionalTitle)}
            </p>

            <div
              style={{
                display: 'inline-block',
                borderLeft: '3px solid var(--accent-gold)',
                paddingLeft: '1.25rem',
                marginBottom: '2.5rem'
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1rem, 1.25vw, 1.2rem)',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  color: 'var(--text-primary)'
                }}
              >
                "{tF(person.tagline)}"
              </p>
            </div>

            {/* STRICT SINGLE BUTTON IN HERO */}
            <div>
              <button
                onClick={handleDownloadCV}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--bg-primary)',
                  backgroundColor: 'var(--text-primary)',
                  padding: '0.85rem 1.75rem',
                  border: 'none',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  letterSpacing: '0.03em',
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <Download size={18} />
                {language === 'ne' ? 'CV डाउनलोड गर्नुहोस् ↓' : 'Download CV ↓'}
              </button>
            </div>

          </div>

          {/* Right Column: Hero Portrait */}
          <div style={{ gridColumn: 'span 5', width: '100%' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
                backgroundColor: 'var(--card-bg)',
                boxShadow: '0 12px 32px rgba(0,0,0,0.05)'
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
                  background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%)',
                  padding: '1.25rem 1.5rem',
                  color: '#FFFFFF'
                }}
              >
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 600, color: '#FFFFFF', margin: 0 }}>
                  {person.nepaliName}
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--accent-gold-light)', margin: '0.2rem 0 0 0' }}>
                  {language === 'ne' ? 'अध्यक्ष — एष्ट्रोनोभा फाउण्डेशन नेपाल' : 'Chairperson — Astronova Foundation Nepal'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
