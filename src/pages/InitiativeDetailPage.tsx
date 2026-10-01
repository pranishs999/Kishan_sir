import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, Users, MapPin, Calendar, Target, Image, ExternalLink } from 'lucide-react';
import { initiatives, institutions, media, gallery } from '../data';
import { useLanguage } from '../context/LanguageContext';

export const InitiativeDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { tF, tA } = useLanguage();
  
  const initiative = initiatives.find(i => i.slug === slug);
  const institution = institutions.find(inst => inst.id === initiative?.institutionId);
  
  if (!initiative) {
    return (
      <div className="section-wrapper" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container">
          <h1 className="text-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Initiative Not Found</h1>
          <p className="lead-text" style={{ marginTop: '1rem', marginBottom: '2rem' }}>The requested initiative could not be found.</p>
          <Link to="/initiatives" className="btn-primary">
            <ArrowLeft size={16} /> Back to All Initiatives
          </Link>
        </div>
      </div>
    );
  }

  const relatedMedia = media.filter(m => initiative.media?.includes(m.id));
  const relatedGallery = gallery.filter(g => g.relatedInitiativeId === initiative.id);

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
            {tF(initiative.categoryLabel)}
          </span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            {tF(initiative.title)}
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            {tF(initiative.summary)}
          </p>
        </div>
      </section>

      <section className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          <div className="grid-12" style={{ gap: '3rem', marginBottom: '3rem' }}>
            <div style={{ gridColumn: 'span 8' }}>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.25rem 0.75rem', backgroundColor: 'var(--bg-alt)', borderRadius: '4px', display: 'inline-block', marginBottom: '1rem' }}>
                  {tF(initiative.categoryLabel)}
                </span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {tF(initiative.title)}
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {tF(initiative.description)}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                  <MapPin size={18} color="var(--accent-gold)" /> {tF(initiative.location)}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                  <Calendar size={18} color="var(--accent-gold)" /> {initiative.startDate}
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
                  Key Outcomes
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {tA(initiative.keyOutcomes).map((outcome, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '0.75rem', fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                      <Target size={20} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {initiative.linkUrl && (
                <a href={initiative.linkUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.85rem 2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  {tF(initiative.linkText || 'Visit External Link')} <ExternalLink size={16} />
                </a>
              )}
            </div>

            <div style={{ gridColumn: 'span 4' }}>
              <div style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-surface)', padding: '1.75rem', height: 'fit-content', position: 'sticky', top: '100px' }}>
                {institution && (
                  <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-light)' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                      Parent Institution
                    </span>
                    <Link to={`/initiatives/${institution.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                        {tF(institution.name)}
                      </h3>
                    </Link>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      {tF(initiative.role)}
                    </p>
                    <Link to={`/initiatives/${institution.id}`} className="editorial-link" style={{ fontSize: '0.85rem' }}>
                      View Institution <ArrowUpRight size={14} />
                    </Link>
                  </div>
                )}

                <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-light)' }}>
                  <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
                    Impact Metrics
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {initiative.impactMetrics.map((metric, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', backgroundColor: 'var(--bg-alt)', borderRadius: '4px' }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                          {tF(metric.label)}
                        </span>
                        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-blue)' }}>
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Get Involved <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {relatedMedia.length > 0 && (
            <div style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
                Media Coverage
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {relatedMedia.map((m) => (
                  <a key={m.id} href={m.externalUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-surface)', padding: '1.5rem', transition: 'box-shadow 0.3s ease' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                        {m.category === 'newspaper' ? 'Newspaper' : m.category === 'interview' ? 'Interview' : 'Event'}
                      </span>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                        "{tF(m.headline)}"
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
                        {tF(m.publication)} · {m.publishedDate}
                      </p>
                      <span className="editorial-link" style={{ fontSize: '0.85rem' }}>
                        View Source <ExternalLink size={14} />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {relatedGallery.length > 0 && (
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
                Gallery
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {relatedGallery.map((g) => (
                  <div key={g.id} style={{ border: '1px solid var(--border-light)', overflow: 'hidden' }}>
                    <img 
                      src={g.imageUrl} 
                      alt={tF(g.caption)} 
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                    <div style={{ padding: '1rem' }}>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                        {tF(g.title)}
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {tF(g.caption)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border-light)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/initiatives" className="btn-secondary" style={{ padding: '0.85rem 2rem' }}>
              <ArrowLeft size={16} /> Back to All Initiatives
            </Link>
            <Link to="/ecosystem" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>
              View in Ecosystem <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};