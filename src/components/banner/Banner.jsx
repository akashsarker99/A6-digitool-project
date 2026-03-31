import React from 'react';
import bannerimg from '../../assets/banner.png'
import { FaDotCircle, FaPlay } from 'react-icons/fa';
import { CiPlay1 } from 'react-icons/ci';
const Banner = () => {
    return (
        <div>
            <div className="hero w-11/12 mx-auto my-8">
  <div className="hero-content flex-col lg:flex-row-reverse lg:gap-8">
    <img
      src={bannerimg}
      className="max-w-sm rounded-lg w-[80%]"
    />
    <div className='space-y-3 text-center sm:text-left'>
        
          <button className='btn mx-auto sm:mx-0 shadow-none border-none bg-[#dbfff7] px-4 text-center py-1 rounded-full font-semibold text-[#067D68] flex items-center justify-center gap-2 text-sm sm:text-[16px]'><FaDotCircle></FaDotCircle> New: AI-Powered Tools Available</button>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">Supercharge Your Digital Workflow</h1>
      <p className='text-[#627382] text-xs sm:text-lg' >
       Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.
Explore Products

      </p>
     <div className='flex gap-3 flex-col sm:flex-row'>
         <button className="btn text-white font-bold bg-linear-65 from-[#067D68] to-[#50D5B7] rounded-full transition-all ease-in-out duration-400 hover:scale-105 btn-sm sm:btn-md mx-auto sm:mx-0">Explore Products</button>
         <div className='p-[1px] rounded-full bg-linear-to-r from-[#067D68] to-[#50D5B7] inline-block btn-sm sm:btn-md mx-auto sm:mx-0'>

        <button className="btn font-bold border-0 text-[#067D68] rounded-full hover:bg-linear-to-r from-[#067D68] to-[#50D5B7] hover:text-white transition-all ease-in-out duration-400 hover:scale-105 btn-sm sm:btn-md"><FaPlay></FaPlay> Watch Demo</button>
         </div>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;