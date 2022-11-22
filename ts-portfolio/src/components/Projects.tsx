import React from 'react';
import styled from 'styled-components';
import { communitySite, portfolio_site } from '../assets/img/projects/index';

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
    <WorkSection className="section">
    </WorkSection>
  );
};

export default Projects;

const WorkSection = styled.section``;