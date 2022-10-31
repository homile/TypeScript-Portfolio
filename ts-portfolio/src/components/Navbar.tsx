import React from 'react';

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="navbar_logo">
        <img
          className="logo"
          src="imgs/favicon.png"
          height="20vh"
          width="20vw"
        />
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
    </nav>
  );
};

export default Navbar;
