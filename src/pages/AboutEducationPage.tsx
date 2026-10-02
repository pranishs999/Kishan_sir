import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { education } from '../data';
import { useLanguage } from '../context/LanguageContext';

export const AboutEducationPage: React.FC = () => {
  const { tF } = useLanguage();

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
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>EDUCATION</span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            Academic Credentials
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            Formal qualifications and mathematical foundations
          </p>
        </div>
      </section>

      <section className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {education.map((edu) => (
              <div key={edu.id} style={{ borderLeft: '2px solid var(--accent-blue)', paddingLeft: '1.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {tF(edu.degree)}
                </h2>
                <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
                  {tF(edu.field)} · {tF(edu.institution)} · {tF(edu.location)}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  {edu.year} · {edu.verified ? 'Verified' : '[VERIFY]'}
                </p>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '720px' }}>
                  {tF(edu.description)}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-light)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/about/experience" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>
              See Experience <ArrowUpRight size={16} />
            </Link>
            <Link to="/cv" className="btn-secondary" style={{ padding: '0.85rem 2rem' }}>
              <GraduationCap size={16} /> View CV
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};