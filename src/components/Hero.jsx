import React, { useState } from 'react';
import { ArrowRight, Download, Terminal, Play, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('agent');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    agent: {
      filename: 'agent_chat.py',
      language: 'python',
      code: `from fastapi import FastAPI, Depends
from langchain_openai import ChatOpenAI
from database import get_student_db

app = FastAPI(title="Student Portal AI Agent")

@app.post("/agent/query")
async def chat_with_portal(
    prompt: str,
    db = Depends(get_student_db)
):
    # Enforces RBAC & Student Isolation
    agent = StudentAgent(
        llm=ChatOpenAI(model="gpt-4o"),
        tools=[db.query_results, db.get_timetable],
        verbose=True
    )
    
    response = await agent.arun(prompt)
    return {"response": response}`
    },
    database: {
      filename: 'etl_pipeline.py',
      language: 'python',
      code: `import pandas as pd
import numpy as np

def run_analytical_etl(raw_data_path):
    print("🚀 Ingesting client operational data...")
    df = pd.read_csv(raw_data_path)
    
    # Advanced Data Wrangling Suite
    df.dropna(subset=['customer_id'], inplace=True)
    df['normalized_revenue'] = (
        df['amount'] - df['amount'].mean()
    ) / df['amount'].std()
    
    # Anomaly Detection algorithm
    q1, q3 = df['amount'].quantile([0.25, 0.75])
    iqr = q3 - q1
    df['is_anomaly'] = (
        (df['amount'] < (q1 - 1.5 * iqr)) | 
        (df['amount'] > (q3 + 1.5 * iqr))
    )
    
    return df.to_dict(orient='records')`
    },
    engineer: {
      filename: 'engineer.py',
      language: 'python',
      code: `class FullStackEngineer:
    def __init__(self):
        self.name = "Muhammed Nurudeen"
        self.role = "Python & AI Specialist"
        self.experience_years = 5
        self.core_stack = [
            "FastAPI", "Django", 
            "React.js", "PostgreSQL", 
            "Scikit-learn", "LangChain"
        ]

    def architect_solution(self, requirements):
        # Bridging backend & AI
        return {
            "backend": "Async FastAPI microservice",
            "frontend": "Tailwind-styled React UI",
            "intelligence": "Gemini/OpenAI LLM tool-use",
            "result": "Optimized & Highly Scalable"
        }`
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '100px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          alignItems: 'center',
          width: '100%',
          minWidth: 0
        }} className="lg-grid-2">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', minWidth: 0 }}
          >
            {/* Custom Badge */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              alignSelf: 'flex-start'
            }}>
              <span style={{
                background: 'rgba(14, 165, 233, 0.1)',
                border: '1px solid rgba(14, 165, 233, 0.2)',
                color: 'var(--primary)',
                padding: '0.4rem 1.2rem',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  display: 'inline-block',
                  animation: 'pulse 1.5s infinite'
                }}></span>
                Available for Remote / Full-Time
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: 1.15,
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.03em'
            }}>
              Architecting Scalable <span className="text-gradient-primary">Systems</span> & <span className="text-gradient-secondary">Data Solutions</span>.
            </h1>

            {/* Summary */}
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              maxWidth: '540px',
              lineHeight: 1.7
            }}>
              Hi, I'm <strong>Muhammed Nurudeen Olalekan</strong>. I build high-performance APIs with FastAPI/Django, robust React UIs, and intelligent AI agents integrated with LLMs.
            </p>

            {/* CTA Group */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginTop: '1rem'
            }} className="cta-buttons-container">
              <a href="#projects" className="btn btn-primary" onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}>
                Explore Projects <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-secondary" onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}>
                Let's Talk
              </a>
              <a 
                href="/Muhammed_Nurudeen_CV.docx" 
                download="Muhammed_Nurudeen_CV.docx"
                className="btn btn-secondary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  borderColor: 'rgba(255,255,255,0.05)',
                  background: 'rgba(255,255,255,0.01)'
                }}
              >
                <Download size={15} /> Download CV
              </a>
            </div>
          </motion.div>

          {/* Right Visual Column (Code Mockup + Profile Card) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              minWidth: 0
            }}
          >
            {/* Hovering Profile Bubble (Saves space and looks extremely high end) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem',
              padding: '1rem',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(17, 24, 39, 0.4)',
              backdropFilter: 'blur(12px)',
              width: 'fit-content',
              position: 'absolute',
              top: '-40px',
              right: '20px',
              zIndex: 10,
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }} className="profile-bubble">
              <div style={{
                position: 'relative',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--primary)',
                boxShadow: '0 0 15px rgba(14, 165, 233, 0.4)'
               }}>
                <img 
                  src="/gateway.jpg" 
                  alt="Muhammed Nurudeen" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    e.target.src = "/image.jpg"; // fallback to image.jpg
                  }}
                />
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>Muhammed Nurudeen</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600 }}>Full-Stack & AI Engineer</p>
              </div>
            </div>

            {/* VS Code Window Container */}
            <div className="glass-panel" style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(3, 7, 18, 0.8)',
              width: '100%',
              maxWidth: '100%',
              minWidth: 0
            }}>
              
              {/* Window Header */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                {/* Windows Buttons */}
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }}></span>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308', display: 'inline-block' }}></span>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
                </div>

                {/* Editor Title */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)'
                }}>
                  <Terminal size={14} style={{ color: 'var(--primary)' }} />
                  <span>workspace_engine - VS Code</span>
                </div>

                <div style={{ width: '42px' }}></div>
              </div>

              {/* Editor Tabs */}
              <div style={{
                display: 'flex',
                background: 'rgba(0, 0, 0, 0.15)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                overflowX: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }} className="editor-tabs-container">
                {Object.keys(codeSnippets).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: '0.6rem 1.2rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      background: activeTab === tab ? 'rgba(3, 7, 18, 0.8)' : 'transparent',
                      color: activeTab === tab ? 'var(--text-main)' : 'var(--text-muted)',
                      border: 'none',
                      borderRight: '1px solid rgba(255, 255, 255, 0.05)',
                      borderTop: activeTab === tab ? '2px solid var(--primary)' : '2px solid transparent',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      outline: 'none',
                      flexShrink: 0
                    }}
                  >
                    <span style={{
                      color: tab === 'agent' ? '#38bdf8' : tab === 'database' ? '#10b981' : '#fbbf24'
                    }}>Py</span>
                    {codeSnippets[tab].filename}
                  </button>
                ))}
              </div>

              {/* Code Area */}
              <div style={{
                position: 'relative',
                padding: '1.2rem',
                minHeight: '260px',
                textAlign: 'left',
                overflowX: 'auto',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                lineHeight: 1.5,
                background: 'rgba(3, 7, 18, 0.6)'
              }}>
                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--text-muted)',
                    padding: '0.3rem 0.6rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    zIndex: 2
                  }}
                  className="copy-btn"
                >
                  {copied ? (
                    <>
                      <Check size={12} style={{ color: 'var(--tertiary)' }} />
                      <span style={{ color: 'var(--tertiary)' }}>Copied</span>
                    </>
                  ) : (
                    <>
                      <span>Copy</span>
                    </>
                  )}
                </button>

                {/* Styled Code Block */}
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={activeTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    style={{ whiteSpace: 'pre', margin: 0 }}
                  >
                    <code>
                      {codeSnippets[activeTab].code.split('\n').map((line, i) => (
                        <div key={i} style={{ display: 'flex' }}>
                          <span style={{
                            width: '24px',
                            color: 'var(--text-dark)',
                            display: 'inline-block',
                            userSelect: 'none',
                            marginRight: '12px',
                            textAlign: 'right'
                          }}>{i + 1}</span>
                          <span style={{ color: '#e2e8f0' }}>{highlightPython(line)}</span>
                        </div>
                      ))}
                    </code>
                  </motion.pre>
                </AnimatePresence>
              </div>

              {/* Terminal Footer */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '0.4rem 1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Play size={10} style={{ color: 'var(--tertiary)' }} />
                  <span>Console Output: Ready</span>
                </div>
                <div>
                  <span>UTF-8</span>
                  <span style={{ marginLeft: '12px' }}>Python 3.11</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .lg-grid-2 { grid-template-columns: 1.1fr 0.9fr !important; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }
        .profile-bubble {
          transition: var(--transition-smooth);
        }
        .profile-bubble:hover {
          transform: scale(1.05) translateY(-5px);
        }
        @media (max-width: 768px) {
          .profile-bubble {
            position: relative !important;
            top: 0 !important;
            right: 0 !important;
            margin: 0 auto 1.5rem !important;
            width: 100% !important;
            max-width: 280px !important;
            justify-content: center;
          }
        }
        .editor-tabs-container::-webkit-scrollbar {
          display: none;
        }
        .copy-btn {
          transition: var(--transition-fast);
        }
        .copy-btn:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          color: var(--text-main) !important;
        }
      `}</style>
    </section>
  );
}

// Simple client-side syntax highlighter helper for Python
function highlightPython(line) {
  if (!line) return '';
  
  // Keywords
  const keywords = ['import', 'from', 'as', 'def', 'class', 'return', 'await', 'async', 'try', 'except', 'with', 'for', 'in', 'if', 'elif', 'else', 'is', 'not'];
  // Builtins / Decorators
  const builtins = ['print', 'len', 'dict', 'str', 'int', 'Depends', 'get_student_db', 'StudentAgent', 'ChatOpenAI', 'pd', 'np', 'ValueError'];
  
  let result = line;
  
  // Format strings
  result = result.replace(/(".*?"|'.*?')/g, '<span style="color: #a3e635">$1</span>');
  
  // Format comments
  result = result.replace(/(#.*)$/g, '<span style="color: #475569">$1</span>');
  
  // Format decorators
  result = result.replace(/(@\w+(?:\.\w+)*)/g, '<span style="color: #a78bfa">$1</span>');
  
  // Regex to isolate words and style keywords / functions
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    // Using simple replacements that don't mess up html tags (temporary styling bypass)
    result = result.replace(regex, `__KW_START__${keyword}__KW_END__`);
  });

  builtins.forEach(builtin => {
    const regex = new RegExp(`\\b${builtin}\\b`, 'g');
    result = result.replace(regex, `__BI_START__${builtin}__BI_END__`);
  });

  // Re-substitute
  result = result.replace(/__KW_START__(\w+)__KW_END__/g, '<span style="color: #c084fc; font-weight: 500">$1</span>');
  result = result.replace(/__BI_START__(\w+)__BI_END__/g, '<span style="color: #38bdf8">$1</span>');

  return <span dangerouslySetInnerHTML={{ __html: result }} />;
}
