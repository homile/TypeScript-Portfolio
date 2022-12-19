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
                  <PreDesc>{el.desc}</PreDesc>
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
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 4rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-height: 530px;

    @media screen and (max-width: 1000px) {
      min-height: 0;
    }
  }

  .left {
    display: flex;
    width: 100%;

    @media screen and (max-width: 1000px) {
      justify-content: center;
      align-items: center;
    }
  }

  .project {
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
  }
`;

const ProjectName = styled.h2`
  margin-bottom: 2rem;
`;

const Img = styled.img`
  width: 100%;
  max-width: 700px;
  height: 530px;
  object-fit: fill;
  border: 1px solid black;
  border-radius: 10px;

  @media screen and (max-width: 1000px) {
    height: 100%;
    max-height: 530px;
  }
`;

const Contents = styled.div`
  display: flex;
  margin: 1rem;
`;

const SpanTitle = styled.span`
  font-weight: bold;
  text-align: left;
  width: 20%;
  line-height: 1.4rem;
`;

const PreDesc = styled.pre`
  width: 80%;
  text-align: left;
  line-height: 1.4rem;
  white-space: pre-wrap;
  word-break: break-all;
`;

const SpanSub = styled.span`
  width: 80%;
  text-align: left;
  line-height: 1.4rem;
`;

const ALink = styled.a`
  width: 80%;
  color: ${(props) => props.theme.colorBlack};
  text-align: left;
  line-height: 1.4rem;
`;
