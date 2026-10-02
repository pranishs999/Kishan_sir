import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award } from 'lucide-react';
import { leadership } from '../data';
import { useLanguage } from '../context/LanguageContext';

export const AboutLeadershipPage: React.FC = () => {
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
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>LEADERSHIP</span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            Institutional Leadership
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            Current and notable organizational leadership roles
          </p>
        </div>
      </section>

      <section className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {leadership.map((lead) => (
              <div key={lead.id} style={{ border: '1px solid var(--border-light)', padding: '2rem', backgroundColor: 'var(--bg-surface)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.25rem 0.75rem', backgroundColor: 'var(--bg-alt)', borderRadius: '4px' }}>
                    {tF(lead.organizationType)}
                  </span>
                  {lead.relatedInitiativeId && (
                    <Link to={`/initiatives/${lead.relatedInitiativeId}`} className="editorial-link" style={{ fontSize: '0.85rem' }}>
                      View Initiative <ArrowUpRight size={14} />
                    </Link>
                  )}
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {tF(lead.role)} — {tF(lead.organization)}
                </h2>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', display: 'block' }}>
                  {lead.period}
                </span>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '800px' }}>
                  {tF(lead.description)}
                </p>
                <ul style={{ listStyle: 'none', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {tA(lead.responsibilities).map((resp, idx) => (
                    <li key={idx} style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                      · {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-light)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/initiatives" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>
              Explore Initiatives <ArrowUpRight size={16} />
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