import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Features from '../components/home/Features';
import AboutUs from '../components/home/AboutUs';
import ContactForm from '../components/home/ContactForm';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <AboutUs />
      <ContactForm />
    </>
  );
};

export default Home;