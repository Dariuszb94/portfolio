import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { GitHubIcon, LinkedInIcon, EmailIcon, PhoneIcon } from '../ui/icons';

const StyledFloatingContactBar = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 14px;
  z-index: 1000;
  opacity: 0;
  backdrop-filter: blur(10px);
  background: rgba(
    ${colors.background.secondary
      .replace('#', '')
      .match(/.{2}/g)
      ?.map((hex) => parseInt(hex, 16))
      .join(', ')},
    0.6
  );
  padding: 14px;
  border-radius: 24px;
  border: 1px solid
    rgba(
      ${colors.accent.primary
        .replace('#', '')
        .match(/.{2}/g)
        ?.map((hex) => parseInt(hex, 16))
        .join(', ')},
      0.3
    );
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transform: translateX(80px);
  animation: slideIn 1s ease-out 1.2s forwards;
  will-change: transform, opacity;

  @keyframes slideIn {
    to {
      transform: translateX(0);
      opacity: 0.7;
    }
  }

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
`;

const FloatingContactIcon = styled.a`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${colors.utils.primaryAccent20} 0%,
    ${colors.utils.secondaryAccent20} 100%
  );
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  opacity: 0;
  transform: scale(0.3);
  animation: fadeIn 0.4s ease-out forwards;
  will-change: transform, opacity;

  /* Lightweight staggered delay */
  &:nth-child(1) {
    animation-delay: 2s;
  }
  &:nth-child(2) {
    animation-delay: 2.1s;
  }
  &:nth-child(3) {
    animation-delay: 2.2s;
  }
  &:nth-child(4) {
    animation-delay: 2.3s;
  }

  @keyframes fadeIn {
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  &::before {
    content: '';
    position: absolute;
    inset: 1px;
    background: ${colors.background.secondary};
    border-radius: 13px;
    z-index: 1;
    transition: background 0.3s ease;
  }

  svg {
    position: relative;
    z-index: 2;
    width: 22px;
    height: 22px;
    color: ${colors.accent.primary};
    transition: color 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease;

    &::before {
      background: linear-gradient(
        135deg,
        ${colors.utils.primaryAccent20} 0%,
        ${colors.utils.secondaryAccent20} 100%
      );
    }

    svg {
      color: ${colors.background.primary};
    }
  }
`;

interface FloatingContactBarProps {
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
}

function FloatingContactBar({
  email = 'dariusz.berer@gmail.com',
  phone = '+48 535 262 562',
  linkedin = 'https://linkedin.com/in/berer',
  github = 'https://github.com/Dariuszb94',
}: FloatingContactBarProps) {
  return (
    <StyledFloatingContactBar>
      <FloatingContactIcon
        href={github}
        target='_blank'
        rel='noopener noreferrer'
        title='GitHub'
      >
        <GitHubIcon size={22} />
      </FloatingContactIcon>

      <FloatingContactIcon
        href={linkedin}
        target='_blank'
        rel='noopener noreferrer'
        title='LinkedIn'
      >
        <LinkedInIcon size={22} />
      </FloatingContactIcon>

      <FloatingContactIcon href={`mailto:${email}`} title='Email'>
        <EmailIcon size={22} />
      </FloatingContactIcon>

      <FloatingContactIcon
        href={`tel:${phone.replace(/\s/g, '')}`}
        title='Phone'
      >
        <PhoneIcon size={22} />
      </FloatingContactIcon>
    </StyledFloatingContactBar>
  );
}

export default FloatingContactBar;
