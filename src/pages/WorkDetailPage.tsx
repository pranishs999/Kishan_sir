import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { SELECTED_WORK } from '../data/sourceFacts';
import { useParams } from 'react-router-dom';

export const WorkDetailPage: React.FC = () => {
  const { workId } = useParams<{ workId: string }>();
  const work = SELECTED_WORK.find(w => w.id === workId);

  if (!work) {
    return (
      <div className="section-wrapper" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container">
          <h1 className="text-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Work Not Found</h1>
          <p className="lead-text" style={{ marginTop: '1rem', marginBottom: '2rem' }}>The requested work entry could not be found.</p>
          <Link to="/work" className="btn-primary">
            <ArrowLeft size={16} /> Back to All Work
          </Link>
        </div>
      </div>
    );
  }

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
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>{work.category}</span>
          <h1 className="text-display" style={{ maxWidth: '900px', lineHeight: 1.05 }}>
            {work.title}
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.15rem, 2.4vw, 2.1rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            {work.role}
          </p>
          <p style={{ 
            fontSize: '0.9rem', 
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginTop: '1.5rem'
          }}>
            {work.organization}
          </p>
        </div>
      </section>

      <section id="work-detail" className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          
          <div className="grid-12" style={{ alignItems: 'start', gap: '3rem' }}>
            
            <div style={{ gridColumn: 'span 5' }}>
              <div className="editorial-image-frame" style={{ minHeight: '400px' }}>
                <img 
                  src={work.customImageUrl || '/images/astronova.png'} 
                  alt={work.title}
                  loading="eager"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'contrast(1.04) saturate(0.95)'
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(180deg, transparent 0%, rgba(18,19,22,0.88) 100%)',
                    padding: '1.5rem',
                    color: '#FFFFFF',
                    zIndex: 2
                  }}
                >
                  <span className="placeholder-badge" style={{ backgroundColor: 'var(--accent-blue)' }}>
                    {work.category}
                  </span>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', marginTop: '0.5rem', fontWeight: 600, color: '#FFFFFF' }}>
                    {work.title}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--accent-gold-light)', letterSpacing: '0.04em', marginTop: '0.25rem' }}>
                    {work.organization}
                  </p>
                </div>
              </div>
            </div>

            <div style={{ gridColumn: 'span 7' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                <div style={{ paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-light)' }}>
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
                    {work.number} · {work.role}
                  </span>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--text-primary)', lineHeight: 1.15, marginBottom: '1rem' }}>
                    {work.title}
                  </h2>
                  <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent-blue)' }}>
                    {work.organization}
                  </p>
                </div>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
                    Overview
                  </h3>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {work.fullDescription}
                  </p>
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
                    Key Operational Highlights
                  </h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {work.highlights.map((h, i) => (
                      <li key={i} style={{ fontSize: '1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-blue)', borderRadius: '50%' }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
                  <Link to="/work" className="btn-secondary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}>
                    <ArrowLeft size={16} /> Back to All Work
                  </Link>
                  {work.linkUrl && work.linkUrl.startsWith('http') && (
                    <a 
                      href={work.linkUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary" 
                      style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}
                    >
                      {work.linkText || 'Visit Web Link'} <ExternalLink size={16} />
                    </a>
                  )}
                </div>

              </div>
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