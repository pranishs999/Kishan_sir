import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, BookOpen, Calculator, FlaskConical, Microscope, Lightbulb, Rocket } from 'lucide-react';
import { work, initiatives } from '../data';
import { useLanguage } from '../context/LanguageContext';

const domainIcons: Record<string, React.ReactNode> = {
  education: <BookOpen size={24} />,
  mathematics: <Calculator size={24} />,
  science: <FlaskConical size={24} />,
  research: <Microscope size={24} />,
  innovation: <Lightbulb size={24} />,
  entrepreneurship: <Rocket size={24} />,
};

export const WorkDomainPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { tF, tA } = useLanguage();
  
  const domain = work.find(w => w.slug === slug);
  
  if (!domain) {
    return (
      <div className="section-wrapper" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container">
          <h1 className="text-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Domain Not Found</h1>
          <p className="lead-text" style={{ marginTop: '1rem', marginBottom: '2rem' }}>The requested work domain could not be found.</p>
          <Link to="/work" className="btn-primary">
            <ArrowLeft size={16} /> Back to All Domains
          </Link>
        </div>
      </div>
    );
  }

  const relatedInitiatives = initiatives.filter(i => domain.relatedInitiativeIds.includes(i.id));

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
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>
            {tF(domain.categoryLabel)}
          </span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            {tF(domain.title)}
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            {tF(domain.description).substring(0, 150)}...
          </p>
        </div>
      </section>

      <section className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ 
                backgroundColor: 'var(--bg-alt)', 
                border: '1px solid var(--border-light)', 
                borderRadius: '8px', 
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-blue)'
              }}>
                {domainIcons[domain.category]}
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
                  {tF(domain.categoryLabel)}
                </span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--text-primary)' }}>
                  {tF(domain.title)}
                </h2>
              </div>
            </div>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              {tF(domain.description)}
            </p>
          </div>

          <div style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-light)' }}>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
              Guiding Principles
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {tA(domain.principles).map((principle, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: 'var(--bg-alt)', borderRadius: '4px', borderLeft: '3px solid var(--accent-blue)' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--accent-blue)', fontSize: '1.25rem', flexShrink: 0 }}>
                    0{idx + 1}
                  </span>
                  <span style={{ fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                    {principle}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {relatedInitiatives.length > 0 && (
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
                Related Initiatives
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {relatedInitiatives.map((init) => (
                  <Link key={init.id} to={`/initiatives/${init.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-surface)', padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>
                        {tF(init.categoryLabel)}
                      </span>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                        {tF(init.title)}
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55, flex: 1, marginBottom: '1rem' }}>
                        {tF(init.summary)}
                      </p>
                      <span className="editorial-link" style={{ fontSize: '0.85rem', alignSelf: 'flex-start' }}>
                        View Initiative <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border-light)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/work" className="btn-secondary" style={{ padding: '0.85rem 2rem' }}>
              <ArrowLeft size={16} /> Back to All Domains
            </Link>
            <Link to="/ecosystem" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>
              View Ecosystem Connection <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};