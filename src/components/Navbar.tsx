import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navQuestions = [
    {
      id: 'who-am-i',
      href: '#who-am-i',
      en: 'Who am I ?',
      ne: 'म को हुँ ?'
    },
    {
      id: 'how-it-works',
      href: '#how-it-works',
      en: 'How does it work ?',
      ne: 'यो कसरी चल्छ ?'
    },
    {
      id: 'what-we-built',
      href: '#what-we-built',
      en: 'What have we built ?',
      ne: 'हामीले के बनायौं ?'
    },
    {
      id: 'collaborate',
      href: '#collaborate',
      en: 'Shall we collaborate ?',
      ne: 'सहकार्य गरौं ?'
    }
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(249, 248, 243, 0.95)' : 'rgba(249, 248, 243, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${isScrolled ? 'var(--border-light)' : 'rgba(218, 215, 203, 0.5)'}`,
        transition: 'all 0.3s ease'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1rem',
          paddingBottom: '1rem'
        }}
      >
        {/* Brand Identity */}
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.25rem',
            fontWeight: 700,
            letterSpacing: '0.02em',
            color: 'var(--text-primary)',
            textDecoration: 'none'
          }}
        >
          {language === 'ne' ? 'किशन बास्तोला' : 'Kishan Bastola'}
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.25rem'
          }}
          className="desktop-nav"
        >
          {navQuestions.map((q) => (
            <a
              key={q.id}
              href={q.href}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                textDecoration: 'none',
                position: 'relative',
                paddingBottom: '0.2rem',
                transition: 'color 0.2s ease'
              }}
              className="nav-question-link"
            >
              {q[language]}
            </a>
          ))}

          {/* Inline Language Toggle */}
          <button
            onClick={toggleLanguage}
            aria-label="Toggle language"
            style={{
              background: 'transparent',
              border: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              padding: '0.2rem 0.5rem',
              marginLeft: '0.5rem',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <span style={{ color: language === 'en' ? 'var(--text-primary)' : 'var(--text-muted)', fontWeight: language === 'en' ? 700 : 400 }}>EN</span>
            <span style={{ margin: '0 0.3rem', color: 'var(--border-light)' }}>|</span>
            <span style={{ color: language === 'ne' ? 'var(--text-primary)' : 'var(--text-muted)', fontWeight: language === 'ne' ? 700 : 400 }}>ने</span>
          </button>
        </nav>

        {/* Mobile Toggle & Language Switcher */}
        <div className="mobile-nav-controls" style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={toggleLanguage}
            aria-label="Toggle language"
            style={{
              background: 'transparent',
              border: '1px solid var(--border-light)',
              borderRadius: '3px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '0.3rem 0.6rem'
            }}
          >
            {language === 'en' ? 'ने' : 'EN'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              padding: '0.25rem'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--bg-primary)',
            borderBottom: '1px solid var(--border-light)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {navQuestions.map((q) => (
            <a
              key={q.id}
              href={q.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                color: 'var(--text-primary)',
                textDecoration: 'none'
              }}
            >
              {q[language]}
            </a>
          ))}
        </div>
      )}

      {/* Underline hover effect styles */}
      <style>{`
        .nav-question-link {
          border-bottom: 2px solid transparent;
        }
        .nav-question-link:hover {
          border-bottom: 2px solid var(--accent-gold);
        }
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-controls {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
