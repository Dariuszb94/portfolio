import styled from 'styled-components';
import { colors } from '../../utils/colors';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.span`
  font-size: 0.9rem;
  color: ${colors.text.tertiary};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Value = styled.a`
  font-size: 1.1rem;
  color: ${colors.text.primary};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.accent.primary};
  }
`;

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

function ContactItem({ icon, label, value, href }: ContactItemProps) {
  return (
    <Container>
      {icon}
      <Details>
        <Label>{label}</Label>
        <Value href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
          {value}
        </Value>
      </Details>
    </Container>
  );
}

export default ContactItem;
