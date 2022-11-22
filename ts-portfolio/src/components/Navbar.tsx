import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavbarStlye>
      <NavbarLogo>
        <Link to="#">Minwoo</Link>
      </NavbarLogo>
      <UlNavbarMenu>
        <li className="navbar_menu_item active" data-link="#home">
          Home
        </li>
        <li className="navbar_menu_item" data-link="#about">
          About
        </li>
        <li className="navbar_menu_item" data-link="#skills">
          Skills
        </li>
        <li className="navbar_menu_item" data-link="#work">
          Projects
        </li>
        <li className="navbar_menu_item" data-link="#contact">
          Contact
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
