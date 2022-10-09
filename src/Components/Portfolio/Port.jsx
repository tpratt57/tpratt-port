import React from 'react'
import './port.css'
import IMG1 from '../../assets/Desktop Screenshot 2022.10.09 - 02.00.11.45.png';
import IMG2 from '../../assets/Desktop Screenshot 2022.06.16 - 18.06.57.24.png';
import IMG3 from '../../assets/Desktop Screenshot 2022.08.11 - 21.01.54.95.png';
import IMG4 from '../../assets/Desktop Screenshot 2022.10.06 - 17.45.57.39.png';
import IMG5 from '../../assets/f186d1_8a28db63b7574babb9854cfd0805842e_mv2.gif'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Run-Buddy Fitness Tracker',
    github: 'https://github.com/tpratt57/run-buddy',
    demo: 'https://tpratt57.github.io/run-buddy/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Food-Finder Resturant Search',
    github: 'https://github.com/tpratt57/food-finder',
    demo: 'https://tpratt57.github.io/food-finder/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Components-Fluent Computer Component and Peripherial Ecommerce',
    github: 'https://github.com/Wumbo-dot/fullstack-ecommerce',
    demo: 'https://wumbo-dot.github.io/fullstack-ecommerce/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Reach-Teach a Parent/Teacher Social Network',
    github: 'https://github.com/C4RMONA/git-gud-kid',
    demo: 'https://enigmatic-sands-84780.herokuapp.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'The Image Gallery, The Art of Creating Images',
    github: '#',
    demo: '#'
  }
]

const Port = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}></img>
                  <h3>{title}</h3>
                  <div className='portfolio__item-cta'>
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  </div>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Port