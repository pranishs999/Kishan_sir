import React from 'react';
import { VISION_DATA } from '../data/sourceFacts';

export const Vision: React.FC = () => {
  return (
    <section 
      id="vision" 
      className="section-wrapper section-dark"
      style={{
        backgroundColor: 'var(--dark-bg)',
        color: 'var(--dark-text)',
        borderTop: '1px solid var(--dark-border)',
        borderBottom: '1px solid var(--dark-border)',
        paddingTop: 'clamp(5rem, 10vw, 9rem)',
        paddingBottom: 'clamp(5rem, 10vw, 9rem)',
        textAlign: 'left'
      }}
    >
      <div className="container">
        
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <span className="eyebrow eyebrow-dark" style={{ marginBottom: '1.5rem' }}>
            09 / EDUCATIONAL VISION & DECLARATION
          </span>

          {/* Core Vision Header Quote */}
          <h2 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#FFFFFF',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              marginBottom: '3rem',
              textTransform: 'uppercase'
            }}
          >
            {VISION_DATA.headerQuote}
          </h2>

          <div className="divider divider-dark" style={{ marginBottom: '3rem' }} />

          {/* Vision Lines Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {VISION_DATA.lines.map((line, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '1.5rem'
                }}
              >
                <span 
                  style={{ 
                    fontFamily: 'var(--font-sans)', 
                    fontSize: '0.85rem', 
                    fontWeight: 700, 
                    color: 'var(--accent-gold-light)',
                    letterSpacing: '0.1em'
                  }}
                >
                  0{idx + 1}
                </span>

                <p 
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                    color: 'var(--dark-text-muted)',
                    lineHeight: 1.25,
                    fontWeight: 400
                  }}
                >
                  {line}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
