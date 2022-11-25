import React from 'react';
import styled from 'styled-components';
import { communitySite, portfolio_site } from '../assets/img/projects/index';
import Title from './ui/Title';

interface projectsArr {
  mode: string;
  githubLink: string;
  photoLink: string;
  title: string;
  desc: string;
}

const Projects = () => {
  const projects: projectsArr[] = [
    {
      mode: 'solo',
      githubLink: 'https://github.com/homile/portfolio',
      photoLink: portfolio_site,
      title: 'Portfolio_site',
      desc: 'University team report\n(HTML, CSS, JS, Git, GitHub)',
    },
    {
      mode: 'team',
      githubLink: 'https://github.com/homile/community_site',
      photoLink: communitySite,
      title: 'Community_site',
      desc: 'University team report\n(HTML, CSS, PHP, ...)',
    },
  ];

  return (
    <WorkSection>
      <Title title="Projects" />
    </WorkSection>
  );
};

export default Projects;

const WorkSection = styled.section`
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
