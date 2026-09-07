import React, { useState, useEffect } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { HERO_DATA } from '../data/sourceFacts';

interface NavbarProps {
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#profile' },
    { label: 'Delegations', href: '#delegations' },
    { label: 'Initiatives', href: '#institutions' },
    { label: 'Theses', href: '#theses' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Support', href: '#support' },
  ];

  return (
    <header 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(249, 248, 243, 0.94)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: `1px solid ${isScrolled ? 'var(--border-light)' : 'transparent'}`,
        transition: 'all 0.3s cubic-bezier(0.25, 1, 0.35, 1)'
      }}
    >
      <div 
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1.25rem',
          paddingBottom: '1.25rem'
        }}
      >
        {/* Brand Identity */}
        <a 
          href="#"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.4rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          {HERO_DATA.name}
          <span 
            style={{ 
              fontSize: '0.75rem', 
              fontFamily: 'var(--font-sans)', 
              fontWeight: 500, 
              color: 'var(--accent-gold)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}
          >
            · Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </a>
          ))}

          <span style={{ color: 'var(--border-light)', userSelect: 'none' }}>|</span>

          {/* Action CTAs */}
          <button
            onClick={onOpenCV}
            style={{
              background: 'transparent',
              border: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--accent-blue)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              letterSpacing: '0.04em'
            }}
          >
            <FileText size={15} />
            CV
          </button>

          <a
            href="#contact"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              textDecoration: 'none',
              padding: '0.45rem 1rem',
              border: '1px solid var(--border-light)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--text-primary)';
              e.currentTarget.style.color = 'var(--bg-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          aria-label="Toggle navigation menu"
          style={{
            background: 'transparent',
            border: '1px solid var(--border-light)',
            padding: '0.5rem',
            cursor: 'pointer',
            color: 'var(--text-primary)'
          }}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--bg-primary)',
            borderBottom: '1px solid var(--border-light)',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.35rem',
                color: 'var(--text-primary)',
                textDecoration: 'none'
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="btn-primary"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.8rem' }}
            >
              <FileText size={15} /> View CV
            </button>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS */}
      <style>{`
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
        @media (min-width: 861px) {
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
