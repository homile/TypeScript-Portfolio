import React from 'react';
import styled from 'styled-components';
import {
  kimpoUniv,
  kimpoHigh,
  codeStates,
} from '../../assets/img/abouts/index';

interface educationType {
  title: string;
  date: string;
  desc: string[];
  src: string;
  width: string;
  height: string;
}

const education: educationType[] = [
  {
    title: '코드스테이츠 (CodeStates)',
    date: '2022. 04 ~ 2022. 10. 프론트엔드 과정',
    desc: [
      '프론트엔드 개발에 대한 HTML, CSS, JavaScript, React 지식 학습',
      'Solo Project를 통한 React 개발 경험',
      '팀 프로젝트로 백엔드, 프론트엔드 간의 협업 개발 경험 및 팀장으로 문서 작성, 일정산출 및 조율',
      '코드스테이츠 내 스터디로 다양한 기술스택 경험',
    ],
    src: `${codeStates}`,
    width: '170px',
    height: '40px',
  },
  {
    title: '김포대학교 컴퓨터공학',
    date: '2021. 03 ~ 2022. 02. 컴퓨터공학과   2016. 03 ~ 2021. 02. 컴퓨터 소프트웨어과',
    desc: [
      'Java, Spring, Android Studio 통한 앱, 웹 개발 학습 및 구현',
      'HTML, CSS, JavaScript, Bootstrap에 대한 기초 학습, 팀 프로젝트 진행 (게임 커뮤티니 사이트)',
      'Python으로 사물인터넷(IoT), 인공지능(AI/ML)에 대한 학습진행',
      '졸업작품으로 사물인터넷과 웹 페이지를 연동한 반려동물 사료지급기 프로젝트 진행',
    ],
    src: `${kimpoUniv}`,
    width: '120px',
    height: '120px',
  },
  {
    title: '김포제일공업 고등학교 전자계산기과',
    date: '2012. 03 ~ 2015. 02. 전자계산기과',
    desc: [
      'C, C++, C# 개발언어를 통해 코딩에 대한 기초지식 학습',
      '컴퓨터 구조 기초 학습',
      '전자 회로 구성 및 구현 학습',
      '포토샵, 일러스트, 인디자인으로 디자인에 대한 기술 습득',
    ],
    src: `${kimpoHigh}`,
    width: '120px',
    height: '120px',
  },
];

const AboutCard = () => {
  return (
    <>
      {education.map((el, idx: number) => {
        return (
          <CardContainer key={idx}>
            <CardContent>
              <ImgDiv>
                <EduImg
                  src={el.src}
                  width={el.width}
                  height={el.height}
                  alt={`${el.title} 로고`}
                />
              </ImgDiv>
              <Content>
                <AboutTitle>{el.title}</AboutTitle>
                <Date>{el.date}</Date>
                <ul>
                  {el.desc.map((desc, idx) => {
                    return <Li key={idx}>{desc}</Li>;
                  })}
                </ul>
              </Content>
            </CardContent>
          </CardContainer>
        );
      })}
    </>
  );
};

export default AboutCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 1rem 0;
`;

const CardContent = styled.div`
  display: flex;
  width: 55.375rem;
  padding: 1rem;

  &:hover {
    transition: all 0.5s linear;
    transform: scale(1.1);
    border: 1px solid ${(props) => props.theme.colorLightBlue};
    border-radius: ${(props) => props.theme.sizeBorderRadius};
  }
`;

const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  margin: 0 2rem;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const EduImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutTitle = styled.h2`
  font-weight: ${(props) => props.theme.weightBold};
  font-size: ${(props) => props.theme.fontMedium};
  text-align: left;
`;

const Date = styled.span`
  text-align: left;
  font-size: ${(props) => props.theme.fontSmall};
  margin-bottom: 1rem;
`;

const Li = styled.li`
  text-align: left;
  list-style: disc;
  list-style-position: inside;
  font-size: ${(props) => props.theme.fontSmall};
  margin: 0.2rem 0;
  line-height: 1.2rem;
  text-indent: -20px;
  padding-left: 20px;
`;
