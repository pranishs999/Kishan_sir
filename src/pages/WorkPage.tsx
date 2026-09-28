import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SELECTED_WORK } from '../data/sourceFacts';

export const WorkPage: React.FC = () => {
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
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>SELECTED WORK</span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            Pioneering Initiatives
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            Educational & Research Institutions Led by Kishan Bastola
          </p>
        </div>
      </section>

      <section id="work" className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5.5rem' }}>
            {SELECTED_WORK.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={item.id}
                  className="grid-12"
                  style={{
                    alignItems: 'center',
                    paddingBottom: '4.5rem',
                    borderBottom: idx < SELECTED_WORK.length - 1 ? '1px solid var(--border-light)' : 'none'
                  }}
                >
                  <div style={{ gridColumn: isEven ? 'span 6' : 'span 6', order: isEven ? 1 : 2 }}>
                    <Link to={`/work/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="editorial-image-frame" style={{ minHeight: '380px' }}>
                        <img 
                          src={item.customImageUrl || '/images/astronova.png'} 
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
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
                            background: 'linear-gradient(180deg, transparent 0%, rgba(18,19,22,0.88) 100%)',
                            padding: '1.25rem',
                            color: '#FFFFFF',
                            zIndex: 2
                          }}
                        >
                          <span className="placeholder-badge" style={{ backgroundColor: 'var(--accent-blue)' }}>
                            {item.category}
                          </span>
                          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', marginTop: '0.35rem', color: '#FFFFFF' }}>
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div style={{ gridColumn: 'span 6', order: isEven ? 2 : 1, paddingLeft: isEven ? 'clamp(0px, 3vw, 2.5rem)' : '0', paddingRight: isEven ? '0' : 'clamp(0px, 3vw, 2.5rem)' }}>
                    <span 
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--accent-gold)',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '0.5rem'
                      }}
                    >
                      {item.role}
                    </span>

                    <Link to={`/work/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <h3 
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                          color: 'var(--text-primary)',
                          lineHeight: 1.15,
                          marginBottom: '1rem'
                        }}
                      >
                        {item.title}
                      </h3>
                    </Link>

                    <p className="lead-text" style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                      {item.summary}
                    </p>

                    <ul 
                      style={{ 
                        listStyle: 'none', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '0.5rem',
                        marginBottom: '2rem'
                      }}
                    >
                      {item.highlights.map((h, i) => (
                        <li 
                          key={i} 
                          style={{
                            fontSize: '0.95rem',
                            color: 'var(--text-secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.65rem'
                          }}
                        >
                          <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-blue)', borderRadius: '50%', flexShrink: 0 }} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <Link 
                        to={`/work/${item.id}`}
                        className="btn-secondary" 
                        style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}
                      >
                        Explore Details <ArrowUpRight size={16} />
                      </Link>

                      {item.linkUrl && item.linkUrl.startsWith('http') && (
                        <a 
                          href={item.linkUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn-primary" 
                          style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}
                        >
                          {item.linkText || 'Visit Web Link'} <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
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
            International delegations, the seven-stage framework, and institutional building.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/delegations" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>International Delegations</a>
            <a href="/framework" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>Curiosity → Commerce Framework</a>
            <a href="/institutions" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>Institutional Leadership</a>
          </div>
        </div>
      </section>
    </>
  );
};