import React from 'react';

const Stats = () => {
    return (
        <div>
            <div className='bg-linear-to-r from-[#067D68] to-[#50D5B7] py-10 grid grid-cols-3 items-center justify-around'>
                <div className='text-center border-r border-gray-300' >
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2'>50K+</h1>
                    <p className='text-white opacity-80'>Active Users</p>
                </div>
                <div className='text-center border-r border-gray-300'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2'>200+</h1>
                    <p className='text-white opacity-80'>Premium Tools</p>
                </div>
                <div className='text-center border-r border-gray-300'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2'>4.9</h1>
                    <p className='text-white opacity-80'>Rating</p>
                </div>
               
            </div>
        </div>
    );
};

export default Stats;