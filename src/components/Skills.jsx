import React from 'react';
import { Database, Cpu, BarChart3, Layout, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Engineering",
      icon: <Database size={24} />,
      color: "var(--primary)",
      items: [
        { name: "Python Core / OOP", level: 95 },
        { name: "FastAPI / Async REST APIs", level: 92 },
        { name: "Django / Django REST Framework", level: 88 },
        { name: "SQLAlchemy & ORM Patterns", level: 90 },
        { name: "JWT Auth & Security RBAC", level: 85 },
        { name: "PostgreSQL & MySQL Optimization", level: 87 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Cpu size={24} />,
      color: "var(--secondary)",
      items: [
        { name: "LLM Orchestration (LangChain)", level: 88 },
        { name: "Agentic AI / Tool Use APIs", level: 85 },
        { name: "Natural Language Processing (NLP)", level: 80 },
        { name: "Predictive Analytics Models", level: 82 },
        { name: "Anomaly Detection Pipelines", level: 84 },
        { name: "Scikit-Learn / ML Models", level: 80 }
      ]
    },
    {
      title: "Data & Analytics",
      icon: <BarChart3 size={24} />,
      color: "var(--tertiary)",
      items: [
        { name: "Pandas & NumPy", level: 92 },
        { name: "ETL / Data Wrangling Automation", level: 90 },
        { name: "Power BI Dashboards", level: 85 },
        { name: "Advanced SQL Queries", level: 88 },
        { name: "Advanced Excel Modeling", level: 82 },
        { name: "BeautifulSoup / Web Scraping", level: 86 }
      ]
    },
    {
      title: "Frontend & DevOps Tools",
      icon: <Layout size={24} />,
      color: "#fbbf24", // Yellow/Amber
      items: [
        { name: "React.js & State Management", level: 85 },
        { name: "TailwindCSS & Responsive UIs", level: 90 },
        { name: "Git / GitHub Workflows", level: 90 },
        { name: "Docker & Containerization", level: 78 },
        { name: "Streamlit UI Applications", level: 88 },
        { name: "Netlify / Vercel Deployments", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" style={{
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
            Technical <span className="text-gradient-primary">Arsenal</span>
          </h2>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            A comprehensive mapping of my engineering stack across backend services, AI models, and analytical tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel"
              style={{
                padding: '2.2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.8rem',
                background: 'rgba(17, 24, 39, 0.3)'
              }}
            >
              {/* Category Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: `rgba(${category.color === 'var(--primary)' ? '14, 165, 233' : category.color === 'var(--secondary)' ? '139, 92, 246' : category.color === 'var(--tertiary)' ? '16, 185, 129' : '251, 191, 36'}, 0.1)`,
                  border: `1px solid rgba(${category.color === 'var(--primary)' ? '14, 165, 233' : category.color === 'var(--secondary)' ? '139, 92, 246' : category.color === 'var(--tertiary)' ? '16, 185, 129' : '251, 191, 36'}, 0.25)`,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: category.color
                }}>
                  {category.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-main)'
                }}>{category.title}</h3>
              </div>

              {/* Skills Progress List */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem'
              }}>
                {category.items.map((skill, sIdx) => (
                  <div key={sIdx} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.9rem'
                    }}>
                      <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                        <ChevronRight size={12} style={{ color: category.color, opacity: 0.8 }} />
                        {skill.name}
                      </span>
                      <span style={{ fontWeight: 600, color: 'var(--text-main)', opacity: 0.8 }}>{skill.level}%</span>
                    </div>

                    {/* Progress Bar Track */}
                    <div style={{
                      height: '6px',
                      background: 'rgba(255,255,255,0.04)',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      width: '100%',
                      border: '1px solid rgba(255,255,255,0.02)'
                    }}>
                      {/* Active Progress Bar */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{
                          height: '100%',
                          background: category.color,
                          borderRadius: '10px',
                          boxShadow: `0 0 10px ${category.color}44`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
