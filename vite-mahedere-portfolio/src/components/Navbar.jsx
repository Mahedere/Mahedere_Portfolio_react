import "./navbar/navbar.scss"
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="social">
      <a href="https://www.linkedin.com/in/mahedere-tebebe/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Mahedere" target="_blank"><FaGithub/></a>
      </div>
    </div>
  )
}

export default Navbar
