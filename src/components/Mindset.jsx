import React from 'react';

/**
 * Recognition & Impact data
 */
const recognitionItems = [
  {
    id: 1,
    title: 'Published Research',
    description: 'First-authored paper in IJIRSET (ICETPR 2026): Deceptive Cyber Defense using Honeypots for Attack Monitoring & Mitigation.',
    link: 'https://www.ijirset.com/',
  },
  {
    id: 2,
    title: 'Civic Tech Partnership',
    description: 'Collaborated with Kalyan-Dombivli Municipal Corporation (KDMC) on a city-scale AI traffic automation system.',
    link: null,
  },
  {
    id: 3,
    title: 'Academic Distinction',
    description: 'Department Rank 2 in Computer Engineering — Second Year and Third Year. CGPA 9.18/10.',
    link: null,
  },
  {
    id: 4,
    title: 'Competition Wins',
    description: 'Sparkathon Inter-collegiate Trophy (2nd Place) and Inter-collegiate Debate (2nd Place).',
    link: null,
  },
];

/**
 * Mindset Component (Recognition & Impact)
 * Displays recognition and achievements
 */
function Mindset() {
  return (
    <section className="section mindset" id="mindset">
      <div className="container">
        <h2 className="section-title">Recognition & Impact</h2>
        <div className="mindset-grid">
          {recognitionItems.map((item) => (
            <div key={item.id} className="mindset-card">
              <div className="mindset-header">
                <h3 className="mindset-title">{item.title}</h3>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mindset-link"
                    aria-label="View paper"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
