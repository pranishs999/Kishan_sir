import React from 'react';
import { Mail, FileText, Globe, ArrowUp } from 'lucide-react';
import { CONTACT_DATA } from '../data/sourceFacts';

interface ContactFooterProps {
  onOpenCV: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenCV }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="contact" 
      className="section-wrapper" 
      style={{ 
        backgroundColor: 'var(--bg-primary)', 
        borderTop: '2px solid var(--text-primary)',
        paddingBottom: '3rem'
      }}
    >
      <div className="container">
        
        {/* Top Header Row */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            marginBottom: '4rem',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          <div>
            <span className="eyebrow">10 / EXECUTIVE CONTACT & DIRECTORY</span>
            <h2 className="text-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', marginTop: '0.5rem' }}>
              {CONTACT_DATA.name}
            </h2>
          </div>

          <button
            onClick={scrollToTop}
            className="btn-secondary"
            style={{ padding: '0.75rem 1.25rem', fontSize: '0.8rem' }}
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>

        {/* 12-Column Executive Footer Layout */}
        <div className="grid-12" style={{ alignItems: 'start', paddingBottom: '3.5rem', borderBottom: '1px solid var(--border-light)' }}>
          
          {/* Title Stack Column (Cols 1-6) */}
          <div style={{ gridColumn: 'span 6' }}>
            <h3 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.6rem',
                color: 'var(--accent-blue)',
                marginBottom: '1.25rem'
              }}
            >
              {CONTACT_DATA.titleStack[0]}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
              {CONTACT_DATA.titleStack.slice(1).map((t, idx) => (
                <span key={idx} style={{ fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
                  · {t}
                </span>
              ))}
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', borderLeft: '2px solid var(--accent-gold)', paddingLeft: '1rem' }}>
              {CONTACT_DATA.credentialsLine}
            </p>
          </div>

          {/* Contact Directives (Cols 7-12) */}
          <div style={{ gridColumn: 'span 6', paddingLeft: 'clamp(0px, 3vw, 2rem)' }}>
            <h4 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                marginBottom: '1.5rem'
              }}
            >
              Direct Channels & Institutional Hubs
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Email */}
              <a 
                href={`mailto:${CONTACT_DATA.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  fontSize: '1.05rem',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontWeight: 500
                }}
              >
                <Mail size={18} color="var(--accent-blue)" />
                {CONTACT_DATA.email}
              </a>

              {/* LinkedIn */}
              <a 
                href={CONTACT_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  fontSize: '1.05rem',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontWeight: 500
                }}
              >
                <Globe size={18} color="var(--accent-blue)" />
                LinkedIn Executive Profile
              </a>

              {/* CV Trigger */}
              <button
                onClick={onOpenCV}
                style={{
                  background: 'transparent',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  fontSize: '1.05rem',
                  color: 'var(--accent-blue)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  padding: 0,
                  textAlign: 'left'
                }}
              >
                <FileText size={18} />
                View Verified Curriculum Vitae (CV)
              </button>

              {/* Institutional Anchors */}
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <a href={CONTACT_DATA.astronovaUrl} className="editorial-link" style={{ fontSize: '0.85rem' }}>
                  <Globe size={14} /> Astronova Foundation Nepal
                </a>
                <a href={CONTACT_DATA.hricUrl} className="editorial-link" style={{ fontSize: '0.85rem' }}>
                  <Globe size={14} /> Hetauda Research & Innovation Center
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Unembellished Copyright & Customizer Footer Bar */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            paddingTop: '2rem',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Kishan Bastola. Official Record & Portfolio. Bagmati Province, Nepal.
          </div>

          <div>
            Designed for Executive Review
          </div>
        </div>

      </div>
    </footer>
  );
};
