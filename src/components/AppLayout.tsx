import React, { useState, useEffect } from 'react';
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { HERO_DATA } from '../data/sourceFacts';
import { Breadcrumbs } from './Breadcrumbs';

export const AppLayout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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

  const handleNavigation = () => {
    setMobileMenuOpen(false);
    setMoreMenuOpen(false);
  };

  const mainNavLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Work', path: '/work' },
    { label: 'Research', path: '/research' },
    { label: 'Thoughts', path: '/thoughts' },
    { label: 'Contact', path: '/contact' },
  ];

  const moreNavLinks = [
    { label: 'Institutions', path: '/institutions' },
    { label: 'Delegations', path: '/delegations' },
    { label: 'Framework', path: '/framework' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Media', path: '/media' },
    { label: 'Vision', path: '/vision' },
    { label: 'Support', path: '/support' },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)' }}>
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
          <Link 
            to="/"
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
          </Link>

          <nav 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem'
            }}
            className="desktop-nav"
          >
            {mainNavLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={handleNavigation}
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s ease',
                  position: 'relative'
                })}
              >
                {link.label}
              </NavLink>
            ))}

            <span style={{ 
              color: 'var(--border-light)', 
              userSelect: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <NavLink
                to="/about"
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  transition: 'color 0.2s ease'
                })}
              >
                More
                <ChevronDown size={14} />
              </NavLink>
              <div 
                style={{ 
                  position: 'relative' 
                }}
                onMouseEnter={() => setMoreMenuOpen(true)}
                onMouseLeave={() => setMoreMenuOpen(false)}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '4px',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
                    padding: '1rem',
                    minWidth: '200px',
                    opacity: moreMenuOpen ? 1 : 0,
                    visibility: moreMenuOpen ? 'visible' : 'hidden',
                    transform: moreMenuOpen ? 'translateY(0)' : 'translateY(-8px)',
                    transition: 'all 0.2s ease',
                    zIndex: 1000,
                    display: moreMenuOpen ? 'block' : 'none'
                  }}
                  onMouseEnter={() => setMoreMenuOpen(true)}
                  onMouseLeave={() => setMoreMenuOpen(false)}
                >
                  {moreNavLinks.map((link) => (
                    <NavLink
                      key={link.label}
                      to={link.path}
                      onClick={handleNavigation}
                      style={({ isActive }) => ({
                        display: 'block',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: isActive ? 'var(--accent-blue)' : 'var(--text-secondary)',
                        textDecoration: 'none',
                        padding: '0.5rem 0',
                        letterSpacing: '0.04em',
                        transition: 'color 0.2s ease'
                      })}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </span>

            <Link
              to="/contact"
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
            </Link>
          </nav>

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
            {mainNavLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={handleNavigation}
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.35rem',
                  color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)',
                  textDecoration: 'none'
                })}
              >
                {link.label}
              </NavLink>
            ))}
            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: '0.5rem' }}>
              <span style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '0.75rem', 
                fontWeight: 700, 
                color: 'var(--accent-gold)', 
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '1rem'
              }}>
                More Pages
              </span>
              {moreNavLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  onClick={handleNavigation}
                  style={({ isActive }) => ({
                    display: 'block',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.15rem',
                    color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)',
                    textDecoration: 'none',
                    padding: '0.5rem 0'
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <Breadcrumbs />

      <main style={{ position: 'relative', zIndex: 100 }}>
        <Outlet />
      </main>

      <footer 
        id="footer"
        style={{
          backgroundColor: 'var(--dark-bg)',
          color: 'var(--dark-text)',
          borderTop: '1px solid var(--dark-border)',
          paddingTop: 'clamp(3rem, 5vw, 4rem)',
          paddingBottom: '2rem',
          marginTop: 'auto'
        }}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <Link 
                to="/"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  color: 'var(--dark-text)',
                  textDecoration: 'none',
                  display: 'block',
                  marginBottom: '1rem'
                }}
              >
                {HERO_DATA.name}
              </Link>
              <p style={{ fontSize: '0.95rem', color: 'var(--dark-text-muted)', lineHeight: 1.6, maxWidth: '280px' }}>
                Educationist · Mathematician · Research & Innovation Ecosystem Builder · STEM Advocate
              </p>
            </div>

            <div>
              <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold-light)', marginBottom: '1rem' }}>
                Quick Links
              </h4>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {mainNavLinks.map((link) => (
                  <Link key={link.label} to={link.path} style={{ fontSize: '0.95rem', color: 'var(--dark-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold-light)', marginBottom: '1rem' }}>
                More
              </h4>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {moreNavLinks.map((link) => (
                  <Link key={link.label} to={link.path} style={{ fontSize: '0.95rem', color: 'var(--dark-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold-light)', marginBottom: '1rem' }}>
                Contact
              </h4>
              <address style={{ fontStyle: 'normal', fontSize: '0.95rem', color: 'var(--dark-text-muted)', lineHeight: 1.8 }}>
                <div>Hetauda Sub-Metropolitan City</div>
                <div>Makwanpur, Bagmati Province, Nepal</div>
                <div style={{ marginTop: '0.5rem' }}>
                  <a href="mailto:contact@astronovafoundation.com" style={{ color: 'var(--accent-gold-light)', textDecoration: 'none' }}>contact@astronovafoundation.com</a>
                </div>
                <div>+977-9855030706</div>
              </address>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--dark-border)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--dark-text-muted)' }}>
              © {new Date().getFullYear()} Kishan Bastola. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://www.facebook.com/kishan.bastola" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--dark-text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold-light)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--dark-text-muted)'}>Facebook</a>
              <a href="https://www.linkedin.com/in/kishan-bastola/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--dark-text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold-light)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--dark-text-muted)'}>LinkedIn</a>
              <a href="https://astronovafoundation.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--dark-text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold-light)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--dark-text-muted)'}>Astronova Foundation</a>
            </div>
          </div>
        </div>
      </footer>

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
    </div>
  );
};