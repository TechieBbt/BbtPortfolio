import React from 'react'
import Oluwatobi from '../../Assets/Oluwabbt.png';
import "./Hero.css";

const Hero = () => {
  return (
    <div id="Home">
        <section class="section">
            <div class="section__container">
                <div class="content">
                <p class="subtitle">HELLO</p>
                <h1 class="title">
                    I'm <span>Oluwatobi,<br />a</span> Web Developer
                </h1>
                <p class="description">
                    Welcome to my web developer portfolio! I'm Oluwatobi Babalola, a skilled and
                    creative web developer with a passion for creating beautiful,
                    responsive, and user-friendly websites. I've worked on a variety of
                    web projects, ranging from personal blogs to e-commerce platforms.
                </p>
                <div class="action__btns">
                    <button class="hire__me">Hire Me</button>
                    <button class="portfolio">Portfolio</button>
                </div>
                </div>
                <div class="image">
                <img src={Oluwatobi} alt="profile" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero