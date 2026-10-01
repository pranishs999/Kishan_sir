import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, Building2 } from 'lucide-react';
import { experience, leadership } from '../data';
import { useLanguage } from '../context/LanguageContext';

export const AboutExperiencePage: React.FC = () => {
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
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>EXPERIENCE</span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            Professional Journey
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            Executive roles in education, research, and institutional leadership
          </p>
        </div>
      </section>

      <section className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          
          {/* Executive Experience */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={18} color="var(--accent-blue)" /> Professional Experience
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {experience.map((exp) => (
                <div key={exp.id} style={{ borderLeft: '2px solid var(--accent-gold)', paddingLeft: '1.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {tF(exp.position)} — {tF(exp.organization)}
                  </h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'block' }}>
                    {tF(exp.location)} · {exp.startDate} – {exp.endDate}
                  </span>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {tF(exp.description)}
                  </p>
                  <ul style={{ listStyle: 'none', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {tA(exp.responsibilities).map((resp, idx) => (
                      <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        · {resp}
                      </li>
                    ))}
                  </ul>
                  <ul style={{ listStyle: 'none', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: '0.5rem' }}>
                    {tA(exp.achievements).map((ach, idx) => (
                      <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--accent-blue)', fontWeight: 500 }}>
                        ✓ {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Roles */}
          <div style={{ marginBottom: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-light)' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Building2 size={18} color="var(--accent-blue)" /> Leadership Roles
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {leadership.map((lead) => (
                <div key={lead.id} style={{ border: '1px solid var(--border-light)', padding: '1.5rem', backgroundColor: 'var(--bg-surface)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    {tF(lead.organizationType)}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', marginTop: '0.35rem' }}>
                    {tF(lead.role)} — {tF(lead.organization)}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: 1.55 }}>
                    {tF(lead.description)}
                  </p>
                  <ul style={{ listStyle: 'none', paddingLeft: '1rem', marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {tA(lead.responsibilities).map((resp, idx) => (
                      <li key={idx} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        · {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border-light)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/about/leadership" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>
              See Leadership <ArrowUpRight size={16} />
            </Link>
            <Link to="/cv" className="btn-secondary" style={{ padding: '0.85rem 2rem' }}>
              <Award size={16} /> View CV
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};