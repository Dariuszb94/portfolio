import styled from 'styled-components';
import { colors } from '../../utils/colors';

const IconWrapper = styled.div`
  width: 56px;
  min-width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${colors.utils.primaryAccent20} 0%,
    ${colors.utils.secondaryAccent20} 100%
  );
  border-radius: 16px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 1px;
    background: ${colors.background.secondary};
    border-radius: 15px;
    z-index: 1;
  }

  svg {
    position: relative;
    z-index: 2;
    width: 24px;
    height: 24px;
    color: ${colors.accent.primary};
  }
`;

interface ContactIconProps {
  children: React.ReactNode;
}

function ContactIcon({ children }: ContactIconProps) {
  return <IconWrapper>{children}</IconWrapper>;
}

export default ContactIcon;
