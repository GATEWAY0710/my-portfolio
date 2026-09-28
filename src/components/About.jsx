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
        "Engineered the backend of an Incident Report Management System using FastAPI and MySQL, implementing role-based access control and JWT authentication to restrict data access by user tier.",
        "Integrated Google's Gemini LLM to produce structured incident analysis, automating report summarisation previously handled manually.",
        "Built an agentic AI assistant for the university portal in FastAPI, calling the school's existing ASP.NET Core services and forwarding the user's JWT so the model acts on their behalf.",
        "Refactored the assistant onto a Model Context Protocol (MCP) architecture, granting scoped tool-level access to the database in place of a fixed endpoint contract, and streamed Ollama-hosted responses to the client.",
        "Developed the React.js frontend for the university portal, building dynamic dashboards for academic operations, user management, and administration.",
        "Designed and delivered a structured Python curriculum covering fundamentals, data structures, OOP, and software engineering best practices for 20+ students, and mentored junior devs on REST API design and Git workflows."
      ],
      tags: ["FastAPI", "MySQL", "React.js", "Gemini LLM", "MCP", "Ollama", "Mentoring"]
    },
    {
      role: "AI Engineer",
      company: "Jupiter AI Labs",
      location: "Remote",
      period: "Dec 2025 - Present",
      type: "Contract",
      description: [
        "Evaluated LLM-generated responses against defined quality and accuracy criteria, providing structured feedback to guide improvements in model output.",
        "Assessed responses for correctness, relevance, and instruction adherence across use cases to support model quality assurance."
      ],
      tags: ["LLM Evaluation", "Model QA", "Prompt Engineering"]
    },
    {
      role: "Freelance Python, Data & AI Engineer",
      company: "Self-Employed",
      location: "Remote",
      period: "Apr 2025 - Present",
      type: "Contract",
      description: [
        "Designed and delivered 10+ REST APIs using FastAPI and Django with JWT authentication for client engagements.",
        "Built ETL pipelines in Pandas and NumPy, ingesting, cleaning and transforming datasets for client reporting and Power BI dashboards.",
        "Developed machine learning models for predictive analytics and NLP tasks including text classification and sentiment analysis, integrated into production web applications.",
        "Integrated OpenAI LLM APIs into client workflows to automate content generation, customer support, and data summarisation.",
        "Deployed services to AWS EC2 and ran application components as containers using Docker Compose.",
        "Optimised relational database schemas and queries in PostgreSQL and MySQL to improve data integrity and retrieval performance."
      ],
      tags: ["FastAPI", "Django", "Pandas", "Power BI", "Scikit-Learn", "AWS EC2", "Docker"]
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
          .timeline-item > div:last-child {
            margin-left: 0 !important;
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
