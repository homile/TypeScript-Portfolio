import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  const onScroll = () => {
    setIsScroll(window.scrollY || window.pageYOffset > 0 ? true : false);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isScroll]);

  return (
    <NavbarStlye>
      <NavbarLogo>
        <a href="#home">Minwoo</a>
      </NavbarLogo>
      <UlNavbarMenu>
        <li className="navbar_menu_item active">
          <a href="#home">Home</a>
        </li>
        <li className="navbar_menu_item">
          <a href="#about">About</a>
        </li>
        <li className="navbar_menu_item">
          <a href="#skills">Skills</a>
        </li>
        <li className="navbar_menu_item">
          <a href="#projects">Projects</a>
        </li>
        <li className="navbar_menu_item">
          <a href="#contact">Contact</a>
        </li>
      </UlNavbarMenu>
      {/* <!-- Toggle button--> */}
      <Button>
        <i className="fa-solid fa-bars"></i>
      </Button>
    </NavbarStlye>
  );
};

export default Navbar;

const NavbarStlye = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colorMain};
  align-items: center;
  color: ${(props) => props.theme.colorWhite};
  padding: 16px;
  transition: ${(props) => props.theme.animationDuration} ease-in-out;
  z-index: 1;
`;

const NavbarLogo = styled.div`
  font-size: ${(props) => props.theme.fontMedium};
  font-weight: ${(props) => props.theme.weightSemiBold};
`;

const UlNavbarMenu = styled.div`
  display: flex;

  .navbar_menu_item {
    padding: 8px 12px;
    margin: 0 4px;
    /* 클릭할 수 있는 항목이라는 것을 알려주기 위함 */
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colorMain};
    border-radius: ${(props) => props.theme.sizeBorderRadius};

    &:active {
      border: 1px solid ${(props) => props.theme.colorWhite};
    }

    &:hover {
      border-color: ${(props) => props.theme.colorWhite};
      background-color: ${(props) => props.theme.colorBlue};
    }
  }
`;

const Button = styled.button`
  /* 투명도만 적용하면 클릭이 됨 */
  display: none;
  position: absolute;
  top: 24px;
  right: 32px;
  font-size: 24px;
  color: ${(props) => props.theme.colorWhite};
`;
