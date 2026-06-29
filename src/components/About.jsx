import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const experiences = [
    {
      role: "Software Engineer & Python Instructor",
      company: "Sysbeams",
      location: "Abeokuta, Nigeria",
      period: "Jan 2026 - Present",
      type: "Full-Time",
      description: [
        "Engineered the backend of an Incident Report Management App using FastAPI and MySQL, integrating Gemini LLM to automate incident analysis and reduce manual reporting time.",
        "Built an agentic AI assistant for the University Portal, enabling students to query personalized academic data (grades, schedules, fees) via a natural language chat interface (FastAPI + MySQL).",
        "Developed the frontend of the University Portal using React.js, building dynamic dashboards for academic operations, user management, and administration.",
        "Designed and delivered a structured Python curriculum covering fundamentals, OOP, and software engineering best practices for 20+ students, mentoring junior devs."
      ],
      tags: ["FastAPI", "React.js", "MySQL", "Gemini LLM", "Agentic AI", "Mentoring"]
    },
    {
      role: "Freelance Python, Data & AI Engineer",
      company: "Self-Employed",
      location: "Remote",
      period: "2020 - Present",
      type: "Contract",
      description: [
        "Designed and deployed 10+ scalable REST APIs using FastAPI and Django with JWT authentication serving clients globally.",
        "Built end-to-end data analysis pipelines (ingesting, cleaning, transforming) and delivered business insights via Power BI dashboards and reports.",
        "Developed ML models for predictive analytics and NLP-based automation (text classification, sentiment analysis) integrated into production web apps.",
        "Automated ETL workflows using Pandas and NumPy, reducing manual data processing effort by an estimated 60% for corporate clients.",
        "Optimized relational database schemas (PostgreSQL, MySQL), improving query performance and data integrity for high-volume applications."
      ],
      tags: ["Django", "FastAPI", "Pandas", "Power BI", "Scikit-Learn", "PostgreSQL", "OpenAI API"]
    }
  ];

  return (
    <section id="experience" style={{
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
            Professional <span className="text-gradient-primary">Journey</span>
          </h2>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Bridging robust backend architectures with intelligent AI models and data analytics.
          </p>
        </div>

        {/* Timeline Grid */}
        <div style={{
          position: 'relative',
          maxWidth: '850px',
          margin: '0 auto'
        }}>
          
          {/* Vertical Center Line */}
          <div style={{
            position: 'absolute',
            left: '31px',
            top: '10px',
            bottom: '10px',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--primary), var(--secondary), transparent)',
            opacity: 0.3
          }} className="md-timeline-center" />

          {/* Timeline Cards */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem'
          }}>
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{
                  position: 'relative',
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  alignItems: 'start'
                }}
                className="timeline-item"
              >
                {/* Timeline Icon Node */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 2
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: idx === 0 ? 'rgba(14, 165, 233, 0.1)' : 'rgba(139, 92, 246, 0.1)',
                    border: idx === 0 ? '1px solid rgba(14, 165, 233, 0.2)' : '1px solid rgba(139, 92, 246, 0.2)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: idx === 0 ? 'var(--primary)' : 'var(--secondary)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                  }}>
                    <Briefcase size={22} />
                  </div>
                </div>

                {/* Timeline Content Card */}
                <div className="glass-panel" style={{
                  padding: '2.5rem',
                  marginLeft: '1rem',
                  background: 'rgba(17, 24, 39, 0.35)'
                }}>
                  
                  {/* Card Header Info */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    paddingBottom: '1.2rem'
                  }}>
                    <div>
                      <h3 style={{
                        fontSize: '1.4rem',
                        fontWeight: 700,
                        color: 'var(--text-main)',
                        marginBottom: '0.4rem'
                      }}>{exp.role}</h3>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        flexWrap: 'wrap',
                        fontSize: '0.9rem',
                        color: 'var(--text-muted)'
                      }}>
                        <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{exp.company}</span>
                        <span>•</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <MapPin size={14} /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      gap: '0.5rem'
                    }} className="timeline-meta-right">
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.85rem',
                        background: 'rgba(255,255,255,0.04)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '50px',
                        border: '1px solid rgba(255,255,255,0.06)'
                      }}>
                        <Calendar size={13} /> {exp.period}
                      </span>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: exp.type === 'Full-Time' ? 'var(--primary)' : 'var(--secondary)',
                        letterSpacing: '0.05em'
                      }}>{exp.type}</span>
                    </div>
                  </div>

                  {/* Descriptions */}
                  <ul style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.8rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.95rem',
                    marginBottom: '2rem',
                    listStyleType: 'none',
                    paddingLeft: 0
                  }}>
                    {exp.description.map((desc, i) => (
                      <li key={i} style={{
                        position: 'relative',
                        paddingLeft: '1.5rem'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          top: '10px',
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: idx === 0 ? 'var(--primary)' : 'var(--secondary)'
                        }} />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Badges */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.6rem'
                  }}>
                    {exp.tags.map((tag, i) => (
                      <span key={i} style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        color: 'rgba(255,255,255,0.7)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '6px'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .timeline-item {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .md-timeline-center {
            display: none !important;
          }
          .timeline-meta-right {
            align-items: flex-start !important;
          }
          .timeline-item > div:first-child {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
