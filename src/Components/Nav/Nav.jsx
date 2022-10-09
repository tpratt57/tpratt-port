import React from 'react'
import './nav.css';
import { AiOutlineUser, AiTwotoneHome } from 'react-icons/ai';
import { MdWork, MdContactMail } from 'react-icons/md';
import { RiServiceLine } from 'react-icons/ri';
import { useState } from 'react';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiTwotoneHome /> </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser /> </a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <MdWork /> </a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}> <RiServiceLine /> </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <MdContactMail /> </a>
    </nav>
  )
}

export default Nav