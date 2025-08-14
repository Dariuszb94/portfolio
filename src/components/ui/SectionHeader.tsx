import styled from 'styled-components';
import { colors } from '../../utils/colors';

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  background: linear-gradient(
    135deg,
    ${colors.accent.primary} 0%,
    ${colors.accent.secondary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(
      135deg,
      ${colors.accent.primary} 0%,
      ${colors.accent.secondary} 100%
    );
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${colors.text.secondary};
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
  margin-top: 1.5rem;
`;

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <Header>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Header>
  );
}

export default SectionHeader;
