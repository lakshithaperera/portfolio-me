import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
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

     <div className="container services__container">
         

          <motion.article className="service"
          initial={{  opacity: 0, y:-20 }}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay:0.2, duration:1}}
          >
              <div className="service__head">
                <h3>frond End  Development</h3>
              </div>
              <ul className='service__list'>
                 <li>
                   <BiCheck className='service__list-icon' />
                   <p>Responsive and modern Website Development.</p>
                 </li>

                 <li>
                   <BiCheck className='service__list-icon' />
                   <p>Single page applications development services with powerful front end.</p>
                 </li>
                 <li>
                   <BiCheck className='service__list-icon' />
                   <p>Using JavaScript-based frameworks. </p>
                 </li>
                 <li>
                   <BiCheck className='service__list-icon' />
                   <p>convert the design file(psd,adobe xd,figma,pdf) to a responsive  website using HTML5, CSS3, Bootstrap and javascript.</p>
                 </li>
               
                 
              </ul>
          </motion.article>

          <motion.article className="service"
          initial={{  opacity: 0, y:-20 }}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay:0.2, duration:1}}
          >
              <div className="service__head">
                <h3>UI UX Design</h3>
              </div>
              <ul className='service__list'>
            

                 <li>
                   <BiCheck className='service__list-icon' />
                   <p>Mobile UI/UX Design</p>
                 </li>
                 <li>
                   <BiCheck className='service__list-icon' />
                   <p>Web UI/UX Design </p>
                 </li>
                 <li>
                   <BiCheck className='service__list-icon' />
                   <p>Prototyping & Wireframing</p>
                 </li>

                 <li>
                   <BiCheck className='service__list-icon' />
                   <p>Product research and analysis</p>
                 </li>
               
                 
              </ul>
          </motion.article>

          
     </div>
   </motion.section>
  )
}

export default Services
