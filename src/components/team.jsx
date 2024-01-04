import React,{useState}from 'react';
import art from './download.jpg'; 
import Img from './img-2897-1@2x.png';
import Image from './whatsapp-image-20230717-at-0243-1@2x.png'; 
import Image2 from './rig pic.jpg'; 
import D from './download (1).jpg'; 
import F from './download (2).jpg';
import G from './download (3).jpg';
import H from './download (4).jpg';
import J from './download (5).jpg';
import K from './download (6).jpg';
import L from './download (7).jpg';  
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';  
import {motion} from 'framer-motion';
import {fadeIn} from './variants'


function Team() { 
    
        const slides = [Img, Image,art,Image2,Img,Image,art,Image2,Img,Image2,D,F,G,H,J,K,L,Image2,art,D];
        const [currentIndex, setCurrentSlideIndex] = useState(0);
      
        const nextSlide = () => {  
          const isLastSlide =currentIndex===0;
          const newIndex=isLastSlide?currentIndex+10:currentIndex-10;
          setCurrentSlideIndex(newIndex);
        }; 
        const prevSlide =()=>{ 
            const isFirstSlide =currentIndex===0; 
            const newIndex=isFirstSlide?currentIndex+10:currentIndex-10;
            setCurrentSlideIndex(newIndex);
        };
  return ( 
    <div>
      <div 
       className="text-center  text-5xl text-slate-300 font-bold"><span className='text-[#AE8461]'>OUR</span> TEAM</div> 

      <div className='px-[38%] my-[-20px]'>
      <div className="flex justify-center items-center" style={{ width: '280px', height: '280px' }}>
        <img className="rounded-full p-10" src={art} alt="react" style={{ width: '100%', height: '100%' }} />
      </div> 
       
      <div className='my-[-30px] '>
        <h1 className='text-2xl text-slate-200 pl-14 '>Dr.A P SUDHEER</h1> 
        <h1 className='text-2xl  text-slate-200 pl-10 '>FACULTY INCHARGE</h1>
        <h1 className='text-1xl  text-slate-200 pl-11 pb-16 '>MECHANICAL DEPARTMENT</h1>
      </div> 
      </div> 


      <div className='max-w-[1200px] grid justify-items-center grid-cols-5 grid-rows-2 h-[560px] gap-2 pl-16'> 
      <div className="flex justify-center items-center rounded-full"  style={{
    backgroundImage: `url(${slides[(currentIndex) % slides.length]})`,
    width: '180px',
    height: '180px', 
    backgroundSize:'cover',
    backgroundPosition:'center',
      }}>
      </div>  

      <div className="flex justify-center items-center rounded-full"  style={{
    backgroundImage: `url(${slides[(currentIndex+1) % slides.length]})`,
    width: '180px',
    height: '180px', 
    backgroundSize:'cover',
    backgroundPosition:'center',
      }}>
      </div>

      <div className="flex justify-center items-center rounded-full"  style={{
    backgroundImage: `url(${slides[(currentIndex+2) % slides.length]})`,
    width: '180px',
    height: '180px', 
    backgroundSize:'cover',
    backgroundPosition:'center',
      }}>
      </div>


      <div className="flex justify-center items-center rounded-full"  style={{
    backgroundImage: `url(${slides[(currentIndex+3) % slides.length]})`,
    width: '180px',
    height: '180px', 
    backgroundSize:'cover',
    backgroundPosition:'center',
      }}>
      </div>

      <div className="flex justify-center items-center rounded-full"  style={{
    backgroundImage: `url(${slides[(currentIndex+4) % slides.length]})`,
    width: '180px',
    height: '180px', 
    backgroundSize:'cover',
    backgroundPosition:'center',
      }}>
      </div>


      <div className="flex justify-center items-center rounded-full"  style={{
    backgroundImage: `url(${slides[(currentIndex+5) % slides.length]})`,
    width: '180px',
    height: '180px', 
    backgroundSize:'cover',
    backgroundPosition:'center',
      }}>
      </div>


      <div className="flex justify-center items-center rounded-full"  style={{
    backgroundImage: `url(${slides[(currentIndex+6) % slides.length]})`,
    width: '180px',
    height: '180px', 
    backgroundSize:'cover',
    backgroundPosition:'center',
      }}>
      </div>


      <div className="flex justify-center items-center rounded-full"  style={{
    backgroundImage: `url(${slides[(currentIndex+7) % slides.length]})`,
    width: '180px',
    height: '180px', 
    backgroundSize:'cover',
    backgroundPosition:'center',
      }}>
      </div>


      <div className="flex justify-center items-center rounded-full"  style={{
    backgroundImage: `url(${slides[(currentIndex+8) % slides.length]})`,
    width: '180px',
    height: '180px', 
    backgroundSize:'cover',
    backgroundPosition:'center',
      }}>
      </div>

      <div className="flex justify-center items-center rounded-full"  style={{
    backgroundImage: `url(${slides[(currentIndex+9) % slides.length]})`,
    width: '180px',
    height: '180px', 
    backgroundSize:'cover',
    backgroundPosition:'center',
      }}>
      </div>
         <div className=' absolute -translate-x-[50%] translate-y-[435%] left-12 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'> 
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>  
        <div className=' absolute translate-x-[50%] translate-y-[435%] right-24 text-2xl rounded-full p-2  bg-black/50 text-white cursor-pointer'> 
          <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
      
      </div>
    </div>
  );
}

export default Team;
