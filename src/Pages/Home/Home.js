import React from 'react'
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Services from "../../Components/Services/Services";
import Projects from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";
import End from "../../Components/End/End";
import { BrowserRouter } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
        <End/>
      </BrowserRouter>
    </div>
  )
}

export default Home