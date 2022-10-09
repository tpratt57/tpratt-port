import React, { useRef } from 'react'
import { MdEmail } from 'react-icons/md'
import { FaFacebookMessenger } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs'
import emailjs from '@emailjs/browser'
import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wejkpqj', 'template_04iv3re', form.current, 'ueTP7YXhqILNkKmr9')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>pratttrevor79@gmail.com</h5>
            <a href='mailto:pratttrevor79@gmail.com' target='_blank'>Send a Message!</a>
          </article>
          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>Trevor Andrew</h5>
            <a href='https://m.me/profile.php?id=100010076440457' target='_blank'>Send a Message!</a>
          </article>
          <article className='contact__option'>
            <BsTelephoneFill className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>210-400-4463</h5>
            <a href='tel:2104004463'>Give me a call!</a>
          </article>
        </div>
      </div>
      {/* End of Contact Options */}
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name' required />
        <input type='email' name='email' placeholder='Your Email' required/>
        <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </section>
  )
}

export default Contact