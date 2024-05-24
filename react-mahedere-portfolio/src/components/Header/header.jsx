import React from 'react'
import './header.css'
import CTA from './CTA'
import MAHI from '../../assets/mahi.png'
const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Mahedere Tebebe</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA></CTA>
        <div className="me">
          <img src={MAHI} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header