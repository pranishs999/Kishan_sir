import React from 'react';
import { Globe, Award, ChevronRight } from 'lucide-react';
import { GLOBAL_DELEGATIONS } from '../data/sourceFacts';

export const Delegations: React.FC = () => {
  return (
    <section 
      id="delegations" 
      className="section-wrapper" 
      style={{ 
        backgroundColor: 'var(--bg-surface)', 
        borderTop: '1px solid var(--border-light)' 
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="eyebrow">GLOBAL SCIENTIFIC DELEGATIONS</span>
          <h2 className="text-h1" style={{ maxWidth: '850px', marginTop: '0.5rem' }}>
            Leading Nepalese Youth Researchers on International Platforms
          </h2>
          <p className="lead-text" style={{ maxWidth: '780px', marginTop: '1rem' }}>
            Escorting national student contingents to represent Nepal at global science fairs, technology olympiads, and research competitions in Taiwan and Indonesia.
          </p>
        </div>

        {/* Delegations Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
          {GLOBAL_DELEGATIONS.map((del) => (
            <div 
              key={del.id}
              style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-light)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 'clamp(1.75rem, 3vw, 2.5rem)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.75rem' }}>{del.flagEmoji}</span>
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-sans)', 
                      fontSize: '0.75rem', 
                      fontWeight: 700, 
                      color: 'var(--accent-gold)', 
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {del.country} · INTERNATIONAL
                  </span>
                </div>

                <h3 
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.18,
                    marginBottom: '0.5rem'
                  }}
                >
                  {del.title}
                </h3>

                <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-blue)', marginBottom: '1.25rem' }}>
                  Role: {del.role}
                </p>

                <p style={{ fontSize: '1.025rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  {del.summary}
                </p>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                  <strong style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                    <Award size={15} color="var(--accent-blue)" /> Key Delegation Achievements
                  </strong>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {del.achievements.map((ach, i) => (
                      <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <ChevronRight size={15} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <Globe size={14} /> Official Representative of Nepal · {del.location}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
