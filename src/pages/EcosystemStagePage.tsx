import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, Users, BookOpen, Lightbulb, Microscope, Building2, Handshake, Rocket, Target, ChevronRight, Wrench } from 'lucide-react';
import { ecosystem } from '../data';
import { useLanguage } from '../context/LanguageContext';

const stageIcons: Record<string, React.ReactNode> = {
  curiosity: <Lightbulb size={24} />,
  learning: <BookOpen size={24} />,
  research: <Microscope size={24} />,
  prototype: <Wrench size={24} />,
  innovation: <Lightbulb size={24} />,
  enterprise: <Rocket size={24} />,
  commerce: <Building2 size={24} />,
};

const stakeholderIcons: Record<string, React.ReactNode> = {
  students: <Users size={24} />,
  teachers: <BookOpen size={24} />,
  mentors: <Lightbulb size={24} />,
  researchers: <Microscope size={24} />,
  universities: <Building2 size={24} />,
  government: <Handshake size={24} />,
  industry: <Rocket size={24} />,
  entrepreneurs: <ArrowUpRight size={24} />,
};

export const EcosystemStagePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { tF, tA } = useLanguage();
  
  const stage = ecosystem.pipeline.find(s => s.id === slug);
  const stageIndex = ecosystem.pipeline.findIndex(s => s.id === slug);
  
  if (!stage) {
    return (
      <div className="section-wrapper" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container">
          <h1 className="text-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Stage Not Found</h1>
          <p className="lead-text" style={{ marginTop: '1rem', marginBottom: '2rem' }}>The requested ecosystem stage could not be found.</p>
          <Link to="/ecosystem" className="btn-primary">
            <ArrowLeft size={16} /> Back to Ecosystem Overview
          </Link>
        </div>
      </div>
    );
  }

  // Get related stakeholders from connections
  const relatedStakeholderIds = [
    ...ecosystem.connections.filter(c => c.from === slug).map(c => c.to),
    ...ecosystem.connections.filter(c => c.to === slug).map(c => c.from),
  ];
  const uniqueStakeholderIds = [...new Set(relatedStakeholderIds)];
  const relatedStakeholders = ecosystem.stakeholders.filter(s => uniqueStakeholderIds.includes(s.id));

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
            {tF(stage.stage)}
          </span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            {tF(stage.subtitle)}
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            {tF(stage.description).substring(0, 150)}...
          </p>
        </div>
      </section>

      <section className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          <div className="grid-12" style={{ gap: '3rem', marginBottom: '3rem' }}>
            <div style={{ gridColumn: 'span 8' }}>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ backgroundColor: 'var(--accent-blue)', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', letterSpacing: '0.1em', display: 'inline-block', marginBottom: '1rem' }}>
                  {tF(stage.stage)}
                </span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {tF(stage.subtitle)}
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {tF(stage.description)}
                </p>
              </div>

              <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'var(--bg-alt)', borderLeft: '3px solid var(--accent-gold)', borderRadius: '4px' }}>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  Ecosystem Impact
                </strong>
                <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {tF(stage.impact)}
                </span>
              </div>

              {/* Pipeline Navigation */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {stageIndex > 0 && (
                  <Link to={`/ecosystem/${ecosystem.pipeline[stageIndex - 1].id}`} className="btn-secondary" style={{ padding: '0.75rem 1.5rem' }}>
                    <ArrowLeft size={16} /> Previous Stage
                  </Link>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', flex: 1, justifyContent: 'center' }}>
                  {ecosystem.pipeline.map((s, idx) => (
                    <React.Fragment key={s.id}>
                      <span style={{ 
                        fontWeight: idx === stageIndex ? 700 : 400, 
                        color: idx === stageIndex ? 'var(--accent-blue)' : 'var(--text-muted)',
                        fontSize: '0.85rem'
                      }}>
                        {idx + 1}
                      </span>
                      {idx < ecosystem.pipeline.length - 1 && <ChevronRight size={14} />}
                    </React.Fragment>
                  ))}
                </div>
                {stageIndex < ecosystem.pipeline.length - 1 && (
                  <Link to={`/ecosystem/${ecosystem.pipeline[stageIndex + 1].id}`} className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
                    Next Stage <ArrowUpRight size={16} />
                  </Link>
                )}
              </div>
            </div>

            <div style={{ gridColumn: 'span 4' }}>
              <div style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-surface)', padding: '2rem', height: 'fit-content', position: 'sticky', top: '100px' }}>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
                  Key Stakeholders
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {relatedStakeholders.map((s) => (
                    <div key={s.id} style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: 'var(--bg-alt)', borderRadius: '4px' }}>
                      <div style={{ 
                        backgroundColor: 'var(--bg-primary)', 
                        border: '1px solid var(--border-light)', 
                        borderRadius: '8px', 
                        padding: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-blue)'
                      }}>
                        {stakeholderIcons[s.id]}
                      </div>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
                          {tF(s.role)}
                        </span>
                        <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                          {tF(s.name)}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
                  <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    Engage at This Stage <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Initiatives */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
              Related Initiatives at This Stage
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Programs and initiatives that operate at the {tF(stage.subtitle).toLowerCase()} stage of the ecosystem pipeline.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {/* Placeholder for related initiatives - in real implementation would filter by stage */}
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                Initiative-stage mapping to be implemented with verified data.
              </div>
            </div>
          </div>

          <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border-light)', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/ecosystem" className="btn-secondary" style={{ padding: '0.85rem 2rem' }}>
              <ArrowLeft size={16} /> Back to Ecosystem Overview
            </Link>
            <Link to="/initiatives/hric" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>
              See It in Practice at HRIC <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};