import React, { useState } from 'react';
import Pic from './download.jpg';
import Img from './img-2897-1@2x.png';
import Image from './whatsapp-image-20230717-at-0243-1@2x.png'; 
import {motion} from 'framer-motion';
import {fadeIn} from './variants'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Project() {
  const slides = [Pic, Img, Image, Pic];
  const [currentIndex, setCurrentSlideIndex] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(null);

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentSlideIndex(newIndex);
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentSlideIndex(newIndex);
  };

  const gotoSlide = (slideIndex) => {
    setCurrentSlideIndex(slideIndex);
  };

  const handleToggleContent = (index) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  const boxTextContent = {
    0: {
      content: (
        <div className='grid grid-cols-2 gap-6'>
          <div className='text-slate-300 text-sm pl-5 pt-6'>
            Amidst the ongoing global pandemic, this initiative aims to significantly contribute to risk mitigation and alleviate the burden on healthcare professionals. The project focuses on developing a fully automated robot specifically designed for conducting nasal and oropharyngeal swab tests. Featuring a 5-degree-of-freedom serial manipulator with a flexible end effector, the robotic system's workflow commences with nose detection utilizing a Kinect camera system, complemented by sophisticated image processing algorithms.<br /><br />

            The Kinect device, encompassing an RGB camera, an infrared projector, and detector, facilitates real-time data collection on the nose's position. This information guides the manipulator to precisely position the arm for optimal testing. The incorporation of YOLOv5 enhances nose identification accuracy. Furthermore, the integration of force sensors contributes crucial force feedback, ensuring the robot navigates and operates safely.<br /><br />

            This pioneering design is distinguished by its proactive safety measures, eliminating the risk of excessive force exertion—a pivotal enhancement in ensuring the safety of the testing process. The utilization of cutting-edge technology and a comprehensive approach to safety underscores the project's potential impact in the realm of automated testing systems.
          </div>
          <div><img className='object-cover w-full h-full' src={slides[0]} alt="react" /></div>
        </div>
      ),
    },
    1: 'Dog',
    2: 'Bird',
    3: 'Fish',
    // Add more as needed
  };

  return (
    <div>
      <motion.div 
        variants={fadeIn("up",0.2)}
        initial='hidden'
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}>
        <h1 className='font-bold text-[#AE8461] text-center text-5xl '>PROJECTS</h1>
      </motion.div>

      <div className='max-w-[1400px] h-[500px] w-full m-auto py-16 px-20'>
        <div
        className='grid grid-cols-4 grid-rows-1 h-[60vh] gap-4 relative'>
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${slides[(currentIndex + index) % slides.length]})`,
              }}
              className='w-full h-full rounded-2xl bg-center bg-cover duration-500 group'
              onClick={() => handleToggleContent(index)}
            >
              {clickedIndex === index && (
                <div className='absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black bg-opacity-75'>
                  {boxTextContent[index].content}
                </div>
              )}
            </div>
          ))}

          <div className='absolute -translate-x-[px] translate-y-[125px] left-15 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className='absolute translate-x-[-30px] translate-y-[125px] right-12 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => gotoSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
