import React from 'react';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, Building2 } from 'lucide-react';
import { person } from '../data';
import { useLanguage } from '../context/LanguageContext';

export const AboutPage: React.FC = () => {
  const { tF, tA } = useLanguage();

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
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>EXECUTIVE PROFILE</span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            {tF(person.fullName)}
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            {tF(person.professionalTitle)}
          </p>
          <p style={{ 
            fontSize: '0.85rem', 
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginTop: '1.5rem'
          }}>
            {person.nepaliName}
          </p>
        </div>
      </section>

      <section id="profile" className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="eyebrow">EXECUTIVE PROFILE</span>
            <h2 className="text-h1" style={{ maxWidth: '900px', marginTop: '0.5rem' }}>
              {tF(person.shortBiography).split('.')[0]}.
            </h2>
          </div>

          <div className="grid-12" style={{ alignItems: 'start' }}>
            
            <div style={{ gridColumn: 'span 4' }}>
              <div 
                style={{
                  backgroundColor: 'var(--bg-alt)',
                  border: '1px solid var(--border-light)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem'
                }}
              >
                <h3 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold)'
                  }}
                >
                  Executive Credentials
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <Award size={24} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                        18+ Years Experience
                      </strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        Educational Leadership & System Building
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <GraduationCap size={24} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                        Master's in Mathematics
                      </strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        Pure & Applied Pedagogical Rigor
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <Building2 size={24} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                        Institutional Executive
                      </strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        Former School Principal & Campus Chief
                      </span>
                    </div>
                  </div>
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-light)', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>
                    Current Primary Directorships:
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block' }}>
                    · Astronova Foundation Nepal (President)
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block' }}>
                    · Hetauda Research & Innovation Center (Director)
                  </span>
                </div>
              </div>
            </div>

            <div style={{ gridColumn: 'span 8', paddingLeft: 'clamp(0px, 3vw, 2rem)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {tA(person.biography).map((para, idx) => (
                  <p key={idx} className="lead-text" style={{ fontSize: idx === 0 ? '1.25rem' : '1.1rem' }}>
                    {para}
                  </p>
                ))}

                <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
                  <h3 style={{ 
                    fontFamily: 'var(--font-sans)', 
                    fontSize: '0.85rem', 
                    fontWeight: 700, 
                    letterSpacing: '0.15em', 
                    textTransform: 'uppercase', 
                    color: 'var(--accent-gold)',
                    marginBottom: '1.25rem'
                  }}>
                    Verified Source Credentials
                  </h3>
                  <div className="credentials-grid-3x3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
                    {person.professionalIdentity.map((cred, idx) => (
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
                        <h4 
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.85rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            lineHeight: 1.15
                          }}
                        >
                          {tF(cred.title)}
                        </h4>
                        <p 
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.9rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.4
                          }}
                        >
                          {tF(cred.description)}
                        </p>
                      </div>
                    ))}
                  </div>
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
            EXPLORE FURTHER
          </span>
          <h2 className="text-h1" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Dive Deeper into the Work
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--dark-text-muted)', marginBottom: '2.5rem' }}>
            Explore selected initiatives, international delegations, the curiosity-to-commerce framework, and institutional leadership.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/work" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>Work Domains</Link>
            <Link to="/initiatives" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>Initiatives</Link>
            <Link to="/ecosystem" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>Ecosystem Model</Link>
            <Link to="/thought" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>Thought Leadership</Link>
          </div>
        </div>
      </section>
    </>
  );
};