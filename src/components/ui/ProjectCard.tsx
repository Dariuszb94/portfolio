import styled, { keyframes } from 'styled-components';
import { colors } from '../../utils/colors';
import { GitHubIcon } from './icons';

const glowPulse = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px ${colors.utils.primaryAccent20}; 
  }
  50% { 
    box-shadow: 0 0 40px ${colors.utils.primaryAccent30}; 
  }
`;

const Card = styled.div<{ delay: number }>`
  background: linear-gradient(
    135deg,
    ${colors.background.secondary} 0%,
    ${colors.background.tertiary} 100%
  );
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid ${colors.utils.primaryAccent20};
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation-delay: ${(props) => props.delay * 0.1}s;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: ${colors.accent.primary};
    animation: ${glowPulse} 2s ease-in-out infinite;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(
    135deg,
    ${colors.utils.primaryAccent20} 0%,
    ${colors.utils.secondaryAccent20} 100%
  );
  border-radius: 12px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '</>';
    font-size: 3rem;
    color: ${colors.accent.primary};
    font-weight: bold;
    font-family: 'Courier New', monospace;
    opacity: 0.3;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${colors.utils.primaryAccent30},
      transparent
    );
    transition: left 0.5s ease;
  }
`;

const ProjectContent = styled.div`
  position: relative;
  z-index: 2;
`;

const ProjectTitle = styled.h3`
  color: ${colors.accent.primary};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: ${colors.accent.secondary};
  }
`;

const ProjectDescription = styled.p`
  color: ${colors.text.secondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const TechTag = styled.span`
  background: linear-gradient(
    135deg,
    ${colors.utils.primaryAccent20} 0%,
    ${colors.utils.secondaryAccent20} 100%
  );
  color: ${colors.text.primary};
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${colors.utils.primaryAccent30};
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(
      135deg,
      ${colors.utils.primaryAccent30} 0%,
      ${colors.utils.secondaryAccent40} 100%
    );
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }
`;

const LiveLink = styled(ProjectLink)`
  background: linear-gradient(
    135deg,
    ${colors.accent.primary} 0%,
    ${colors.accent.secondary} 100%
  );
  color: ${colors.background.primary};

  &:hover {
    box-shadow: 0 10px 25px ${colors.utils.primaryAccent30};
  }
`;

const GithubLink = styled(ProjectLink)`
  background: transparent;
  color: ${colors.text.primary};
  border: 1px solid ${colors.utils.primaryAccent30};

  &:hover {
    background: ${colors.utils.primaryAccent20};
    border-color: ${colors.accent.primary};
  }

  svg {
    width: 18px;
    height: 18px;
  }
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

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card delay={index}>
      <ProjectImage />
      <ProjectContent>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>

        <TechnologiesList>
          {project.technologies.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </TechnologiesList>

        <ProjectLinks>
          {project.liveUrl && (
            <LiveLink
              href={project.liveUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              Live Demo
            </LiveLink>
          )}

          <GithubLink
            href={project.githubUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHubIcon />
            Code
          </GithubLink>
        </ProjectLinks>
      </ProjectContent>
    </Card>
  );
}

export default ProjectCard;
