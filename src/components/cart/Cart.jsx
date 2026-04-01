import React from 'react';
import { TiDelete } from 'react-icons/ti';
import { toast } from 'react-toastify';

const Cart = ({cart, setCart, cartCount, setCartCount, cartTotal, setCartTotal}) => {
    const cartDeleteHandle =(cartCard)=>{
        let newcart = cart.filter(cartitem => cartitem.name !== cartCard.name);
        setCart(newcart);
        setCartCount(cartCount-1);
        setCartTotal(cartTotal-cartCard.price);
    }

    function proceedcheck(){
        alert('Click ok to Proceed');
        toast.success('Checkout Succesfull')
        setCart([]);
        setCartCount(0);
        setCartTotal(0);
    }
    return (
        <div>
           <div className='container mx-auto px-10'>
               <div className='p-5 sm:p-8 border border-gray-300 shadow rounded-2xl '>
                <h2 className='text-xl sm:text-2xl font-bold'>Your Cart</h2>
               
              <div className='space-y-3.5 mt-5'>
                 {
                cart.map(cartCard =>  <div className='flex justify-between items-center bg-[#F9FAFC] p-5 rounded-2xl shadow'>
                    <div className='flex gap-6 items-center'>
                       <span className='h-14 w-14 rounded-full border flex justify-center items-center border-gray-300'><img src={cartCard.icon} alt="" /></span>
                        <div>
                            <h2 className='font-bold text-sm sm:text-xl'>{cartCard.name}</h2>
                            <p className='text-[#627382] font-bold text-sm sm:text-lg'>${cartCard.price}</p>
                        </div>
                    </div>
                        <span onClick={()=> cartDeleteHandle(cartCard)} className='btn h-10 w-10 rounded-full text-2xl text-red-500'><button><TiDelete></TiDelete></button></span>
                </div>)
               }
              </div>
              <div className='my-3 flex justify-between'>
                <p className='font-semibold'>Total:</p>
                <p className='font-bold text-lg'>${cartTotal}</p>
              </div>
              <button onClick={()=> proceedcheck()} className='btn text-white btn-block font-bold bg-linear-65 from-[#067D68] to-[#50D5B7] rounded-full transition-all ease-in-out duration-400 hover:scale-102'>Proceed To Checkout</button>
            </div>
           </div>
        </div>
    );
};

export default Cart;