import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Calculator, FlaskConical, Microscope, Lightbulb, Rocket, ArrowRight } from 'lucide-react';
import { work } from '../data';
import { useLanguage } from '../context/LanguageContext';

const domainIcons: Record<string, React.ReactNode> = {
  education: <BookOpen size={24} />,
  mathematics: <Calculator size={24} />,
  science: <FlaskConical size={24} />,
  research: <Microscope size={24} />,
  innovation: <Lightbulb size={24} />,
  entrepreneurship: <Rocket size={24} />,
};

export const WorkPage: React.FC = () => {
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
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>WORK DOMAINS</span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            Professional Domains of Expertise
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            Fields of practice — not projects — where sustained impact is built
          </p>
        </div>
      </section>

      <section className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <p className="lead-text" style={{ maxWidth: '780px', marginBottom: '3rem' }}>
            Kishan Bastola's work spans six interconnected domains. Each represents a field of sustained professional practice, not a discrete project. Together they form the foundation of the Curiosity → Commerce ecosystem.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {work.map((domain) => (
              <Link key={domain.slug} to={`/work/${domain.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-surface)', padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%', transition: 'box-shadow 0.3s ease' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ 
                      backgroundColor: 'var(--bg-alt)', 
                      border: '1px solid var(--border-light)', 
                      borderRadius: '8px', 
                      padding: '0.75rem',
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
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                        {tF(domain.title)}
                      </h3>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1, marginBottom: '1.5rem' }}>
                    {tF(domain.description)}
                  </p>
                  <div style={{ marginTop: 'auto' }}>
                    <Link to={`/work/${domain.slug}`} className="editorial-link" style={{ fontSize: '0.85rem' }}>
                      Explore Domain <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link to="/ecosystem" className="btn-secondary" style={{ padding: '0.85rem 2rem' }}>
              See the Ecosystem Model <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};