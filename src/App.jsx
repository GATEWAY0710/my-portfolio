import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* Dynamic Animated Particles Background */}
      <AnimatedBackground />

      {/* Navigation Menu */}
      <Navbar />

      {/* Main Sections */}
      <main style={{ flexGrow: 1 }}>
        {/* Intro Hero Section */}
        <Hero />

        {/* Experience & Professional Journey Timeline */}
        <About />

        {/* Technical Arsenal Skills Progress Bars */}
        <Skills />

        {/* Featured Projects with Dynamic Category Filtering */}
        <Projects />

        {/* Interactive Messaging Contact Form */}
        <Contact />
      </main>

      {/* Website Footer */}
      <Footer />
    </>
  );
}
