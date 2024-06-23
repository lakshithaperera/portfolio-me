import React from 'react'
import './services.css'
import { motion } from 'framer-motion'


const Services = () => {
  return (
   <motion.section id='services'
   initial={{opacity:0}}
   whileInView={{ opacity: 1 }}
   transition={{delay:0.2, type: "tween", duration:1.5}}
   >
     <h5>What I Offer</h5>
     <h2>Services</h2>

     <motion.div className="container services__container"
         initial={{ opacity: 0, y: -20 }}
         whileInView={{ opacity: 1, y:0}}
         transition={{delay:0.1, duration:1}}
     >
      
       <div className="s-box">
        <div className="left">Front-end Development</div>
        <div className="right">I create visually appealing, user-friendly websites that function seamlessly, enhancing your brand's online presence effectively.</div>
       </div>

       <div className="s-box">
        <div className="left">React.js framework</div>
        <div className="right">Need dynamic single-page applications or intricate enterprise solutions? I create cutting-edge solutions that boost user engagement and drive business growth.</div>
       </div>

       <div className="s-box">
        <div className="left">MERN Stack</div>
        <div className="right">Whether you need a data-driven app or a real-time collaboration tool, I'll create something that makes your work easier and more innovative.</div>
       </div>

       <div className="s-box">
        <div className="left">Custom WordPress</div>
        <div className="right">Whether it's selling stuff online or sharing stories, I'll build a custom wordpress website that attracts visitors and turns them into fans</div>
       </div>
          
     </motion.div>
     <article className="contact__option">
          <a href="https://www.peopleperhour.com/freelancer/technology-programming/lakshitha-perera-full-stack-developer-zzxnnzqw" target='_blank'  rel="noreferrer">
          <div className="pph-logo">
            
          </div>
          <h4>Contact Me on peopleperhour </h4>
          </a>
         </article>
   </motion.section>
  )
}

export default Services
