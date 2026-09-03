import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA, CREDENTIALS_DATA } from '../data/sourceFacts';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCV: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, onOpenCV }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '920px' }}>
        
        <button className="modal-close-btn" onClick={onClose} aria-label="Close profile modal">
          <X size={20} />
        </button>

        <span className="eyebrow">EXECUTIVE DOSSIER & PROFILE</span>
        
        <h2 
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.5rem',
            color: 'var(--text-primary)',
            lineHeight: 1.15,
            marginBottom: '1.5rem',
            marginTop: '0.25rem'
          }}
        >
          Kishan Bastola
        </h2>

        <p 
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.35rem',
            fontStyle: 'italic',
            color: 'var(--accent-blue)',
            marginBottom: '2rem',
            borderBottom: '1px solid var(--border-light)',
            paddingBottom: '1rem'
          }}
        >
          Educationist · Mathematician · Research & Innovation Ecosystem Builder
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {PROFILE_DATA.bodyParagraphs.map((para, idx) => (
            <p key={idx} style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {para}
            </p>
          ))}
        </div>

        <h3 
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--accent-gold)',
            marginBottom: '1.25rem'
          }}
        >
          Verified Source Credentials
        </h3>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem'
          }}
        >
          {CREDENTIALS_DATA.map((cred, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: 'var(--bg-alt)',
                border: '1px solid var(--border-light)',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem'
              }}
            >
              <CheckCircle2 size={18} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  {cred.label}
                </strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {cred.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-light)',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <button 
            onClick={() => {
              onClose();
              onOpenCV();
            }}
            className="btn-primary"
          >
            Inspect Curriculum Vitae (CV)
          </button>

          <button onClick={onClose} className="btn-secondary">
            Close Profile
          </button>
        </div>

      </div>
    </div>
  );
};
