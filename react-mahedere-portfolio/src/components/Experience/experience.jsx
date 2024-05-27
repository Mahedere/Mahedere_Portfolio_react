import React from 'react'
import './experience.css'
import { BsFillCheckCircleFill } from 'react-icons/bs';
const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience">
        <div className="experience_frontend">
          <div className="experience_content">
            <article className="experience_details">
              <BsFillCheckCircleFill/>
              <div>
              <h4>Html</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill/>
              <div>
              <h4>Css</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill/>
              <div>
              <h4>Javascript</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill/>
              <div>
              <h4>ReactJs</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill/>
              <div>
              <h4>TailwindCss</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillCheckCircleFill/>
              <div>
              <h4>NodeJs</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience