import React, { useState } from 'react';
import Img from './img-2897-1@2x.png';
import Image from './whatsapp-image-20230717-at-0243-1@2x.png';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'; 
import {RxDotFilled} from 'react-icons/rx' 

function Slider() {
  const slides = [Img, Image];
  const [currentIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide =currentIndex===slides.length-1; 
    const newIndex=isLastSlide?0:currentIndex+1;
    setCurrentSlideIndex(newIndex);
  }; 
  const prevSlide =()=>{ 
    const isFirstSlide =currentIndex===0; 
    const newIndex=isFirstSlide?slides.length-1:currentIndex-1;
    setCurrentSlideIndex(newIndex);
  }; 

  const gotoslide=(slideIndex)=>{
    setCurrentSlideIndex(slideIndex);
  }

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-40 px-24  '>
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex]})`,
        }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
        </div> 
       <div className=' p-[50%]left-15 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'> 
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>  
        <div className='right-12 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'> 
          <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div> 
        <div className='flex top-4 justify-center py-2'>
             {slides.map((slide,slideIndex)=>(
                <div key={slideIndex} 
                onClick={()=>gotoslide(slideIndex)}
                className='text-2xl cursor-pointer'><RxDotFilled /> </div>
                ))
              }
        </div>
    </div>
  );
}

export default Slider;

