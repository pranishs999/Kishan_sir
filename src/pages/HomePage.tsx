import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownRight, FileText, ArrowUpRight, ChevronRight } from 'lucide-react';
import { 
  HERO_DATA, 
  PROFILE_DATA, 
  CREDENTIALS_DATA, 
  SELECTED_WORK, 
  FRAMEWORK_STEPS, 
  GLOBAL_DELEGATIONS, 
  VISION_DATA 
} from '../data/sourceFacts';

export const HomePage: React.FC = () => {
  const [activeFrameworkStep, setActiveFrameworkStep] = React.useState<string>('curiosity');
  const activeStep = FRAMEWORK_STEPS.find(s => s.id === activeFrameworkStep) || FRAMEWORK_STEPS[0];

  return (
    <>
      <section 
        style={{
          position: 'relative',
          minHeight: 'calc(100vh - 80px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingTop: 'clamp(2rem, 4vw, 4rem)',
          paddingBottom: 'clamp(3rem, 6vw, 5rem)',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem',
              borderBottom: '1px solid var(--border-light)',
              paddingBottom: '1rem',
              marginBottom: '2rem'
            }}
          >
            <span className="eyebrow" style={{ margin: 0 }}>
              EXECUTIVE PORTFOLIO & ARCHIVE
            </span>
            <span 
              style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '0.8rem', 
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              BAGMATI PROVINCE · NEPAL
            </span>
          </div>

          <div className="grid-12" style={{ alignItems: 'end' }}>
            
            <div style={{ gridColumn: 'span 8', width: '100%', maxWidth: '100%' }}>
              
              <h1 
                className="text-display"
                style={{
                  lineHeight: 0.94,
                  marginBottom: '1.75rem',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.03em',
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word'
                }}
              >
                {HERO_DATA.name}
              </h1>

              <p 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.15rem, 2.4vw, 2.1rem)',
                  fontStyle: 'italic',
                  lineHeight: 1.25,
                  color: 'var(--accent-blue)',
                  maxWidth: '720px',
                  marginBottom: '3rem'
                }}
              >
                {HERO_DATA.title}
              </p>

              <div 
                style={{
                  borderLeft: '2px solid var(--accent-gold)',
                  paddingLeft: '1.75rem',
                  marginTop: '2.5rem',
                  maxWidth: '680px'
                }}
              >
                <h2 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold)',
                    marginBottom: '0.65rem'
                  }}
                >
                  {HERO_DATA.frameworkHeader}
                </h2>
                <p 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(1.05rem, 1.4vw, 1.3rem)',
                    lineHeight: 1.55,
                    color: 'var(--text-primary)',
                    fontWeight: 400
                  }}
                >
                  {HERO_DATA.frameworkTagline}
                </p>
              </div>

              <div 
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '1.25rem',
                  marginTop: '3.25rem'
                }}
              >
                <Link to="/work" className="btn-primary">
                  {HERO_DATA.primaryCTA}
                  <ArrowDownRight size={18} />
                </Link>

                <button className="btn-secondary">
                  <FileText size={18} />
                  {HERO_DATA.secondaryCTA}
                </button>
              </div>

            </div>

            <div style={{ gridColumn: 'span 4', width: '100%', maxWidth: '100%' }}>
              <div 
                className="editorial-image-frame"
                style={{
                  height: '100%',
                  minHeight: 'clamp(320px, 45vh, 480px)',
                  border: '1px solid var(--border-light)',
                  boxShadow: '0 16px 36px rgba(0,0,0,0.06)'
                }}
              >
                <img 
                  src={HERO_DATA.heroImageUrl} 
                  alt="Kishan Bastola — Educationist, Mathematician, STEM Advocate" 
                  loading="eager"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'contrast(1.04) saturate(0.95)'
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(180deg, transparent 0%, rgba(18,19,22,0.88) 100%)',
                    padding: '1.25rem',
                    color: '#FFFFFF'
                  }}
                >
                  <span className="placeholder-badge" style={{ backgroundColor: 'var(--accent-blue)' }}>
                    EXECUTIVE PORTRAIT
                  </span>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', marginTop: '0.35rem', fontWeight: 600, color: '#FFFFFF' }}>
                    Kishan Bastola
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--accent-gold-light)', letterSpacing: '0.04em' }}>
                    Chairperson — Astronova Foundation Nepal · STEM & Math Advocate
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section id="profile" className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="eyebrow">{PROFILE_DATA.sectionNumber}</span>
            <h2 className="text-h1" style={{ maxWidth: '900px', marginTop: '0.5rem' }}>
              {PROFILE_DATA.title}
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
                    <span style={{ fontSize: '1.5rem' }}>🏆</span>
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
                    <span style={{ fontSize: '1.5rem' }}>🎓</span>
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
                    <span style={{ fontSize: '1.5rem' }}>🏛️</span>
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
                {PROFILE_DATA.bodyParagraphs.map((para, idx) => (
                  <p key={idx} className="lead-text" style={{ fontSize: idx === 0 ? '1.25rem' : '1.1rem' }}>
                    {para}
                  </p>
                ))}

                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
                  <Link to="/about" className="editorial-link" style={{ fontSize: '1.05rem' }}>
                    Read Full Executive Profile <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

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
              CREDENTIALS AT A GLANCE
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Source Verified Credentials
            </span>
          </div>

          <div className="credentials-grid-3x3">
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

      <section id="work" className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          
          <div style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">SELECTED WORK</span>
            <h2 className="text-h2" style={{ maxWidth: '780px', marginTop: '0.35rem', fontSize: 'clamp(1.75rem, 3.2vw, 2.4rem)' }}>
              Pioneering Educational & Research Initiatives
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5.5rem' }}>
            {SELECTED_WORK.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={item.id}
                  className="grid-12"
                  style={{
                    alignItems: 'center',
                    paddingBottom: '4.5rem',
                    borderBottom: idx < SELECTED_WORK.length - 1 ? '1px solid var(--border-light)' : 'none'
                  }}
                >
                  <div style={{ gridColumn: isEven ? 'span 6' : 'span 6', order: isEven ? 1 : 2 }}>
                    <Link to={`/work/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="editorial-image-frame" style={{ minHeight: '380px' }}>
                        <img 
                          src={item.customImageUrl || '/images/astronova.png'} 
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
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
                            background: 'linear-gradient(180deg, transparent 0%, rgba(18,19,22,0.88) 100%)',
                            padding: '1.25rem',
                            color: '#FFFFFF',
                            zIndex: 2
                          }}
                        >
                          <span className="placeholder-badge" style={{ backgroundColor: 'var(--accent-blue)' }}>
                            {item.category}
                          </span>
                          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', marginTop: '0.35rem', color: '#FFFFFF' }}>
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div style={{ gridColumn: 'span 6', order: isEven ? 2 : 1, paddingLeft: isEven ? 'clamp(0px, 3vw, 2.5rem)' : '0', paddingRight: isEven ? '0' : 'clamp(0px, 3vw, 2.5rem)' }}>
                    <span 
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--accent-gold)',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '0.5rem'
                      }}
                    >
                      {item.role}
                    </span>

                    <Link to={`/work/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <h3 
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                          color: 'var(--text-primary)',
                          lineHeight: 1.15,
                          marginBottom: '1rem'
                        }}
                      >
                        {item.title}
                      </h3>
                    </Link>

                    <p className="lead-text" style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                      {item.summary}
                    </p>

                    <ul 
                      style={{ 
                        listStyle: 'none', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '0.5rem',
                        marginBottom: '2rem'
                      }}
                    >
                      {item.highlights.map((h, i) => (
                        <li 
                          key={i} 
                          style={{
                            fontSize: '0.95rem',
                            color: 'var(--text-secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.65rem'
                          }}
                        >
                          <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-blue)', borderRadius: '50%', flexShrink: 0 }} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <Link 
                        to={`/work/${item.id}`}
                        className="btn-secondary" 
                        style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}
                      >
                        Explore Details <ArrowUpRight size={16} />
                      </Link>

                      {item.linkUrl && item.linkUrl.startsWith('http') && (
                        <a 
                          href={item.linkUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn-primary" 
                          style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}
                        >
                          {item.linkText || 'Visit Web Link'} <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

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
            <span className="eyebrow">SIGNATURE FRAMEWORK</span>
            <h2 
              className="text-h1" 
              style={{ 
                color: 'var(--text-primary)', 
                fontFamily: 'var(--font-serif)',
                marginTop: '0.35rem',
                letterSpacing: '-0.02em',
                fontSize: 'clamp(2rem, 3.8vw, 3.2rem)'
              }}
            >
              FROM CURIOSITY TO COMMERCE
            </h2>
            <p 
              style={{ 
                fontSize: '1.1rem', 
                color: 'var(--text-secondary)', 
                maxWidth: '780px', 
                marginTop: '0.85rem',
                fontFamily: 'var(--font-sans)',
                lineHeight: 1.6
              }}
            >
              A 7-stage architectural model for building sustainable research, innovation, and enterprise pipelines from classroom inquiry to economic value.
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
                const isActive = step.id === activeFrameworkStep;
                return (
                  <React.Fragment key={step.id}>
                    <button
                      onClick={() => setActiveFrameworkStep(step.id)}
                      onMouseEnter={() => setActiveFrameworkStep(step.id)}
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
                        transition: 'all 0.25s ease',
                        flexShrink: 0
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
                        {step.stepNumber}
                      </span>
                      <span 
                        style={{ 
                          fontFamily: 'var(--font-serif)', 
                          fontSize: isActive ? '1.3rem' : '1.15rem', 
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
                        size={16} 
                        color="var(--border-light)" 
                        style={{ flexShrink: 0 }} 
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div className="grid-12" style={{ alignItems: 'center' }}>
            
            <div style={{ gridColumn: 'span 7' }}>
              <div 
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
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
                  <span style={{ fontSize: '0.875rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                    {activeStep.subtitle}
                  </span>
                </div>

                <h3 
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.65rem, 3vw, 2.2rem)',
                    color: 'var(--text-primary)',
                    lineHeight: 1.15
                  }}
                >
                  {activeStep.title}
                </h3>

                <p style={{ fontSize: '1.025rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {activeStep.description}
                </p>

                <div 
                  style={{
                    marginTop: '0.5rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem'
                  }}
                >
                  <span style={{ fontSize: '1.5rem' }}>📊</span>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.775rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Ecosystem Impact
                    </strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {activeStep.impact}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ gridColumn: 'span 5', paddingLeft: 'clamp(0px, 2vw, 1.5rem)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                <h4 
                  style={{ 
                    fontFamily: 'var(--font-sans)', 
                    fontSize: '0.825rem', 
                    fontWeight: 700, 
                    letterSpacing: '0.15em', 
                    textTransform: 'uppercase', 
                    color: 'var(--accent-gold)' 
                  }}
                >
                  Framework Principles
                </h4>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  Without a structured bridge between early classroom curiosity and eventual commercialization, intellectual capital remains stagnant.
                </p>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  Kishan Bastola's 7-stage framework removes institutional bottlenecks, allowing young minds in Nepal to transition seamlessly from theoretical enquiry into enterprise and national value.
                </p>
              </div>
            </div>

          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/framework" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>
              Explore Full Framework <ArrowUpRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      <section 
        id="delegations" 
        className="section-wrapper" 
        style={{ 
          backgroundColor: 'var(--bg-surface)', 
          borderTop: '1px solid var(--border-light)' 
        }}
      >
        <div className="container">
          
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="eyebrow">GLOBAL SCIENTIFIC DELEGATIONS</span>
            <h2 className="text-h1" style={{ maxWidth: '850px', marginTop: '0.5rem' }}>
              Leading Nepalese Youth Researchers on International Platforms
            </h2>
            <p className="lead-text" style={{ maxWidth: '780px', marginTop: '1rem' }}>
              Escorting national student contingents to represent Nepal at global science fairs, technology olympiads, and research competitions in Taiwan and Indonesia.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
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
                      <span style={{ fontSize: '1.2rem' }}>🏅</span> Key Delegation Achievements
                    </strong>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {del.achievements.map((ach, i) => (
                        <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                          <span style={{ fontSize: '1.1rem' }}>→</span>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <span style={{ fontSize: '1.1rem' }}>🌍</span> Official Representative of Nepal · {del.location}
                </div>

              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/delegations" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>
              View All Delegations <ArrowUpRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      <section 
        id="vision" 
        className="section-wrapper"
        style={{
          backgroundColor: 'var(--bg-surface)',
          color: 'var(--text-primary)',
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)',
          paddingTop: 'clamp(3.5rem, 6vw, 6rem)',
          paddingBottom: 'clamp(3.5rem, 6vw, 6rem)',
          textAlign: 'left'
        }}
      >
        <div className="container">
          
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            
            <span className="eyebrow" style={{ marginBottom: '1.25rem' }}>
              EDUCATIONAL VISION & DECLARATION
            </span>

            <h2 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
                color: 'var(--accent-blue)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '2.5rem',
                textTransform: 'uppercase'
              }}
            >
              {VISION_DATA.headerQuote}
            </h2>

            <div className="divider" style={{ marginBottom: '2.5rem' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {VISION_DATA.lines.map((line, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '1.25rem'
                  }}
                >
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-sans)', 
                      fontSize: '0.85rem', 
                      fontWeight: 700, 
                      color: 'var(--accent-gold)',
                      letterSpacing: '0.1em'
                    }}
                  >
                    0{idx + 1}
                  </span>

                  <p 
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.25rem, 2.2vw, 1.9rem)',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.3,
                      fontWeight: 400
                    }}
                  >
                    {line}
                  </p>
                </div>
              ))}
            </div>

          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/vision" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>
              Read Full Vision Statement <ArrowUpRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      <section 
        id="cta" 
        className="section-wrapper"
        style={{
          backgroundColor: 'var(--dark-bg)',
          color: 'var(--dark-text)',
          borderTop: '1px solid var(--dark-border)',
          paddingTop: 'clamp(3.5rem, 6vw, 5rem)',
          paddingBottom: 'clamp(3.5rem, 6vw, 5rem)',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          
          <span className="eyebrow-dark" style={{ marginBottom: '1.25rem' }}>
            CONNECT & COLLABORATE
          </span>

          <h2 
            className="text-h1" 
            style={{ 
              color: 'var(--dark-text)', 
              marginTop: '0.5rem',
              marginBottom: '1.5rem'
            }}
          >
            Let's Build the Future of STEM Education
          </h2>

          <p className="lead-text" style={{ color: 'var(--dark-text-muted)', marginBottom: '2.5rem' }}>
            For academic partnerships, institutional collaboration, research supervision, delegation opportunities, or foundation support.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>
              Get in Touch <ArrowUpRight size={16} />
            </Link>
            <Link to="/support" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>
              Support the Vision
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};