import React from 'react'
import './experience.css'
import { BsFillCheckCircleFill } from 'react-icons/bs';
const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_frontend">
        <div className="experience_fronend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillCheckCircleFill/>
              <h4>Html</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience