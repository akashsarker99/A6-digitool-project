import React from 'react';

const CardUpperSide = ({selectOption, setSelectOption, cartCount}) => {
    return (
        <div>
             <div id='products' className='text-center pt-18 scroll-mt-2'>
                                <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3'>Premium Digital Tools</h2>
                                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>
                             </div>
                             <div className='flex justify-center'>
                                <div className='button-container mt-5 flex justify-between gap-2 mb-8 w-auto border border-gray-300 shadow p-1 rounded-full'>
            
                                <button onClick={() => setSelectOption('product')} className={`btn 
                                    ${selectOption === 'product'? "bg-linear-to-r from-[#067D68] to-[#50D5B7] text-white" : "btn-ghost" }  font-semibold  rounded-full transition-all ease-in-out duration-400 hover:scale-98 btn-sm sm:btn-md sm:mx-0`}>Products</button>
            
                                <button onClick={() => setSelectOption('cart')} className={`btn  
                                    ${selectOption === 'cart'? "bg-linear-to-r from-[#067D68] to-[#50D5B7] text-white" : "btn-ghost" } font-semibold rounded-full transition-all ease-in-out duration-400 hover:scale-98 btn-sm sm:btn-md sm:mx-0`}>Cart ({cartCount})</button>
                             </div>
                             </div>
        </div>
    );
};

export default CardUpperSide;