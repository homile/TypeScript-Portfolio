import React from 'react';
import styled from 'styled-components';
import { projectsData } from '../../data/project-data';

const ProjectCard = () => {
  return (
    <CardContainer>
      {projectsData.map((el, idx: number) => {
        return (
          <Card key={idx}>
            <ProjectName>{el.projectName}</ProjectName>
            <div className="project">
              <div className="left">
                <Img src={el.img}></Img>
              </div>
              <div className="right">
                <Contents>
                  <SpanTitle>개발기간</SpanTitle>
                  <SpanSub>{el.devPeriod}</SpanSub>
                </Contents>
                <Contents>
                  <SpanTitle>설명</SpanTitle>
                  <SpanDesc>{el.desc}</SpanDesc>
                </Contents>
                <Contents>
                  <SpanTitle>프론트엔드</SpanTitle>
                  <SpanSub>{el.front.join(', ')} </SpanSub>
                </Contents>
                <Contents>
                  <SpanTitle>백엔드</SpanTitle>
                  <SpanSub>{el.back.join(', ')}</SpanSub>
                </Contents>
                <Contents>
                  <SpanTitle>배포링크</SpanTitle>
                  <ALink href={el.link}>배포링크 이동</ALink>
                </Contents>
                <Contents>
                  <SpanTitle>코드</SpanTitle>
                  <ALink href={el.code}>Github 이동</ALink>
                </Contents>
                <Contents>
                  <SpanTitle>개발문서</SpanTitle>
                  <ALink href={el.doc}>개발문서 이동</ALink>
                </Contents>
              </div>
            </div>
          </Card>
        );
      })}
    </CardContainer>
  );
};

export default ProjectCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .right {
    display: flex;
    flex-direction: column;
    height: 530px;
  }

  .project {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Card = styled.div`
  width: 1000px;
  height: 677px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 4rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const ProjectName = styled.h2`
  margin-bottom: 2rem;
`;

const Img = styled.img`
  width: 440px;
  height: 530px;
  object-fit: fill;
  border: 1px solid black;
  border-radius: 10px;
`;

const Contents = styled.div`
  display: flex;
  margin: 1rem;
`;

const SpanTitle = styled.span`
  font-weight: bold;
  text-align: left;
  width: 6.25rem;
  line-height: 1.4rem;
`;

const SpanDesc = styled.span`
  text-align: left;
  width: 23.125rem;
  height: 9rem;
  line-height: 1.4rem;
`;

const SpanSub = styled.span`
  text-align: left;
  width: 23.125rem;
  line-height: 1.4rem;
`;

const ALink = styled.a`
  color: ${(props) => props.theme.colorBlack};
  text-align: left;
  width: 23.125rem;
`;
