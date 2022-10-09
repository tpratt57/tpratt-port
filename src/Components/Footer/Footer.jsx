import React from 'react';
import './footer.css';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Trevor Pratt</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.co.'> <BsFacebook/> </a>
        <a href='https://instagram.com'> <BsInstagram/> </a>
        <a href='https://twitter.com'> <BsTwitter/> </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Trevor Pratt, All Rights Reserved</small>

      </div>
    </footer>
  )
}

export default Footer