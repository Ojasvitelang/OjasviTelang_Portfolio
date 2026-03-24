import React from 'react';

// Import project images
import cyberImg from '../assets/cybersecurity.png';
import trafficImg from '../assets/traffic.png';
import llmImg from '../assets/llm.png';
import referralImg from '../assets/referral.png';

/**
 * Projects data configuration
 * Each project contains title, role, description, tech stack, and image
 */
const projectsData = [
  {
    id: 1,
    title: 'Enterprise-Grade Threat Detection System',
    role: 'Sole designer and developer',
    description:
      'Built an integrated cybersecurity system combining honeypot, intrusion detection system (IDS), and firewall-based defense layers to detect and monitor malicious activity in real time. Designed a live dashboard displaying attack feeds, IP tracking, and command execution logs. Created as a deployable blueprint for real-world enterprise security environments.',
    tech: ['Python', 'Networking', 'Cybersecurity', 'Backend Systems'],
    image: cyberImg,
  },
  {
    id: 2,
    title: 'AI-Based Smart Traffic Automation System',
    role: 'Lead architect and system engineer',
    description:
      'Designed a dynamic traffic control system using computer vision and adaptive signal timing to optimize lane-wise traffic flow. Implemented fairness logic to prevent low-traffic lanes from excessive waiting. Reduced infrastructure cost by 4× by replacing multiple cameras with a single rotating camera architecture. Built as a scalable model for smart city deployment.',
    tech: ['Python', 'OpenCV', 'System Design', 'IoT'],
    image: trafficImg,
  },
  {
    id: 3,
    title: 'AI-Powered Internal Automation System',
    role: 'Sole designer and developer',
    description:
      "Built an internal AI-powered system to automate workflows and assist digital marketing operations. Developed backend logic and intelligent automation features to improve team productivity. Also designed and built the company's website to enhance brand credibility and improve client perception.",
    tech: ['Python', 'Web Development', 'AI Systems'],
    image: llmImg,
  },
  {
    id: 4,
    title: 'Referral & Incentive Management Platform',
    role: 'Sole designer and developer',
    description:
      'Developed a commercial referral tracking platform for a cosmetology company to manage student-driven admissions, reward allocation, and membership tiers. Implemented logic for referral validation, duplicate prevention, points tracking, and tier classification (Bronze/Silver/Gold). Built as a scalable and reliable business system.',
    tech: ['Django', 'MySQL', 'Backend Development'],
    image: referralImg,
  },
];

/**
 * ProjectCard Component
 * Individual project card with image, details, and tech stack
 */
function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {/* Project Image */}
      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
        />
      </div>

      {/* Project Details */}
      <span className="project-role">{project.role}</span>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      {/* Tech Stack */}
      <div className="project-tech">
        {project.tech.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </article>
  );
}

/**
 * Projects Component
 * Displays all featured projects in a grid layout
 */
function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section-glow"></div>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="section-divider"></div>
    </section>
  );
}

export default Projects;
