import React from 'react';

const ReadySection = () => {
    return (
        <div className='bg-linear-to-r from-[#067D68] to-[#50D5B7] py-20 px-3.5 sm:px-0 space-y-3 flex text-center flex-col  items-center mt-10'>
            <h2 className='text-white text-2xl sm:text-3xl font-bold'>Ready to Transform Your Workflow?</h2>
            <p className='text-white text-[10px] sm:tex[12px]'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
           <div>
             <a className='btn btn-sm sm:btn-md rounded-full ml-2 transition-all ease-in-out duration-400 hover:scale-105' href="#products"><button className=' font-bold bg-linear-to-r from-[#067D68] to-[#50D5B7] bg-clip-text text-transparent '>Explore Products</button></a>
            <a href="#pricing"><button className='btn btn-sm sm:btn-md rounded-full ml-2 transition-all ease-in-out duration-400 hover:scale-105 font-bold bg-clip-text text-transparent'>View Pricing</button></a>
           </div>
           <p className='text-white text-[10px] sm:tex[12px]'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default ReadySection;