import React from 'react'
import "./Projects.css";
import Portfolio1 from '../../Assets/port1.PNG';
import Portfolio2 from '../../Assets/port2.PNG';
import Portfolio3 from '../../Assets/port3.PNG';
import Portfolio4 from '../../Assets/port4.PNG';
import Portfolio5 from '../../Assets/port5.PNG';
import Portfolio6 from '../../Assets/port7.PNG';

const Projects = () => {
  return (
    <div id="Portfolio">
        <section className="projects">
        <div className="head-text">
            <p>Portfolio</p>
            <h2><span>Latest </span>Projects</h2>
        </div>
        <div className="port-boxes">
            <div className="p-box">
                <img src={Portfolio1} alt="" />
                <div className="on-top">
                    <h5>Candleaf</h5>
                    <p>Check out this e-commerce website for wax</p>
                    <span>Reactjs</span>
                    <a href="https://the-candleaf-project.vercel.app/">
                        <i class="ri-external-link-line"></i>                    
                    </a>
                </div>
            </div>
            <div className="p-box">
                <img src={Portfolio2} alt="" />
                <div className="on-top">
                    <h5>Pavilion</h5>
                    <p>Check out this database website for an organization</p>
                    <span>Reactjs</span>
                    <a href="https://posmon-reactjs.vercel.app/">
                        <i class="ri-external-link-line"></i>                    
                    </a>
                </div>
            </div>
            <div className="p-box">
                <img src={Portfolio3} alt="" />
                <div className="on-top">
                    <h5>Gracehands</h5>
                    <p>Check out this education website for tech</p>
                    <span>Reactjs</span>
                    <a href="https://gracehands.vercel.app/">
                        <i class="ri-external-link-line"></i>
                    </a>
                </div>
            </div>
            <div className="p-box">
                <img src={Portfolio4} alt="" />
                <div className="on-top">
                    <h5>Deliver</h5>
                    <p>Check out this delivery website</p>
                    <span>HTML</span>
                    <a href="https://deliver-landing-project.vercel.app/#">
                        <i class="ri-external-link-line"></i>
                    </a>
                </div>
            </div>
            <div className="p-box">
                <img src={Portfolio5} alt="" />
                <div className="on-top">
                    <h5>D-Express</h5>
                    <p>Check out this online pharmacy website</p>
                    <span>HTML</span>
                    <a href="https://d-express-landing-page.vercel.app/">
                        <i class="ri-external-link-line"></i>
                    </a>
                </div>
            </div>
            <div className="p-box">
                <img src={Portfolio6} alt="" />
                <div className="on-top">
                    <h5>Emailjs Form</h5>
                    <p>A contact form linked to Emailjs</p>
                    <span>Reactjs</span>
                    <a href="https://emailjs-form.vercel.app/">
                        <i class="ri-external-link-line"></i>
                    </a>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Projects