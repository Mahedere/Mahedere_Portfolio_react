import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header className="header">
      <div className="particles-background"></div>
      <div className="container header_container">
        <div className="text-container">
          <h5>Hello, I'm</h5>
          <h1>Mahedere Tebebe</h1>
          <h5 className="text-light">Web Developer</h5>
          <CTA />
        </div>
        <HeaderSocials />
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
