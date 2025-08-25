import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className="Footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img  src={assets.logo} alt=""></img>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ad voluptatum reiciendis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit natus ratione quis soluta nam alias ullam reiciendis id laborum repudiandae.</p>
   <div className="footer-socia-icon">
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.twitter_icon} alt="" />
    <img src={assets.linkedin_icon}alt="" />


   </div>
                </div>

                <div className="footer-content-center">
<h2>COMPANY</h2>
<ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Privacy policy</li>
</ul>
                       </div>

                    <div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+19 789840531</li>
    <li>contact@tomato.com</li>
</ul>
            </div>
        </div>
      <hr/>
      <p className="footer-copyright">Copyright 2025 Tomato.com</p>
    </div>
  )
}

export default Footer
