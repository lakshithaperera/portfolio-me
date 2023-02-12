import React from 'react'
import Header from './component/header/header';
import  Nav from './component/nav/nav';
import About from './component/about/about';
import Experience from './component/experience/experience';
import Portfolio from './component/portfolio/portfolio';
import Footer from './component/footer/footer';
import Services from './component/services/services';


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio/>
        <Footer/>
        


    </>
  )
}

export default App
