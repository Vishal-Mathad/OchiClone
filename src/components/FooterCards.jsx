import { motion } from 'framer-motion';
import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";
import{useState} from 'react';

const FooterCards = () => {
   const[isHovered2,SetHovered2]=useState(false);
   const[isHovered3,SetHovered3]=useState(false);
  return (
    <div className='w-full h-[50vh] flex justify-between mt-27 gap-6 items-start px-10'>

      <div className='w-1/2 '>
         <div className='w-full h-[370px] bg-[#004D43] relative rounded-3xl'>
            <img className='left-1/2 top-1/2 -translate-x-[50%] absolute -translate-y-[50%]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='text-[14px] text-[#CDEA68] border-1 rounded-full px-3 py-1 cursor-pointer font-NeueMontreal font-Regular flex items-center  absolute bottom-10 left-10'>
               <FaRegCopyright className='text-[#CDEA68]' />
               <span className='text-[#CDEA68]'>2019-2022</span>
            </button>
         </div>
      </div>
      <div className='w-1/2 flex gap-6'>
         <div className='w-1/2 h-[370px] bg-[#212121] relative rounded-3xl '>
            <img className='left-1/2 top-1/2 -translate-x-[50%] absolute -translate-y-[50%]'  src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <motion.button 
            onMouseEnter={()=>{SetHovered2(true)}}
            onMouseLeave={()=>{SetHovered2(false)}}
            initial={{}} animate={isHovered2 ? {backgroundColor:"#fff" , 
            color:"#000"}:{backgroundColor:"#212121" , color:"#fff"}}
            transition={{ease:[0.37, 0, 0.63, 1] ,duration:0.2}}
            className='text-[14px] text-white border-1 rounded-full px-3 py-1 font-NeueMontreal font-Regular flex items-center  absolute bottom-10 left-10 uppercase cursor-pointer'>
            Rating 5.0 on Clutch
            </motion.button>
         </div>
         <div className='w-1/2 h-[370px] bg-[#212121] relative rounded-3xl '>
            <img className='left-1/2 top-1/2 -translate-x-[50%] absolute -translate-y-[50%] w-[102px] h-[105px]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <motion.button
            onMouseEnter={()=>{SetHovered3(true)}}
            onMouseLeave={()=>{SetHovered3(false)}}
            initial={{}} animate={isHovered3 ? {backgroundColor:"#fff" , 
            color:"#000"}:{backgroundColor:"#212121" , color:"#fff"}}
            transition={{ease:[0.37, 0, 0.63, 1] ,duration:0.2}}
            className='text-[14px] text-white border-1 rounded-full px-3 py-1 font-NeueMontreal font-Regular flex items-center  absolute bottom-10 left-10 uppercase cursor-pointer'>
               Business Bootcamp Alumni
            </motion.button>
         </div>
      </div>
      
    </div>
  )
}

export default FooterCards