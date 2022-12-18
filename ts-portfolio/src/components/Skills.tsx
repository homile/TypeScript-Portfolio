import React from 'react';
import styled from 'styled-components';
import SkillFilter from './button/SkillFilter';
import SkillCard from './cards/SkillCard';
import Title from './ui/Title';

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Title title="Skills" />
      <SkillFilter />
      <SkillCard />
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
