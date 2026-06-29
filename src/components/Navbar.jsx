import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';

const Github = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = ['home', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      background: scrolled ? 'rgba(7, 9, 14, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleLinkClick('#home'); }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.4rem',
            fontWeight: 800,
            color: 'var(--text-main)',
            letterSpacing: '-0.05em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}
        >
          <span style={{ color: 'var(--primary)' }}>M</span>
          <span>N</span>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'var(--primary)',
            display: 'inline-block'
          }}></span>
        </a>

        {/* Desktop Menu */}
        <div style={{ display: 'none', alignItems: 'center', gap: '2.5rem' }} className="md-flex">
          <ul style={{ display: 'flex', gap: '2rem' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: activeSection === link.href.slice(1) ? 'var(--primary)' : 'var(--text-muted)',
                    position: 'relative',
                    padding: '0.2rem 0'
                  }}
                  className={activeSection === link.href.slice(1) ? 'active-nav-link-raw' : ''}
                >
                  {link.name}
                  {activeSection === link.href.slice(1) && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: 'var(--primary)',
                      borderRadius: '2px'
                    }}></span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div style={{
            width: '1px',
            height: '20px',
            background: 'rgba(255,255,255,0.1)'
          }} />

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/GATEWAY0710" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }} className="social-hover">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/muhammed-nurudeen-433749315" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }} className="social-hover">
              <Linkedin size={18} />
            </a>
            <a href="mailto:gateway0710@gmail.com" style={{ color: 'var(--text-muted)' }} className="social-hover">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Hamburger Mobile Icon */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-main)',
            cursor: 'pointer',
            padding: '0.2rem'
          }}
          className="md-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: scrolled ? '60px' : '75px',
          left: 0,
          width: '100%',
          height: 'calc(100vh - 60px)',
          background: 'rgba(7, 9, 14, 0.96)',
          backdropFilter: 'blur(20px)',
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          zIndex: 99
        }} className="md-none">
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: activeSection === link.href.slice(1) ? 'var(--primary)' : 'var(--text-main)',
                    display: 'block'
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div style={{
            width: '100%',
            height: '1px',
            background: 'rgba(255,255,255,0.1)'
          }} />

          {/* Mobile Social Links */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="https://github.com/GATEWAY0710" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Github size={20} /> <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/muhammed-nurudeen-433749315" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Linkedin size={20} /> <span>LinkedIn</span>
            </a>
            <a href="mailto:gateway0710@gmail.com" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={20} /> <span>Email</span>
            </a>
          </div>
        </div>
      )}

      {/* Embedded CSS Helper classes (injected via style tag for fast load and styling fallback) */}
      <style>{`
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
          .md-none { display: none !important; }
        }
        .social-hover {
          transition: var(--transition-fast);
        }
        .social-hover:hover {
          color: var(--primary) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </nav>
  );
}
