import React from 'react';
import { VISION_DATA } from '../data/sourceFacts';

export const Vision: React.FC = () => {
  return (
    <section 
      id="vision" 
      className="section-wrapper"
      style={{
        backgroundColor: 'var(--bg-surface)',
        color: 'var(--text-primary)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        paddingTop: 'clamp(3.5rem, 6vw, 6rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 6rem)',
        textAlign: 'left'
      }}
    >
      <div className="container">
        
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <span className="eyebrow" style={{ marginBottom: '1.25rem' }}>
            EDUCATIONAL VISION & DECLARATION
          </span>

          {/* Core Vision Header Quote */}
          <h2 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              color: 'var(--accent-blue)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '2.5rem',
              textTransform: 'uppercase'
            }}
          >
            {VISION_DATA.headerQuote}
          </h2>

          <div className="divider" style={{ marginBottom: '2.5rem' }} />

          {/* Vision Lines Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {VISION_DATA.lines.map((line, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '1.25rem'
                }}
              >
                <span 
                  style={{ 
                    fontFamily: 'var(--font-sans)', 
                    fontSize: '0.85rem', 
                    fontWeight: 700, 
                    color: 'var(--accent-gold)',
                    letterSpacing: '0.1em'
                  }}
                >
                  0{idx + 1}
                </span>

                <p 
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.25rem, 2.2vw, 1.9rem)',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.3,
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
