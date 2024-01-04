import React from 'react';
import Robot from './robot.png';
import './styles.css';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';

const Animation = () => { 
  
  return (
    <div className='py-10 grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center'>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial='hidden'
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className='text-[#AE8461] text-7xl lg:text-7xl pl-4 lg:pl-44 py-10 lg:py-40 text-center leading-normal font-bold'
      >
        <span className='text-[#4C4A4A]'>UNLEASH </span><br />INNOVATION
      </motion.div>

      <div className='w-full max-w-[350px] mx-auto lg:mx-0'>
        {/* Adjusted the image size and added max-width */}
        <img className='object-cover w-full h-full p-2 animate-spin-slow' src={Robot} alt="robot" />
      </div>
    </div>
  );
};

export default Animation;
