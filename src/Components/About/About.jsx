import React from 'react'
import "./About.css";
import Oluwatobi from '../../Assets/BBTss.png';

const About = () => {
  return (
    <div id="About">
        <section className="about">
            <div className="about-img">
                <img src={Oluwatobi} alt="" />
            </div>
            <div className="about-text">
                <h2>About <span>Me</span></h2>
                <h4>Frontend Web Developer</h4>
                <p>I am a passionate frontend web developer with a strong desire to create intuitive and visually appealing user experiences. With a solid foundation in HTML, CSS, and JavaScript, I strive to build interactive websites that seamlessly blend functionality and aesthetics. I enjoy staying up-to-date with the latest web development trends and techniques, constantly refining my skills to deliver innovative and cutting-edge solutions. From crafting responsive layouts to optimizing website performance, I am committed to delivering high-quality code that brings ideas to life. With a keen eye for detail and a love for problem-solving, I take pride in collaborating with teams to transform ideas into beautifully designed, user-centric web applications. As a frontend web developer, I am driven by the endless possibilities of the digital world and dedicated to creating engaging online experiences that captivate and delight users.</p>
                {/* <button className='learn'>Learn more</button> */}
            </div>
        </section>
    </div>
  )
}

export default About