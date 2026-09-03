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
        <div style={{ marginBottom: '4rem' }}>
          <span className="eyebrow">04 / SELECTED WORK</span>
          <h2 className="text-h1" style={{ maxWidth: '850px', marginTop: '0.5rem' }}>
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
                    <div className="editorial-image-overlay">
                      <div>
                        <span className="placeholder-badge">{item.category}</span>
                      </div>
                      <div style={{ marginTop: 'auto' }}>
                        <p className="placeholder-label">
                          {item.title}
                        </p>
                        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginTop: '0.25rem' }}>
                          {item.imagePlaceholderLabel}
                        </p>
                      </div>
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

                  <button 
                    onClick={() => onSelectWork(item)}
                    className="btn-secondary" 
                    style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}
                  >
                    Explore Details <ArrowUpRight size={16} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
