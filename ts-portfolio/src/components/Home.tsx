import React from 'react';
import styled from 'styled-components';
import profilePhoto from '../assets/img/minwoo.jpg';
import homeImg from '../assets/img/home-background.png';

const Home = () => {
  return (
    <HomeSection homeImg={homeImg}>
      <HomeContainer>
        <ProfileImg src={profilePhoto} alt="Minwoo's profile photo" />
      </HomeContainer>
    </HomeSection>
  );
};

export default Home;

const HomeSection = styled.section<{ homeImg: string }>`
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
