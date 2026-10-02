import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from 'lucide-react';
import { articles } from '../data';
import { useLanguage } from '../context/LanguageContext';

export const ThoughtDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { tF, tA } = useLanguage();
  
  const article = articles.find(a => a.slug === slug);
  
  if (!article) {
    return (
      <div className="section-wrapper" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container">
          <h1 className="text-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Article Not Found</h1>
          <p className="lead-text" style={{ marginTop: '1rem', marginBottom: '2rem' }}>The requested article could not be found.</p>
          <Link to="/thought" className="btn-primary">
            <ArrowLeft size={16} /> Back to All Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section 
        style={{
          position: 'relative',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 'clamp(3rem, 5vw, 5rem)',
          paddingBottom: 'clamp(2rem, 3vw, 3rem)',
          backgroundColor: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>
            {tF(article.category)} · {article.readTime}
          </span>
          <h1 className="text-display" style={{ maxWidth: '900px', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            {tF(article.title)}
          </h1>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Calendar size={16} /> {article.publishedDate}
            </span>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock size={16} /> {article.readTime}
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {tF(article.category)}
            </span>
          </div>
        </div>
      </section>

      <section className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <article style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--text-primary)' }}>
            {article.coverImage && (
              <div style={{ marginBottom: '2.5rem', borderRadius: '4px', overflow: 'hidden' }}>
                <img 
                  src={article.coverImage} 
                  alt={tF(article.title)} 
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </div>
            )}

            <div style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--text-primary)' }}>
              {tA(article.content).map((paragraph, idx) => (
                <p key={idx} style={{ marginBottom: '1.5rem' }}>
                  {paragraph}
                </p>
              ))}
            </div>

            {(article.relatedInitiativeIds && article.relatedInitiativeIds.length > 0) && (
              <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-light)' }}>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
                  Related Initiatives
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {article.relatedInitiativeIds.map((initId) => (
                    <span key={initId} style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--bg-alt)', border: '1px solid var(--border-light)', borderRadius: '4px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {initId}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {(article.tags && article.tags.length > 0) && (
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '0.75rem' }}>
                  Tags
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {article.tags.map((tag, idx) => (
                    <span key={idx} style={{ padding: '0.35rem 0.75rem', backgroundColor: 'var(--bg-alt)', border: '1px solid var(--border-light)', borderRadius: '4px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </article>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-light)', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/thought" className="btn-secondary" style={{ padding: '0.85rem 2rem' }}>
              <ArrowLeft size={16} /> Back to All Articles
            </Link>
            <Link to="/contact" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>
              Share Feedback <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};