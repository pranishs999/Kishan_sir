import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { ecosystem } from '../data';

export const EcosystemPage: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>('curiosity');
  const activeStep = ecosystem.pipeline.find(s => s.id === activeStepId) || ecosystem.pipeline[0];

  return (
    <>
      <section style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-light)', paddingTop: 'clamp(3rem, 5vw, 5rem)', paddingBottom: 'clamp(3rem, 5vw, 5rem)' }}>
        <div className="container">
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>ECOSYSTEM MODEL</span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            The HRIC & Scientific Ecosystem Model
          </h1>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', fontStyle: 'italic', color: 'var(--accent-blue)', marginTop: '1rem', maxWidth: '800px' }}>
            Connecting Classroom Inquiry to Research, Prototyping, Innovation & Regional Commerce
          </p>
        </div>
      </section>

      {/* 7-STAGE PIPELINE STEPPER */}
      <section className="section-wrapper" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">THE CENTRAL PATHWAY</span>
            <h2 className="text-h1" style={{ marginTop: '0.35rem' }}>
              From Curiosity to Commerce
            </h2>
            <p className="lead-text" style={{ maxWidth: '780px', marginTop: '0.85rem' }}>
              A 7-stage architectural model for building sustainable research, innovation, and enterprise pipelines in Bagmati Province.
            </p>
          </div>

          <div 
            style={{
              borderTop: '1px solid var(--border-light)',
              borderBottom: '1px solid var(--border-light)',
              paddingTop: '1rem',
              paddingBottom: '1rem',
              marginBottom: '2.5rem',
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              maxWidth: '100%'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: 'max-content', minWidth: '100%' }}>
              {ecosystem.pipeline.map((step, idx) => {
                const isActive = step.id === activeStepId;
                return (
                  <React.Fragment key={step.id}>
                    <button
                      onClick={() => setActiveStepId(step.id)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '0.2rem',
                        padding: '0.5rem 0.85rem',
                        borderBottom: `2px solid ${isActive ? 'var(--accent-blue)' : 'transparent'}`,
                        flexShrink: 0
                      }}
                    >
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.725rem', fontWeight: 700, color: isActive ? 'var(--accent-blue)' : 'var(--text-muted)' }}>
                        STAGE {idx + 1}
                      </span>
                      <span style={{ fontFamily: 'var(--font-serif)', fontSize: isActive ? '1.25rem' : '1.1rem', color: isActive ? 'var(--text-primary)' : 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                        {step.stage.replace(/^[0-9]+\s*\/\s*/, '')}
                      </span>
                    </button>
                    {idx < ecosystem.pipeline.length - 1 && (
                      <ChevronRight size={16} color="var(--border-light)" style={{ flexShrink: 0 }} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div className="grid-12" style={{ alignItems: 'center' }}>
            <div style={{ gridColumn: 'span 7' }}>
              <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', padding: 'clamp(1.5rem, 3vw, 2.5rem)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                <span style={{ backgroundColor: 'var(--accent-blue)', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', letterSpacing: '0.1em' }}>
                  {activeStep.stage}
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
                  {activeStep.subtitle}
                </h3>
                <p style={{ fontSize: '1.025rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {activeStep.description}
                </p>
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                  <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Ecosystem Impact</strong>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{activeStep.impact}</span>
                </div>
              </div>
            </div>

            <div style={{ gridColumn: 'span 5', paddingLeft: 'clamp(0px, 2vw, 1.5rem)' }}>
              <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.825rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '0.75rem' }}>
                Framework Focus
              </h4>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1rem' }}>
                Without a structured bridge between early classroom curiosity and eventual commercialization, intellectual capital remains stagnant.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                Kishan Bastola's 7-stage framework removes institutional bottlenecks, allowing young minds in Nepal to transition seamlessly from theoretical enquiry into enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STAKEHOLDER MAP (ACCESSIBLE STACKED LIST PER UX.MD RULE §3 /ECOSYSTEM) */}
      <section className="section-wrapper" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="container">
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="eyebrow">INTEGRATED NETWORK</span>
            <h2 className="text-h1" style={{ marginTop: '0.5rem' }}>Ecosystem Stakeholders & Collaborators</h2>
            <p className="lead-text" style={{ maxWidth: '780px', marginTop: '0.85rem' }}>
              HRIC is conceived not as a isolated laboratory, but as an integrated ecosystem uniting key regional and national stakeholders.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {ecosystem.stakeholders.map((s) => (
              <div key={s.id} style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', padding: '1.75rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {s.role}
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginTop: '0.35rem', marginBottom: '0.5rem' }}>
                  {s.name}
                </h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>
              Partner With The Ecosystem <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
