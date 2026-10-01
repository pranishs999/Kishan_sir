import React from 'react';
import { Link } from 'react-router-dom';
import { Award, FileText, ArrowUpRight } from 'lucide-react';
import { achievements } from '../data';
import { useLanguage } from '../context/LanguageContext';

export const AchievementsPage: React.FC = () => {
  const { tF } = useLanguage();

  return (
    <>
      <section style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-light)', paddingTop: 'clamp(3rem, 5vw, 5rem)', paddingBottom: 'clamp(3rem, 5vw, 5rem)' }}>
        <div className="container">
          <span className="eyebrow">HONORS & MILESTONES</span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            Achievements & Awards
          </h1>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', fontStyle: 'italic', color: 'var(--accent-blue)', marginTop: '1rem', maxWidth: '800px' }}>
            Verified Records & Institutional Milestones
          </p>
        </div>
      </section>

      <section className="section-wrapper">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          {achievements.length === 0 ? (
            <div style={{ border: '1px dashed var(--border-accent)', backgroundColor: 'var(--bg-alt)', padding: '3.5rem 2rem', margin: '2rem 0' }}>
              <Award size={48} color="var(--accent-gold)" style={{ marginBottom: '1rem' }} />
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                Verified Achievements & Milestones
              </h2>
              <p style={{ fontSize: '1.025rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 2rem' }}>
                Per strict Content Accuracy Rules, specific awards and honors are published here only once third-party certificate documentation is fully verified.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/cv" className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}>
                  <FileText size={16} /> View Curriculum Vitae
                </Link>
                <Link to="/media" className="btn-secondary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}>
                  View Press & Media Archive <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'left' }}>
              {achievements.map((item) => (
                <div key={item.id} style={{ border: '1px solid var(--border-light)', padding: '2rem', backgroundColor: 'var(--bg-surface)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {tF(item.type)}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginTop: '0.35rem' }}>
                    {tF(item.title)}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                    {tF(item.description)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
