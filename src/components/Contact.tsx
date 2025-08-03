import styled from 'styled-components';
import { colors } from '../utils/colors';

const FloatingContactBar = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 12px;
  z-index: 1000;
  opacity: 0.7;
  backdrop-filter: blur(10px);
  background: rgba(
    ${colors.background.secondary
      .replace('#', '')
      .match(/.{2}/g)
      ?.map((hex) => parseInt(hex, 16))
      .join(', ')},
    0.6
  );
  padding: 12px;
  border-radius: 20px;
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
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const FloatingContactIcon = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${colors.utils.primaryAccent20} 0%,
    ${colors.utils.secondaryAccent20} 100%
  );
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 1px;
    background: ${colors.background.secondary};
    border-radius: 11px;
    z-index: 1;
    transition: all 0.3s ease;
  }

  svg {
    position: relative;
    z-index: 2;
    width: 18px;
    height: 18px;
    color: ${colors.accent.primary};
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px
      rgba(
        ${colors.accent.primary
          .replace('#', '')
          .match(/.{2}/g)
          ?.map((hex) => parseInt(hex, 16))
          .join(', ')},
        0.3
      );

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

const ContactSection = styled.section`
  margin-top: 6rem;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 1200px;
  width: 100%;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
`;

const ContactTitle = styled.h2`
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

const ContactSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${colors.text.secondary};
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
  margin-top: 1.5rem;
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  align-items: center;
  max-width: 600px;
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0;
`;

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

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactLabel = styled.span`
  font-size: 0.9rem;
  color: ${colors.text.tertiary};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ContactValue = styled.a`
  font-size: 1.1rem;
  color: ${colors.text.primary};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.accent.primary};
  }
`;

interface ContactProps {
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
}

function Contact({
  email = 'dariusz.berer@gmail.com',
  phone = '+48 535 262 562',
  linkedin = 'https://linkedin.com/in/berer',
  github = 'https://github.com/Dariuszb94',
}: ContactProps) {
  return (
    <>
      <FloatingContactBar>
        <FloatingContactIcon
          href={github}
          target='_blank'
          rel='noopener noreferrer'
          title='GitHub'
        >
          <svg viewBox='0 0 24 24' fill='currentColor'>
            <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
          </svg>
        </FloatingContactIcon>

        <FloatingContactIcon
          href={linkedin}
          target='_blank'
          rel='noopener noreferrer'
          title='LinkedIn'
        >
          <svg viewBox='0 0 24 24' fill='currentColor'>
            <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
          </svg>
        </FloatingContactIcon>

        <FloatingContactIcon href={`mailto:${email}`} title='Email'>
          <svg
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
            <polyline points='22,6 12,13 2,6' />
          </svg>
        </FloatingContactIcon>

        <FloatingContactIcon
          href={`tel:${phone.replace(/\s/g, '')}`}
          title='Phone'
        >
          <svg
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
          </svg>
        </FloatingContactIcon>
      </FloatingContactBar>

      <ContactSection>
        <ContactHeader>
          <ContactTitle>Let's Create Something Amazing</ContactTitle>
          <ContactSubtitle>
            Ready to bring your ideas to life? I'm here to help you build
            exceptional digital experiences.
          </ContactSubtitle>
        </ContactHeader>

        <ContactContent>
          <ContactInfo>
            <ContactItem>
              <IconWrapper>
                <svg viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
              </IconWrapper>
              <ContactDetails>
                <ContactLabel>GitHub</ContactLabel>
                <ContactValue
                  href={github}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  @Dariuszb94
                </ContactValue>
              </ContactDetails>
            </ContactItem>

            <ContactItem>
              <IconWrapper>
                <svg viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                </svg>
              </IconWrapper>
              <ContactDetails>
                <ContactLabel>LinkedIn</ContactLabel>
                <ContactValue
                  href={linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  /in/berer/
                </ContactValue>
              </ContactDetails>
            </ContactItem>

            <ContactItem>
              <IconWrapper>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
                  <polyline points='22,6 12,13 2,6' />
                </svg>
              </IconWrapper>
              <ContactDetails>
                <ContactLabel>Email</ContactLabel>
                <ContactValue href={`mailto:${email}`}>{email}</ContactValue>
              </ContactDetails>
            </ContactItem>

            <ContactItem>
              <IconWrapper>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                </svg>
              </IconWrapper>
              <ContactDetails>
                <ContactLabel>Phone</ContactLabel>
                <ContactValue href={`tel:${phone.replace(/\s/g, '')}`}>
                  {phone}
                </ContactValue>
              </ContactDetails>
            </ContactItem>
          </ContactInfo>
        </ContactContent>
      </ContactSection>
    </>
  );
}

export default Contact;
