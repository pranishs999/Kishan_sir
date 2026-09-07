import React from 'react';
import { X, Printer } from 'lucide-react';
import { CONTACT_DATA } from '../data/sourceFacts';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ 
          maxWidth: '900px',
          backgroundColor: '#FFFFFF',
          padding: 'clamp(2rem, 5vw, 4rem)'
        }}
      >
        
        <button className="modal-close-btn" onClick={onClose} aria-label="Close CV modal">
          <X size={20} />
        </button>

        {/* Action Header */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '2px solid var(--text-primary)',
            paddingBottom: '1.25rem',
            marginBottom: '2.5rem'
          }}
        >
          <div>
            <span className="eyebrow" style={{ margin: 0 }}>OFFICIAL CURRICULUM VITAE</span>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Verified Document Record</p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={handlePrint} className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
              <Printer size={15} /> Print Record
            </button>
          </div>
        </div>

        {/* Printable CV Document Layout */}
        <div id="printable-cv">
          
          {/* Header Block */}
          <div style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
            <h1 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.8rem',
                color: 'var(--text-primary)',
                lineHeight: 1,
                marginBottom: '0.25rem'
              }}
            >
              KISHAN BASTOLA
            </h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              (Netra Prasad Bastola) · {CONTACT_DATA.fullNameNep}
            </p>
            
            <p 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.35rem',
                fontStyle: 'italic',
                color: 'var(--accent-blue)',
                marginBottom: '1rem'
              }}
            >
              Chairperson — Astronova Foundation Nepal · STEM & Mathematics Advocate
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.85rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem' }}>
              <span>📍 Hetauda Sub-Metropolitan City, Makwanpur, Nepal</span>
              <span>📞 {CONTACT_DATA.phone}</span>
              <span>✉️ {CONTACT_DATA.email}</span>
              <span>🔗 linkedin.com/in/kishan-bastola/</span>
            </div>
          </div>

          {/* Section 1: Executive Summary */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '0.75rem' }}>
              Executive Summary
            </h2>
            <p style={{ fontSize: '1.025rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Senior Educationist and Mathematician with 18 years of executive leadership in secondary, higher education, and regional research ecosystem development. Proven record as School Principal, Campus Chief, Country Leader for Taiwan International Science Fair, President of Astronova Foundation Nepal, and Founder & Director of Hetauda Research & Innovation Center.
            </p>
          </div>

          {/* Section 2: Core Credentials */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
              Education & Academic Credentials
            </h2>

            <div style={{ backgroundColor: 'var(--bg-alt)', padding: '1.25rem', borderLeft: '3px solid var(--accent-blue)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <strong style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Master's Degree in Mathematics (M.Sc. / M.A.)</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Advanced Academic Record</span>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Specialized in Pure & Applied Mathematics, Advanced Analytical Logic, and Mathematical Pedagogy.
              </p>
            </div>
          </div>

          {/* Section 3: Executive Roles */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
              Current & Former Executive Roles
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>Country Leader — Nepal Delegation</strong>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-blue)' }}>Taiwan International Science Fair</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                  Selects, mentors, and leads Nepal's national youth science contingent for international competition.
                </p>
              </div>

              <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>President</strong>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-blue)' }}>Astronova Foundation Nepal</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                  Directs foundation strategy, STEAM education initiatives, and youth scientific research programs nationwide.
                </p>
              </div>

              <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>Founder & Director</strong>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-blue)' }}>Hetauda Research & Innovation Center</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                  Established regional prototyping and incubation hub in Hetauda, Bagmati Province.
                </p>
              </div>

              <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>Province Secretary & Executive Member</strong>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-blue)' }}>Mathematical Association of Nepal & Nepal Mathematical Society</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                  Leads mathematical pedagogy standards and academic teacher training in Bagmati Province.
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>Former School Principal & Former Campus Chief</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>18 Years Institutional Service</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                  Direct institutional governance, faculty management, and curriculum development across secondary and campus levels.
                </p>
              </div>

            </div>
          </div>

          {/* Section 4: Signature Framework */}
          <div style={{ backgroundColor: 'var(--accent-blue)', color: '#FFFFFF', padding: '1.5rem' }}>
            <strong style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-gold-light)' }}>
              Proprietary Framework
            </strong>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#FFFFFF', marginTop: '0.25rem', marginBottom: '0.5rem' }}>
              From Curiosity to Commerce
            </h3>
            <p style={{ fontSize: '0.925rem', lineHeight: 1.5, color: 'rgba(255,255,255,0.9)' }}>
              Curiosity → Learning → Research → Prototype → Innovation → Enterprise → Commerce
            </p>
          </div>

        </div>

        <div style={{ marginTop: '2.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={onClose} className="btn-secondary">
            Close CV Window
          </button>
        </div>

      </div>
    </div>
  );
};
