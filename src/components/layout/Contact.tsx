import styled from 'styled-components';
import SectionHeader from '../ui/SectionHeader';
import ContactItem from '../ui/ContactItem';
import ContactIcon from '../ui/ContactIcon';
import FloatingContactBar from '../common/FloatingContactBar';
import { GitHubIcon, LinkedInIcon, EmailIcon, PhoneIcon } from '../ui/icons';

const ContactSection = styled.section`
  margin-top: 6rem;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
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
      <FloatingContactBar
        email={email}
        phone={phone}
        linkedin={linkedin}
        github={github}
      />

      <ContactSection>
        <SectionHeader
          title="Let's Create Something Amazing"
          subtitle="Ready to bring your ideas to life? I'm here to help you build exceptional digital experiences."
        />

        <ContactContent>
          <ContactInfo>
            <ContactItem
              icon={
                <ContactIcon>
                  <GitHubIcon />
                </ContactIcon>
              }
              label="GitHub"
              value="@Dariuszb94"
              href={github}
            />

            <ContactItem
              icon={
                <ContactIcon>
                  <LinkedInIcon />
                </ContactIcon>
              }
              label="LinkedIn"
              value="/in/berer/"
              href={linkedin}
            />

            <ContactItem
              icon={
                <ContactIcon>
                  <EmailIcon />
                </ContactIcon>
              }
              label="Email"
              value={email}
              href={`mailto:${email}`}
            />

            <ContactItem
              icon={
                <ContactIcon>
                  <PhoneIcon />
                </ContactIcon>
              }
              label="Phone"
              value={phone}
              href={`tel:${phone.replace(/\s/g, '')}`}
            />
          </ContactInfo>
        </ContactContent>
      </ContactSection>
    </>
  );
}

export default Contact;
