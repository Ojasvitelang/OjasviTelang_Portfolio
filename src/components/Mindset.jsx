import React from 'react';

/**
 * Mindset data - Engineering principles
 */
const mindsetItems = [
  {
    id: 1,
    title: 'Problem Solving',
    description: 'Breaking down complex challenges into actionable solutions',
  },
  {
    id: 2,
    title: 'System Thinking',
    description: 'Understanding how components interact within larger systems',
  },
  {
    id: 3,
    title: 'Debugging Approach',
    description: 'Methodical analysis to identify and resolve root causes',
  },
  {
    id: 4,
    title: 'Ownership & Execution',
    description: 'Taking full responsibility from concept to deployment',
  },
  {
    id: 5,
    title: 'Analytical Thinking',
    description: 'Data-driven decisions and logical reasoning',
  },
];

/**
 * Mindset Component
 * Displays engineering mindset principles
 */
function Mindset() {
  return (
    <section className="section mindset" id="mindset">
      <div className="container">
        <h2 className="section-title">Engineering Mindset</h2>
        <div className="mindset-grid">
          {mindsetItems.map((item) => (
            <div key={item.id} className="mindset-card">
              <h3 className="mindset-title">{item.title}</h3>
              <p className="mindset-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="section-divider"></div>
    </section>
  );
}

export default Mindset;
