import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className='bg-[#101727] '>
               <section className='container mx-auto flex flex-col md:flex-row 
                      md:justify-between gap-4 justify-around mt-8 p-10'>
                   <div className='text-center md:text-left'>
                    <h2 className='text-white sm:text-3xl font-bold mb-2'>DigiTools</h2>
                    <p className='text-white text-sm opacity-90'>Premium digital tools for creators, <br></br>professionals, and businesses. Work smarter<br></br> with our suite of powerful tools.</p>
                </div>
               
                  <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 text-center md:text-left'>
                    
                      <div><h2 className='text-xl text-white mb-2'>Product</h2>
                     <ul className='space-y-2'>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                        <li>Integrations</li>
                     </ul>
                    </div>
                    <div><h2 className='text-xl text-white mb-2'>Company</h2>
                     <ul className='space-y-2'>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Carriers</li>
                        <li>Press</li>
                     </ul>
                    </div>
                    <div><h2 className='text-xl text-white mb-2'>Resources</h2>
                     <ul className='space-y-2'>
                        <li>Documentation</li>
                        <li>Help Center</li>
                        <li>Community</li>
                        <li>Contact</li>
                     </ul>
                    </div>
                  </div>
   
              
                <div className='text-center md:text-left'>
                    <h2 className='text-xl text-white mb-2'>Social Links</h2>
                     <div className='flex gap-4 justify-center md:justify-start'>
                        <FaInstagram className='text-white text-3xl hover:text-pink-600'></FaInstagram>
                    <FaFacebook className='text-white text-3xl hover:text-blue-600'></FaFacebook>
                    <FaSquareXTwitter className='text-white text-3xl hover:text-gray-600'></FaSquareXTwitter>
                     </div>
                </div>
                
               </section>

               <div className='border-t border-gray-400 py-4 px-8 container mx-auto flex flex-col md:flex-row items-center gap-3 md:justify-between'>
                    <p className='text-white text-sm opacity-50'>&copy; 2026 Digitools. All rights reserved.</p>
                    <div className='flex gap-6'>
                     <p className='text-white text-sm opacity-50'>Privacy Policy</p>
                     <p className='text-white text-sm opacity-50'>Terms of Service</p>
                     <p className='text-white text-sm opacity-50'>Cookies</p>
                    </div>
               </div>
            </footer>
        </div>
    );
};

export default Footer;