import React, { useState } from 'react';
import { Copy, Check, QrCode, Building, ShieldCheck } from 'lucide-react';
import { SUPPORT_VISION_DATA } from '../data/sourceFacts';

export const SupportPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SUPPORT_VISION_DATA.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>SUPPORT</span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            Support the Vision
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            Empower Youth Scientific Research in Nepal
          </p>
        </div>
      </section>

      <section id="support" className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          
          <div className="grid-12" style={{ alignItems: 'center', gap: '3rem' }}>
            
            <div style={{ gridColumn: 'span 6' }}>
              <span className="eyebrow">SUPPORT OUR VISION</span>
              
              <h2 className="text-h1" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>
                Empower Youth Scientific Research in Nepal
              </h2>

              <p className="lead-text" style={{ fontSize: '1.15rem', marginBottom: '1.5rem' }}>
                {SUPPORT_VISION_DATA.note}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={16} color="var(--accent-blue)" />
                  Direct support for rural STEAM workshops & student science expos
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={16} color="var(--accent-blue)" />
                  Research mentorship & prototyping grants for youth at HRIC Hetauda
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={16} color="var(--accent-blue)" />
                  Sponsorship for Nepalese youth delegations to Taiwan (TISF) & Indonesia (IOSTC)
                </div>
              </div>
            </div>

            <div style={{ gridColumn: 'span 6', paddingLeft: 'clamp(0px, 3vw, 2rem)' }}>
              <div 
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '2px solid var(--accent-blue)',
                  padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                  boxShadow: '0 16px 36px rgba(14,42,71,0.08)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                      OFFICIAL BANK TRANSFER DETAILS
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                      {SUPPORT_VISION_DATA.bankName}
                    </h3>
                  </div>

                  <Building size={28} color="var(--accent-blue)" />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                  
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>
                      Account Holder Name
                    </span>
                    <strong style={{ fontSize: '1.15rem', color: 'var(--text-primary)', letterSpacing: '0.02em' }}>
                      {SUPPORT_VISION_DATA.accountHolder}
                    </strong>
                  </div>

                  <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1rem', border: '1px dashed var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>
                        Account Number (NPR)
                      </span>
                      <strong style={{ fontFamily: 'var(--font-sans)', fontSize: '1.35rem', color: 'var(--accent-blue)', letterSpacing: '0.08em' }}>
                        {SUPPORT_VISION_DATA.accountNumber}
                      </strong>
                    </div>

                    <button 
                      onClick={handleCopy}
                      className="btn-secondary"
                      style={{ padding: '0.5rem 0.85rem', fontSize: '0.75rem' }}
                      title="Copy Account Number"
                    >
                      {copied ? <><Check size={14} color="green" /> Copied!</> : <><Copy size={14} /> Copy</>}
                    </button>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>
                      Bank Branch & Location
                    </span>
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                      {SUPPORT_VISION_DATA.branch}
                    </span>
                  </div>

                </div>

                <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                  <button 
                    onClick={() => setShowQR(true)}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}
                  >
                    <QrCode size={18} /> View Fonepay / Bank QR Code
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section 
        style={{
          backgroundColor: 'var(--dark-bg)',
          color: 'var(--dark-text)',
          borderTop: '1px solid var(--dark-border)',
          paddingTop: 'clamp(3rem, 5vw, 4rem)',
          paddingBottom: 'clamp(3rem, 5vw, 4rem)',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <span className="eyebrow-dark" style={{ marginBottom: '1.25rem' }}>
            RELATED
          </span>
          <h2 className="text-h1" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Explore Related Sections
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--dark-text-muted)', marginBottom: '2.5rem' }}>
            Contact for partnership, read the vision statement, and explore the work.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>Contact & Partner</a>
            <a href="/vision" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>Read Vision Statement</a>
            <a href="/work" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>Explore the Work</a>
          </div>
        </div>
      </section>

      {showQR && (
        <div className="modal-backdrop" onClick={() => setShowQR(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '500px', textAlign: 'center' }}>
            <span className="eyebrow">OFFICIAL DONATION QR CODE</span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginTop: '0.25rem', marginBottom: '0.5rem' }}>
              {SUPPORT_VISION_DATA.accountHolder}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              {SUPPORT_VISION_DATA.bankName} · A/C: {SUPPORT_VISION_DATA.accountNumber}
            </p>

            <div 
              style={{ 
                backgroundColor: '#FFFFFF', 
                padding: '2rem', 
                border: '2px solid var(--accent-blue)', 
                display: 'inline-block',
                marginBottom: '1.5rem'
              }}
            >
              <QrCode size={180} color="var(--accent-blue)" />
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.75rem', fontWeight: 600 }}>
                Scan with Fonepay / eSewa / Khalti / Mobile Banking
              </p>
            </div>

            <div>
              <button onClick={() => setShowQR(false)} className="btn-secondary">
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};