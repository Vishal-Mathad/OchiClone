import { easeIn, motion } from 'framer-motion';
import React from 'react'
import { useState } from 'react';
import { FiArrowUpCircle } from "react-icons/fi";

const Landing = () => {

   const[hovered,setHovered] = useState(false)

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-[82vh] bg-[#F1F1F1] m-0 p-0 box-border'>
      <div className='textstructure mt-20 ml-11'>
         {["we create" , "eye opening" , "presentations"].map((item,index) => {
            return (
               <div key={index} className='masker'>
                  <div className='w-fit object-fit overflow-hidden flex itmes-end'>
                     {index ===1 && (
                        <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className=' w-[8vw] rounded-md h-[5.7vw] top-[1vw] relative'>
                           <img className='w-full h-[84px]' src="https://i.pinimg.com/736x/67/52/2f/67522fe4bacbedfc6b75846cc5c6f1ad.jpg" alt="" />
                        </motion.div>
                     )}
                     <h1 className='uppercase text-[5.5vw] tracking-tighter leading-[1.24em]  scale-y-150 font-TestFounderGroteskX-CndSmb font-bold'>
                        {item}
                     </h1>
                  </div>
               </div>
            )
         })}
      </div>
      <div className='border-t-1 border-[#212121] mt-52 w-full flex justify-between align-center'>
         {["For Public and Private Companies" , "From the First Pitch to IPO"].map((item,index)=>{
            return(
               <>
                  <p className={`text-[#212121] ml-11 mt-3 text-[1vw] leading-[1.8em] font-NeueMontreal font-regular text-center ${
                     index === 1 ? "ml-[9.6rem]" : "" }`} key={index}>
                     {item}
                  </p>
               </>
            )
         })}
         <div onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}} className='flex items-center mr-10'>
            <motion.button 
               initial={{ backgroundColor: "#fff", color: "#000" }}
               animate={hovered ? { backgroundColor: "black", color: "#fff" } : { backgroundColor: "#fff", color: "#000" }}
               transition={{ease:easeIn}}
               className='border-1 border-[#212121] flex items-center gap-4 rounded-[50px] text-[#212121] font-NeueMontreal font-semibold text-[1vw] leading-[1.8em] cursor-pointer px-6 py-1 mt-3'
            >
               START A PROJECT
               <motion.div 
               initial={{}} 
               animate={hovered ? { scale: 2.5 } : { scale: 1 }}
               className="w-2 h-2 bg-[#212121] rounded-full flex 
               justify-center items-center"
               >
                  <motion.div 
                  animate={hovered ? { scale: 1.2, opacity: 1, 
                  color:"#000" } : { scale: 1, opacity: 0, Color: 
                  "#fff" }} 
                  className=" w-[70%] h-[70%] bg-white flex items-center 
                  justify-center rounded-full">
                     <FiArrowUpCircle className="rotate-45" />
                  </motion.div>
               </motion.div>
            </motion.button>
         </div>
      </div>

    </div>
  )
}

export default Landing