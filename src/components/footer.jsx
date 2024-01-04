import React from 'react' 
import ItemsContainer from './itemsContainer';
function Footer()
{
    return(
        <div className=' text-white'> 
         
         <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 py-7">
            <h1 className="lg:text-4xl pl-[32%] text-3xl text-[#AE8461] font-semibold">UNLEASH INNOVATION
        </h1>  
        </div>
         <div className='mt-[-40px]'>
            <ItemsContainer />
         </div>

         

         







        </div>
    );
} 
export default Footer;