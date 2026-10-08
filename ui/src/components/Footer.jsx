import React from 'react'
import { Link } from 'react-router-dom'
import { FaCircleCheck } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <div className="row footer ">
      <div className="col-sm-3  footercol1">
        <h4><FaCircleCheck className='text-color1'/> Zen<b className='text-color1'>tora</b></h4>
       <p className='footerp pt-3'>Zentora — Where Talent Meets Opportunity. 
        The future of freelancing is here. Connect. Collaborate. Earn.
        <br /> <br />
        Add: 70-80 Upper St Norwich NR2
        <br />
        Call: +01 123 5641 231
        <br />
        Email: hello@zentora.com
        </p>

      </div>
      <div className="col-sm-3 mt-5 footercol2">
        <h4>Zentora Platform</h4>
         <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-3">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about-us">
           About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
          Browse Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
         Find Freelancers
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
           Post a Project
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
        How It Works
          </Link>
        </li>
       <li className="nav-item">
          <Link className="nav-link" to="#">
          Success Stories Login
          </Link>
        </li>      
      </ul>
      </div>
      <div className="col-sm-3 mt-5 footercol2">
        <h4>Links</h4>
         <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-3">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about-us">
          Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
          Gallery
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
        News & Articles
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
         FAQâ€™s
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
       Coming Soon
          </Link>
        </li>
       <li className="nav-item">
          <Link className="nav-link" to="#">
         Sign In/Registration
          </Link>
        </li>
      </ul>
      </div>
      <div className="col-sm-3 mt-5 footercol3">
        <h4>Contacts</h4>
        <p className='pt-4'>Enter your email address to register to our newsletter subscription</p>
   <div className='input-group'> <input type="email" className='form-control w-50' />
   <button className='btn btn-info text-light ms-2 '>Subscribe</button></div> 
      <div className='footer-icons'>
        <FaFacebookF className='fb'/> <FaLinkedinIn className='text-primary'/> <FaInstagram className='insta'/> <IoLogoTwitter className='text-info'/> <FaYoutube className='text-danger'/>
      </div>
      </div>
<div className='text-center footer-bottom mt-5 mb-4'>
  Copyright 2026 
  <span className='text-color2'> Zentora</span> — Hire. Work. Grow. All Rights Reserved
</div>
    </div>
    </>
  )
}

export default Footer
