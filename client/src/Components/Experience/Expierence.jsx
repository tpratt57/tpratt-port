import React from 'react'
import { GoVerified } from 'react-icons/go'
import './expierence.css';

const Expierence = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container expierience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='expierience__details'> <GoVerified className='expierence__details-icons'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='expierience__details'> <GoVerified className='expierence__details-icons'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='expierience__details'> <GoVerified className='expierence__details-icons'/>
            <div>
              <h4>JS</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='expierience__details'> <GoVerified className='expierence__details-icons'/>
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='expierience__details'> <GoVerified className='expierence__details-icons'/>
            <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>

        <div className='experiebce__backend'>
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='expierience__details'> <GoVerified className='expierence__details-icons'/>
            <div>
              <h4>Node.Js</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='expierience__details'> <GoVerified className='expierence__details-icons'/>
            <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='expierience__details'> <GoVerified className='expierence__details-icons'/>
            <div>
              <h4>NoSQL</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='expierience__details'> <GoVerified className='expierence__details-icons'/>
            <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='expierience__details'> <GoVerified className='expierence__details-icons'/>
            <div>
              <h4>Mongoose</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expierence