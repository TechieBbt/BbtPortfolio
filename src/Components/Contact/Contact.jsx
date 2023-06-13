import React from 'react'
import "./Contact.css";

const Contact = () => {
  return (
    <div className='contactside' id="Contact">
        <section className='contact'>
            <div className="con-text">
                <h4>Do you have a project in mind?</h4>
                <h2>Contact <span>Me!</span></h2>
                <p>I am a skilled and creative web developer with a passion for creating beautiful, responsive, and user-friendly websites. </p>
                <div className="list">
                    <li><a href="#0">+2347019119024</a></li>
                    <li><a href="#0">bablotobi@gmail.com</a></li>
                    <li><a href="#0">Like Share and Subscribe</a></li>
                </div>
                <div className="c-icons">
                    <a href="#0"><i class="ri-linkedin-line"></i></a>
                    <a href="#0"><i class="ri-twitter-line"></i></a>
                    <a href="#0"><i class="ri-instagram-line"></i></a>
                </div>
            </div>
            <div className="c-form">
                <form action="">
                    <input type="text" placeholder='Your Name' required />
                    <input type="email" placeholder='Your Email Address' required />
                    <input type="email" placeholder='Your Mobile Number' required />
                    <textarea name="" id="" cols="35" rows="10" placeholder='How can I help you?' required></textarea>
                    <input type="submit" Value="Send Message" className="submit" required />
                </form>
            </div>
        </section>
    </div>
  )
}

export default Contact