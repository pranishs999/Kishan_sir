import React, { useState, useEffect } from 'react';
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Sun, Moon } from 'lucide-react';
import { HERO_DATA } from '../data/sourceFacts';
import { Breadcrumbs } from './Breadcrumbs';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export const AppLayout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  useLanguage(); // Initialize language context

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

  // UX.md Primary Navigation with dropdowns
  const navSections = [
    {
      label: 'About',
      path: '/about',
      children: [
        { label: 'Overview', path: '/about' },
        { label: 'Education', path: '/about/education' },
        { label: 'Experience', path: '/about/experience' },
        { label: 'Leadership', path: '/about/leadership' },
      ]
    },
    {
      label: 'Work',
      path: '/work',
      children: [
        { label: 'Overview', path: '/work' },
        { label: 'Education', path: '/work/education' },
        { label: 'Mathematics', path: '/work/mathematics' },
        { label: 'Science', path: '/work/science' },
        { label: 'Research', path: '/work/research' },
        { label: 'Innovation', path: '/work/innovation' },
        { label: 'Entrepreneurship', path: '/work/entrepreneurship' },
      ]
    },
    {
      label: 'Initiatives',
      path: '/initiatives',
      children: [
        { label: 'Archive', path: '/initiatives' },
        { label: 'HRIC', path: '/initiatives/hric' },
        { label: 'Astronova', path: '/initiatives/astronova' },
        { label: 'Young Scientists', path: '/initiatives/young-scientists' },
        { label: 'STEAM', path: '/initiatives/steam' },
        { label: 'Science & Engineering Fair', path: '/initiatives/science-engineering-fair' },
        { label: 'Workshops', path: '/initiatives/workshops' },
      ]
    },
    {
      label: 'Ecosystem',
      path: '/ecosystem',
      children: [
        { label: 'Overview', path: '/ecosystem' },
        { label: 'Vision', path: '/ecosystem/vision' },
        { label: 'Education', path: '/ecosystem/education' },
        { label: 'Research', path: '/ecosystem/research' },
        { label: 'Innovation', path: '/ecosystem/innovation' },
        { label: 'Mentorship', path: '/ecosystem/mentorship' },
        { label: 'Enterprise', path: '/ecosystem/enterprise' },
      ]
    },
    {
      label: 'Thought',
      path: '/thought',
      children: []
    },
    {
      label: 'Media',
      path: '/media',
      children: [
        { label: 'Overview', path: '/media' },
        { label: 'Newspapers', path: '/media/newspapers' },
        { label: 'Interviews', path: '/media/interviews' },
        { label: 'Events', path: '/media/events' },
        { label: 'Gallery', path: '/media/gallery' },
      ]
    },
    {
      label: 'CV',
      path: '/cv',
      children: []
    },
    {
      label: 'Contact',
      path: '/contact',
      children: []
    },
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
              fontSize: '1.15rem',
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
              gap: '0.25rem'
            }}
            className="desktop-nav"
          >
            {navSections.map((section) => (
              <NavLink
                key={section.label}
                to={section.path}
                onClick={handleNavigation}
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s ease',
                  padding: '0.4rem 0.6rem',
                  borderRadius: '4px'
                })}
              >
                {section.label}
              </NavLink>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <LanguageSwitcher />
            
            <button
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-light)',
                padding: '0.5rem',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-alt)';
                e.currentTarget.style.borderColor = 'var(--accent-gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <Link
              to="/contact"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
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
          </div>
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
            {navSections.map((section) => {
              const hasChildren = section.children.length > 0;
              return (
                <React.Fragment key={section.label}>
                  <NavLink
                    to={section.path}
                    onClick={handleNavigation}
                    style={({ isActive }) => ({
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    })}
                  >
                    {section.label}
                    {hasChildren && <ChevronDown size={18} />}
                  </NavLink>
                  {hasChildren && (
                    <div style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {section.children.map((child) => (
                        <NavLink
                          key={child.label}
                          to={child.path}
                          onClick={handleNavigation}
                          style={({ isActive }) => ({
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.15rem',
                            color: isActive ? 'var(--accent-blue)' : 'var(--text-secondary)',
                            textDecoration: 'none',
                            padding: '0.5rem 0'
                          })}
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              );
            })}

            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: '0.5rem' }}>
              <LanguageSwitcher />
              
              <button
                onClick={toggleTheme}
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--border-light)',
                  padding: '0.75rem 1rem',
                  cursor: 'pointer',
                  color: 'var(--text-primary)',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  marginTop: '0.5rem',
                  transition: 'var(--transition-smooth)'
                }}
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
              </button>
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
                {navSections.map((section) => (
                  <Link key={section.label} to={section.path} style={{ fontSize: '0.95rem', color: 'var(--dark-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>
                    {section.label}
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