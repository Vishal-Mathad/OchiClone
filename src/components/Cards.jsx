import { motion } from 'framer-motion'
import React, { useState } from 'react'

const Cards = () => {

   const[isHovered,SetHovered]=useState(false);
   const[isHovered1,SetHovered1]=useState(false);
   const[isHovered2,SetHovered2]=useState(false);
   const[isHovered3,SetHovered3]=useState(false);
   const[isHovered4,SetHovered4]=useState(false);
   const[isHovered5,SetHovered5]=useState(false);

  return (
    <div>
      <div className="cards w-full flex justify-between relative">
  
         <div className="w-full flex flex-col items-start">
            <h4 className="font-NeueMontreal ml-20 mt-10 -mb-5 uppercase font-regular text-[1vw]">
            Officevibe
            </h4>
            <div onMouseEnter={()=>SetHovered(true)} onMouseLeave={()=>{SetHovered(false)}} className=" cardcontainer relative w-[44vw] h-[64vh] m-10 rounded-3xl">
            <h1 className="absolute flex overflow-hidden text-8xl left-full text-[#CDEA68] uppercase  tracking-tighter font-bold -translate-x-1/2 top-1/2 -translate-y-1/2  whitespace-nowrap z-[20]">
            {"Officevibe".split("").map((letter, index) => (
             <motion.span initial={{y:"100%"}} animate={isHovered ? ({y:"0%"}) : ({y:"100%"})} transition={{ease:[0.68, -0.6, 0.32, 1.6] ,delay:index*.04}} className='inline-block' key={index}>{letter}</motion.span>
            ))}
            </h1>
            <motion.div initial={{}} animate={isHovered ? ({scale:0.96}) :({scale:1})} className="card w-full h-full object-fit rounded-3xl  overflow-hidden">
               <motion.img initial={{}} animate={isHovered ? ({scale:1.1}) : ({scale:1})}  src="https://ochi.design/wp-content/uploads/2022/05/Officevibe-Short-1-1326x1101.jpg" alt="" />
            </motion.div>
         </div>
         <div className='flex gap-5 ml-10 '>
            <motion.button
            onMouseEnter={()=>{SetHovered2(true)}}
            onMouseLeave={()=>{SetHovered2(false)}}
            initial={{}} animate={isHovered2 ? {backgroundColor:"#000" , color:"#fff"}:{backgroundColor:"#fff" , color:"#000"}}
            transition={{ease:[0.37, 0, 0.63, 1] ,duration:0.2}}
            className='border-2 border-zinc-500 text-[1vw] font-NeueMontreal cursor-pointer font-regular py-[3px] px-[12.5px] -mt-6 rounded-full'>
               BRANDED TEMPLATE
            </motion.button>
         </div>
         </div>


         <div className="w-full flex flex-col">
            <h4 className="font-NeueMontreal ml-20 mt-10 -mb-5 uppercase font-regular text-[1vw]">
      Cardboard Spaceship
            </h4>
            <div onMouseEnter={()=>{SetHovered1(true)}} onMouseLeave={()=>{SetHovered1(false)}} className=" cardcontainer w-[44vw] h-[64vh] m-10 rounded-3xl relative">
      <h1 className="absolute flex overflow-hidden  text-8xl left-0 -translate-x-[50%] text-[#CDEA68] uppercase tracking-tighter font-bold top-1/2 -translate-y-1/2 whitespace-nowrap z-[20]">
         {"cardboard spaceship".split("").map((letter, index) => (
         <motion.span initial={{y:"100%"}} animate={isHovered1 ? ({y:"0%"}) : ({y:"100%"})} transition={{ease:[0.68, -0.6, 0.32, 1.6] ,delay:index*.04}} className='inline-block' key={index}>{letter}</motion.span >
         ))}
      </h1>
      <motion.div initial={{}} animate={isHovered1 ? ({scale:0.96}) :({scale:1})} className="card w-full h-full object-fit rounded-3xl overflow-hidden">
        <motion.img initial={{}} animate={isHovered1 ? ({scale:1.1}) : ({scale:1})} src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
      </motion.div>
            </div>
            <div className='flex gap-5 ml-10 '>
               <motion.button
               onMouseEnter={()=>{SetHovered3(true)}}
               onMouseLeave={()=>{SetHovered3(false)}}
               initial={{}} animate={isHovered3 ? {backgroundColor:"#000" , 
               color:"#fff"}:{backgroundColor:"#fff" , color:"#000"}}
               transition={{ease:[0.37, 0, 0.63, 1] ,duration:0.2}}
               className='border-2 border-zinc-500 text-[1vw]   font-NeueMontreal font-regular cursor-pointer py-
               [3px] px-[12.5px] -mt-6 rounded-full'>
                  BRANDED TEMPLATES
               </motion.button>
      
            <motion.button
            onMouseEnter={()=>{SetHovered4(true)}}
            onMouseLeave={()=>{SetHovered4(false)}}
            initial={{}} animate={isHovered4 ? {backgroundColor:"#000" , 
            color:"#fff"}:{backgroundColor:"#fff" , color:"#000"}}
            transition={{ease:[0.37, 0, 0.63, 1] ,duration:0.2}}
            className='border-2 border-zinc-500 text-[1vw] font-NeueMontreal font-regular py-
            [3px] px-[12.5px] -mt-6 rounded-full cursor-pointer'>
               SALES DECK
            </motion.button>

            <motion.button
            onMouseEnter={()=>{SetHovered5(true)}}
            onMouseLeave={()=>{SetHovered5(false)}}
            initial={{}} animate={isHovered5 ? {backgroundColor:"#000" , 
            color:"#fff"}:{backgroundColor:"#fff" , color:"#000"}}
            transition={{ease:[0.37, 0, 0.63, 1] ,duration:0.2}}
            className='border-2 border-zinc-500 text-[1vw] font-NeueMontreal font-regular py-
            [3px] px-[12.5px] -mt-6 rounded-full cursor-pointer'>
            SOCIAL MEDIA TEMPLATE
            </motion.button>

      </div>
         </div>
  
    </div>
  </div>
  )
}

export default Cards