import React from 'react';

// Import logo
import logo from '../assets/logo.png';

/**
 * Hero Component
 * Balanced layout with content on left and logo on right
 */
function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background glow effects */}
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="container">
        <div className="hero-grid">
          {/* Left: Content */}
          <div className="hero-content">
            {/* Status Badge */}
            <div className="hero-status">
              <span className="hero-status-dot"></span>
              <span>Available for opportunities</span>
            </div>

            {/* Name - All caps, single color */}
            <h1 className="hero-name">OJASVI TELANG</h1>

            {/* Tagline */}
            <h2 className="hero-tagline">
              Software Engineer Building Real-World AI, Security & Automation Systems
            </h2>

            {/* Description */}
            <p className="hero-description">
              I design and build real-world systems — from cybersecurity infrastructure
              to city-scale automation and AI-driven platforms.
            </p>

            {/* Recognition Strip */}
            <div className="hero-recognition">
              <span>Published in <strong>IJIRSET</strong> (ICETPR 2026)</span>
              <span className="hero-recognition-divider">•</span>
              <span>In collaboration with <strong>Kalyan-Dombivli Municipal Corporation</strong></span>
            </div>

            {/* CTA Buttons */}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>Get in Touch</span>
              </a>
              <a href="/resume.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right: Logo */}
          <div className="hero-logo">
            <div className="hero-logo-glow"></div>
            <img src={logo} alt="Ojasvi Telang" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="hero-fade"></div>
    </section>
  );
}

export default Hero;
