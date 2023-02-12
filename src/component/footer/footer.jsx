import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {SiFrontendmentor} from 'react-icons/si'


const Footer = () => {
  return (
       <footer>
         <ul className="permalinks">
           <li><a href="#">Home</a></li>
           <li><a href="#about">About</a></li>
           <li><a href="#experience">Experience</a></li>
           <li><a href="#services">services</a></li>
           <li><a href="#portfolio">Portfolio</a></li>
         </ul>
         <div className="footer__socials">
    
           <a href="https://www.frontendmentor.io/profile/lakshithaperera"  target='_blank'><SiFrontendmentor /></a>
  
         </div>

         <div className="footer__copyright">
           <small>developed by H.P.Lakshitha Perera | &copy; 2023.All right reserved</small>
         </div>
       </footer>
  )
}

export default Footer