import React from 'react';

const projects = [
  {
    name: 'localhostai',
    description: 'Run AI models locally with ease.',
    url: 'https://github.com/fifteen42/localhostai' // Inferred URL, might need adjustment
  },
  {
    name: 'clapper',
    description: 'A modern video editor for the browser.',
    url: 'https://github.com/jbilcke-hf/clapper'
  },
  {
    name: 'ContextAtlas',
    description: 'Mapping context for LLMs.',
    url: 'https://github.com/fifteen42/ContextAtlas' // Inferred URL
  }
];

const ProjectGrid = () => {
  return (
    <section className="animate-fade-in delay-200" style={{ marginTop: '4rem' }}>
      <h2 className="mono" style={{ fontSize: '1.2rem', marginBottom: '2rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
        Projects
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {projects.map((project) => (
          <a 
            key={project.name} 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: 'block',
              padding: '1.5rem', 
              backgroundColor: 'var(--card-bg)', 
              border: '1px solid var(--card-border)', 
              borderRadius: '8px',
              transition: 'transform 0.2s ease, border-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'var(--accent-color)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--card-border)';
            }}
          >
            <h3 className="mono" style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>
              {project.name}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
