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
                <Contents>개발기간</Contents>
                <Contents>설명</Contents>
                <Contents>프론트엔드</Contents>
                <Contents>백엔드</Contents>
                <Contents>배포링크</Contents>
                <Contents>코드</Contents>
                <Contents>개발기간</Contents>
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
  }

  .project {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Card = styled.div``;

const ProjectName = styled.h2``;

const Img = styled.img``;

const Contents = styled.span``;
