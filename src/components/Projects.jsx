import React, { useState } from 'react';
import { ExternalLink, Bot, Database, BarChart, ShoppingCart, Activity, ShieldCheck, Cpu, TrendingUp } from 'lucide-react';
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
      description: "A FastAPI agent that answers student questions over an authenticated portal session, streaming replies from an Ollama-hosted model through tool calling (student profile, dashboard, fee ledger, payment history). Built on hexagonal architecture, with no student identifiers routed through the model, so one student's data cannot surface in another student's answer.",
      tech: ["FastAPI", "Ollama", "MCP", "Pydantic", "Python"],
      github: "https://github.com/GATEWAY0710/student-support-ai-chatbox",
      icon: <Bot size={20} />
    },
    {
      title: "Garment Panel Segmentation Pipeline",
      category: "AI & ML",
      description: "A PyTorch U-Net with a MobileNetV3-Small encoder (under 2M trainable parameters) trained on Fashionpedia to segment garment panels. Includes deterministic left/right sleeve ordering via image-space centroids, an importable fabric-fill function, a test suite covering parameter limits, labels and flips, and a latency benchmark.",
      tech: ["PyTorch", "U-Net", "MobileNetV3", "Albumentations", "OpenCV"],
      github: "https://github.com/GATEWAY0710/ML-ENGINEER-ASSESSMENT",
      icon: <Cpu size={20} />
    },
    {
      title: "Crypto Data Engineering & Backtesting Pipeline",
      category: "Data & Analytics",
      description: "A Python pipeline that ingests BTCUSDT klines at 1h and 4h resolution, derives trading signals, runs a backtest, and exports metrics, trade logs, alert payloads, and performance charts.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "JSON"],
      github: "https://github.com/GATEWAY0710/Muhammed_Nurudeen_-ARK-Data-engineer-Take-home",
      icon: <TrendingUp size={20} />
    },
    {
      title: "Incident Report Management System",
      category: "AI & ML",
      description: "A secure incident tracking system with Gemini LLM integration that drafts report summaries, and role-based access control so staff only see the incidents their role permits.",
      tech: ["FastAPI", "MySQL", "React.js", "Gemini LLM", "TailwindCSS"],
      github: "https://github.com/GATEWAY0710",
      icon: <ShieldCheck size={20} />
    },
    {
      title: "GatewayStore FastAPI",
      category: "Backend Engineering",
      description: "An async FastAPI service built on dependency injection, with JWT authentication, a SQLAlchemy ORM layer managed through Alembic migrations, and MySQL persistence via PyMySQL.",
      tech: ["FastAPI", "Pydantic", "SQLAlchemy", "Alembic", "PyJWT", "MySQL"],
      github: "https://github.com/GATEWAY0710/GatewayStoreFastApi",
      icon: <Activity size={20} />
    },
    {
      title: "GatewayStore Django",
      category: "Backend Engineering",
      description: "An e-commerce platform with inventory management, JWT-based customer authentication, and a Django ORM data layer.",
      tech: ["Django", "Django REST Framework", "PostgreSQL", "JWT", "SQL"],
      github: "https://github.com/GATEWAY0710/GatewayStore",
      icon: <ShoppingCart size={20} />
    },
    {
      title: "GPT-Powered Data Analytics Assistant",
      category: "Data & Analytics",
      description: "An interactive Streamlit app that ingests datasets, runs automated anomaly detection, and generates natural language business summaries and trend breakdowns from financial and operational data.",
      tech: ["Python", "OpenAI API", "Streamlit", "Pandas", "ETL"],
      github: null,
      icon: <BarChart size={20} />
    },
    {
      title: "Data Wrangling Automation Suite",
      category: "Data & Analytics",
      description: "A library of reusable ETL scripts for data cleansing, standardisation, and recurring analytics workflows, built to cut down repetitive manual processing.",
      tech: ["Python", "Pandas", "NumPy", "Jupyter", "Excel"],
      github: null,
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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
                    {project.github && (
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
                    )}
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
