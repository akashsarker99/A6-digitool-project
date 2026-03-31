import React from 'react';
import Profile from '../../assets/user-01.png'
import Product from '../../assets/package.png'
import Rocket from '../../assets/rocket-02.png'
const StepCards = () => {
    return (
        <div>
            <div className='bg-[#F9FAFC] container mx-auto mt-14 pt-13 text-center px-7'>
                <h2 className='text-lg sm:text-3xl md:text-4xl font-extrabold mb-3'>Get Started in 3 Steps</h2>
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>

                <div className='step-card-container mt-8 lg:w-11/12 grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 mx-auto gap-8'>
                    <div className='border border-gray-300 flex flex-col items-center py-20 space-y-3 rounded-2xl relative bg-white px-6'>
                        <span className='h-10 w-10 flex items-center justify-center font-bold bg-linear-to-r from-[#067D68] to-[#50D5B7] rounded-full text-white absolute right-5 top-5'>01</span>
                        <div className='bg-[#dbfff7] h-20 w-20 rounded-full flex justify-center items-center p-4'>
                           <img src={Profile} alt="" />
                        </div>
                        <h2 className='text-xl font-bold'>Create Account</h2>
                        <p className='text-[#627382] text-sm'>Sign up for free in seconds. No credit card<br></br> required to get started.</p>
                    </div>

                    <div className='border border-gray-300 flex flex-col items-center py-20 space-y-3 rounded-2xl relative bg-white px-6'>
                        <span className='h-10 w-10 flex items-center justify-center font-bold bg-linear-to-r from-[#067D68] to-[#50D5B7] rounded-full text-white absolute right-5 top-5'>01</span>
                        <div className='bg-[#dbfff7] h-20 w-20 rounded-full flex justify-center items-center p-4'>
                           <img src={Product} alt="" />
                        </div>
                        <h2 className='text-xl font-bold'>Choose Products</h2>
                        <p className='text-[#627382] text-sm'>Browse our catalog and select the toolsthat fit your needs.</p>
                    </div>

                    <div className='border border-gray-300 flex flex-col items-center py-20 space-y-3 rounded-2xl relative bg-white px-6'>
                        <span className='h-10 w-10 flex items-center justify-center font-bold bg-linear-to-r from-[#067D68] to-[#50D5B7] rounded-full text-white absolute right-5 top-5'>01</span>
                        <div className='bg-[#dbfff7] h-20 w-20 rounded-full flex justify-center items-center p-4'>
                           <img src={Rocket} alt="" />
                        </div>
                        <h2 className='text-xl font-bold'>Start Creating</h2>
                        <p className='text-[#627382] text-sm'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepCards;