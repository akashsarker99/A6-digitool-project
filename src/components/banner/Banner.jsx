import React from 'react';
import bannerimg from '../../assets/banner.png'
import { FaDotCircle, FaPlay } from 'react-icons/fa';
import { CiPlay1 } from 'react-icons/ci';
const Banner = () => {
    return (
        <div>
            <div className="hero w-11/12 mx-auto mt-8">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerimg}
      className="max-w-sm rounded-lg"
    />
    <div className=' space-y-3'>
        
            <h2 className='bg-[#E1E7FF] w-11/12 md:w-[300px] text-center p-2 rounded-full font-semibold text-[#4F39F6] flex items-center justify-center gap-2'><FaDotCircle></FaDotCircle> New: AI-Powered Tools Available</h2>
      <h1 className="text-5xl font-bold leading-tight">Supercharge Your<br></br>Digital Workflow</h1>
      <p className='text-[#627382]' >
       Access premium AI tools, design assets, templates, and productivity<br></br>
software—all in one place. Start creating faster today.<br></br>

Explore Products

      </p>
     <div className='flex gap-3'>
         <button className="btn text-white font-bold bg-linear-65 from-[#4F39F6] to-[#9514FA] rounded-full transition-all ease-in-out duration-400 hover:scale-105">Explore Products</button>
         <div className='p-[1px] rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] inline-block'>

        <button className="btn font-bold border-0 text-[#4F39F6] rounded-full hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:text-white transition-all ease-in-out duration-400 hover:scale-105"><FaPlay></FaPlay> Watch Demo</button>
         </div>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;