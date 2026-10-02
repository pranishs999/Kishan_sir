import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, Clock, ArrowRight } from 'lucide-react';
import { articles } from '../data';
import { useLanguage } from '../context/LanguageContext';

export const ThoughtPage: React.FC = () => {
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
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>THOUGHT LEADERSHIP</span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            Essays, Reflections & Commentary
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            Long-form written perspective on education, research, and ecosystem building
          </p>
        </div>
      </section>

      <section className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          {articles.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 2rem', maxWidth: '600px', margin: '0 auto' }}>
              <h2 className="text-h1" style={{ marginBottom: '1.5rem' }}>Content Coming Soon</h2>
              <p className="lead-text" style={{ marginBottom: '2rem' }}>
                Authored essays, reflections, and commentary on mathematical pedagogy, 
                institutional governance, and youth scientific incubation are being prepared for publication.
              </p>
              <Link to="/contact" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>
                Suggest a Topic <ArrowUpRight size={16} />
              </Link>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
                  Latest Articles
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                  {articles.map((article) => (
                    <Link key={article.slug} to={`/thought/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-surface)', padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%', transition: 'box-shadow 0.3s ease' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                            {tF(article.category)}
                          </span>
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                            <Calendar size={14} /> {article.publishedDate}
                          </span>
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                            <Clock size={14} /> {article.readTime}
                          </span>
                        </div>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                          {tF(article.title)}
                        </h3>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1, marginBottom: '1.5rem' }}>
                          {tF(article.summary)}
                        </p>
                        <span className="editorial-link" style={{ fontSize: '0.85rem', alignSelf: 'flex-start' }}>
                          Read Article <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};