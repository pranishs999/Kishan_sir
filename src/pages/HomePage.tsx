import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownRight, ArrowUpRight, ChevronRight, Newspaper, FileText } from 'lucide-react';
import { person, work, institutions, ecosystem, media } from '../data';

export const HomePage: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>('curiosity');
  const activeStep = ecosystem.pipeline.find(s => s.id === activeStepId) || ecosystem.pipeline[0];

  return (
    <>
      {/* 1. HERO SECTION */}
      <section 
        style={{
          position: 'relative',
          minHeight: 'calc(100vh - 120px)',
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
                {person.fullName}
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
                {person.professionalTitle}
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
                  {person.tagline}
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
                  Building pathways that transform curiosity into learning, research, innovation, enterprise and value.
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
                  Explore Initiatives
                  <ArrowDownRight size={18} />
                </Link>

                <Link to="/cv" className="btn-secondary">
                  <FileText size={18} />
                  View CV
                </Link>
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
                  src={person.profileImage} 
                  alt={`${person.fullName} — ${person.professionalTitle}`} 
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
                    {person.fullName}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--accent-gold-light)', letterSpacing: '0.04em' }}>
                    {person.nepaliName}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. PROFESSIONAL SNAPSHOT */}
      <section 
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
            <Link to="/about" className="editorial-link" style={{ fontSize: '0.85rem' }}>
              Full Biography & History <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="credentials-grid-3x3">
            <div style={{ borderLeft: '2px solid var(--accent-blue)', paddingLeft: '1.25rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', fontWeight: 600 }}>18+ Years</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Education & Executive Leadership</p>
            </div>
            <div style={{ borderLeft: '2px solid var(--accent-blue)', paddingLeft: '1.25rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', fontWeight: 600 }}>Master's Degree</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Mathematics (M.Sc. / M.A.)</p>
            </div>
            <div style={{ borderLeft: '2px solid var(--accent-blue)', paddingLeft: '1.25rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', fontWeight: 600 }}>President</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Astronova Foundation Nepal</p>
            </div>
            <div style={{ borderLeft: '2px solid var(--accent-blue)', paddingLeft: '1.25rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', fontWeight: 600 }}>Founder & Director</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Hetauda Research & Innovation Center (HRIC)</p>
            </div>
            <div style={{ borderLeft: '2px solid var(--accent-blue)', paddingLeft: '1.25rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', fontWeight: 600 }}>Country Leader</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Taiwan International Science Fair (TISF)</p>
            </div>
            <div style={{ borderLeft: '2px solid var(--accent-blue)', paddingLeft: '1.25rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', fontWeight: 600 }}>Province Secretary</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Mathematical Association of Nepal (MAN) Bagmati</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHORT PROFILE */}
      <section className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid-12" style={{ alignItems: 'start' }}>
            <div style={{ gridColumn: 'span 4' }}>
              <span className="eyebrow">ABOUT THE LEADER</span>
              <h2 className="text-h1" style={{ marginTop: '0.5rem' }}>
                Education, Logic & System Building
              </h2>
            </div>
            <div style={{ gridColumn: 'span 8', paddingLeft: 'clamp(0px, 3vw, 2rem)' }}>
              <p className="lead-text" style={{ marginBottom: '1.5rem' }}>
                {person.shortBiography}
              </p>
              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
                <Link to="/about" className="editorial-link" style={{ fontSize: '1.05rem' }}>
                  Read Full Executive Profile & Identity <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CURIOSITY TO COMMERCE FRAMEWORK */}
      <section 
        className="section-wrapper"
        style={{
          backgroundColor: 'var(--bg-alt)',
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">SIGNATURE FRAMEWORK</span>
            <h2 className="text-h1" style={{ marginTop: '0.35rem' }}>
              FROM CURIOSITY TO COMMERCE
            </h2>
            <p className="lead-text" style={{ maxWidth: '780px', marginTop: '0.85rem' }}>
              A 7-stage architectural pathway guiding students from initial classroom questions into verifiable research, technological prototypes, enterprise, and societal value.
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
                Framework Philosophy
              </h4>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                "A child who asks a question today can become a researcher tomorrow, an innovator later, and an entrepreneur who creates value for society."
              </p>
              <Link to="/framework" className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}>
                Explore Full 7-Stage Framework <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SELECTED WORK */}
      <section className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="eyebrow">DOMAINS & INITIATIVES</span>
              <h2 className="text-h1" style={{ marginTop: '0.35rem' }}>Professional Work Domains</h2>
            </div>
            <Link to="/work" className="btn-secondary">
              View All Domains <ArrowUpRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {work.map((w) => (
              <div key={w.id} style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-surface)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    {w.categoryLabel}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
                    {w.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.5rem' }}>
                    {w.description}
                  </p>
                </div>
                <Link to={`/work/${w.slug}`} className="editorial-link" style={{ fontSize: '0.85rem' }}>
                  Explore Domain <ArrowUpRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INSTITUTIONS */}
      <section className="section-wrapper" style={{ backgroundColor: 'var(--bg-alt)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="eyebrow">INSTITUTIONAL ECOSYSTEMS</span>
            <h2 className="text-h1" style={{ marginTop: '0.5rem' }}>Building Enduring Infrastructures</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
            {institutions.map((inst) => (
              <div key={inst.id} style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-surface)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="editorial-image-frame" style={{ minHeight: '220px', marginBottom: '1.5rem' }}>
                    <img src={inst.coverImage} alt={inst.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    {inst.type}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginTop: '0.35rem', marginBottom: '0.5rem' }}>
                    {inst.name}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.5rem' }}>
                    {inst.description}
                  </p>
                </div>
                <Link to={`/initiatives/${inst.id}`} className="btn-secondary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.8rem' }}>
                  Explore Institution <ArrowUpRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SELECTED MEDIA */}
      <section className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="eyebrow">PRESS & DOCUMENTARY RECORD</span>
              <h2 className="text-h1" style={{ marginTop: '0.35rem' }}>Verified Media Coverage</h2>
            </div>
            <Link to="/media" className="btn-secondary">
              View All Press Records <ArrowUpRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {media.slice(0, 3).map((item) => (
              <div key={item.id} style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-primary)', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Newspaper size={14} color="var(--accent-gold)" />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {item.publication}
                    </span>
                    {!item.verified && (
                      <span className="placeholder-badge" style={{ backgroundColor: 'rgba(154,128,85,0.15)', color: 'var(--accent-gold)', fontSize: '0.65rem', padding: '0.15rem 0.4rem', border: '1px solid var(--accent-gold)' }}>
                        UNVERIFIED
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', lineHeight: 1.3, marginBottom: '1rem' }}>
                    "{item.headline}"
                  </h3>
                </div>
                <a href={item.externalUrl} target="_blank" rel="noopener noreferrer" className="editorial-link" style={{ fontSize: '0.85rem' }}>
                  View Source Record <ArrowUpRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VISION & DECLARATION */}
      <section className="section-wrapper section-dark">
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
          <span className="eyebrow-dark" style={{ marginBottom: '1.5rem' }}>EXECUTIVE VISION</span>
          <h2 className="text-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', color: 'var(--dark-text)', marginBottom: '2rem' }}>
            "EVERY CHILD SHOULD HAVE THE OPPORTUNITY TO ASK A QUESTION."
          </h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>Contact & Collaborate</Link>
            <Link to="/support" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>Support Foundation Vision</Link>
          </div>
        </div>
      </section>
    </>
  );
};