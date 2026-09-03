import React from 'react';
import { ArrowRight, Award, GraduationCap, Building2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/sourceFacts';

interface ProfileProps {
  onOpenProfileModal: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ onOpenProfileModal }) => {
  return (
    <section id="profile" className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        
        {/* Section Label Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="eyebrow">{PROFILE_DATA.sectionNumber}</span>
          <h2 className="text-h1" style={{ maxWidth: '900px', marginTop: '0.5rem' }}>
            {PROFILE_DATA.title}
          </h2>
        </div>

        {/* Two-Column Editorial Grid */}
        <div className="grid-12" style={{ alignItems: 'start' }}>
          
          {/* Left Column: Fast Credentials Snapshot (Cols 1-4) */}
          <div style={{ gridColumn: 'span 4' }}>
            <div 
              style={{
                backgroundColor: 'var(--bg-alt)',
                border: '1px solid var(--border-light)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >
              <h3 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)'
                }}
              >
                Executive Credentials
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <Award size={20} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                      18+ Years Experience
                    </strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Educational Leadership & System Building
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <GraduationCap size={20} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                      Master's in Mathematics
                    </strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Pure & Applied Pedagogical Rigor
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <Building2 size={20} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                      Institutional Executive
                    </strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Former School Principal & Campus Chief
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-light)', marginTop: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>
                  Current Primary Directorships:
                </span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block' }}>
                  · Astronova Foundation Nepal (President)
                </span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block' }}>
                  · Hetauda Research & Innovation Center (Director)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Profile Body (Cols 5-12) */}
          <div style={{ gridColumn: 'span 8', paddingLeft: 'clamp(0px, 3vw, 2rem)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {PROFILE_DATA.bodyParagraphs.map((para, idx) => (
                <p key={idx} className="lead-text" style={{ fontSize: idx === 0 ? '1.25rem' : '1.1rem' }}>
                  {para}
                </p>
              ))}

              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
                <button onClick={onOpenProfileModal} className="editorial-link" style={{ fontSize: '1.05rem' }}>
                  Read Full Executive Profile <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
