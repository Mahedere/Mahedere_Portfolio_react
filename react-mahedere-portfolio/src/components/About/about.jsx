import React from 'react'
import './about.css'
import MAHI from '../../assets/mahi.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={MAHI} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
          <article className="about_card">
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon"/>
              <h5>Clients</h5>
              <small>3</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon"/>
              <h5>Projects</h5>
              <small>10 completed</small>
            </article>
          </div>
          <p>I'm MahedLet's connect and bring your digital vision to life!</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About