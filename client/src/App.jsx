import React from 'react';
import Header from './Components/Header/Header.jsx';
import Nav from './Components/Nav/Nav.jsx';
import About from './Components/About/About.jsx';
import Experience from './Components/Experience/Expierence.jsx';
import Services from './Components/Services/Services.jsx';
import Port from './Components/Portfolio/Port.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';

const app = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Port />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default app;