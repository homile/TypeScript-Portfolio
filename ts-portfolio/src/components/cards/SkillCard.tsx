import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  HTML,
  CSS,
  Javascript,
  Typescript,
  ReactJS,
  Next,
  Redux,
  StyledComponents,
} from '../../assets/img/skills/front/index';
import { Java, Python, Spring } from '../../assets/img/skills/back/index';
import {
  AWS,
  Firebase,
  Git,
  Github,
  Jira,
  Slack,
  Notion,
  Vercel,
} from '../../assets/img/skills/deploy-etc/index';
import { RootState } from '../../redux/store';

const skillsData = [
  [HTML, CSS, Javascript, Typescript, ReactJS, Next, Redux, StyledComponents],
  [Java, Python, Spring, Firebase],
  [AWS, Vercel],
  [Git, Github, Notion, Jira, Slack],
];

const SkillCard = () => {
  const selectSkill: number = useSelector(
    (state: RootState) => state.skillReducer.skillSelected,
  );

  return (
    <CardContainer>
      {skillsData[selectSkill].map((el, idx: number) => {
        return (
          <Card key={idx}>
            <CardImg src={el}></CardImg>
          </Card>
        );
      })}
    </CardContainer>
  );
};

export default SkillCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 100px;
  height: 100px;
  margin: 1rem;
  transition: all 0.3s linear;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 767px) {
    width: 80px;
    height: 80px;
  }
`;

const CardImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;

  @media screen and (max-width: 767px) {
    width: 80px;
    height: 80px;
  }
`;
