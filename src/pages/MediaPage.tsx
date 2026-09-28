import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, ExternalLink } from 'lucide-react';
import { MEDIA_ARCHIVE } from '../data/sourceFacts';

export const MediaPage: React.FC = () => {
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
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>MEDIA</span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            Media & Press Archive
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            Verified Press Coverage & Public Record
          </p>
        </div>
      </section>

      <section id="media" className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="eyebrow">MEDIA & PRESS ARCHIVE</span>
            <h2 className="text-h1" style={{ maxWidth: '850px', marginTop: '0.5rem' }}>
              Verified Press Coverage & Public Record
            </h2>
            <p className="lead-text" style={{ maxWidth: '780px', marginTop: '1rem' }}>
              Third-party national and regional press documentation validating key delegations, center inaugurations, and educational achievements.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {MEDIA_ARCHIVE.map((item) => (
              <div 
                key={item.id}
                className="grid-12"
                style={{
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-primary)',
                  padding: 'clamp(1.25rem, 3vw, 2.5rem)',
                  alignItems: 'center'
                }}
              >
                <div style={{ gridColumn: 'span 4', width: '100%', maxWidth: '100%' }}>
                  <div 
                    className="editorial-image-frame" 
                    style={{ 
                      minHeight: '230px', 
                      border: '1px solid var(--border-light)',
                      backgroundColor: '#EFECE3'
                    }}
                  >
                    <img 
                      src={item.customImageUrl || "/images/tisf.png"} 
                      alt={item.headline}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <div 
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(180deg, transparent 0%, rgba(14,42,71,0.92) 100%)',
                        padding: '1rem',
                        color: '#FFFFFF',
                        zIndex: 2
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                        <Newspaper size={14} color="var(--accent-gold-light)" />
                        <span className="placeholder-badge" style={{ backgroundColor: 'rgba(255,255,255,0.15)', fontSize: '0.65rem', padding: '0.2rem 0.5rem' }}>
                          PRINT ARCHIVE
                        </span>
                      </div>
                      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.9rem', color: '#FFFFFF' }}>
                        {item.publication}
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ gridColumn: 'span 8', width: '100%', maxWidth: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
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
                      {item.category}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>· {item.date}</span>
                  </div>

                  <h3 
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                      color: 'var(--text-primary)',
                      lineHeight: 1.2,
                      marginBottom: '0.75rem'
                    }}
                  >
                    "{item.headline}"
                  </h3>

                  <p 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--accent-blue)',
                      marginBottom: '1rem'
                    }}
                  >
                    Source: {item.publication} ({item.sourceNotice})
                  </p>

                  <p style={{ fontSize: '1.025rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {item.excerpt}
                  </p>

                  <Link to={`/media`} className="editorial-link" style={{ fontSize: '0.9rem' }}>
                    View Full Press Excerpt & Record <ExternalLink size={14} />
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
            Event gallery, thought leadership essays, and research publications.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/gallery" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>Event Gallery</a>
            <a href="/thoughts" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>Thought Leadership</a>
            <a href="/research" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>Research & Theses</a>
          </div>
        </div>
      </section>
    </>
  );
};