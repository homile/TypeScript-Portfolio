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

const Work = () => {
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
      <div className="section_container">
        <h1>My work</h1>
        <h3>Projects</h3>
        <WorkCategory>
          <CategoryBtn data-filter="*">
            All <CategoryCount>2</CategoryCount>
          </CategoryBtn>
          <CategoryBtn data-filter="Solo">
            Solo <CategoryCount>2</CategoryCount>
          </CategoryBtn>
          <CategoryBtn data-filter="Team">
            Team <CategoryCount>0</CategoryCount>
          </CategoryBtn>
        </WorkCategory>

        <WorkProjects>
          {projects.map((el) => {
            console.log(el);
            return (
              <A href={el.githubLink} target="blank" data-type="solo">
                <ProjectImg src={el.photoLink} alt={el.title} />
                <ProjectDesc>
                  <h3>{el.title}</h3>
                  <span>{el.desc}</span>
                </ProjectDesc>
              </A>
            );
          })}
        </WorkProjects>
      </div>
    </WorkSection>
  );
};

export default Work;

const WorkSection = styled.section``;

const WorkCategory = styled.div`
  margin: 40px;
`;

const CategoryBtn = styled.button`
  border: 1px solid ${(props) => props.theme.colorDarkWhite};
  border-radius: ${(props) => props.theme.sizeBorderRadius};
  font-size: ${(props) => props.theme.fontRegular};
  padding: 8px 48px;
  position: relative;

  .selected,
  &:hover {
    background-color: ${(props) => props.theme.colorPink};
    color: ${(props) => props.theme.colorWhite};
  }

  .active,
  &:hover {
    opacity: 1;
    top: 0;
  }
`;

const CategoryCount = styled.span`
  opacity: 1;
  top: 0;
  background-color: ${(props) => props.theme.colorOrange};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  line-height: 24px;
  display: inline-block;
  position: absolute;
  top: -20px;
  right: 16px;
  opacity: 0;
  transition: all ${(props) => props.theme.animationDuration} ease-in;
`;
const WorkProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  opacity: 1;
  transition: all ${(props) => props.theme.animationDuration} ease-out;
`;

const A = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 250px;
  margin: 2px;
  background-color: ${(props) => props.theme.colorLightWhite};

  &:hover {
    opacity: 0.8;
    transform: translateY(0px);
  }
`;

const ProjectImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ProjectDesc = styled.div`
  position: absolute;
  opacity: 0;
  &:hover {
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translateY(10px);
    transition: all ${(props) => props.theme.animationDuration} ease-in;
    opacity: 0.8;
    transform: translateY(0px);

    h3 {
      color: ${(props) => props.theme.colorOrange};
      ::after {
        content: '';
        width: 25px;
        height: 2px;
        display: block;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 8px;
        background-color: var(--color-dark-white);
      }
    }
  }
`;
