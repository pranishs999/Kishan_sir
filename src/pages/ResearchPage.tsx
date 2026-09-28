import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { SUPERVISED_THESES, AREAS_OF_WORK } from '../data/sourceFacts';

export const ResearchPage: React.FC = () => {
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
        <div className="container">
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>RESEARCH</span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            Research & Supervised Work
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            Academic Publications, Theses Supervision & Empirical Reports
          </p>
        </div>
      </section>

      <section id="research" className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="eyebrow">ARTICLES & SUPERVISED THESES</span>
            <h2 className="text-h1" style={{ maxWidth: '850px', marginTop: '0.5rem' }}>
              Academic Publications & Research Supervision
            </h2>
            <p className="lead-text" style={{ maxWidth: '780px', marginTop: '1rem' }}>
              A repository of supervised student theses, empirical STEM reports, and mathematical pedagogy articles.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {SUPERVISED_THESES.map((item) => (
              <div 
                key={item.id}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  alignItems: 'center',
                  gap: '1.5rem'
                }}
              >
                <div style={{ gridColumn: 'span 3' }}>
                  <span 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--accent-gold)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.35rem'
                    }}
                  >
                    {item.field}
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-blue)', display: 'block' }}>
                    Role: {item.role}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {item.year}
                  </span>
                </div>

                <div style={{ gridColumn: 'span 6' }}>
                  <h3 
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.5rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1.25,
                      marginBottom: '0.5rem'
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {item.abstract}
                  </p>
                </div>

                <div style={{ gridColumn: 'span 3', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                  <Link to={`/thoughts`} className="editorial-link" style={{ fontSize: '0.85rem' }}>
                    <FileText size={15} /> Read Abstract & Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section id="areas" className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)', backgroundColor: 'var(--bg-alt)' }}>
        <div className="container">
          
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="eyebrow">AREAS OF WORK & DOMAIN EXPERTISE</span>
            <h2 className="text-h1" style={{ maxWidth: '850px', marginTop: '0.5rem' }}>
              Core Domains of Executive & Pedagogical Focus
            </h2>
          </div>

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
            Thought leadership essays, media archive, and the gallery of events.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/thoughts" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>Thought Leadership</a>
            <a href="/media" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>Media Archive</a>
            <a href="/gallery" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>Event Gallery</a>
          </div>
        </div>
      </section>
    </>
  );
};