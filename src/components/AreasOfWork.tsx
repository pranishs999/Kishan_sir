import React from 'react';
import { AREAS_OF_WORK } from '../data/sourceFacts';

export const AreasOfWork: React.FC = () => {
  return (
    <section id="areas" className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="eyebrow">AREAS OF WORK & DOMAIN EXPERTISE</span>
          <h2 className="text-h1" style={{ maxWidth: '850px', marginTop: '0.5rem' }}>
            Core Domains of Executive & Pedagogical Focus
          </h2>
        </div>

        {/* Typographic List with Thin Dividers (No Colorful Cards) */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {AREAS_OF_WORK.map((area, idx) => (
            <div 
              key={idx}
              style={{
                borderTop: '1px solid var(--border-light)',
                paddingTop: '1.75rem',
                paddingBottom: '1.75rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                alignItems: 'center',
                gap: '1.5rem',
                transition: 'background-color 0.2s ease'
              }}
            >
              {/* Number (Cols 1-2) */}
              <div style={{ gridColumn: 'span 2' }}>
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
              </div>

              {/* Title (Cols 3-6) */}
              <div style={{ gridColumn: 'span 4' }}>
                <h3 
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.8rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)'
                  }}
                >
                  {area.title}
                </h3>
              </div>

              {/* Description (Cols 7-12) */}
              <div style={{ gridColumn: 'span 6' }}>
                <p 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.025rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55
                  }}
                >
                  {area.description}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border-light)' }} />
        </div>

      </div>
    </section>
  );
};
