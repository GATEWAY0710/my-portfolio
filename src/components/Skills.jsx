import React from 'react';
import { Server, Cpu, BarChart3, Cloud, Layout } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Engineering",
      icon: <Server size={24} />,
      color: "var(--primary)",
      rgb: "14, 165, 233",
      items: [
        "Python", "SQL", "FastAPI", "Django", "REST API design", "API versioning",
        "Pydantic", "SQLAlchemy", "Alembic", "JWT authentication", "RBAC"
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Cpu size={24} />,
      color: "var(--secondary)",
      rgb: "139, 92, 246",
      items: [
        "PyTorch", "scikit-learn", "scikit-image", "OpenCV", "Albumentations",
        "MCP", "Tool calling", "Ollama", "LLM integration", "NLP",
        "Predictive analytics", "Anomaly detection"
      ]
    },
    {
      title: "Data & Databases",
      icon: <BarChart3 size={24} />,
      color: "var(--tertiary)",
      rgb: "16, 185, 129",
      items: [
        "Pandas", "NumPy", "matplotlib", "seaborn", "Power BI", "Excel",
        "ETL", "Data wrangling", "MySQL", "PostgreSQL", "Schema design", "Query optimisation"
      ]
    },
    {
      title: "Cloud, DevOps & Testing",
      icon: <Cloud size={24} />,
      color: "#fbbf24",
      rgb: "251, 191, 36",
      items: [
        "AWS (EC2)", "Docker", "Docker Compose", "Linux / Ubuntu", "Git",
        "GitHub", "pytest", "Unit testing", "Netlify", "Vercel"
      ]
    },
    {
      title: "Frontend",
      icon: <Layout size={24} />,
      color: "#f472b6",
      rgb: "244, 114, 182",
      items: [
        "React.js", "Next.js", "TailwindCSS", "HTML5", "CSS3"
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
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
                  background: `rgba(${category.rgb}, 0.1)`,
                  border: `1px solid rgba(${category.rgb}, 0.25)`,
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

              {/* Skill Chips */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {category.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-main)',
                      background: `rgba(${category.rgb}, 0.1)`,
                      border: `1px solid rgba(${category.rgb}, 0.25)`,
                      padding: '0.35rem 0.7rem',
                      borderRadius: '6px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
