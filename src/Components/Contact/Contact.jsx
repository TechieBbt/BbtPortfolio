import React, {useRef, useState} from 'react'
import "./Contact.css";
import emailjs from '@emailjs/browser';


const Result = () => {
    return (
        <p>Your message has been successfully sent. We will contact you soon.</p>
    )
}

const Contact = () => {
    const [result, showResult] = useState (false, true)
    const Form = useRef ()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_bruob4g", "template_gjcikvm", Form.current, "pguG71KOWqhnqdIXK")
        .then(
            (result) => {
                console.log(result.text);
                console.log("Your message has been successfully sent. We will contact you soon.")
            },
            (error) => {
                console.log(error.text);
            }
        );
        Form.current.reset();
        showResult(true);
        };
        setTimeout(() => {
            showResult(false);
        },5000 );
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
                    <a href="#0"><i class="ri-github-fill"></i></a>
                    <a href="#0"><i class="ri-linkedin-line"></i></a>
                    <a href="#0"><i class="ri-twitter-line"></i></a>
                    <a href="#0"><i class="ri-instagram-line"></i></a>
                </div>
            </div>
            <div className="c-form">
                <form action="" ref={Form} onSubmit={sendEmail}>
                    <input type="text" name="User_name" placeholder='Your Name' required />
                    <input type="email" name="User_email" placeholder='Your Email Address' required />
                    <input type="phone" name="User_phone" placeholder='Your Mobile Number' required />
                    <textarea name="User_message" id="" cols="35" rows="10" placeholder='How can I help you?' required></textarea>
                    <input type="submit" Value="Send Message" className="submit" required />
                    <div className="row"> {result ? <Result/> : null} </div>                
                </form>
            </div>
        </section>
    </div>
  )
}

export default Contact