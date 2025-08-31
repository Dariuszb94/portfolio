import React from 'react';
import styled, { keyframes } from 'styled-components';
import SectionHeader from '../ui/SectionHeader';
import { ProjectCard } from '../ui';

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
    title: 'Lux Cars',
    description:
      'The dealership app lets you find your dream car. You can sort, filter cars and calculate loans for them. Saving your favorite offers is also possible.',
    technologies: [
      'HTML',
      'CSS',
      'React',
      'Redux',
      'IndexedDB',
      'Styled-Components',
    ],
    liveUrl: 'https://dariuszb94.github.io/Lux-cars/',
    githubUrl: 'https://github.com/Dariuszb94/Lux-cars',
    imageUrl: '/portfolio/images/car-dealer.jpg',
  },
  {
    id: 2,
    title: 'Translations',
    description:
      'The app lets you calculate the prices for translations. An e-mail with the calculation will be sent to you when you request it.',
    technologies: ['React', 'Hooks', 'SCSS', 'Jest', 'Enzyme', 'Email.js'],
    liveUrl: 'https://dariuszb94.github.io/translations/#/',
    githubUrl: 'https://github.com/Dariuszb94/translations/tree/master',
    imageUrl: '/portfolio/images/translations.jpg',
  },
  {
    id: 3,
    title: 'Vue Quiz Application',
    description:
      'Interactive quiz application built with Vue.js featuring dynamic questions, scoring system, and engaging user interface for educational content.',
    technologies: ['Vue', 'JavaScript', 'CSS3', 'HTML5', 'Firebase'],
    liveUrl: 'https://dariuszb94.github.io/vue-quiz/',
    githubUrl: 'https://github.com/Dariuszb94/vue-quiz',
    imageUrl: '/portfolio/images/vue-quiz.jpg',
  },
  {
    id: 4,
    title: 'Cloth Shop E-Commerce',
    description:
      'E-commerce platform for clothing retail with modern shopping experience. Features product catalog, shopping cart, and responsive design for optimal user experience.',
    technologies: ['Vue', 'Vuex', 'JavaScript', 'CSS3'],
    liveUrl: 'https://dariuszb94.github.io/cloth-shop/',
    githubUrl: 'https://github.com/Dariuszb94/cloth-shop',
    imageUrl: '/portfolio/images/cloth-shop.jpg',
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
