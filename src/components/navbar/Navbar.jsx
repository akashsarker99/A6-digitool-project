import React from 'react';
import Cart from '../cart/Cart';

const Navbar = ({cartCount, cartTotal, setSelectOption}) => {
    return (
        <div className='sticky top-0 z-50'>

            <div className="navbar bg-base-100 w-full mx-auto border-b border-gray-400 px-4 md:px-8 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li><a href="#products">Products</a></li>
         <li><a href="#feature">Features</a></li>
         <li><a href="#pricing">Pricing</a></li>
         <li><a href="">Testimoninals</a></li>
         <li><a href="">FAQ</a></li>
      </ul>
    </div>
    <a href='banner' className="btn btn-ghost font-extrabold text-2xl md:text-3xl bg-linear-to-r from-[#067D68] to-[#50D5B7] bg-clip-text text-transparent">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <li><a href="#products">Products</a></li>
         <li><a href="#feature">Features</a></li>
         <li><a href="#pricing">Pricing</a></li>
         <li><a href="">Testimoninals</a></li>
         <li><a href="">FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end">
   <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span className={`${cartTotal === 0? "hidden" : "badge badge-sm indicator-item text-white bg-red-500 rounded-full" }`}>{cartCount}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">{cartCount} Items</span>
          <span className="text-[#067D68]">Subtotal: ${cartTotal}</span>
          <div className="card-actions">

            <a className="btn text-white bg-linear-to-r from-[#067D68] to-[#50D5B7] rounded-full transition-all ease-in-out duration-400 hover:scale-105 w-full" href="#products"><button onClick={()=> setSelectOption('cart')} >View cart</button></a>
          </div>
        </div>
      </div>
    </div>
     <button className='mx-3 font-semibold text-lg hidden sm:block hover:text-[#007c5f]'>Login</button>
           <button className= 'btn btn-sm sm:btn-md text-white font-bold bg-linear-to-r from-[#067D68] to-[#50D5B7] rounded-full ml-2 transition-all ease-in-out duration-400 hover:scale-105'>Get Started</button>
   
  </div>
</div>
         
         
        </div>
    );
};

export default Navbar;