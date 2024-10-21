import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            "Welcome to our food delivery website, where delicious meals from
            your favorite local restaurants are just a few clicks away. We offer
            a wide variety of cuisines, from quick snacks to hearty dinners, all
            delivered straight to your door. With easy navigation, secure
            payments, and real-time order tracking, satisfying your hunger has
            never been more convenient. Explore our menu, place your order, and
            enjoy fresh, quality food whenever you want!"
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+94 7654952706</li>
            <li>dubeyayush09@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy;  - All Right Reserved.
      </p>
    </div>
  );
}

export default Footer