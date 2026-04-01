import React from "react";
import { toast } from "react-toastify";
const Card = ({ data, cart, setCart, cartCount, setCartCount, cartTotal, setCartTotal}) => {

  const cartHandle =(card)=>{
     let itemExist = cart.find(cartitem => cartitem.name === card.name);
     if(itemExist){
      toast.error('Product already exists in cart')
      return
     }
      let newCart = [...cart, card]
      setCart(newCart);
      setCartCount(cartCount+1)
      setCartTotal(cartTotal + card.price)
      toast.success(`${card.name} is added to Cart`)

      return itemExist;
  }
 
  return (
    <div id="products" className="container w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {
      data.map((card, index) => {
        return (
          <div key={index} className="card">
            <div className="card rounded-2xl bg-base-100 border shadow border-gray-300 transition-all ease-in-out duration-400 hover:-translate-y-2 hover:border-[#50D5B7] hover:shadow-lg">
              <div className="card-body">
                <div>
                  <div className="h-14 w-14 rounded-full border border-green-200 flex items-center justify-center"> <img src={card.icon} alt="" /></div>
                  <span className={`
                  ${card.tagType === "best-seller" && "bg-[#FEF3C6] px-3 rounded-full text-[#BB4D00]"}
                  ${card.tagType ==="popular" && "bg-[#E1E7FF] px-3 rounded-full text-[#4F39F6]"}
                  ${card.tagType ==="new" && "bg-[#DBFCE7] px-3 rounded-full text-green-600"}
                  
                   absolute top-3 right-3`}>
                   {card.tag}
                  </span>
                </div>
                <div className="flex flex-col space-y-3">
                  <h2 className="text-2xl font-bold mb-2">{card.name}</h2>
                  <p className="text-[#627382]">{card.description}</p>
                  <span className="text-xl"><span className="font-bold">${card.price}</span>/{card.period}</span>
                </div>
                <ul className="mt-2 flex flex-col gap-2 text-xs">
                    {
                        card.features.map((feature,ind) =>  <li key={ind}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li> )
                    }
                 
                 
                </ul>
                <div className="mt-6">
                  <button onClick={() => cartHandle(card)} className={`btn text-white btn-block font-bold 
                    ${
                     cart.find(cartitem => cartitem.name === card.name) ? "bg-green-600 text-black": "bg-linear-65 from-[#067D68] to-[#50D5B7]"
                    } rounded-full transition-all ease-in-out duration-400 hover:scale-105`}>
                    {
                     cart.find(cartitem => cartitem.name === card.name) ? "✔ Added to cart!": "Buy Now"
                    }
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
