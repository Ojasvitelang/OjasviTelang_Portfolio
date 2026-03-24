import React from 'react';

/**
 * Skills data configuration
 * Grouped by category for clean display
 */
const skillsData = [
  {
    id: 1,
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'PHP'],
  },
  {
    id: 2,
    category: 'Frameworks & Backend',
    skills: ['Django', 'Flask', 'Node.js'],
  },
  {
    id: 3,
    category: 'AI & Data',
    skills: ['Machine Learning', 'OpenCV', 'Pandas', 'NumPy'],
  },
  {
    id: 4,
    category: 'Database',
    skills: ['MySQL', 'SQL'],
  },
  {
    id: 5,
    category: 'Concepts',
    skills: ['System Design', 'Cybersecurity', 'IoT'],
  },
];

/**
 * SkillCategory Component
 * Individual skill category card with list of skills
 */
function SkillCategory({ category }) {
  return (
    <div className="skills-category">
      <h3>{category.category}</h3>
      <div className="skills-list">
        {category.skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </div>
  );
}

/**
 * Skills Component
 * Displays all skills grouped by category in a grid layout
 */
function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-glow section-glow-alt"></div>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillsData.map((category) => (
            <SkillCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
      <div className="section-divider"></div>
    </section>
  );
}

export default Skills;
