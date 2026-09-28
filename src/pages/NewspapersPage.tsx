import React from 'react';
import { ExternalLink, Newspaper, AlertCircle } from 'lucide-react';
import { media } from '../data';

export const NewspapersPage: React.FC = () => {
  const newspaperMedia = media.filter((m) => m.category === 'newspaper' || m.category === 'event');

  return (
    <>
      <section style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-light)', paddingTop: 'clamp(3rem, 5vw, 5rem)', paddingBottom: 'clamp(3rem, 5vw, 5rem)' }}>
        <div className="container">
          <span className="eyebrow">PRINT & PRESS ARCHIVE</span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            Newspaper & Media Coverage
          </h1>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', fontStyle: 'italic', color: 'var(--accent-blue)', marginTop: '1rem', maxWidth: '800px' }}>
            Third-Party Press Publications & Public Record Features
          </p>
        </div>
      </section>

      <section className="section-wrapper">
        <div className="container">
          <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.5rem' }}>
            <h2 className="text-h2" style={{ fontSize: '1.8rem' }}>Press Features & Documentation</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              Note: Unverified external media links carry a visible source tag pending full text translation per Content Accuracy Rules.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {newspaperMedia.map((item) => (
              <div 
                key={item.id}
                style={{
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-primary)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div className="editorial-image-frame" style={{ minHeight: '220px', marginBottom: '1.5rem', backgroundColor: '#EFECE3' }}>
                    <img 
                      src={item.thumbnail} 
                      alt={item.headline} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(180deg, transparent 0%, rgba(14,42,71,0.92) 100%)', padding: '1rem', color: '#FFFFFF', zIndex: 2 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                        <Newspaper size={14} color="var(--accent-gold-light)" />
                        <span className="placeholder-badge" style={{ backgroundColor: 'rgba(255,255,255,0.15)', fontSize: '0.65rem', padding: '0.2rem 0.5rem' }}>
                          {item.language === 'ne' ? 'NEPALI PRESS' : 'PRESS ARCHIVE'}
                        </span>
                      </div>
                      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.9rem', color: '#FFFFFF' }}>
                        {item.publication}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      {item.publication}
                    </span>

                    {!item.verified && (
                      <span className="placeholder-badge" style={{ backgroundColor: 'rgba(154,128,85,0.12)', color: 'var(--accent-gold)', border: '1px solid var(--accent-gold)', fontSize: '0.65rem', padding: '0.15rem 0.4rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <AlertCircle size={10} /> PENDING VERIFICATION
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', lineHeight: 1.3, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                    "{item.headline}"
                  </h3>

                  {item.summary && (
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.5rem' }}>
                      {item.summary}
                    </p>
                  )}
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-light)', marginTop: '1rem' }}>
                  <a 
                    href={item.externalUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="editorial-link"
                    style={{ fontSize: '0.85rem' }}
                  >
                    View Source Media Link <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
