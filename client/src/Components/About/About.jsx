import React from 'react'
import './about.css';
import ME from '../../assets2/me-about.jpg'
import { FaAward, FaUsers } from 'react-icons/fa'
import { ImFolderPlus } from 'react-icons/im'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='about__container'>
        <div className='about__me'>
          <div className="about__me-img">
            <img src={ME} alt='About Image' />
          </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small> 6 Months </small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small> 1 Client </small>
            </article>

            <article className='about__card'>
              <ImFolderPlus className='about__icon' />
              <h5> Projects </h5>
              <small> 4 Completed Projects </small>
            </article>

            <p>
              Amet luctus venenatis lectus magna fringilla urna.
              Hendrerit dolor magna eget est lorem ipsum dolor sit.
              Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere.
              Eu ultrices vitae auctor eu augue.
              A scelerisque purus semper eget duis.
              Libero nunc consequat interdum varius sit amet.
              Risus at ultrices mi tempus imperdiet nulla malesuada.
              Ultrices sagittis orci a scelerisque purus.
              Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum.
              Id velit ut tortor pretium viverra.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About