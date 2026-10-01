import React from 'react';
import { cv } from '../data';
import { Award, GraduationCap, Building2, Globe, Download, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CVPage: React.FC = () => {
  const { tF, tA } = useLanguage();

  return (
    <>
      <section style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-light)', paddingTop: 'clamp(2.5rem, 4vw, 4rem)', paddingBottom: 'clamp(2rem, 3vw, 3rem)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <span className="eyebrow">OFFICIAL RECORD · CURRICULUM VITAE</span>
              <h1 className="text-display" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', marginTop: '0.35rem' }}>
                {tF(cv.fullName)}
              </h1>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--accent-blue)', marginTop: '0.5rem', fontStyle: 'italic' }}>
                {tF(cv.title)}
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.5rem' }}>
                {cv.nepaliName}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start' }}>
              <button 
                onClick={() => alert("PDF Download: Curriculum Vitae PDF document file placeholder. Official verified record.")} 
                className="btn-primary" 
                style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}
              >
                <Download size={16} /> Download CV (PDF)
              </button>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                Official Verified Record · Bagmati Province, Nepal
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrapper">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Profile Summary */}
          <div style={{ marginBottom: '3rem', paddingBottom: '2.5rem', borderBottom: '1px solid var(--border-light)' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
              Executive Profile & Focus
            </h2>
            <p className="lead-text" style={{ fontSize: '1.15rem', lineHeight: 1.65 }}>
              {tF(cv.profile)}
            </p>
          </div>

          {/* Academic Education */}
          <div style={{ marginBottom: '3rem', paddingBottom: '2.5rem', borderBottom: '1px solid var(--border-light)' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap size={18} color="var(--accent-blue)" /> Academic Education
            </h2>
            {cv.education.map((edu) => (
              <div key={edu.id} style={{ borderLeft: '2px solid var(--accent-blue)', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                  {tF(edu.degree)}
                </h3>
                <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-blue)', marginTop: '0.2rem' }}>
                  {tF(edu.institution)} · {tF(edu.location)}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                  {tF(edu.description)}
                </p>
              </div>
            ))}
          </div>

          {/* Executive & Institutional Leadership */}
          <div style={{ marginBottom: '3rem', paddingBottom: '2.5rem', borderBottom: '1px solid var(--border-light)' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Building2 size={18} color="var(--accent-blue)" /> Institutional Leadership Roles
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {cv.leadership.map((lead) => (
                <div key={lead.id} style={{ border: '1px solid var(--border-light)', padding: '1.5rem', backgroundColor: 'var(--bg-surface)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    {tF(lead.organizationType)}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginTop: '0.35rem' }}>
                    {tF(lead.role)} — {tF(lead.organization)}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: 1.55 }}>
                    {tF(lead.description)}
                  </p>
                  <ul style={{ listStyle: 'none', paddingLeft: '1rem', marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {tA(lead.responsibilities).map((resp, idx) => (
                      <li key={idx} style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        · {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div style={{ marginBottom: '3rem', paddingBottom: '2.5rem', borderBottom: '1px solid var(--border-light)' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={18} color="var(--accent-blue)" /> Professional Experience
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {cv.experience.map((exp) => (
                <div key={exp.id} style={{ borderLeft: '2px solid var(--accent-gold)', paddingLeft: '1.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem' }}>
                    {tF(exp.position)} — {tF(exp.organization)}
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{tF(exp.location)}</span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                    {tF(exp.description)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* International Representation */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Globe size={18} color="var(--accent-blue)" /> Global Delegations & Representation
            </h2>
            <div style={{ border: '1px solid var(--border-light)', padding: '1.5rem', backgroundColor: 'var(--bg-alt)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem' }}>
                Taiwan International Science Fair (TISF) & IOSTC Indonesia
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                Official Country Leader and Delegation Head representing Nepal at international science and technology competitions, escorting secondary student researchers to present before international juries.
              </p>
            </div>
          </div>

          {/* Selected Media */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
              Selected Media Coverage
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {cv.selectedMedia.map((m) => (
                <div key={m.id} style={{ border: '1px solid var(--border-light)', padding: '1.5rem', backgroundColor: 'var(--bg-surface)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                    {m.category === 'newspaper' ? 'Newspaper' : m.category === 'interview' ? 'Interview' : 'Event'}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    "{tF(m.headline)}"
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
                    {tF(m.publication)} · {m.publishedDate}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {m.summary ? tF(m.summary) : 'Summary pending verification.'}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};