import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '2.5rem 0',
      background: 'rgba(7, 9, 14, 0.6)',
      textAlign: 'center',
      marginTop: 'auto'
    }}>
      <div className="container md-footer-row" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        justifyContent: 'space-between'
      }}>
        
        {/* Left Signature */}
        <div style={{
          fontSize: '0.9rem',
          color: 'var(--text-muted)'
        }}>
          &copy; {currentYear} <strong>Muhammed Nurudeen Olalekan</strong>. All rights reserved.
        </div>

        {/* Right Info */}
        <div style={{
          fontSize: '0.85rem',
          color: 'var(--text-dark)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem'
        }}>
          <span>Built with</span>
          <span style={{ color: '#ef4444' }}>❤️</span>
          <span>using React & Vite. Optimized for performance.</span>
        </div>

      </div>
      <style>{`
        @media (min-width: 768px) {
          .md-footer-row {
            flex-direction: row !important;
          }
        }
      `}</style>
    </footer>
  );
}
