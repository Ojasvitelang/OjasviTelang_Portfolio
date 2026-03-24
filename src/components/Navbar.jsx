import React, { useState, useEffect } from 'react';

/**
 * Navbar Component
 * Premium navigation bar with text branding and smooth scroll links
 */
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Navigation links configuration
  const navLinks = [
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Text Brand */}
        <a href="#hero" className="navbar-brand">
          Ojasvi Telang
        </a>

        {/* Navigation Links */}
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
