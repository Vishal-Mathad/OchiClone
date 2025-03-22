import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-2xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-white flex  overflow-hidden whitespace-nowrap'>
         <motion.h1 initial={{x:"0"}} animate={{x:"-100%" }} transition={{repeat : Infinity ,ease :"linear" , duration:10}} className='text-[17.2vw] text-[#FFFFFF] pr-10 scale-y-150 tracking-tighter leading-none font-FoundersGrotesk uppercase font-extrabold pt-1 mb-12'>We are Ochi</motion.h1>
         <motion.h1 initial={{x:"0"}} animate={{x:"-100%" }} transition={{repeat : Infinity ,ease :"linear" , duration:10}} className='text-[17.2vw] text-[#FFFFFF] pr-10 scale-y-150 tracking-tighter leading-none font-FoundersGrotesk uppercase font-extrabold pt-1 mb-12'>We are Ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee