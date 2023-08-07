import React, { useEffect, useState } from 'react'
import Oluwatobi from '../../Assets/newbbt.png';
import "./Hero.css";

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
  const fullText = 'Web Developer';

  useEffect(() => {
    let textIndex = 0;
    let animationId;

    const typeAnimation = () => {
      setDisplayText(fullText.slice(0, textIndex));
      textIndex++;

      if (textIndex <= fullText.length) {
        animationId = setTimeout(typeAnimation, 200);
      } else {
        // Reset textIndex after animation is complete to create an infinite loop
        textIndex = 0;
        animationId = setTimeout(typeAnimation, 200);
      }
    };

    typeAnimation();

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(animationId);
  }, []);

  return (
    <div id="Home">
        <section class="section">
            <div class="section__container">
                <div class="floating-shapes">
                <div class="shape shape1"></div>
                <div class="shape shape2"></div>
                <div class="shape shape3"></div>
                </div>

                <div class="content">
                <p class="subtitle">HELLO</p>
                <h1 class="title">
                    I'm <span class="diff">Oluwatobi,<br /></span> a <span class="animate">{displayText}</span>
                </h1>
                <p class="description">
                    Welcome to my web developer portfolio! I'm Oluwatobi Babalola, a skilled and
                    creative web developer with a passion for creating beautiful,
                    responsive, and user-friendly websites. I've worked on a variety of
                    web projects, ranging from personal blogs to e-commerce platforms.
                </p>
                <div class="action__btns">
                    <button class="hire__me"><a href="#Contact"  style={{color: 'inherit', textDecoration: 'none'}}>Hire Me</a></button>
                    <button class="portfolio"><a href="#Portfolio" style={{color: 'inherit', textDecoration: 'none'}}>Portfolio</a></button>
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