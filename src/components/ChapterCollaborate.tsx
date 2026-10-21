import React, { useState } from 'react';
import { Copy, Check, Mail, Phone, ChevronRight, ChevronDown } from 'lucide-react';
import { contact, SUPPORT_VISION_DATA } from '../data/sourceFacts';
import { useLanguage } from '../context/LanguageContext';

export const ChapterCollaborate: React.FC = () => {
  const { language, tF } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedBankAcc, setCopiedBankAcc] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone' | 'bank') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else if (type === 'bank') {
      setCopiedBankAcc(true);
      setTimeout(() => setCopiedBankAcc(false), 2000);
    }
  };

  const getPurposeMailTo = (purposeLabel: string) => {
    const subject = encodeURIComponent(`Collaboration Inquiry: ${purposeLabel}`);
    const body = encodeURIComponent(`Dear Kishan Bastola,\n\nI would like to discuss collaboration regarding: ${purposeLabel}.\n\nName:\nOrganization:\nMessage:\n`);
    return `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="collaborate"
      style={{
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(4rem, 8vw, 6rem)'
      }}
    >
      <div className="container">

        {/* Chapter Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)'
            }}
          >
            CHAPTER 04
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginTop: '0.25rem'
            }}
          >
            {language === 'ne' ? 'सहकार्य गरौं ?' : 'Shall we collaborate ?'}
          </h2>
        </div>

        <div className="grid-12" style={{ alignItems: 'start', rowGap: '3rem' }}>

          {/* Left Column: 5 Typographic Purposes */}
          <div style={{ gridColumn: 'span 7', width: '100%' }}>
            <h3
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                marginBottom: '1.25rem'
              }}
            >
              {language === 'ne' ? 'सहकार्यका क्षेत्रहरू छनोट गर्नुहोस्:' : 'Select a Purpose for Direct Inquiry:'}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {contact.collaborationPurposes.map((purpose) => {
                const pLabel = tF(purpose.label);
                const pDesc = tF(purpose.description);
                return (
                  <a
                    key={purpose.id}
                    href={getPurposeMailTo(pLabel)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1.1rem 1.25rem',
                      backgroundColor: 'var(--bg-alt)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'border-color 0.2s ease, transform 0.2s ease'
                    }}
                    className="purpose-row"
                  >
                    <div>
                      <h4
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                          margin: '0 0 0.25rem 0'
                        }}
                      >
                        {pLabel}
                      </h4>
                      <p
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.85rem',
                          color: 'var(--text-secondary)',
                          margin: 0
                        }}
                      >
                        {pDesc}
                      </p>
                    </div>
                    <ChevronRight size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginLeft: '1rem' }} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Direct Contact & Click-to-Copy */}
          <div style={{ gridColumn: 'span 5', width: '100%' }}>
            <div
              style={{
                backgroundColor: 'var(--bg-alt)',
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
                padding: '2rem'
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  marginBottom: '1.5rem'
                }}
              >
                {language === 'ne' ? 'प्रत्यक्ष सम्पर्क' : 'Direct Contact'}
              </h3>

              {/* Email Click-to-Copy */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                  {language === 'ne' ? 'इमेल' : 'Official Email'}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                  <a
                    href={`mailto:${contact.email}`}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      textDecoration: 'none'
                    }}
                  >
                    <Mail size={16} style={{ display: 'inline', marginRight: '0.4rem', verticalAlign: 'middle' }} />
                    {contact.email}
                  </a>
                  <button
                    onClick={() => handleCopy(contact.email, 'email')}
                    style={{
                      background: 'transparent',
                      border: '1px solid var(--border-light)',
                      borderRadius: '3px',
                      padding: '0.35rem 0.65rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: copiedEmail ? 'var(--accent-blue)' : 'var(--text-secondary)',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                    {copiedEmail ? (language === 'ne' ? 'प्रतिलिपि भयो ✓' : 'Copied ✓') : (language === 'ne' ? 'प्रतिलिपि' : 'Copy')}
                  </button>
                </div>
              </div>

              {/* Phone Click-to-Copy */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                  {language === 'ne' ? 'फोन / हट्सएप' : 'Phone / WhatsApp'}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                  <a
                    href={`https://wa.me/9779855030706`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      textDecoration: 'none'
                    }}
                  >
                    <Phone size={16} style={{ display: 'inline', marginRight: '0.4rem', verticalAlign: 'middle' }} />
                    {contact.phone}
                  </a>
                  <button
                    onClick={() => handleCopy(contact.phone, 'phone')}
                    style={{
                      background: 'transparent',
                      border: '1px solid var(--border-light)',
                      borderRadius: '3px',
                      padding: '0.35rem 0.65rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: copiedPhone ? 'var(--accent-blue)' : 'var(--text-secondary)',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    {copiedPhone ? <Check size={14} /> : <Copy size={14} />}
                    {copiedPhone ? (language === 'ne' ? 'प्रतिलिपि भयो ✓' : 'Copied ✓') : (language === 'ne' ? 'प्रतिलिपि' : 'Copy')}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                  {language === 'ne' ? 'स्थान' : 'Location'}
                </span>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                  {tF(contact.address)}
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Collapsible Support Link */}
        <div style={{ marginTop: '3.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
          <button
            onClick={() => setShowSupport(!showSupport)}
            style={{
              background: 'transparent',
              border: 'none',
              fontFamily: 'var(--font-serif)',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: 'var(--accent-blue)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: 0
            }}
          >
            {showSupport ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            {language === 'ne'
              ? 'ग्रामीण STEM र युवा प्रतिनिधिमण्डललाई कसरी सहयोग गर्न सक्नुहुन्छ ? →'
              : 'How can you support rural STEM & youth delegations ? →'}
          </button>

          {/* Collapsible Support Bank Details */}
          {showSupport && (
            <div
              style={{
                marginTop: '1.5rem',
                backgroundColor: 'var(--bg-alt)',
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
                padding: '2rem',
                maxWidth: '700px'
              }}
            >
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {SUPPORT_VISION_DATA.accountHolder}
              </h4>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                {SUPPORT_VISION_DATA.note}
              </p>

              <div
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px',
                  padding: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Bank:</span>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{SUPPORT_VISION_DATA.bankName}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Branch:</span>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{SUPPORT_VISION_DATA.branch}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed var(--border-light)', paddingTop: '0.5rem', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-gold)' }}>Account Number:</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <code style={{ fontFamily: 'monospace', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {SUPPORT_VISION_DATA.accountNumber}
                    </code>
                    <button
                      onClick={() => handleCopy(SUPPORT_VISION_DATA.accountNumber, 'bank')}
                      style={{
                        background: 'transparent',
                        border: '1px solid var(--border-light)',
                        borderRadius: '3px',
                        padding: '0.25rem 0.5rem',
                        fontSize: '0.75rem',
                        color: copiedBankAcc ? 'var(--accent-blue)' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.2rem'
                      }}
                    >
                      {copiedBankAcc ? <Check size={12} /> : <Copy size={12} />}
                      {copiedBankAcc ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>

      <style>{`
        .purpose-row:hover {
          border-color: var(--accent-gold) !important;
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
};
