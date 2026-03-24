import React from 'react';

/**
 * Experience data configuration
 * Contains work history with dates, titles, companies, and descriptions
 */
const experienceData = [
  {
    id: 1,
    date: 'Dec 2024 – Present',
    title: 'Developer',
    company: 'Redefine Reach',
    companyUrl: 'https://redefinereach.pro/',
    description:
      'Built company website, developed internal AI tools, and worked on backend systems and data pipelines.',
  },
  {
    id: 2,
    date: 'Research Project',
    title: 'Research Intern',
    company: 'Smart Traffic Automation Project (IIIR Center)',
    companyUrl: null,
    description:
      'Led system architecture and design for a city-scale traffic automation solution.',
  },
];

/**
 * ExperienceItem Component
 * Individual experience entry with date, title, company, and description
 */
function ExperienceItem({ experience }) {
  return (
    <article className="experience-item">
      <div className="experience-date">{experience.date}</div>
      <div className="experience-content">
        <h3>{experience.title}</h3>
        <p className="experience-company">{experience.company}</p>
        <p className="experience-description">{experience.description}</p>
        {experience.companyUrl && (
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="experience-link"
          >
            Visit Company Website
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}

/**
 * Experience Component
 * Displays work experience in a timeline-style layout
 */
function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experienceData.map((exp) => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
      <div className="section-divider"></div>
    </section>
  );
}

export default Experience;
