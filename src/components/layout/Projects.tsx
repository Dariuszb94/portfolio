import React from 'react';
import styled, { keyframes } from 'styled-components';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ui/ProjectCard';

const fadeInUp = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-top: 3rem;
  max-width: 1000px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }
`;

const ProjectsContainer = styled.div`
  animation: ${fadeInUp} 0.6s ease-out;
`;

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  imageUrl?: string;
}

// Move projects data outside component to prevent re-creation on every render
const projects: Project[] = [
  {
    id: 1,
    title: 'Interactive Portfolio',
    description:
      'A modern, responsive portfolio website built with React and TypeScript. Features interactive particle effects, smooth animations, and optimized performance.',
    technologies: ['React', 'TypeScript', 'Styled Components', 'Vite'],
    liveUrl: 'https://dariuszb94.github.io/portfolio/',
    githubUrl: 'https://github.com/Dariuszb94/portfolio',
  },
  {
    id: 2,
    title: 'Self Presentation Website',
    description:
      'Professional portfolio website showcasing skills, projects, and experience with elegant design and smooth user interactions.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    liveUrl: 'https://dariuszb94.github.io/Self-presentation/',
    githubUrl: 'https://github.com/Dariuszb94/Self-presentation',
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with modern UI/UX, shopping cart functionality, and secure payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    githubUrl: 'https://github.com/Dariuszb94/ecommerce-app',
  },
  {
    id: 4,
    title: 'Task Management App',
    description:
      'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['Vue.js', 'Firebase', 'Vuetify', 'Socket.io'],
    githubUrl: 'https://github.com/Dariuszb94/task-manager',
  },
];

const Projects = React.memo(() => {
  return (
    <ProjectsSection id='projects'>
      <ProjectsContainer>
        <SectionHeader
          title='Featured Projects'
          subtitle='Showcasing my passion for creating innovative digital solutions'
        />

        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
});

Projects.displayName = 'Projects';

export default Projects;
