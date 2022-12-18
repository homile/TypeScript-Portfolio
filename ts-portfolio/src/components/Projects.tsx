import React from 'react';
import styled from 'styled-components';
import ProjectCard from './cards/ProjectCard';
import Title from './ui/Title';

const Projects = () => {
  return (
    <ProjectSection id="projects">
      <Title title="Projects" />
      <ProjectCard />
    </ProjectSection>
  );
};

export default Projects;

const ProjectSection = styled.section`
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
