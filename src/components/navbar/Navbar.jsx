import React from 'react';

const Navbar = () => {
    return (
        <div>

            <div className="navbar bg-base-100 w-full mx-auto border-b border-gray-400 px-13">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li><a href="">Products</a></li>
         <li><a href="">Features</a></li>
         <li><a href="">Pricing</a></li>
         <li><a href="">Testimoninals</a></li>
         <li><a href="">FAQ</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost font-extrabold text-2xl md:text-3xl bg-linear-65 from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <li><a href="">Products</a></li>
         <li><a href="">Features</a></li>
         <li><a href="">Pricing</a></li>
         <li><a href="">Testimoninals</a></li>
         <li><a href="">FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end">
   <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span className="badge badge-sm indicator-item text-white bg-red-500 rounded-full">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
     <button className='ml-3 text-lg '>Login</button>
           <button className= 'btn text-white font-bold bg-linear-65 from-[#4F39F6] to-[#9514FA] rounded-full ml-2 transition-all ease-in-out duration-400 hover:scale-105'>Get Started</button>
   
  </div>
</div>
         
         
        </div>
    );
};

export default Navbar;