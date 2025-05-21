import React from 'react';
import '../styles/cvProject.css'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    duration: 'Jun 2023 - Aug 2023',
    description: 'A full-stack e-commerce application with payment processing and order management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://via.placeholder.com/400x200?text=E-commerce',
  },
  {
    id: 2,
    title: 'Task Management App',
    duration: 'Mar 2023 - May 2023',
    description: 'A productivity application for managing tasks, projects, and collaborating with team members.',
    tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    image: 'https://via.placeholder.com/400x200?text=Task+Management',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2>Projects</h2>
        <button className="add-button">+ Add Project</button>
      </div>

      <div className="card-list">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            
            <div className="project-info">
              <div className="project-title">
                <h3>{project.title}</h3>
                <span>{project.duration}</span>
              </div>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-chip">{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                <a href="#" className="view-link">View Project</a>
                <span className="edit">Edit</span>
                <span className="delete">Delete</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
