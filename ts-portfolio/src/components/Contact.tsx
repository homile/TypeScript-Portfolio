import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h1 className="contact_title">Let's talk</h1>
      <h2 className="contact_email">ssanho2@naver.com</h2>
      <div className="contact_links">
        <a href="https://github.com/homile" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fa fa-linkedinsquare"></i>
        </a>
      </div>
      <p className="contact_rights">2022 Minwoo - All rights reserved</p>
    </section>
  );
};

export default Contact;
