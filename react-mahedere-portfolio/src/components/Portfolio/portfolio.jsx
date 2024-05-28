import React from 'react'
import './portfolio.css'
const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <h3>CNDA</h3>
            <a href="https://github.com/Mahedere/CNDA" className='btn'target='blank'>Github</a>
            <a href="https://cnda.com.et/" className='btn btn-primary'target='blank'>Live Demo</a>
          </div>
          <div className="portfolio_item-image">
            <h3>Manage landing page</h3>
            <a href="https://github.com/Mahedere/todo-list-app" className='btn'target='blank'>Github</a>
            <a href="https://manage-landing-page-woad-three.vercel.app/" className='btn btn-primary'target='blank'>Live Demo</a>
          </div>
          <div className="portfolio_item-image">
            <h3>DrumKit</h3>
            <a href="https://github.com/Mahedere/manage-landing-page" className='btn'target='blank'>Github</a>
            <a href="mahidrumkit.netlify.app/" className='btn btn-primary'target='blank'>Live Demo</a>
          </div>
          <div className="portfolio_item-image">
            <h3>Jebena Game</h3>
            <a href="https://github.com/Mahedere/Jebena_game" className='btn'target='blank'>Github</a>
            <a href="jebena-game.vercel.app" className='btn btn-primary'target='blank'>Live Demo</a>
          </div>

        </article>
      </div>
    </section>
  )
}

export default portfolio