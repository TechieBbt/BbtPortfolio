import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <div>
        <nav>
            <div class="nav__content">
                <div class="logo"><a href="/">BBT</a></div>
                <label for="check" class="checkbox">
                <i class="ri-menu-line"></i>
                </label>
                <input type="checkbox" name="check" id="check" />
                <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Services">My Services</a></li>
                <li><a href="#Portfolio">Portfolio</a></li>
                <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header