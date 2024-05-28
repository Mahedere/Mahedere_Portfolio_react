import React from 'react'
import './footer.css' 
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
      <a href="https://www.linkedin.com/in/mahedere-tebebe/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Mahedere" target="_blank"><FaGithub/></a>
      </div>
    </footer>
  )
}

export default Footer
