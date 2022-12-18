import React from 'react';
import styled from 'styled-components';
import AboutCard from './cards/AboutCard';
import Title from './ui/Title';

const About = () => {
  return (
    <AboutSection id="about">
      <Title title="About Me" />
      <AboutCard />
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
  padding: 40px;
  padding-top: 120px;
  text-align: center;
`;
