import React from 'react'
import "./Services.css";

const Services = () => {
  return (
    <div id="Services">
        <section className="service">
            <div className="head-text">
                <p>Areas of Expertise</p>
                <h2><span>My </span>Services</h2>
            </div>
            <div className="serv-boxes">
                <div className="box">
                    <div className="s-icons">
                        <i class="ri-code-s-slash-fill"></i>
                    </div>
                    <h3>Frontend Development</h3>
                    <p>I specialize in creating engaging user interfaces and seamless user experiences. <br/> With expertise in HTML, CSS, and JavaScript, I develop responsive layouts, implement interactive features, and optimize website performance. I focus on usability and aesthetics to create visually appealing interfaces. <br/>Through collaboration and attention to detail, I bring clients' visions to life.</p>
                </div>
                <div className="box">
                    <div className="s-icons">
                        <i class="ri-wordpress-fill"></i>
                    </div>
                    <h3>Wordpress Design</h3>
                    <p>I specialize in WordPress web development, creating visually appealing and functional websites. <br/>I leverage the flexibility of the WordPress framework to build responsive layouts, integrate plugins, and optimize performance. <br/> My focus is on delivering a seamless user experience that drives engagement, conversions, and business growth.</p>

                </div>
                <div className="box">
                    <div className="s-icons">
                        <i class="ri-edit-fill"></i>
                    </div>
                    <h3>Writing</h3>
                    <p>I specialize in crafting engaging and impactful content across various mediums. <br/>Whether it's informative blog posts, captivating narratives, or informative ebooks, my goal is to provide valuable content that informs, entertains, and inspires. <br/>I help in effectively communicating messages and establishing a strong online presence.</p>                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services