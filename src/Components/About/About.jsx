import React from 'react'
import "./About.css";
import Oluwatobi from '../../Assets/bbtnew.png';

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
                <p>I am a passionate frontend web developer with a strong desire to create intuitive and visually appealing user experiences. With a solid foundation in <b>HTML, CSS, and JavaScript, & React</b>, I strive to build interactive websites that seamlessly blend functionality and aesthetics. I enjoy staying up-to-date with the latest web development trends and techniques, constantly refining my skills to deliver innovative and cutting-edge solutions.</p>
                {/* <button className='learn'>Learn more</button> */}
            </div>
        </section>
    </div>
  )
}

export default About