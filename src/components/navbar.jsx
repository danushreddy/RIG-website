import React from 'react'
import Logo from './logo.png'  
import { Link } from "react-router-dom";
const navbar=()=>{
    return(
        <div className=' w-full h-[80px] flex justify-between items-center px-4 bg-black-950 text-white-600'>
            <div> 
            <img src={Logo} alt="logo image" style={{width:'60px'}} /> 
            </div> 

            <div>
                <ul className='gap-10 flex justify between'>
                   <div><li className='italic px-6 text-white  hover:shadow-slate-50 hover:text-[#AE8461] hover:underline decoration-slate-100-offset-2'><Link to="/">HOME</Link></li> </div>
                   <div><li className='italic px-6 text-white  hover:shadow-slate-50 hover:text-[#AE8461] hover:underline decoration-slate-100-offset-2'><Link to="/aboutusPage">ABOUT</Link></li> </div>
                   <div><li className='italic px-6 text-white  hover:shadow-slate-50 hover:text-[#AE8461] hover:underline decoration-slate-100-offset-2'><Link to="/projectPage">PROJECT</Link></li> </div>
                   <div><li className='italic px-6 text-white  hover:shadow-slate-50 hover:text-[#AE8461] hover:underline decoration-slate-100-offset-2'><Link to="/achievePage">ACHIVEMENTS</Link></li> </div>
                   <div><li className='italic px-6 text-white  hover:shadow-slate-50 hover:text-[#AE8461] hover:underline decoration-slate-100-offset-2'><Link to="/eventsPage">EVENTS</Link></li> </div>
                   <div><li className='italic px-6 text-white  hover:shadow-slate-50 hover:text-[#AE8461] hover:underline decoration-slate-100-offset-2'><Link to="/teamPage">TEAM</Link></li> </div>
                   <div><li className='italic px-6 text-white  hover:shadow-slate-50 hover:text-[#AE8461] hover:underline decoration-slate-100-offset-2'><Link to="/contactPage">CONTACT</Link></li> </div>
                    
                </ul>
            </div>
        </div>
    );
} 
export default navbar 
