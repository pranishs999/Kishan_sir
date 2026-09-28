import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { THOUGHT_ENTRIES } from '../data/sourceFacts';

export const ThoughtsPage: React.FC = () => {
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
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>THOUGHTS</span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            Thought Leadership & Essays
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            Pedagogical Insights & Ecosystem Philosophy
          </p>
        </div>
      </section>

      <section id="thoughts" className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="eyebrow">THOUGHT LEADERSHIP & ESSAYS</span>
            <h2 className="text-h1" style={{ maxWidth: '850px', marginTop: '0.5rem' }}>
              Pedagogical Insights & Ecosystem Philosophy
            </h2>
            <p className="lead-text" style={{ maxWidth: '780px', marginTop: '1rem' }}>
              Selected writings on mathematical clarity, institutional governance, and youth scientific incubation.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem'
            }}
          >
            {THOUGHT_ENTRIES.map((entry) => (
              <div 
                key={entry.id}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-sans)', 
                        fontSize: '0.75rem', 
                        fontWeight: 700, 
                        color: 'var(--accent-gold)', 
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {entry.category}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {entry.readTime}
                    </span>
                  </div>

                  <h3 
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.75rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1.25,
                      marginBottom: '1rem'
                    }}
                  >
                    {entry.title}
                  </h3>

                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {entry.excerpt}
                  </p>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
                  <Link to={`/thoughts`} className="editorial-link" style={{ fontSize: '0.9rem' }}>
                    Read Key Takeaways <ArrowRight size={16} />
                  </Link>
                </div>

              </div>
            ))}
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
            Media archive, research publications, and the event gallery.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/media" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>Media Archive</a>
            <a href="/research" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>Research & Theses</a>
            <a href="/gallery" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>Event Gallery</a>
          </div>
        </div>
      </section>
    </>
  );
};