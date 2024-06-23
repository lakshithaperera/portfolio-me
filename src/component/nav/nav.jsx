import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BsCardHeading } from 'react-icons/bs';
import { RiMedalLine } from 'react-icons/ri';
import { useState } from 'react';
import { MdOutlineDeveloperMode } from "react-icons/md"
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
     <nav>
       <a href="/" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>

       <a href="#about" onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>

       <a href="#experience" onClick={() => setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ''}><RiMedalLine /></a>

       
       <a href="#services" onClick={() => setActiveNav('#services')}  className={activeNav === '#services' ? 'active' : ''}><MdOutlineDeveloperMode /></a>

       <a href="#portfolio" onClick={() => setActiveNav('#portfolio')}  className={activeNav === '#portfolio' ? 'active' : ''}><BsCardHeading /></a>

       


      
     </nav>
  )
}

export default Nav