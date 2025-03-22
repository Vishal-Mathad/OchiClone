import React from 'react';
import Cards from './Cards';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdArrowUp } from "react-icons/io";

const Featured = () => {

  const[isHovered, SetHovered] = useState(false)

  return (
    <div className="w-full py-25 bg-[#F1F1F1]">
      <div className="w-full border-b-2 border-[#B2B2B2] pb-10 px-10">
        <h1 className="text-[3.7vw] font-NeueMontreal font-regular tracking-tight">
          Featured projects
        </h1>
      </div>
      <Cards />
      <Cards />
      <div className='w-full flex justify-center py-10'>
        <button onMouseEnter={()=>{SetHovered(true)}} onMouseLeave={()=>{SetHovered(false)}} className=' mt-10 font-NeueMontreal flex items-center gap-8 font-regular cursor-pointer text-[1vw] px-6 py-[16px] rounded-full bg-black text-[#E4E4E4]'> 
          VIEW ALL CASE STUDIES
          <motion.div 
          initial={{}} 
          animate={isHovered ? { scale: 3.5 } : { scale: 1 }}
          className="w-2 h-2 bg-white rounded-full flex justify-center items-center" >
            <motion.div 
              animate={isHovered ? { scale: 1.2, opacity: 1, color:"#000" } : {scale: 1, opacity: 0, Color: "#fff" }} 
              className=" w-[70%] h-[70%] flex items-center justify-center rounded-full">
                <IoMdArrowUp className="rotate-45" />
            </motion.div>
          </motion.div>
        </button>
      </div>
    </div>
  );
};

export default Featured;
