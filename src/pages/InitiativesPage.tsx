import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Filter, Building2, Users, FlaskConical, BookOpen, Wrench, Rocket } from 'lucide-react';
import { initiatives } from '../data';
import { useLanguage } from '../context/LanguageContext';

const categoryIcons: Record<string, React.ReactNode> = {
  astronova: <Building2 size={24} />,
  hric: <Rocket size={24} />,
  'young-scientists': <Users size={24} />,
  steam: <FlaskConical size={24} />,
  'science-engineering-fair': <BookOpen size={24} />,
  workshops: <Wrench size={24} />,
  delegation: <ArrowUpRight size={24} />,
  education: <BookOpen size={24} />,
};

export const InitiativesPage: React.FC = () => {
  const { tF } = useLanguage();

  const categories = [
    { id: 'all', label: 'All Initiatives', icon: <Filter size={20} /> },
    { id: 'astronova', label: 'Astronova', icon: <Building2 size={20} /> },
    { id: 'hric', label: 'HRIC', icon: <Rocket size={20} /> },
    { id: 'young-scientists', label: 'Young Scientists', icon: <Users size={20} /> },
    { id: 'steam', label: 'STEAM', icon: <FlaskConical size={20} /> },
    { id: 'science-engineering-fair', label: 'Science & Engineering Fair', icon: <BookOpen size={20} /> },
    { id: 'workshops', label: 'Workshops', icon: <Wrench size={20} /> },
    { id: 'delegation', label: 'Delegations', icon: <ArrowUpRight size={20} /> },
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
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>INITIATIVES</span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            Programs & Institution-Building Efforts
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            Concrete programs and institutional initiatives led by Kishan Bastola
          </p>
        </div>
      </section>

      <section className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  backgroundColor: 'var(--bg-alt)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {initiatives.map((init) => (
              <Link key={init.id} to={`/initiatives/${init.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
                      {categoryIcons[init.category]}
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
                        {tF(init.categoryLabel)}
                      </span>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                        {tF(init.title)}
                      </h3>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1, marginBottom: '1.5rem' }}>
                    {tF(init.summary)}
                  </p>
                  <div style={{ marginTop: 'auto' }}>
                    <span className="editorial-link" style={{ fontSize: '0.85rem' }}>
                      Explore Initiative <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};