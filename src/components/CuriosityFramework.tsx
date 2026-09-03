import React, { useState } from 'react';
import { ChevronRight, Layers } from 'lucide-react';
import { FRAMEWORK_STEPS } from '../data/sourceFacts';

export const CuriosityFramework: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>('curiosity');

  const activeStep = FRAMEWORK_STEPS.find(s => s.id === activeStepId) || FRAMEWORK_STEPS[0];

  return (
    <section 
      id="framework" 
      className="section-wrapper section-dark"
      style={{
        backgroundColor: 'var(--dark-bg)',
        color: 'var(--dark-text)',
        borderTop: '1px solid var(--dark-border)',
        borderBottom: '1px solid var(--dark-border)'
      }}
    >
      <div className="container">
        
        {/* Header Block */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="eyebrow eyebrow-dark">03 / SIGNATURE FRAMEWORK</span>
          <h2 
            className="text-h1" 
            style={{ 
              color: 'var(--dark-text)', 
              fontFamily: 'var(--font-serif)',
              marginTop: '0.5rem',
              letterSpacing: '-0.02em'
            }}
          >
            FROM CURIOSITY TO COMMERCE
          </h2>
          <p 
            style={{ 
              fontSize: '1.2rem', 
              color: 'var(--dark-text-muted)', 
              maxWidth: '780px', 
              marginTop: '1rem',
              fontFamily: 'var(--font-sans)'
            }}
          >
            A 7-stage architectural model for building sustainable research, innovation, and enterprise pipelines from classroom inquiry to economic value.
          </p>
        </div>

        {/* Horizontal Typography Progression Strip */}
        <div 
          style={{
            borderTop: '1px solid var(--dark-border)',
            borderBottom: '1px solid var(--dark-border)',
            paddingTop: '1.75rem',
            paddingBottom: '1.75rem',
            marginBottom: '3.5rem',
            overflowX: 'auto'
          }}
        >
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minWidth: '920px',
              gap: '0.75rem'
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
                      gap: '0.35rem',
                      padding: '0.75rem 1rem',
                      borderBottom: `2px solid ${isActive ? 'var(--accent-gold-light)' : 'transparent'}`,
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-sans)', 
                        fontSize: '0.75rem', 
                        fontWeight: 700, 
                        color: isActive ? 'var(--accent-gold-light)' : 'var(--dark-text-muted)',
                        letterSpacing: '0.1em'
                      }}
                    >
                      {step.stepNumber}
                    </span>
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-serif)', 
                        fontSize: isActive ? '1.5rem' : '1.3rem', 
                        fontWeight: isActive ? 600 : 400, 
                        color: isActive ? '#FFFFFF' : 'var(--dark-text-muted)',
                        letterSpacing: '0.04em',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {step.title}
                    </span>
                  </button>

                  {idx < FRAMEWORK_STEPS.length - 1 && (
                    <ChevronRight 
                      size={18} 
                      color="var(--dark-border)" 
                      style={{ flexShrink: 0 }} 
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Dynamic Detail Card for Selected Stage */}
        <div className="grid-12" style={{ alignItems: 'center' }}>
          
          <div style={{ gridColumn: 'span 7' }}>
            <div 
              style={{
                backgroundColor: 'var(--dark-surface)',
                border: '1px solid var(--dark-border)',
                padding: 'clamp(2rem, 4vw, 3rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span 
                  style={{
                    backgroundColor: 'var(--accent-blue)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.65rem',
                    letterSpacing: '0.1em'
                  }}
                >
                  STAGE {activeStep.stepNumber} OF 07
                </span>
                <span style={{ fontSize: '0.9rem', color: 'var(--accent-gold-light)', fontWeight: 600 }}>
                  {activeStep.subtitle}
                </span>
              </div>

              <h3 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.5rem',
                  color: '#FFFFFF',
                  lineHeight: 1.1
                }}
              >
                {activeStep.title}
              </h3>

              <p style={{ fontSize: '1.15rem', color: 'var(--dark-text-muted)', lineHeight: 1.6 }}>
                {activeStep.description}
              </p>

              <div 
                style={{
                  marginTop: '1rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--dark-border)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem'
                }}
              >
                <Layers size={20} color="var(--accent-gold-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Ecosystem Impact
                  </strong>
                  <span style={{ fontSize: '0.95rem', color: 'var(--dark-text-muted)' }}>
                    {activeStep.impact}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ gridColumn: 'span 5', paddingLeft: 'clamp(0px, 2vw, 2rem)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h4 
                style={{ 
                  fontFamily: 'var(--font-sans)', 
                  fontSize: '0.85rem', 
                  fontWeight: 700, 
                  letterSpacing: '0.15em', 
                  textTransform: 'uppercase', 
                  color: 'var(--accent-gold-light)' 
                }}
              >
                Framework Principles
              </h4>
              <p style={{ fontSize: '1.05rem', color: 'var(--dark-text-muted)', lineHeight: 1.65 }}>
                Without a structured bridge between early classroom curiosity and eventual commercialization, intellectual capital remains stagnant.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--dark-text-muted)', lineHeight: 1.65 }}>
                Kishan Bastola's 7-stage framework removes institutional bottlenecks, allowing young minds in Nepal to transition seamlessly from theoretical enquiry into enterprise and national value.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
