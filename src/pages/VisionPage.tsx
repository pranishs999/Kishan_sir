import React from 'react';
import { VISION_DATA } from '../data/sourceFacts';

export const VisionPage: React.FC = () => {
  return (
    <>
      <section 
        style={{
          position: 'relative',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 'clamp(3rem, 5vw, 5rem)',
          paddingBottom: 'clamp(3rem, 5vw, 5rem)',
          backgroundColor: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>VISION</span>
          <h1 className="text-display" style={{ color: 'var(--accent-blue)', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '1.5rem' }}>
            {VISION_DATA.headerQuote}
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            Educational Vision & Declaration
          </p>
        </div>
      </section>

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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {VISION_DATA.lines.map((line, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '1.5rem',
                    padding: '1.5rem',
                    backgroundColor: 'var(--bg-alt)',
                    border: '1px solid var(--border-light)',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-sans)', 
                      fontSize: '1.25rem', 
                      fontWeight: 700, 
                      color: 'var(--accent-gold)',
                      letterSpacing: '0.1em',
                      flexShrink: 0
                    }}
                  >
                    0{idx + 1}
                  </span>

                  <p 
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.35rem, 2.5vw, 2.1rem)',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.35,
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

      <section 
        style={{
          backgroundColor: 'var(--dark-bg)',
          color: 'var(--dark-text)',
          borderTop: '1px solid var(--dark-border)',
          paddingTop: 'clamp(3rem, 5vw, 4rem)',
          paddingBottom: 'clamp(3rem, 5vw, 4rem)',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <span className="eyebrow-dark" style={{ marginBottom: '1.25rem' }}>
            RELATED
          </span>
          <h2 className="text-h1" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Explore Related Sections
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--dark-text-muted)', marginBottom: '2.5rem' }}>
            Support the vision, contact for collaboration, and explore the framework.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/support" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>Support the Vision</a>
            <a href="/contact" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>Contact & Collaborate</a>
            <a href="/framework" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>Curiosity → Commerce Framework</a>
          </div>
        </div>
      </section>
    </>
  );
};