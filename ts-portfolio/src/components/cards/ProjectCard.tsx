import React from 'react';
import styled from 'styled-components';

interface DataType {
  projectName: string;
  devPeriod: string;
  img: string;
  desc: string;
  front: string[];
  back: string[];
  link: string;
  code: string;
  doc: string;
}

const projectsData: DataType[] = [
  {
    projectName: 'ANBD(아나바다)',
    devPeriod: '2022.09 ~ 2022.10',
    img: 'https://user-images.githubusercontent.com/56163157/207810195-2e45842c-7422-4751-b1f4-a37d93ba8a4a.gif',
    desc: '아나바다는 아껴쓰고 나눠쓰고 바꿔쓰고 다시쓰자의 줄임말이며 집에서 사용하지 않는 레저용품을 유저간 채팅을 통해 대여를 해주는 서비스입니다.',
    front: [
      'JavaScript',
      'React',
      'Redux',
      'StyledComponents',
      'React Hook-form',
      'Stomp',
      'AWS',
    ],
    back: ['Java', 'Spring', 'JWT', 'MySQL', 'Stomp', 'AWS'],
    link: 'https://d1chxyssw587bm.cloudfront.net/',
    code: 'https://github.com/homile/seb39_main_054',
    doc: 'https://www.notion.so/cho-min-woo/SEB_main_project-71fbbc3952ae4b0da540a0b2b84b1537',
  },
];

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
                  <SpanDesc>{el.devPeriod}</SpanDesc>
                </Contents>
                <Contents>
                  <SpanTitle>설명</SpanTitle>
                  <SpanDesc>{el.desc}</SpanDesc>
                </Contents>
                <Contents>
                  <SpanTitle>프론트엔드</SpanTitle>
                  <SpanDesc>{el.front}</SpanDesc>
                </Contents>
                <Contents>
                  <SpanTitle>백엔드</SpanTitle>
                  <SpanDesc>{el.back}</SpanDesc>
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
  display: flex;
  font-weight: bold;
  width: 100px;
`;

const SpanDesc = styled.span``;

const ALink = styled.a`
  color: ${(props) => props.theme.colorBlack}; ;
`;
