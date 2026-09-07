import React from 'react';
import { FileText } from 'lucide-react';
import { SUPERVISED_THESES } from '../data/sourceFacts';
import type { ThesisEntry } from '../types/portfolio';

interface SupervisedThesesProps {
  onSelectThesis: (thesis: ThesisEntry) => void;
}

export const SupervisedTheses: React.FC<SupervisedThesesProps> = ({ onSelectThesis }) => {
  return (
    <section 
      id="theses" 
      className="section-wrapper" 
      style={{ borderTop: '1px solid var(--border-light)' }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="eyebrow">ARTICLES & SUPERVISED THESES</span>
          <h2 className="text-h1" style={{ maxWidth: '850px', marginTop: '0.5rem' }}>
            Academic Publications & Research Supervision
          </h2>
          <p className="lead-text" style={{ maxWidth: '780px', marginTop: '1rem' }}>
            A repository of supervised student theses, empirical STEM reports, and mathematical pedagogy articles.
          </p>
        </div>

        {/* List of Theses and Papers */}
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
              {/* Field & Role Tag (Cols 1-3) */}
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

              {/* Title & Abstract (Cols 4-9) */}
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

              {/* Action Buttons (Cols 10-12) */}
              <div style={{ gridColumn: 'span 3', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                <button 
                  onClick={() => onSelectThesis(item)}
                  className="editorial-link"
                  style={{ fontSize: '0.85rem' }}
                >
                  <FileText size={15} /> Read Abstract & Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
