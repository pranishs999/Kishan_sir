import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SELECTED_WORK } from '../data/sourceFacts';
import type { WorkEntry } from '../types/portfolio';

interface SelectedWorkProps {
  onSelectWork: (work: WorkEntry) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectWork }) => {
  return (
    <section id="work" className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span className="eyebrow">SELECTED WORK</span>
          <h2 className="text-h2" style={{ maxWidth: '780px', marginTop: '0.35rem', fontSize: 'clamp(1.75rem, 3.2vw, 2.4rem)' }}>
            Pioneering Educational & Research Initiatives
          </h2>
        </div>

        {/* Editorial Entries (Alternating 12-Column Rows) */}
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
                {/* Image Column */}
                <div style={{ gridColumn: isEven ? 'span 6' : 'span 6', order: isEven ? 1 : 2 }}>
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
                </div>

                {/* Content Column */}
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
                    ENTRY {item.number} · {item.role}
                  </span>

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

                  <p className="lead-text" style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                    {item.summary}
                  </p>

                  {/* Highlights Bullet List */}
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
                    <button 
                      onClick={() => onSelectWork(item)}
                      className="btn-secondary" 
                      style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}
                    >
                      Explore Details <ArrowUpRight size={16} />
                    </button>

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
  );
};
