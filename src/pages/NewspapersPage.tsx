import React from 'react';
import { ArrowUpRight, Newspaper } from 'lucide-react';
import { media } from '../data';
import { useLanguage } from '../context/LanguageContext';

export const NewspapersPage: React.FC = () => {
  const { tF } = useLanguage();
  const newspapers = media.filter(m => m.category === 'newspaper');

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
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>NEWSPAPERS</span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            Newspaper Coverage
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            Print and online newspaper coverage of institutional work and delegations
          </p>
        </div>
      </section>

      <section className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          {newspapers.length > 0 ? (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                {newspapers.map((item) => (
                  <div key={item.id} style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-surface)', padding: '1.75rem', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.3s ease' }}>
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
                        <Newspaper size={24} />
                      </div>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
                          Newspaper
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
                    <a href={item.externalUrl} target="_blank" rel="noopener noreferrer" className="editorial-link" style={{ fontSize: '0.85rem', alignSelf: 'flex-start' }}>
                      View Source <ArrowUpRight size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 2rem', maxWidth: '600px', margin: '0 auto' }}>
              <h2 className="text-h1" style={{ marginBottom: '1.5rem' }}>No Newspaper Items</h2>
              <p className="lead-text" style={{ marginBottom: '2rem' }}>
                Newspaper items will appear here once added.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};