import React from 'react';
import { ArrowRight } from 'lucide-react';
import { THOUGHT_ENTRIES } from '../data/sourceFacts';
import type { ThoughtEntry } from '../types/portfolio';

interface ThoughtLeadershipProps {
  onSelectThought: (thought: ThoughtEntry) => void;
}

export const ThoughtLeadership: React.FC<ThoughtLeadershipProps> = ({ onSelectThought }) => {
  return (
    <section id="thought" className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="eyebrow">THOUGHT LEADERSHIP & ESSAYS</span>
          <h2 className="text-h1" style={{ maxWidth: '850px', marginTop: '0.5rem' }}>
            Pedagogical Insights & Ecosystem Philosophy
          </h2>
          <p className="lead-text" style={{ maxWidth: '780px', marginTop: '1rem' }}>
            Selected writings on mathematical clarity, institutional governance, and youth scientific incubation.
          </p>
        </div>

        {/* 3-Column Editorial Article Cards */}
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
                <button 
                  onClick={() => onSelectThought(entry)}
                  className="editorial-link"
                  style={{ fontSize: '0.9rem' }}
                >
                  Read Key Takeaways <ArrowRight size={16} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
