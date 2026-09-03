import React from 'react';
import { ArrowDownRight, FileText } from 'lucide-react';
import { HERO_DATA } from '../data/sourceFacts';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  return (
    <section 
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'between',
        paddingTop: 'clamp(2rem, 4vw, 4rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Top Eyebrow Row */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-light)',
            paddingBottom: '1rem',
            marginBottom: '2rem'
          }}
        >
          <span className="eyebrow" style={{ margin: 0 }}>
            EXECUTIVE PORTFOLIO & ARCHIVE
          </span>
          <span 
            style={{ 
              fontFamily: 'var(--font-sans)', 
              fontSize: '0.8rem', 
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            BAGMATI PROVINCE · NEPAL
          </span>
        </div>

        {/* Asymmetric 12-Column Grid */}
        <div className="grid-12" style={{ alignItems: 'end' }}>
          
          {/* Main Typographic Column (Cols 1-8) */}
          <div style={{ gridColumn: 'span 8' }}>
            
            {/* HUGE SERIF NAME: 8-12vw */}
            <h1 
              className="text-display"
              style={{
                fontSize: 'clamp(3.5rem, 9.5vw, 8.5rem)',
                lineHeight: 0.94,
                marginBottom: '1.75rem',
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em'
              }}
            >
              {HERO_DATA.name}
            </h1>

            {/* Subtitle Descriptor */}
            <p 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.25rem, 2.4vw, 2.1rem)',
                fontStyle: 'italic',
                lineHeight: 1.25,
                color: 'var(--accent-blue)',
                maxWidth: '720px',
                marginBottom: '3rem'
              }}
            >
              {HERO_DATA.title}
            </p>

            {/* Framework Statement Block */}
            <div 
              style={{
                borderLeft: '2px solid var(--accent-gold)',
                paddingLeft: '1.75rem',
                marginTop: '2.5rem',
                maxWidth: '680px'
              }}
            >
              <h2 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  marginBottom: '0.65rem'
                }}
              >
                {HERO_DATA.frameworkHeader}
              </h2>
              <p 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1.05rem, 1.4vw, 1.3rem)',
                  lineHeight: 1.55,
                  color: 'var(--text-primary)',
                  fontWeight: 400
                }}
              >
                {HERO_DATA.frameworkTagline}
              </p>
            </div>

            {/* CTAs */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.25rem',
                marginTop: '3.25rem'
              }}
            >
              <a href="#work" className="btn-primary">
                {HERO_DATA.primaryCTA}
                <ArrowDownRight size={18} />
              </a>

              <button onClick={onOpenCV} className="btn-secondary">
                <FileText size={18} />
                {HERO_DATA.secondaryCTA}
              </button>
            </div>

          </div>

          {/* Asymmetric Photographic Column (Cols 9-12) */}
          <div style={{ gridColumn: 'span 4' }}>
            <div 
              className="editorial-image-frame"
              style={{
                height: '100%',
                minHeight: '480px',
                border: '1px solid var(--border-light)',
                boxShadow: '0 16px 36px rgba(0,0,0,0.06)'
              }}
            >
              { (
                <div className="editorial-image-overlay">
                  <div>
                    <span className="placeholder-badge">OFFICIAL PORTRAIT ASSET</span>
                  </div>
                  <div style={{ marginTop: 'auto' }}>
                    <p className="placeholder-label" style={{ fontWeight: 600 }}>
                      Kishan Bastola
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginTop: '0.25rem' }}>
                      Executive Address · Institutional Leadership & Research Governance
                    </p>
                    <div 
                      style={{
                        marginTop: '1rem',
                        paddingTop: '0.75rem',
                        borderTop: '1px solid rgba(255,255,255,0.2)',
                        fontSize: '0.75rem',
                        color: 'var(--accent-gold-light)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em'
                      }}
                    >
                      Supplied Photography Container
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
