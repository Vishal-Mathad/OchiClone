import { motion } from 'framer-motion'
import React from 'react'
import {useState} from 'react';

const clients = () => {
   const[isHovered2,SetHovered2]=useState(false);
   const[isHovered3,SetHovered3]=useState(false);
  return (
    <div className='w-full bg-[#F1F1F1] border-b-1 py-20 '>

      <div className='w-full border-b-1 border-zinc-500'>
         <h1 className='text-6xl py-12 -mt-26 font-NeueMontreral tracking-tighter ml-10'>
         Clients’ reviews
         </h1>
      </div>
      <div className='w-full h-[50vh] flex justify-between mt-5 items-start px-10'>
         <div className='w-[15%]'>
            <u className='text-[16px] font-NeueMontreal-regular text-[#212121]'>Karman Ventures</u>
         </div>
         <div className='w-[25%] ml-45  flex flex-col items-start gap-3'>
            <h4 className='text-[16px] font-NeueMontreal-regular pb-13 text-[#212121]'>Services:</h4>
            <motion.button
            onMouseEnter={()=>{SetHovered2(true)}}
            onMouseLeave={()=>{SetHovered2(false)}}
            initial={{}} animate={isHovered2 ? {backgroundColor:"#fff" , 
            color:"#000"}:{backgroundColor:"#212121" , color:"#fff"}}
            transition={{ease:[0.37, 0, 0.63, 1] ,duration:0.2}}
            className='border-2 font-NeueMontreal-regular text-[14px] border-black  rounded-full px-4 py-1 cursor-pointer'>
               INVESTOR DECK
            </motion.button>
            <motion.button
            onMouseEnter={()=>{SetHovered3(true)}}
            onMouseLeave={()=>{SetHovered3(false)}}
            initial={{}} animate={isHovered3 ? {backgroundColor:"#fff" , 
            color:"#000"}:{backgroundColor:"#212121" , color:"#fff"}}
            transition={{ease:[0.37, 0, 0.63, 1] ,duration:0.2}}
            className='border-2 font-NeueMontreal-regular text-[14px] border-black  rounded-full px-4 py-1 cursor-pointer'>
               SALES DECK
            </motion.button>
         </div>
         <div className='w-[50%] ml-4'>
            <h4 className='text-[16px] font-NeueMontreal-regular pb-17 text-[#212121]'>
            William Barnes
            </h4>
            <div className='w-30 h-30 object-fit rounded-2xl overflow-hidden'>
               <img src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
            </div>
            <div className='w-[70%] font-NeueMontreal-regular text-[16px] text-[#212121] pt-10'>
               <p>
               They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5
               </p>
            </div>
         </div>
         <div>
            <h4 className='text-[16px] font-NeueMontreal font-regular text-[##C2C2C2]'>READ</h4>
         </div>
      </div>
    </div>
  )
}

export default clients