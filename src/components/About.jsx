import { easeIn, easeInOut, motion } from 'framer-motion'
import React, { useState } from 'react'
import { IoMdArrowUp } from "react-icons/io";

const About = () => {

   const [isHovered, SetHovered] = useState(false)

  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full p-20 rounded-3xl bg-[#CDEA68] text-black'>
      <h1 className='text-[4vw] leading-[3.6vw] -ml-9 tracking-tight font-NeueMontreal'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <u>raise funds</u>, <u>sell prod­ucts</u>, <u>ex­plain com­plex ideas</u>,and <u>hire great people</u>.</h1>

      <div className='border-t-1 border-b-1 border-[#CDEA68]-400 flex justify-between items-start mt-20   py-7 font-NeueMontreal'>
         <div className='w-1/2 -ml-8 -mt-1'>
            <h4>What you can expect:</h4>
         </div>
         <div className='w-1/2 flex gap-30 relative pb-20'>
            <div className="w-[280px]">
               <h4>
                  We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.
                  <br />
                  <br />
                  <br />
                  We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
               </h4>
            </div>
            <div className='w-1/3 absolute mt-40 ml-110'>
               <h4>
                  S: <br />
                  Instagram <br />
                  Behance <br />
                  Facebook <br />
                  Linkedin
               </h4>
            </div>

         </div>
      </div>

      <div className='border-t-0 border-[#CDEA68]-400 flex justify-between items-start py-7 font-NeueMontreal'>
         <div className='w-1/2'>
            <h2 className='text-5xl -ml-8'>Our approach:</h2>
            <button onMouseEnter={()=>{SetHovered(true)}} onMouseLeave={()=>{SetHovered(false)}}  className=' flex items-center gap-7 bg-[#000] -ml-8 uppercase cursor-pointer text-white px-5 py-4 rounded-full mt-5'>
               read more
               <motion.div 
                  initial={{}} 
                  animate={isHovered ? { scale: 3.5 } : { scale: 1 }}
                  className="w-2 h-2 bg-white rounded-full flex justify-center items-center"
               >
                  <motion.div 
                  animate={isHovered ? { scale: 1.2, opacity: 1, color:"#000" } : { scale: 1, opacity: 0, Color: "#fff" }} 
                  className=" w-[70%] h-[70%] flex items-center justify-center rounded-full">
                     <IoMdArrowUp className="rotate-45" />
                  </motion.div>
               </motion.div>
            </button>
         </div>
         <motion.div initial={{}} animate = {isHovered ? {scale:0.9}:{scale:1}} transition={{ease:easeIn, duration:0.8}} className='w-1/2 h-[55vh] rounded-3xl mt-5 object-fit overflow-hidden'>
            <motion.img initial={{}} animate={isHovered? {scale:1.1}:{scale:1}} transition={{ease:easeIn, duration:0.8}} class="bg-gray-200 w-full max-w-full rounded entered loaded" data-component="lazyload" data-animate="data-animate" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" width="663" height="469" data-src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" data-srcset="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x" alt="image description" data-ll-status="loaded" srcset="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x" />
         </motion.div>
      </div>

    </div>
  )
}

export default About