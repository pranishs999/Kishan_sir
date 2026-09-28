import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { FRAMEWORK_STEPS } from '../data/sourceFacts';

export const FrameworkPage: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>('curiosity');
  const activeStep = FRAMEWORK_STEPS.find(s => s.id === activeStepId) || FRAMEWORK_STEPS[0];

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
          backgroundColor: 'var(--bg-alt)',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div className="container">
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>SIGNATURE FRAMEWORK</span>
          <h1 className="text-display" style={{ maxWidth: '900px', lineHeight: 1.05 }}>
            FROM CURIOSITY TO COMMERCE
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            A 7-Stage Architectural Model for Research, Innovation & Enterprise
          </p>
        </div>
      </section>

      <section 
        id="framework" 
        className="section-wrapper"
        style={{
          backgroundColor: 'var(--bg-alt)',
          color: 'var(--text-primary)',
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div className="container">
          
          <div style={{ marginBottom: '3rem' }}>
            <h2 className="text-h1" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-serif)', marginTop: '0.35rem', letterSpacing: '-0.02em', fontSize: 'clamp(2rem, 3.8vw, 3.2rem)' }}>
              The Seven Stages
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '780px', marginTop: '0.85rem', fontFamily: 'var(--font-sans)', lineHeight: 1.6 }}>
              A structured pathway transforming classroom curiosity into sustainable enterprise and national value.
            </p>
          </div>

          <div 
            style={{
              borderTop: '1px solid var(--border-light)',
              borderBottom: '1px solid var(--border-light)',
              paddingTop: '1.5rem',
              paddingBottom: '1.5rem',
              marginBottom: '2.5rem',
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              maxWidth: '100%'
            }}
          >
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '0.5rem',
                width: 'max-content',
                minWidth: '100%'
              }}
            >
              {FRAMEWORK_STEPS.map((step, idx) => {
                const isActive = step.id === activeStepId;
                return (
                  <React.Fragment key={step.id}>
                    <button
                      onClick={() => setActiveStepId(step.id)}
                      onMouseEnter={() => setActiveStepId(step.id)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '0.2rem',
                        padding: '0.75rem 1rem',
                        borderBottom: `3px solid ${isActive ? 'var(--accent-blue)' : 'transparent'}`,
                        transition: 'all 0.25s ease',
                        flexShrink: 0,
                        minWidth: '140px'
                      }}
                    >
                      <span 
                        style={{ 
                          fontFamily: 'var(--font-sans)', 
                          fontSize: '0.725rem', 
                          fontWeight: 700, 
                          color: isActive ? 'var(--accent-blue)' : 'var(--text-muted)',
                          letterSpacing: '0.1em'
                        }}
                      >
                        STAGE {step.stepNumber}
                      </span>
                      <span 
                        style={{ 
                          fontFamily: 'var(--font-serif)', 
                          fontSize: isActive ? '1.4rem' : '1.25rem', 
                          fontWeight: isActive ? 600 : 400, 
                          color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                          letterSpacing: '0.03em',
                          whiteSpace: 'nowrap',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {step.title}
                      </span>
                    </button>

                    {idx < FRAMEWORK_STEPS.length - 1 && (
                      <ChevronRight 
                        size={18} 
                        color="var(--border-light)" 
                        style={{ flexShrink: 0 }} 
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div className="grid-12" style={{ alignItems: 'center', gap: '3rem' }}>
            
            <div style={{ gridColumn: 'span 7' }}>
              <div 
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span 
                    style={{
                      backgroundColor: 'var(--accent-blue)',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.6rem',
                      letterSpacing: '0.1em'
                    }}
                  >
                    STAGE {activeStep.stepNumber} OF 07
                  </span>
                  <span style={{ fontSize: '0.95rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                    {activeStep.subtitle}
                  </span>
                </div>

                <h3 
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                    color: 'var(--text-primary)',
                    lineHeight: 1.15
                  }}
                >
                  {activeStep.title}
                </h3>

                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {activeStep.description}
                </p>

                <div 
                  style={{
                    marginTop: '0.5rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}
                >
                  <span style={{ fontSize: '2rem' }}>📊</span>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                      Ecosystem Impact
                    </strong>
                    <span style={{ fontSize: '1.025rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {activeStep.impact}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ gridColumn: 'span 5', paddingLeft: 'clamp(0px, 2vw, 1.5rem)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', padding: '1.5rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.825rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
                    Framework Principles
                  </h4>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1rem' }}>
                    Without a structured bridge between early classroom curiosity and eventual commercialization, intellectual capital remains stagnant.
                  </p>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    Kishan Bastola's 7-stage framework removes institutional bottlenecks, allowing young minds in Nepal to transition seamlessly from theoretical enquiry into enterprise and national value.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.825rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                    All Stages Overview
                  </h4>
                  {FRAMEWORK_STEPS.map((step) => (
                    <div 
                      key={step.id}
                      onClick={() => setActiveStepId(step.id)}
                      onMouseEnter={() => setActiveStepId(step.id)}
                      style={{
                        backgroundColor: step.id === activeStepId ? 'var(--accent-blue)' : 'var(--bg-surface)',
                        border: '1px solid var(--border-light)',
                        padding: '1rem 1.25rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        borderLeft: `3px solid ${step.id === activeStepId ? 'var(--accent-gold)' : 'transparent'}`
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span 
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: step.id === activeStepId ? 'var(--accent-gold)' : 'var(--text-muted)',
                            letterSpacing: '0.1em'
                          }}
                        >
                          {step.stepNumber}
                        </span>
                        <span 
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.1rem',
                            fontWeight: step.id === activeStepId ? 600 : 400,
                            color: step.id === activeStepId ? '#FFFFFF' : 'var(--text-primary)',
                            letterSpacing: '0.03em'
                          }}
                        >
                          {step.title}
                        </span>
                      </div>
                      <p 
                        style={{ 
                          fontSize: '0.9rem', 
                          color: step.id === activeStepId ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)', 
                          lineHeight: 1.5, 
                          marginTop: '0.35rem',
                          fontFamily: 'var(--font-sans)'
                        }}
                      >
                        {step.subtitle}
                      </p>
                    </div>
                  ))}
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
            RELATED
          </span>
          <h2 className="text-h1" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Explore Related Sections
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--dark-text-muted)', marginBottom: '2.5rem' }}>
            Selected work, international delegations, and institutional building.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/work" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>Selected Work</a>
            <a href="/delegations" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>International Delegations</a>
            <a href="/institutions" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>Institutional Leadership</a>
          </div>
        </div>
      </section>
    </>
  );
};