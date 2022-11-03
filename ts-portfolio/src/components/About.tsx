import React from 'react';
import styled from 'styled-components';
import Univ from '../assets/img/김포대학교.png';
import highShool from '../assets/img/김포제일공고.png';

const About = () => {
  return (
    <AboutSection className="section">
      <h1>About me</h1>
      <p>
        컴퓨터공학과를 진학하여 배우는 과정에서 내가 좋아하는 것은 무엇일까에
        대해 고민하던 중 <br />
        프론트엔드 개발에 흥미를 가지게 되어 HTML, CSS, JavaScript를 공부를
        시작했으며 <br />
        다양한 프레임워크 사용을 학습하고 있습니다. <br />
      </p>
      <AboutMajors>
        <div className="major">
          <MajorIcon>
            <i className="fa-brands fa-html5"></i>
          </MajorIcon>
          <MajorTitle>Front-end</MajorTitle>
          <MajorDescription>
            HTML, CSS, JavaScript
            <br />
            스택을 사용하여 웹 개발을 하고 있습니다.
          </MajorDescription>
        </div>
        <div className="major">
          <MajorIcon>
            <i className="fa-brands fa-react"></i>
          </MajorIcon>
          <MajorTitle>Framework</MajorTitle>
          <MajorDescription>
            React, Vue.js
            <br />
            사용할 수 있는 프레임워크의 폭을 <br />
            넓히고 있습니다.
          </MajorDescription>
        </div>
        <div className="major">
          <MajorIcon>
            <i className="fa-brands fa-node"></i>
          </MajorIcon>
          <MajorTitle>Back-end</MajorTitle>
          <MajorDescription>
            node.js
            <br />
            협업을 위한 백엔드의 기초 지식을 <br />
            학습하고 있습니다.
          </MajorDescription>
        </div>
      </AboutMajors>
      <div className="about_jobs">
        <Job>
          <AboutJobsLogo src={Univ} alt="김포대학교 로고" />
          <JobDescription>
            <JobName>김포대학교 소프트웨어과</JobName>
            <JobPeriod>
              2016.03 ~ 2021.02. 컴퓨터 소프트웨어과
              <br />
              2021.03 ~ 2022.02. 컴퓨터공학과(전공심화)
            </JobPeriod>
          </JobDescription>
          <AboutJobsLogo src={highShool} alt="김포제일공업고등학교 로고" />
          <JobDescription>
            <JobName>김포제일공업고등학교 전산과</JobName>
            <JobPeriod>2012.03 ~ 2015.02</JobPeriod>
          </JobDescription>
        </Job>
      </div>
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section``;

const AboutMajors = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 80px 0;
`;

const MajorIcon = styled.div`
  width: 170px;
  height: 170px;
  line-height: 170px;
  font-size: 70px;
  margin: auto;
  color: ${(props) => props.theme.colorBlue};
  border: 1px solid ${(props) => props.theme.colorBlue};
  border-radius: 50%;
  margin-bottom: 16px;

  i {
    transition: ${(props) => props.theme.animationDuration};
    &:hover {
      color: ${(props) => props.theme.colorLightBlue};
      transform: rotate(-30deg) scale(1.2);
    }
  }
`;

const MajorTitle = styled.div`
  font-size: ${(props) => props.theme.fontMedium};
`;

const MajorDescription = styled.div`
  color: ${(props) => props.theme.colorDarkGray};
`;

const AboutJobsLogo = styled.img`
  width: 100px;
  height: 100px;
`;

const Job = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JobDescription = styled.div`
  margin: 0 16px;
  text-align: left;
`;

const JobName = styled.p`
  font-size: ${(props) => props.theme.fontSmall};
  color: ${(props) => props.theme.colorLogthGray};
`;

const JobPeriod = styled.p`
  font-size: ${(props) => props.theme.fontMicro};
  color: ${(props) => props.theme.colorLogthGray};
`;
