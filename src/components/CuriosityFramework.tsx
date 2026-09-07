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
          <span className="eyebrow eyebrow-dark">SIGNATURE FRAMEWORK</span>
          <h2 
            className="text-h1" 
            style={{ 
              color: 'var(--dark-text)', 
              fontFamily: 'var(--font-serif)',
              marginTop: '0.5rem',
              letterSpacing: '-0.02em',
              fontSize: 'clamp(2.1rem, 4vw, 3.5rem)'
            }}
          >
            FROM CURIOSITY TO COMMERCE
          </h2>
          <p 
            style={{ 
              fontSize: '1.15rem', 
              color: 'var(--dark-text-muted)', 
              maxWidth: '780px', 
              marginTop: '1rem',
              fontFamily: 'var(--font-sans)',
              lineHeight: 1.6
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
            paddingTop: '1.25rem',
            paddingBottom: '1.25rem',
            marginBottom: '3rem',
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
                      gap: '0.25rem',
                      padding: '0.6rem 0.85rem',
                      borderBottom: `2px solid ${isActive ? 'var(--accent-gold-light)' : 'transparent'}`,
                      transition: 'all 0.25s ease',
                      flexShrink: 0
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
                        fontSize: isActive ? '1.35rem' : '1.2rem', 
                        fontWeight: isActive ? 600 : 400, 
                        color: isActive ? '#FFFFFF' : 'var(--dark-text-muted)',
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
                      size={16} 
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
                padding: 'clamp(1.5rem, 3.5vw, 2.75rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.15rem',
                overflowWrap: 'break-word',
                wordBreak: 'break-word'
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
                <span style={{ fontSize: '0.875rem', color: 'var(--accent-gold-light)', fontWeight: 600 }}>
                  {activeStep.subtitle}
                </span>
              </div>

              <h3 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
                  color: '#FFFFFF',
                  lineHeight: 1.15
                }}
              >
                {activeStep.title}
              </h3>

              <p style={{ fontSize: '1.05rem', color: 'var(--dark-text-muted)', lineHeight: 1.6 }}>
                {activeStep.description}
              </p>

              <div 
                style={{
                  marginTop: '0.75rem',
                  paddingTop: '1.15rem',
                  borderTop: '1px solid var(--dark-border)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem'
                }}
              >
                <Layers size={20} color="var(--accent-gold-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.8rem', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Ecosystem Impact
                  </strong>
                  <span style={{ fontSize: '0.925rem', color: 'var(--dark-text-muted)' }}>
                    {activeStep.impact}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ gridColumn: 'span 5', paddingLeft: 'clamp(0px, 2vw, 1.5rem)' }}>
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
