import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Menu, X, Globe, ArrowUpRight, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contact } from '../data/sourceFacts';

export const AppLayout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, tF } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { 
      path: '/what-shaped-me', 
      num: '01',
      labelEn: 'What Shaped Me', 
      labelNe: 'पृष्ठभूमि र यात्रा',
      descEn: 'Personal story, Master’s in Mathematics, 18-year timeline',
      descNe: 'मेरो पृष्ठभूमि, शिक्षा र १८ वर्षे शैक्षिक यात्रा'
    },
    { 
      path: '/what-drives-me', 
      num: '02',
      labelEn: 'What Drives Me', 
      labelNe: 'उद्देश्य र दर्शन',
      descEn: 'Educational philosophy, curiosity, scientific thinking',
      descNe: 'उद्देश्य, विश्वास, दर्शन र विद्यार्थी केन्द्रित सिकाइ'
    },
    { 
      path: '/what-problems-am-i-solving', 
      num: '03',
      labelEn: 'Problems I Solve', 
      labelNe: 'समस्या समाधान',
      descEn: 'Addressing rote learning, research culture, decentralized labs',
      descNe: 'शिक्षा र अनुसन्धानका प्रणालीगत खाडल तथा समाधान'
    },
    { 
      path: '/what-am-i-creating', 
      num: '04',
      labelEn: 'What I Create', 
      labelNe: 'संस्था र इकोसिस्टम',
      descEn: 'HRIC, AstroNova Foundation, community maker labs',
      descNe: 'HRIC, एष्ट्रोनोभा फाउण्डेशन, STEM तथा अन्तर्राष्ट्रिय मञ्च'
    },
    { 
      path: '/how-do-i-create-value', 
      num: '05',
      labelEn: 'Create Value', 
      labelNe: 'मूल्य सिर्जना',
      descEn: 'Curiosity to Commerce: 7-stage research-to-impact pipeline',
      descNe: 'जिज्ञासादेखि वाणिज्यसम्म: अनुसन्धान, प्रोटोटाइप र बजार'
    },
    { 
      path: '/what-future-am-i-building', 
      num: '06',
      labelEn: 'What Future Am I Building?', 
      labelNe: 'भविष्य र सहकार्य',
      descEn: 'Decentralized innovation hubs & collaboration call',
      descNe: 'दीर्घकालीन भिजन तथा राष्ट्रिय/अन्तर्राष्ट्रिय साझेदारी'
    },
  ];

  // Handle scroll detection for subtle navbar border elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Auto-close mobile drawer when window expands past mobile breakpoint (1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isLinkActive = (path: string) => {
    if (path === '/what-shaped-me') {
      return location.pathname === '/' || location.pathname === '/what-shaped-me';
    }
    return location.pathname === path;
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column' }}>
      
      {/* Editorial Top Navigation Header */}
      <header 
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: isScrolled ? 'rgba(250, 250, 247, 0.98)' : 'rgba(250, 250, 247, 0.92)',
          backdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${isScrolled ? 'var(--border-light)' : 'rgba(24, 27, 30, 0.08)'}`,
          transition: 'all 0.25s ease'
        }}
      >
        <div 
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '0.85rem',
            paddingBottom: '0.85rem'
          }}
        >
          {/* Brand Identity / Logo */}
          <Link 
            to="/what-shaped-me"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              fontWeight: 700,
              letterSpacing: '0.02em',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.5rem',
              flexShrink: 0
            }}
          >
            <span>{language === 'ne' ? 'किशन बास्तोला' : 'Kishan Bastola'}</span>
            <span 
              style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '0.72rem', 
                fontWeight: 600, 
                color: 'var(--accent-gold)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              · {language === 'ne' ? 'पोर्टफोलियो' : 'Portfolio'}
            </span>
          </Link>

          {/* Desktop Navigation Links - The 6 Primary Destinations */}
          <nav 
            className="desktop-only"
            aria-label="Main Navigation"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.82rem',
                    fontWeight: active ? 700 : 500,
                    letterSpacing: '0.01em',
                    color: active ? 'var(--accent-blue)' : 'var(--text-primary)',
                    textDecoration: 'none',
                    position: 'relative',
                    padding: '0.35rem 0.2rem',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                >
                  {language === 'ne' ? link.labelNe : link.labelEn}
                  {active && (
                    <span 
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--accent-gold)',
                        borderRadius: '1px'
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Controls: Language Switcher & Mobile Menu Trigger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            
            {/* Bilingual Toggle (EN | ने) */}
            <button
              onClick={toggleLanguage}
              aria-label={language === 'ne' ? 'Switch to English' : 'नेपालीमा हेर्नुहोस्'}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-light)',
                borderRadius: '3px',
                padding: '0.4rem 0.65rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-alt)';
                e.currentTarget.style.borderColor = 'var(--border-dark)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
            >
              <Globe size={13} style={{ color: 'var(--accent-gold)' }} />
              <span>{language === 'ne' ? 'EN' : 'नेपाली'}</span>
            </button>

            {/* Mobile Menu Hamburger (Visible ONLY on mobile <= 860px) */}
            <button
              className="mobile-only"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                padding: '0.35rem',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

        </div>

        {/* Mobile Navigation Drawer: The 6 Primary Destinations */}
        {mobileMenuOpen && (
          <div 
            className="mobile-nav-drawer mobile-only"
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderBottom: '1px solid var(--border-light)',
              padding: '1.25rem 1.5rem 1.75rem 1.5rem',
              flexDirection: 'column',
              gap: '0.75rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
            }}
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: 'none',
                    padding: '0.65rem 0.5rem',
                    borderRadius: '4px',
                    backgroundColor: active ? 'var(--bg-alt)' : 'transparent',
                    borderBottom: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono, monospace)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        backgroundColor: active ? 'var(--accent-blue)' : 'var(--bg-surface)',
                        color: active ? '#FFFFFF' : 'var(--text-secondary)',
                        border: '1px solid var(--border-light)',
                        padding: '0.15rem 0.4rem',
                        borderRadius: '2px',
                        marginTop: '0.2rem'
                      }}
                    >
                      {link.num}
                    </span>
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1rem',
                          fontWeight: active ? 700 : 600,
                          color: active ? 'var(--accent-blue)' : 'var(--text-primary)',
                          marginBottom: '0.15rem'
                        }}
                      >
                        {language === 'ne' ? link.labelNe : link.labelEn}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.75rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.3
                        }}
                      >
                        {language === 'ne' ? link.descNe : link.descEn}
                      </div>
                    </div>
                  </div>

                  {active ? (
                    <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                      ●
                    </span>
                  ) : (
                    <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Main Content Body */}
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>

      {/* Multi-Page Editorial Routing Footer */}
      <footer 
        style={{
          backgroundColor: 'var(--bg-alt)',
          borderTop: '1px solid var(--border-light)',
          padding: '3.5rem 0 2rem 0',
          marginTop: 'auto'
        }}
      >
        <div className="container">
          
          {/* Main 4-Column Footer Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2.5rem',
              paddingBottom: '2.5rem',
              borderBottom: '1px solid var(--border-light)'
            }}
          >
            {/* Col 1: Bio & Core Philosophy */}
            <div>
              <p 
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '1.25rem', 
                  fontWeight: 700, 
                  color: 'var(--text-primary)',
                  margin: '0 0 0.35rem 0'
                }}
              >
                {language === 'ne' ? 'किशन बास्तोला' : 'Kishan Bastola'}
              </p>
              <p 
                style={{ 
                  fontFamily: 'var(--font-sans)', 
                  fontSize: '0.84rem', 
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                  margin: '0 0 1rem 0'
                }}
              >
                {language === 'ne' 
                  ? 'शिक्षासेवी · गणितज्ञ · अनुसन्धान तथा नवप्रवर्तन इकोसिस्टम निर्माता'
                  : 'Educationist · Mathematician · Research & Innovation Ecosystem Builder'}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.88rem',
                  fontStyle: 'italic',
                  color: 'var(--accent-gold)',
                  margin: 0
                }}
              >
                "{language === 'ne' ? 'जिज्ञासादेखि वाणिज्यसम्म' : 'From Curiosity to Commerce'}"
              </p>
            </div>

            {/* Col 2: Six Primary Questions (React Router Navigation) */}
            <div>
              <h4 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--text-primary)',
                  margin: '0 0 1rem 0'
                }}
              >
                {language === 'ne' ? 'मुख्य ६ प्रश्नहरू' : 'Primary Destinations'}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {navLinks.map((link) => {
                  const active = isLinkActive(link.path);
                  return (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.88rem',
                          color: active ? 'var(--accent-blue)' : 'var(--text-secondary)',
                          textDecoration: 'none',
                          fontWeight: active ? 600 : 400,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          transition: 'color 0.15s ease'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
                        onMouseLeave={(e) => {
                          if (!active) e.currentTarget.style.color = 'var(--text-secondary)';
                        }}
                      >
                        <ChevronRight size={14} style={{ color: active ? 'var(--accent-gold)' : 'var(--text-muted)' }} />
                        {language === 'ne' ? link.labelNe : link.labelEn}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Col 3: Key Institutional Flagships */}
            <div>
              <h4 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--text-primary)',
                  margin: '0 0 1rem 0'
                }}
              >
                {language === 'ne' ? 'संस्थागत सहकार्य' : 'Ecosystem Anchors'}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <li>
                  <a
                    href="https://astronovafoundation.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    <span>Astronova Foundation</span>
                    <ArrowUpRight size={13} style={{ color: 'var(--text-muted)' }} />
                  </a>
                </li>
                <li>
                  <Link
                    to="/what-am-i-creating"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    <span>Hetauda Research Center (HRIC)</span>
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/share/18Re3ajNqx/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    <span>MAN Bagmati Province</span>
                    <ArrowUpRight size={13} style={{ color: 'var(--text-muted)' }} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/kishan-bastola-3a67041b3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight size={13} style={{ color: 'var(--text-muted)' }} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Verified Contact Info & Address */}
            <div>
              <h4 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--text-primary)',
                  margin: '0 0 1rem 0'
                }}
              >
                {language === 'ne' ? 'सम्पर्क विवरण' : 'Direct Inquiries'}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <a
                  href={`mailto:${contact.email}`}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <Mail size={15} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                  <span>{contact.email}</span>
                </a>
                <a
                  href={`tel:${contact.phone}`}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <Phone size={15} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                  <span>{contact.phone}</span>
                </a>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem'
                  }}
                >
                  <MapPin size={15} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <span>
                    {tF(contact.address)}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              paddingTop: '1.75rem',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-sans)'
            }}
          >
            <p style={{ margin: 0 }}>
              © {new Date().getFullYear()} {language === 'ne' ? 'किशन बास्तोला। सर्वाधिकार सुरक्षित।' : 'Kishan Bastola. All rights reserved.'}
            </p>
            <p style={{ margin: 0, fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)' }}>
              "{language === 'ne' ? 'जिज्ञासादेखि वाणिज्यसम्म' : 'From Curiosity to Commerce'}"
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};