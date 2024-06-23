import React from 'react'
import './about.css';
import ME from '../../assets/10.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import { motion } from 'framer-motion';





const About = () => {
  return (
    <section id='about'>
      <motion.h5
       initial={{opacity:0}}
       whileInView={{ opacity: 1 }}
       transition={{delay:0.2, type: "tween", duration:1.5}}
      >Get To Know</motion.h5>
      <motion.h2
       initial={{opacity:0}}
       whileInView={{ opacity: 1 }}
       transition={{delay:0.2, type: "tween", duration:1.5}}
      >About Me</motion.h2>

      <motion.div className="container about__container"
      initial={{ opacity: 0, x:'-40vw' }}
      whileInView={{ opacity: 1, x:0}}
      transition={{delay:0.2, type: "tween", duration:1}}
      >
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
                 <FaAward className='about__icon'/>
                 <h5>Experience</h5>
                 <small>4+ Years Working</small>
            </article>

            <article className='about__card'>
                 <FiUsers className='about__icon'/>
                 <h5>Clients</h5>
                 <small>100+ Worldwide</small>
            </article>

            <article className='about__card'>
                 <VscFolderLibrary className='about__icon'/>
                 <h5>projects</h5>
                 <small>250+ Completed</small>
            </article>


          </div>

          <p className='about-me'>Hi, I am Lakshitha Perera. For the past four years, I've worked as a full-stack web developer. I enjoy working on any web-related project using the latest technologies and tools. html5, css3, JavaScript, jQuery, Sass, Bootstrap, reactJs, Mern stack, CMS. I have good hands on website development. I'll do my best for you!</p>

          <article className="contact__option">
          <a href="https://www.peopleperhour.com/freelancer/technology-programming/lakshitha-perera-full-stack-developer-zzxnnzqw" rel="noreferrer" target='_blank'>
          <div className="pph-logo">
            
          </div>
          <h4>Contact Me on peopleperhour </h4>
          </a>
         </article>
        </div>
      </motion.div>
    </section>
  )
}

export default About
