import React, { useState } from 'react';
import { ExternalLink, Bot, Database, BarChart, ShoppingCart, Activity, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Github = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI & ML', 'Backend Engineering', 'Data & Analytics'];

  const projectsData = [
    {
      title: "University Student Portal AI Agent",
      category: "AI & ML",
      description: "An agentic AI chatbot allowing students to query academic results, timetables, and fee status. Enforces strict per-student data isolation and secure database tool-calling with RBAC.",
      tech: ["FastAPI", "MySQL", "React.js", "OpenAI API", "LangChain"],
      github: "https://github.com/GATEWAY0710/student-support-ai-chatbox",
      icon: <Bot size={20} />
    },
    {
      title: "GPT-Powered Data Analytics Assistant",
      category: "Data & Analytics",
      description: "An interactive Streamlit app that ingests datasets, performing automated anomaly detection and generating natural language business summaries & trends from financial and operational data.",
      tech: ["Python", "OpenAI API", "Streamlit", "Pandas", "ETL"],
      github: "https://github.com/GATEWAY0710/Agentic-AI-",
      icon: <BarChart size={20} />
    },
    {
      title: "Incident Report Management System",
      category: "AI & ML",
      description: "A secure incident tracking system featuring Gemini LLM integrations to automate report summaries, custom SQL optimization for low-latency queries, and Role-Based Access Control (RBAC).",
      tech: ["FastAPI", "MySQL", "React.js", "Gemini LLM", "TailwindCSS"],
      github: "https://github.com/GATEWAY0710",
      icon: <ShieldCheck size={20} />
    },
    {
      title: "GatewayStore FastAPI",
      category: "Backend Engineering",
      description: "A high-performance async microservice API engineered for speed. Leverages modern asynchronous Python, managing transactional integrity with millisecond-scale latency under load.",
      tech: ["FastAPI", "AsyncPG", "Docker", "PostgreSQL", "Pydantic"],
      github: "https://github.com/GATEWAY0710/GatewayStoreFastApi",
      icon: <Activity size={20} />
    },
    {
      title: "GatewayStore Django",
      category: "Backend Engineering",
      description: "A monolithic e-commerce platform featuring inventory management, JWT-based customer authentication, and a clean database ORM architecture designed for enterprise-grade reliability.",
      tech: ["Django", "Django REST Framework", "PostgreSQL", "JWT", "SQL"],
      github: "https://github.com/GATEWAY0710/GatewayStore",
      icon: <ShoppingCart size={20} />
    },
    {
      title: "Data Wrangling Automation Suite",
      category: "Data & Analytics",
      description: "A library of reusable ETL scripts for data cleansing, standardization, and analytics workflows, reducing manual processing efforts by 60% across corporate engagements.",
      tech: ["Python", "Pandas", "NumPy", "Jupyter Notebook", "Excel"],
      github: "https://github.com/GATEWAY0710/logistic-regression",
      icon: <Database size={20} />
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" style={{
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
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            A curated selection of my engineering work, spanning AI agents, scalable APIs, and automated data scripts.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.6rem',
          flexWrap: 'wrap',
          marginBottom: '4rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.6rem 1.4rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                borderRadius: '50px',
                border: '1px solid',
                borderColor: activeCategory === cat ? 'var(--primary)' : 'rgba(255,255,255,0.06)',
                background: activeCategory === cat ? 'rgba(14, 165, 233, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                color: activeCategory === cat ? 'var(--primary)' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              className="filter-tab-btn"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="glass-panel"
                style={{
                  background: 'rgba(17, 24, 39, 0.35)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  overflow: 'hidden'
                }}
              >
                
                {/* Project Header */}
                <div style={{
                  padding: '1.5rem 2rem 1.2rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'rgba(0, 0, 0, 0.15)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.04)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    color: 'var(--primary)'
                  }}>
                    {project.icon}
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.05em'
                    }}>
                      {project.category}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '0.8rem' }}>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      style={{
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.06)'
                      }}
                      className="project-link-hover"
                      title="View Source Code"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                {/* Project Body */}
                <div style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                  flexGrow: 1
                }}>
                  <h3 style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    lineHeight: 1.3
                  }}>{project.title}</h3>

                  <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    flexGrow: 1
                  }}>{project.description}</p>

                  {/* Tech stack items */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginTop: '1rem'
                  }}>
                    {project.tech.map((t) => (
                      <span 
                        key={t}
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--primary)',
                          background: 'rgba(14, 165, 233, 0.06)',
                          border: '1px solid rgba(14, 165, 233, 0.12)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '4px'
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
      <style>{`
        .filter-tab-btn:hover {
          border-color: var(--primary) !important;
          color: var(--primary) !important;
          background: rgba(14, 165, 233, 0.05) !important;
        }
        .project-link-hover {
          transition: var(--transition-fast);
        }
        .project-link-hover:hover {
          color: var(--primary) !important;
          background: rgba(14, 165, 233, 0.1) !important;
          border-color: rgba(14, 165, 233, 0.3) !important;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
