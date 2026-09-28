import React from 'react';
import { Compass, ShieldCheck } from 'lucide-react';
import { INSTITUTIONS_DATA } from '../data/sourceFacts';

export const InstitutionsPage: React.FC = () => {
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
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>INSTITUTIONS</span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            Institutional Leadership
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            Building Enduring Infrastructures for Science and Innovation
          </p>
        </div>
      </section>

      <section id="institutions" className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          
          <div style={{ marginBottom: '4rem' }}>
            <h2 className="text-h1" style={{ maxWidth: '900px' }}>
              Building Enduring Infrastructures for Science and Innovation
            </h2>
            <p className="lead-text" style={{ maxWidth: '780px', marginTop: '1rem' }}>
              True impact requires institutional permanence. These primary entities anchor Nepal's regional scientific and mathematical ecosystem.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {INSTITUTIONS_DATA.map((inst) => {
              return (
                <div 
                  key={inst.id}
                  id={inst.id}
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-light)',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.04)',
                    padding: 'clamp(2rem, 4vw, 3.5rem)'
                  }}
                >
                  <div className="grid-12" style={{ alignItems: 'start' }}>
                    
                    <div style={{ gridColumn: 'span 7' }}>
                      <span 
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          letterSpacing: '0.15em',
                          color: 'var(--accent-gold)',
                          textTransform: 'uppercase',
                          display: 'block',
                          marginBottom: '0.5rem'
                        }}
                      >
                        {inst.establishedNotice}
                      </span>

                      <h3 
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '2.6rem',
                          color: 'var(--text-primary)',
                          lineHeight: 1.12,
                          marginBottom: '0.5rem'
                        }}
                      >
                        {inst.name}
                      </h3>

                      <p 
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '1rem',
                          fontWeight: 600,
                          color: 'var(--accent-blue)',
                          marginBottom: '1.75rem'
                        }}
                      >
                        Leadership: {inst.role}
                      </p>

                      <div style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '1.25rem', marginBottom: '2rem' }}>
                        <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                          Institutional Mission
                        </strong>
                        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                          {inst.mission}
                        </p>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div>
                          <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                            <Compass size={16} color="var(--accent-blue)" /> Key Strategic Pillars
                          </strong>
                          <ul style={{ listStyle: 'none', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                            {inst.keyPillars.map((p, i) => (
                              <li key={i} style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                · {p}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                          <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                            <ShieldCheck size={16} color="var(--accent-blue)" /> Governance Structure
                          </strong>
                          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                            {inst.governance}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div style={{ gridColumn: 'span 5', paddingLeft: 'clamp(0px, 2vw, 1.5rem)' }}>
                      <div className="editorial-image-frame" style={{ minHeight: '300px', marginBottom: '1.5rem' }}>
                        <img 
                          src={inst.id === 'institution-astronova' ? '/images/astronova.png' : '/images/hric.png'} 
                          alt={inst.name}
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
                            background: 'linear-gradient(180deg, transparent 0%, rgba(18,19,22,0.85) 100%)',
                            padding: '1rem 1.25rem',
                            color: '#FFFFFF',
                            zIndex: 2
                          }}
                        >
                          <span className="placeholder-badge">INSTITUTIONAL ARCHIVE</span>
                          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', marginTop: '0.25rem', color: '#FFFFFF' }}>
                            {inst.name}
                          </p>
                        </div>
                      </div>

                      <div 
                        style={{
                          backgroundColor: 'var(--accent-blue)',
                          color: '#FFFFFF',
                          padding: '1.5rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.5rem'
                        }}
                      >
                        <strong style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-gold-light)' }}>
                          Ecosystem Reach & Impact
                        </strong>
                        <p style={{ fontSize: '0.95rem', lineHeight: 1.5, color: '#FFFFFF' }}>
                          {inst.impactSummary}
                        </p>
                      </div>
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
            Selected work, international delegations, and the seven-stage framework.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/work" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>Selected Work</a>
            <a href="/delegations" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>International Delegations</a>
            <a href="/framework" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>Curiosity → Commerce Framework</a>
          </div>
        </div>
      </section>
    </>
  );
};