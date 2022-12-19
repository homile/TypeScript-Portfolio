import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar = () => {
  const LinkData = ['home', 'about', 'skills', 'projects', 'contact'];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarStlye>
      <NavbarLogo>
        <a href="#home">Minwoo</a>
      </NavbarLogo>
      <UlNavbarMenu>
        {LinkData.map((el, idx) => {
          return (
            <li key={idx} className="navbar_menu_item">
              <a href={`#${el}`}>{el}</a>
            </li>
          );
        })}
      </UlNavbarMenu>
      {/* <!-- Toggle button--> */}
      <Menu
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <i className="fa-solid fa-bars"></i>
      </Menu>
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
    width: 100%;
  }

  a {
    display: block;
    padding: 6px 12px;
    margin: 0 4px;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colorMain};
    border-radius: ${(props) => props.theme.sizeBorderRadius};

    &:hover {
      border-color: ${(props) => props.theme.colorWhite};
      background-color: ${(props) => props.theme.colorBlue};
    }
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Menu = styled.div`
  /* 투명도만 적용하면 클릭이 됨 */
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    font-size: 24px;
    color: ${(props) => props.theme.colorWhite};
    cursor: pointer;
  }
`;
