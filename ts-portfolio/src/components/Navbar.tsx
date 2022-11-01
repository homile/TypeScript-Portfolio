import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/favicon.png';

const Navbar = () => {
  return (
    <NavbarStlye>
      <div className="navbar_logo">
        <Img src={logo} alt="logo" />
        <a href="#">Minwoo</a>
      </div>
      <ul className="navbar_menu">
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
          My work
        </li>
        <li className="navbar_menu_item" data-link="#testimonials">
          Testimonial
        </li>
        <li className="navbar_menu_item" data-link="#contact">
          Contact
        </li>
      </ul>
      {/* <!-- Toggle button--> */}
      <button className="navbar_toggle-btn">
        <i className="fa-solid fa-bars"></i>
      </button>
    </NavbarStlye>
  );
};

export default Navbar;

const NavbarStlye = styled.nav`
  position: fixed;
  width: 100%;
  /* flex박스로 선정 */
  display: flex;
  /* 중심축에서 정렬 */
  justify-content: space-between;
  /* 나만의 색상으로 변경할 것!!!!!!!!! */
  background-color: transparent;
  /* 수직 정렬 */
  align-items: center;
  color: var(--color-white);
  padding: 16px;
  transition: var(--animation-duration) ease-in-out;
  z-index: 1;
`;

const Img = styled.img`
  height: 20vh;
  width: 20vw;
`;
