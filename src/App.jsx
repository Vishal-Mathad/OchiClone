import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Playful from './components/Playful'
import Featured from './components/Featured'
import FooterCards from './components/FooterCards'
import Clients from './components/Clients'
import Ready from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <div className=' w-full min-h-screen bg-[#F1F1F1] m-0 p-0 box-border '>
        <Navbar />
        <Landing />
        <Marquee />
        <About />
        <Playful />
        <Featured />
        <Clients/>
        <FooterCards />
        <Ready/>
      </div>
    </div>
  )
}

export default App