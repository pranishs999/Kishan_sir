import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownRight, ArrowUpRight, FileText, Compass, ChevronRight } from 'lucide-react';
import { person, institutions, ecosystem } from '../data';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section 
        style={{
          position: 'relative',
          minHeight: 'calc(100vh - 120px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: 'clamp(2rem, 4vw, 4rem)',
          paddingBottom: 'clamp(3rem, 5vw, 4rem)',
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
              marginBottom: '2.5rem'
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

          <div className="grid-12" style={{ alignItems: 'center', gap: '2.5rem' }}>
            
            <div style={{ gridColumn: 'span 7', width: '100%', maxWidth: '100%' }}>
              
              <h1 
                className="text-display"
                style={{
                  lineHeight: 0.94,
                  marginBottom: '1.5rem',
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
                  fontSize: 'clamp(1.15rem, 2.2vw, 1.85rem)',
                  fontStyle: 'italic',
                  lineHeight: 1.3,
                  color: 'var(--accent-blue)',
                  maxWidth: '680px',
                  marginBottom: '2rem'
                }}
              >
                {person.professionalTitle}
              </p>

              <div 
                style={{
                  borderLeft: '2px solid var(--accent-gold)',
                  paddingLeft: '1.5rem',
                  marginTop: '1.75rem',
                  maxWidth: '620px'
                }}
              >
                <h2 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold)',
                    marginBottom: '0.5rem'
                  }}
                >
                  {person.tagline}
                </h2>
                <p 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
                    lineHeight: 1.55,
                    color: 'var(--text-secondary)',
                    fontWeight: 400
                  }}
                >
                  Transforming classroom curiosity into research, innovation ecosystems, and societal value across Nepal.
                </p>
              </div>

              <div 
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '1rem',
                  marginTop: '2.5rem'
                }}
              >
                <Link to="/about" className="btn-primary">
                  Explore Profile
                  <ArrowDownRight size={18} />
                </Link>

                <Link to="/cv" className="btn-secondary">
                  <FileText size={18} />
                  View CV
                </Link>
              </div>

            </div>

            <div style={{ gridColumn: 'span 5', width: '100%', maxWidth: '100%' }}>
              <div 
                className="editorial-image-frame"
                style={{
                  height: '100%',
                  minHeight: 'clamp(300px, 42vh, 440px)',
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
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 600, color: '#FFFFFF', margin: 0 }}>
                    {person.fullName}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--accent-gold-light)', letterSpacing: '0.04em', margin: 0 }}>
                    {person.nepaliName} · Bagmati Province, Nepal
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. EXECUTIVE SNAPSHOT */}
      <section 
        className="section-wrapper" 
        style={{ 
          backgroundColor: 'var(--bg-surface)', 
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)',
          paddingTop: '2.5rem',
          paddingBottom: '2.5rem'
        }}
      >
        <div className="container">
          <div className="credentials-grid-3x3">
            <div style={{ borderLeft: '2px solid var(--accent-blue)', paddingLeft: '1.25rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 600 }}>18+ Years</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Education & Executive Leadership</p>
            </div>
            <div style={{ borderLeft: '2px solid var(--accent-blue)', paddingLeft: '1.25rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 600 }}>M.Sc. Mathematics</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Tribhuvan University</p>
            </div>
            <div style={{ borderLeft: '2px solid var(--accent-blue)', paddingLeft: '1.25rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 600 }}>President</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Astronova Foundation Nepal</p>
            </div>
            <div style={{ borderLeft: '2px solid var(--accent-blue)', paddingLeft: '1.25rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 600 }}>Founder & Director</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Hetauda Research & Innovation Center</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE FRAMEWORK HIGHLIGHT */}
      <section 
        className="section-wrapper"
        style={{
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div className="container">
          <div className="grid-12" style={{ alignItems: 'center', gap: '2rem' }}>
            <div style={{ gridColumn: 'span 7' }}>
              <span className="eyebrow">SIGNATURE ARCHITECTURE</span>
              <h2 className="text-h1" style={{ marginTop: '0.35rem', marginBottom: '1rem' }}>
                From Curiosity to Commerce
              </h2>
              <p className="lead-text" style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                A 7-stage systematic methodology designed to nurture raw student inquiry into rigorous scientific inquiry, technological innovation, enterprise, and sustainable value.
              </p>
              <div style={{ marginTop: '1.75rem' }}>
                <Link to="/framework" className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}>
                  <Compass size={16} />
                  Explore 7-Stage Framework
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            <div style={{ gridColumn: 'span 5' }}>
              <div 
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  padding: '1.75rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                }}
              >
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '0.75rem' }}>
                  7-Stage Pipeline
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {ecosystem.pipeline.slice(0, 4).map((step, i) => (
                    <div key={step.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem' }}>
                      <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--accent-blue)', fontSize: '0.75rem' }}>
                        0{i + 1}
                      </span>
                      <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                        {step.subtitle}
                      </span>
                    </div>
                  ))}
                  <div style={{ paddingTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <span>+ 3 more commercialization stages</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED INSTITUTIONAL ECOSYSTEMS */}
      <section className="section-wrapper" style={{ backgroundColor: 'var(--bg-alt)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="eyebrow">INSTITUTIONAL ECOSYSTEMS</span>
              <h2 className="text-h1" style={{ marginTop: '0.25rem' }}>Building Enduring Infrastructures</h2>
            </div>
            <Link to="/institutions" className="editorial-link" style={{ fontSize: '0.85rem' }}>
              View All Institutions <ArrowUpRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {institutions.slice(0, 2).map((inst) => (
              <div key={inst.id} style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-surface)', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    {inst.type}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginTop: '0.35rem', marginBottom: '0.5rem' }}>
                    {inst.name}
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                    {inst.description}
                  </p>
                </div>
                <Link to={`/initiatives/${inst.id}`} className="editorial-link" style={{ fontSize: '0.85rem' }}>
                  Explore Institution <ArrowUpRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EXECUTIVE VISION & CTA */}
      <section className="section-wrapper section-dark">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span className="eyebrow-dark" style={{ marginBottom: '1.25rem' }}>EXECUTIVE VISION</span>
          <h2 className="text-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', color: 'var(--dark-text)', marginBottom: '1.75rem', lineHeight: 1.15 }}>
            "Every child should have the opportunity to ask a question."
          </h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>Contact & Collaborate</Link>
            <Link to="/work" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>View Work Domains</Link>
          </div>
        </div>
      </section>
    </>
  );
};