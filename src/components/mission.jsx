import React from 'react'
import Image2 from './rig pic.jpg'; 
import {motion} from 'framer-motion';
import {fadeIn} from './variants'
function mission()
{ 
  
    return( 
        <div>
      
        <motion.div 
        variants={fadeIn("up",0.2)}
        initial='hidden'
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
        className='text-center font-bold text-slate-300 text-5xl py-0'><span className='text-[#AE8461]'>OUR</span> MISSION</motion.div>
      

      <div className='max-w-[1400px] m-auto py-12 px-12 grid lg:grid-cols-2 gap-4'> 
           
          <motion.div 
        variants={fadeIn("right",0.3)}
        initial='hidden'
        whileInView={"show"}
        viewport={{once:false,amount:0.7}} className='grid grid-cols-2 grid-rows-6 h-[62vh]'> 
          <img className='row-span-3 object-cover w-full h-full p-2' src={Image2} alt="react"/>
          <img className='row-span-2 object-cover w-full h-full p-2' src={Image2} alt="react"/>
          <img className='row-span-2 object-cover w-full h-full p-2' src={Image2} alt="react"/>
          <img className='row-span-3 object-cover w-full h-full p-2' src={Image2} alt="react"/>
          <img className='row-span-2 object-cover w-full h-full p-2' src={Image2} alt="react"/>
          </motion.div>
           
          <motion.div 
        variants={fadeIn("left",0.5)}
        initial='hidden'
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}className='font-medium text-slate-200 text-1xl '>Robotics Interest Group(RIG) was formed out of the passion for robotics, to facilitate learning and research in the areas of Mechatronics/robotics and Intelligent Systems, Automation , Advanced Control Systems, Modeling and Simulation, and Sensors & Algorithms. Our aim is to acquire knowledge and appropriate hands-on experience , in order to meet the needs of these rapidly changing technologies and provide services to industry for promoting new technologies as well as designing and manufacturing commercially viable products, for the development of our country. Along with technological advancement, taking up socially relevant projects that can be brought to the aid of common people are of prime importance to us. We also make sure that the knowledge acquired is shared with students, by conducting workshops, exhibitions and talks; thereby introducing them to this the stream and invoking an interest among them for the same.  
          </motion.div>
      </div>
    </div>);
} 
export default mission;