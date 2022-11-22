import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import profilePhoto from '../assets/img/minwoo.jpg';
import SnsLink from './button/SnsLink';

const Home = () => {
  const [snsList, setSnsList] = useState([
    { title: 'Blog', color: '#EA5220', img: '' },
    { title: 'Github', color: '#000000', img: '' },
  ]);

  return (
    <HomeSection>
      <HomeContainer>
        <h1>안녕하세요 프론트엔드 개발자 조민우입니다.</h1>
        <p>
          새로운 지식을 추구하는 프론트엔드 개발자 조민우입니다,
          <br />
          React를 기반으로 Typescript와 Javasscript를 사용하여 웹 페이지 제작을
          하고 있습니다.
          <br />
          <br />
          대학시절 프론트엔드, 백엔드, 안드로이드 앱 개발에 대해 학습하며
          컴퓨터에 대한 기초적인 지식을 학습하여
          <br />
          다양한 팀 프로젝트를 통해 협업에 필요한 커뮤니케이션 능력과 기술을
          쌓았습니다.
          <br />
          <br />
          심화적인 내용을 학습하고 싶어서 6개월간 진행된 코드스테이츠 프론트엔드
          과정을 수료했습니다.
          <br />
          <br />
          저는 사용자 관점에서 사용하기 편한 웹 사이트를 개발하려 노력하고
          있으며,
          <br />
          어떠한 문제가 나와도 포기하지 않고 문제를 해결하기 위해 끊임없이
          지식을 탐구하여 문제를 해결하고 있습니다.
          <br />
        </p>
        <ProfileImg src={profilePhoto} alt="Minwoo's profile photo" />
      </HomeContainer>
    </HomeSection>
  );
};

export default Home;

const HomeSection = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 40px;
  padding-top: 120px;
  text-align: center;
`;

const HomeContainer = styled.div`
  .home_title,
  .home_description {
    color: ${(props) => props.theme.colorWhite};
  }
`;

const ProfileImg = styled.img`
  width: 500px;
  height: 500px;
  /* 사각형을 동그랗게 */
  border: 2px solid ${(props) => props.theme.colorLightWhite};
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
