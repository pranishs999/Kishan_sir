import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { CONTACT_DATA } from '../data/sourceFacts';

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section 
      id="contact" 
      className="section-wrapper" 
      style={{ 
        backgroundColor: 'var(--bg-primary)', 
        borderTop: '2px solid var(--text-primary)',
        paddingBottom: '4rem'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '4rem' }}>
          <span className="eyebrow">DIRECT CONTACT & ENQUIRIES</span>
          <h2 className="text-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', marginTop: '0.5rem' }}>
            {CONTACT_DATA.name}
          </h2>
          <p 
            style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '1.25rem', 
              fontStyle: 'italic', 
              color: 'var(--accent-blue)', 
              marginTop: '0.5rem' 
            }}
          >
            {CONTACT_DATA.fullNameNep}
          </p>
        </div>

        <div className="grid-12" style={{ alignItems: 'start' }}>
          
          {/* Left Column: Direct Contact Information (Cols 1-5) */}
          <div style={{ gridColumn: 'span 5' }}>
            <h3 
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
              Executive Directory & Channels
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              
              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <MapPin size={20} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Office Location
                  </strong>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: '0.2rem' }}>
                    {CONTACT_DATA.location}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <Mail size={20} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Official Email
                  </strong>
                  <a 
                    href={`mailto:${CONTACT_DATA.email}`}
                    style={{ fontSize: '1.05rem', color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: 600, display: 'block', marginTop: '0.2rem' }}
                  >
                    {CONTACT_DATA.email}
                  </a>
                  <a 
                    href={`mailto:${CONTACT_DATA.altEmail}`}
                    style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none' }}
                  >
                    {CONTACT_DATA.altEmail}
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <Phone size={20} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Direct Phone / WhatsApp
                  </strong>
                  <a 
                    href={`tel:${CONTACT_DATA.phone}`}
                    style={{ fontSize: '1.05rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600, display: 'block', marginTop: '0.2rem' }}
                  >
                    {CONTACT_DATA.phone}
                  </a>
                  <a 
                    href={`https://wa.me/${CONTACT_DATA.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.85rem', color: 'green', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.25rem' }}
                  >
                    <MessageSquare size={13} /> Chat on WhatsApp
                  </a>
                </div>
              </div>

            </div>

            <h4 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                marginBottom: '1rem'
              }}
            >
              Social & Professional Profiles
            </h4>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href={CONTACT_DATA.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
              >
                <Globe size={16} color="#1877F2" /> Facebook Page
              </a>

              <a 
                href={CONTACT_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
              >
                <Globe size={16} color="#0A66C2" /> LinkedIn Profile
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (Cols 6-12) */}
          <div style={{ gridColumn: 'span 7', paddingLeft: 'clamp(0px, 3vw, 2.5rem)' }}>
            <div 
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-light)',
                boxShadow: '0 12px 32px rgba(0,0,0,0.04)',
                padding: 'clamp(1.75rem, 3vw, 2.75rem)'
              }}
            >
              <h3 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem'
                }}
              >
                Send a Direct Message
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                For academic inquiries, institutional partnerships, thesis supervision, or foundation support.
              </p>

              {submitted ? (
                <div 
                  style={{
                    backgroundColor: 'var(--bg-alt)',
                    border: '2px solid var(--accent-blue)',
                    padding: '2rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <CheckCircle size={44} color="var(--accent-blue)" />
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--text-primary)' }}>
                    Message Sent Successfully
                  </h4>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                    Thank you for reaching out. Your message has been routed to Kishan Bastola's executive office.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        Your Full Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="Dr. / Mr. / Ms. Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          border: '1px solid var(--border-light)',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.95rem',
                          backgroundColor: 'var(--bg-primary)'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        Your Email Address *
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="name@institution.edu.np"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          border: '1px solid var(--border-light)',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.95rem',
                          backgroundColor: 'var(--bg-primary)'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      Subject / Enquiry Type
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. STEM Expo Collaboration / Research Supervision / TISF Enquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        border: '1px solid var(--border-light)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        backgroundColor: 'var(--bg-primary)'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      Your Message *
                    </label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Write your detailed message or enquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        border: '1px solid var(--border-light)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        backgroundColor: 'var(--bg-primary)',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ padding: '0.9rem 2rem', marginTop: '0.5rem', alignSelf: 'flex-start' }}>
                    Send Message <Send size={16} />
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
