import { Suspense, use } from 'react';
import Card from './Card';
import Cart from '../cart/Cart';



const Cardtools = ({cart, setCart, cardData, selectOption, cartCount, setCartCount, cartTotal, setCartTotal}) => {
  const data = use(cardData);
    
    return (
        <div>
            <section>
                
                    <Suspense fallback={<div className='text-center'><span className="loading loading-spinner loading-xl"></span></div>}>
                        {
                            selectOption === 'product' ?  
                            <Card 
                            data={data} 
                            cart={cart}
                            setCart={setCart}
                            cartCount={cartCount} setCartCount={setCartCount}
                            cartTotal={cartTotal} setCartTotal={setCartTotal}
                            ></Card> : 
                            <Cart cart={cart} setCart={setCart}
                                  cartCount={cartCount} setCartCount={setCartCount}
                                  cartTotal={cartTotal} setCartTotal={setCartTotal}
                                              ></Cart>
                        }
                    
                    </Suspense>
            </section>
        </div>
    );
};

export default Cardtools;