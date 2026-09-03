import React from 'react';
import { CREDENTIALS_DATA } from '../data/sourceFacts';

export const Credentials: React.FC = () => {
  return (
    <section 
      id="credentials" 
      className="section-wrapper" 
      style={{ 
        backgroundColor: 'var(--bg-surface)', 
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '2.5rem',
            borderBottom: '1px solid var(--border-light)',
            paddingBottom: '1rem'
          }}
        >
          <span className="eyebrow" style={{ margin: 0 }}>
            02 / CREDENTIALS AT A GLANCE
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Source Verified Credentials
          </span>
        </div>

        {/* High Impact Typographic Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2.5rem 2rem',
            alignItems: 'start'
          }}
        >
          {CREDENTIALS_DATA.map((cred, idx) => (
            <div 
              key={idx}
              style={{
                borderLeft: '2px solid var(--accent-blue)',
                paddingLeft: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem'
              }}
            >
              <h3 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.85rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  lineHeight: 1.15
                }}
              >
                {cred.label}
              </h3>
              <p 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.4
                }}
              >
                {cred.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
