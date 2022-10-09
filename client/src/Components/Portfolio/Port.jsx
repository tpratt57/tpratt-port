import React from 'react'
import './port.css'
import IMG1 from '../../assets/Desktop Screenshot 2022.10.09 - 02.00.11.45.png';
import IMG2 from '../../assets/Desktop Screenshot 2022.06.16 - 18.06.57.24.png';
import IMG3 from '../../assets/Desktop Screenshot 2022.08.11 - 21.01.54.95.png';
import IMG4 from '../../assets/Desktop Screenshot 2022.10.06 - 17.45.57.39.png';

const Port = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={IMG1} alt='run-buddy' />
          </div>
          <h3>This is a portfolio item title</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/tpratt57/run-buddy' className='btn' target='_blank'>Github</a>
              <a href='https://tpratt57.github.io/run-buddy/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={IMG2} alt='Food-Finder' />
          </div>
          <h3>This is a portfolio item title</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/tpratt57/food-finder' className='btn' target='_blank'>Github</a>
              <a href='https://tpratt57.github.io/food-finder/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={IMG3} alt='Components-Fluent' />
          </div>
          <h3>This is a portfolio item title</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/Wumbo-dot/fullstack-ecommerce' className='btn' target='_blank'>Github</a>
              <a href='https://wumbo-dot.github.io/fullstack-ecommerce/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={IMG4} alt='Reach-Teach' />
          </div>
          <h3>This is a portfolio item title</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/C4RMONA/git-gud-kid' className='btn' target='_blank'>Github</a>
              <a href='https://enigmatic-sands-84780.herokuapp.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

      </div>
    </section>
  )
}

export default Port