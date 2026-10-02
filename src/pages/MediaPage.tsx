import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Newspaper, Mic, Calendar, Image, Filter } from 'lucide-react';
import { media } from '../data';
import { useLanguage } from '../context/LanguageContext';

const categoryIcons: Record<string, React.ReactNode> = {
  newspaper: <Newspaper size={24} />,
  interview: <Mic size={24} />,
  event: <Calendar size={24} />,
  social: <Image size={24} />,
};

export const MediaPage: React.FC = () => {
  const { tF } = useLanguage();

  const categories = [
    { id: 'all', label: 'All Media', icon: <Filter size={20} /> },
    { id: 'newspaper', label: 'Newspapers', icon: <Newspaper size={20} /> },
    { id: 'interview', label: 'Interviews', icon: <Mic size={20} /> },
    { id: 'event', label: 'Events', icon: <Calendar size={20} /> },
    { id: 'social', label: 'Social', icon: <Image size={20} /> },
  ];

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
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>MEDIA & PRESS</span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            Media Archive & Public Record
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            Verified press coverage, interviews, and documentary evidence of institutional work
          </p>
        </div>
      </section>

      <section className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <Link key={cat.id} to={cat.id === 'all' ? '/media' : `/media/${cat.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ 
                  padding: '0.75rem 1.25rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  backgroundColor: 'var(--bg-alt)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease'
                }}>
                  {cat.icon}
                  {cat.label}
                </div>
              </Link>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {media.map((item) => (
              <Link key={item.id} to={item.externalUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-surface)', padding: '1.75rem', display: 'flex', flexDirection: 'column', height: '100%', transition: 'box-shadow 0.3s ease' }}>
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
                      {categoryIcons[item.category]}
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
                        {item.category === 'newspaper' ? 'Newspaper' : item.category === 'interview' ? 'Interview' : item.category === 'event' ? 'Event' : 'Social'}
                      </span>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                        "{tF(item.headline)}"
                      </h3>
                    </div>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
                      {tF(item.publication)} · {item.publishedDate}
                    </p>
                    {item.verified === false && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                        Unverified External Source — Pending Content Verification
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1, marginBottom: '1rem' }}>
                    {item.summary ? tF(item.summary) : 'Summary pending verification.'}
                  </p>
                  <div style={{ marginTop: 'auto' }}>
                    <span className="editorial-link" style={{ fontSize: '0.85rem' }}>
                      View Source <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {media.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 2rem', maxWidth: '600px', margin: '0 auto' }}>
              <h2 className="text-h1" style={{ marginBottom: '1.5rem' }}>No Media Items</h2>
              <p className="lead-text" style={{ marginBottom: '2rem' }}>
                Media items will appear here once verified.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};