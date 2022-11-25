import React from 'react';
import styled from 'styled-components';
import Title from './ui/Title';

const Skills = () => {
  return (
    <SkillsSection>
      <Title title="Skills" />
    </SkillsSection>
  );
};

export default Skills;

const SkillsSection = styled.section`
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
