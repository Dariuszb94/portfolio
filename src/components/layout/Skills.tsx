import styled, { keyframes } from 'styled-components';
import SectionHeader from '../ui/SectionHeader';
import { colors } from '../../utils/colors';

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`;

const skillAnimation = keyframes`
  from { opacity: 0; transform: translateY(30px) scale(0.8); }
  to { opacity: 1; transform: translateY(0px) scale(1); }
`;

const SkillsSection = styled.section`
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-top: 3rem;
  max-width: 1000px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SkillCategory = styled.div`
  background: linear-gradient(
    135deg,
    ${colors.background.secondary} 0%,
    ${colors.background.tertiary} 100%
  );
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid ${colors.utils.primaryAccent20};
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  animation: ${skillAnimation} 0.6s ease forwards;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: ${colors.accent.primary};
    box-shadow: 0 20px 40px ${colors.utils.primaryAccent20},
      0 0 20px ${colors.utils.primaryAccent10};
  }
`;

const CategoryTitle = styled.h3`
  color: ${colors.accent.primary};
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`;

const SkillTag = styled.span`
  background: linear-gradient(
    135deg,
    ${colors.utils.primaryAccent20} 0%,
    ${colors.utils.secondaryAccent20} 100%
  );
  color: ${colors.text.primary};
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid ${colors.utils.primaryAccent30};
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
      ${colors.utils.primaryAccent30},
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(
      135deg,
      ${colors.utils.primaryAccent30} 0%,
      ${colors.utils.secondaryAccent40} 100%
    );
    border-color: ${colors.accent.primary};
    transform: scale(1.05);
    color: ${colors.text.primary};

    &::before {
      left: 100%;
    }
  }
`;

const FloatingIcon = styled.div`
  display: inline-block;
  animation: ${floatAnimation} 3s ease-in-out infinite;
`;

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'mobile';
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript (ES6+)', category: 'frontend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'Angular', category: 'frontend' },
  { name: 'HTML5 & CSS3', category: 'frontend' },
  { name: 'Sass/SCSS', category: 'frontend' },
  { name: 'Styled Components', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Vite', category: 'frontend' },
  { name: 'Webpack', category: 'frontend' },

  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'PHP', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },

  // Tools & DevOps
  { name: 'Git & GitHub', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'Figma', category: 'tools' },
  { name: 'Jest', category: 'tools' },
  { name: 'Cypress', category: 'tools' },
  { name: 'ESLint & Prettier', category: 'tools' },
  { name: 'Responsive Design', category: 'tools' },
];

const categoryConfig = {
  frontend: {
    title: '🚀 Frontend Development',
    description: 'Modern web interfaces',
  },
  backend: {
    title: '⚙️ Backend & Database',
    description: 'Server-side solutions',
  },
  tools: {
    title: '🛠️ Tools & Testing',
    description: 'Development ecosystem',
  },
};

function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <SkillsSection id="skills">
      <SectionHeader
        title='Skills & Technologies'
        subtitle='Crafting digital experiences with modern tools and technologies'
      />

      <SkillsGrid>
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <SkillCategory key={category}>
            <CategoryTitle>
              <FloatingIcon>
                {categoryConfig[category as keyof typeof categoryConfig].title}
              </FloatingIcon>
            </CategoryTitle>

            <SkillsList>
              {categorySkills.map((skill) => (
                <SkillTag key={skill.name}>{skill.name}</SkillTag>
              ))}
            </SkillsList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
}

export default Skills;
