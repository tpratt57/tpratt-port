import React from 'react';
import { BsCheck } from 'react-icons/bs';
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='.container services__container'>
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className='service'>
          <div className="service__head">
            <h3>Filler</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF WHATEVER THIS IS GONNA BE */}
      </div>

    </section>
  )
}

export default Services