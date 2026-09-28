import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitError('');

    // Posts to the "contact" form registered in index.html. Submissions land in the
    // Netlify dashboard under Forms.
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }).toString(),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      setFormData({ name: '', email: '', message: '' });
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err) {
      console.error('Contact form submission failed:', err);
      setSubmitError('Your message could not be sent. Please email me directly at alowonleboy01@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      title: "Email",
      value: "alowonleboy01@gmail.com",
      link: "mailto:alowonleboy01@gmail.com",
      icon: <Mail size={20} />,
      color: "var(--primary)"
    },
    {
      title: "WhatsApp / Call",
      value: "+234 808 764 4781",
      link: "https://wa.me/2348087644781",
      icon: <Phone size={20} />,
      color: "var(--tertiary)"
    },
    {
      title: "Location",
      value: "Abeokuta, Nigeria",
      link: null,
      icon: <MapPin size={20} />,
      color: "var(--secondary)"
    }
  ];

  return (
    <section id="contact" style={{
      padding: '8rem 0',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{
          textAlign: 'center',
          marginBottom: '5rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 800,
            marginBottom: '1rem'
          }}>
            Get In <span className="text-gradient-primary">Touch</span>
          </h2>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Have an exciting opportunity, project collaboration, or just want to say hello? Drop a message!
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          alignItems: 'start'
        }} className="lg-grid-contact">
          
          {/* Left Column: Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
          >
            <h3 style={{
              fontSize: '1.6rem',
              fontWeight: 700,
              marginBottom: '0.5rem'
            }}>Let's build something great.</h3>
            
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1rem',
              lineHeight: 1.6,
              marginBottom: '1.5rem'
            }}>
              I am currently open to full-time roles, contract work, and remote software engineering opportunities. You can reach out directly via form or my social channels.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem'
            }}>
              {contactInfo.map((info, i) => (
                <div 
                  key={i}
                  className="glass-panel"
                  style={{
                    padding: '1.2rem 1.8rem',
                    background: 'rgba(17, 24, 39, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.2rem'
                  }}
                >
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: info.color
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} target={info.link.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-main)' }} className="contact-link">
                        {info.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-main)' }}>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '1.5rem'
            }}>
              <a 
                href="https://github.com/GATEWAY0710" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1, padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center' }}
              >
                <Github size={16} /> GitHub
              </a>
              <a 
                href="https://linkedin.com/in/muhammed-nurudeen-433749315" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1, padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center' }}
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-panel" style={{
              padding: '2.5rem',
              background: 'rgba(17, 24, 39, 0.4)'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                marginBottom: '2rem'
              }}>Send a Message</h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                {/* Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="name" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    style={inputStyle}
                    className="contact-input"
                  />
                </div>

                {/* Email */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    style={inputStyle}
                    className="contact-input"
                  />
                </div>

                {/* Message */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="message" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message here..."
                    style={{ ...inputStyle, resize: 'none' }}
                    className="contact-input"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    padding: '0.9rem 2rem',
                    border: 'none',
                    marginTop: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>

              {/* Success Notification */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      color: 'var(--tertiary)',
                      padding: '1rem',
                      borderRadius: '8px',
                      marginTop: '1.5rem',
                      fontSize: '0.9rem'
                    }}
                  >
                    <CheckCircle2 size={18} />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Notification */}
              <AnimatePresence>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.25)',
                      color: '#fca5a5',
                      padding: '1rem',
                      borderRadius: '8px',
                      marginTop: '1.5rem',
                      fontSize: '0.9rem'
                    }}
                  >
                    <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '1px' }} />
                    <span>{submitError}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
      <style>{`
        @media (min-width: 1024px) {
          .lg-grid-contact { grid-template-columns: 0.95fr 1.05fr !important; }
        }
        .contact-link:hover {
          color: var(--primary) !important;
        }
        .contact-input:focus {
          border-color: var(--primary) !important;
          background: rgba(17, 24, 39, 0.6) !important;
          outline: none;
          box-shadow: 0 0 10px rgba(14, 165, 233, 0.1);
        }
      `}</style>
    </section>
  );
}

const inputStyle = {
  background: 'rgba(17, 24, 39, 0.4)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: '8px',
  color: 'var(--text-main)',
  padding: '0.8rem 1rem',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-body)',
  transition: 'var(--transition-fast)'
};
