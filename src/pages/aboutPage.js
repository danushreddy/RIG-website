import React from 'react'
import Navbar from '../components/navbar'   
import Footer from '../components/footer' 
import BeganPic from './beganpic.jpg' 
import Handpic from './800px-Shadow_Hand_Bulb_large.png' 
import {motion} from 'framer-motion';
import {fadeIn} from '../components/variants'
const aboutPage = () => { 
 
  return (  
    <div>
      <Navbar />     
      <div className='overflow-hidden'>
  <motion.div
    variants={fadeIn("left", 0.2)}
    initial='hidden'
    whileInView={"show"}
    viewport={{ once: false, amount: 0.7 }}
    className='leading-3 text-center font-bold text-slate-300 text-5xl pt-20'>
    <span className='text-[#AE8461]'>ABOUT</span> US
  </motion.div>
  <motion.div
    variants={fadeIn("right", 0.2)}
    initial='hidden'
    whileInView={"show"}
    viewport={{ once: false, amount: 0.7 }}
    className='text-center font-bold text-slate-300 text-5xl '>
    ..............
  </motion.div>
</div>
 
      
      <div className='text-center font-bold font-IrishGrover italic text-slate-200 text-base pt-4 '>"Driven by Innovation, Fueled by Passion.
 Explore the Boundless Horizons of Robotics."</div>   

      
       
      <div className='font-apple-system italic text-[#AE8461] text-5xl pl-20 pt-20'>Who Are We?</div>
      <div className='grid grid-cols-2 gap-4'>
      <motion.div
    variants={fadeIn("right", 0.2)}
    initial='hidden'
    whileInView={"show"}
    viewport={{ once: false, amount: 0.7 }}
     className='text-slate-300  text-sm pl-20 pt-6 '>The Robotics Interest Group (RIG) is a vibrant community at NIT Calicut where passion for robotics drives innovation and fosters a collaborative spirit. We bring together students from diverse engineering backgrounds, each contributing their unique expertise to the development of cutting-edge robotic solutions. Our members come from various branches, united by a common goal: to utilize technology for positive change. Within RIG, late-night brainstorming sessions become hubs of creative energy, fueled by the collective commitment to pushing the boundaries of possibility. Beyond building robots, we believe in nurturing the next generation of innovators. We ignite young minds through engaging workshops, interactive classes, and open lab visits, where our passion shines through. More than just an extracurricular activity, RIG is a testament to the transformative power of collaboration. It's where individual interests merge into a collective force, shaping the future of robotics.</motion.div>
     
  
  </div> 
    <div className='overflow-hidden'>
      <motion.div
    variants={fadeIn("left", 0.2)}
    initial='hidden'
    whileInView={"show"}
    viewport={{ once: false, amount: 0.7 }} 
    className='  text-right font-apple-system italic text-[#AE8461] text-5xl pr-20 pt-20 pb-6'>Where It All Began...?</motion.div>
    </div>  
    <div className='overflow-hidden'>
      <div className='grid grid-cols-2 gap-4'>
        <motion.div
    variants={fadeIn("right", 0.2)}
    initial='hidden'
    whileInView={"show"}
    viewport={{ once: false, amount: 0.7 }}><img className='object-cover w-full h-full pt-8 pl-3' src={BeganPic} alt="react"/></motion.div> 
        <motion.div
    variants={fadeIn("left", 0.2)}
    initial='hidden'
    whileInView={"show"}
    viewport={{ once: false, amount: 0.7 }}
     className='text-slate-300 text-sm pt-6'>
  In 2011, a group of students became enthused about participating in the prestigious international robotics event, RoboCon 2012. Despite their dedicated efforts during the holidays to construct robots, they encountered a financial obstacle. Seeking assistance from the institute, they were informed that they had yet to establish their credibility. Undeterred, two students decided to broaden their scope and explore additional opportunities in robotics.<br /><br />
  Consequently, a cohesive group of 14 students formed, seeking guidance from Mr. Sudheer A.P., a distinguished figure in the field of robotics in the college. Overcoming challenges, they proudly unveiled their first creation – the Plotterbot v1.0. This helped them to establish their credibility in the institution.

  Their journey continued with the restoration of a lab machine, extended lab access, and successful modeling endeavors. During their academic breaks, they dedicated their time on campus to working on projects. As a result of their efforts, a significant presentation on May 20th became a turning point. This led to the official recognition of the Robotics Interest Group (RIG) and consequently, securing the necessary funding for the upcoming RoboCon 2013.<br /><br />

  In a dedicated effort to share their knowledge, the Robotics Interest Group (RIG) organized a comprehensive workshop at NIT Calicut, focusing on the fundamental principles of robotics. The event aimed to impart essential insights and skills in the realm of robotics to the students of NIT Calicut. The workshop garnered substantial attention, attracting an impressive turnout of over a number of enthusiastic participants. The positive response and acclaim received for the event reflected the effectiveness of RIG's instructional approach. Their narrative underscores the transformative impact of passion, dedication, and a shared vision. It serves as an inspiration for all to persevere, explore every opportunity diligently, and invest unwavering effort, knowing that enduring commitment ultimately leads to success.
      </motion.div> 
      </div>
       </div>  
       <div className='overflow-hidden'>
       <motion.div
    variants={fadeIn("left", 0.2)}
    initial='hidden'
    whileInView={"show"}
    viewport={{ once: false, amount: 0.7 }} className='text-5xl font-bold text-[#AE8461] text-center pt-14'>Way Forward </motion.div> 
       <motion.div
    variants={fadeIn("right", 0.2)}
    initial='hidden'
    whileInView={"show"}
    viewport={{ once: false, amount: 0.7 }} className='text-sm text-slate-300 pl-24 pr-24 pt-7'>As we reflect on our history, Robotics Interest Group (RIG) stands as a testament to the resilience, creativity, and unbreakable spirit of its members. Beyond the challenges of RoboCon 2012, we have evolved into a community that not only crafts robots but also seeks to share knowledge and ignite the minds of the next generation. Today, we carry the legacy of overcoming obstacles and transforming adversity into triumph. Our commitment extends beyond competitions; we aim to inspire and educate, pushing the boundaries of what is possible in the field of robotics. Continuing our journey, we still conduct workshops, share knowledge, and strive to make a meaningful impact on the evolving landscape of robotics, fostering innovation and contributing to the transformative advancements shaping our future.</motion.div>
        </div>
       <div className='text-5xl font-bold text-[#AE8461] text-center py-14'>What We do </div>  

       <div><Footer/></div>

      



    </div>
    
  )
}

export default aboutPage