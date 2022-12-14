import React from 'react';
import styled from 'styled-components';
import ContactCard from './cards/ContactCard';
import Title from './ui/Title';

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Title title="Contact" />
      <ContactCard />
    </ContactSection>
  );
};

export default Contact;

const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
  padding: 120px 40px;
  text-align: center;
`;
