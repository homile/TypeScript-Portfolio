import React from 'react';
import styled from 'styled-components';
import profilePhoto from '../assets/img/minwoo.jpg';
import homeImg from '../assets/img/home-background.png';

const Home = () => {
  return (
    <HomeSection homeImg={homeImg}>
      <HomeContainer>
        <ProfileImg src={profilePhoto} alt="Minwoo's profile photo" />
        <h1 className="home_title">
          Hello<br></br>I'm Minwoo Cho
        </h1>
        <h2 className="home_description">끊임없이 성장하는 front-end 개발자</h2>
        <HomeContact data-link="#contact">Contact Me</HomeContact>
      </HomeContainer>
    </HomeSection>
  );
};

export default Home;

const HomeSection = styled.section<{ homeImg: string }>`
  background: url(${(props) => props.homeImg}) center/cover no-repeat;
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
  width: 250px;
  height: 250px;
  /* 사각형을 동그랗게 */
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colorLightWhite};
`;

const HomeContact = styled.button`
  color: ${(props) => props.theme.colorWhite};
  font-size: ${(props) => props.theme.fontRegular};
  font-weight: ${(props) => props.theme.weightBold};
  margin: 24px;
  padding: 8px 12px;
  border: 2px solid ${(props) => props.theme.colorWhite};
  border-radius: 4px;

  &:hover{
    background-color: ${(props) => props.theme.colorBlue};
  }
`;
