import React from 'react';
import { Newspaper, ExternalLink } from 'lucide-react';
import { MEDIA_ARCHIVE } from '../data/sourceFacts';
import type { MediaEntry } from '../types/portfolio';

interface MediaArchiveProps {
  onSelectMedia: (media: MediaEntry) => void;
}

export const MediaArchive: React.FC<MediaArchiveProps> = ({ onSelectMedia }) => {
  return (
    <section 
      id="media" 
      className="section-wrapper" 
      style={{ 
        backgroundColor: 'var(--bg-surface)', 
        borderTop: '1px solid var(--border-light)' 
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="eyebrow">07 / MEDIA & PRESS ARCHIVE</span>
          <h2 className="text-h1" style={{ maxWidth: '850px', marginTop: '0.5rem' }}>
            Verified Press Coverage & Public Record
          </h2>
          <p className="lead-text" style={{ maxWidth: '780px', marginTop: '1rem' }}>
            Third-party national and regional press documentation validating key delegations, center inaugurations, and educational achievements.
          </p>
        </div>

        {/* Newspaper Archive Layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {MEDIA_ARCHIVE.map((item) => (
            <div 
              key={item.id}
              style={{
                border: '1px solid var(--border-light)',
                backgroundColor: 'var(--bg-primary)',
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '2rem',
                alignItems: 'center'
              }}
            >
              {/* Press Clipping Image Frame (Cols 1-4) */}
              <div style={{ gridColumn: 'span 4' }}>
                <div 
                  className="editorial-image-frame" 
                  style={{ 
                    minHeight: '230px', 
                    border: '1px solid var(--border-light)',
                    backgroundColor: '#EFECE3'
                  }}
                >
                  <img 
                    src="/images/press.png" 
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

              {/* Headline & Details Column (Cols 5-12) */}
              <div style={{ gridColumn: 'span 8' }}>
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

                <button 
                  onClick={() => onSelectMedia(item)}
                  className="editorial-link"
                  style={{ fontSize: '0.9rem' }}
                >
                  View Full Press Excerpt & Record <ExternalLink size={14} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
