import React from 'react';
import styled from 'styled-components';
import SnsLink from './button/SnsLink';

const Footer = () => {
  return (
    <FooterSection>
      <SnsLink></SnsLink>
      <StyledP>© 2022. Cho Min Woo. All rights reserved.</StyledP>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 120px;
  text-align: center;
  background: ${(props) => props.theme.colorDarkWhite};
  padding: 1rem 0;
`;

const StyledP = styled.p`
  padding-top: 1rem;
  font-weight: ${(props) => props.theme.weightSemiBold};
`;
