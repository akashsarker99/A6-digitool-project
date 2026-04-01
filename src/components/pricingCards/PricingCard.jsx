import React from 'react';

const PricingCard = ({card}) => {
 
    return (
        <div>
            <div className={`card ${card.tagType === 'popular' ? 'bg-linear-to-r from-[#067D68] to-[#50D5B7] text-white scale-105': 'bg-[#F2F2F2]'} border shadow border-gray-300 rounded-2xl h-full flex flex-col relative`}>
              <div className="card-body">
                <div>
                  <span className={`
                    ${card.tagType ==="popular" && "bg-[#FEF3C6] px-3 rounded-full text-[#BB4D00]"}
                 absolute -top-3 left-1/3 `}>
                   {card.tag}
                  </span>
                </div>
                <div className="flex flex-col space-y-3">
                  <h2 className="text-2xl font-bold mb-2">{card.name}</h2>
                  <p className={`${card.tagType === "popular" || "text-[#627382]"}`}>{card.description}</p>
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
                <div className="mt-auto pt-6">
                  <button className={`btn btn-block font-bold ${card.tagType === "popular"? 'bg-white text-[#067D68]' : 'bg-linear-65 from-[#067D68] to-[#50D5B7] text-white'}  rounded-full transition-all ease-in-out duration-400 hover:scale-105`}>
                   {card.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
      
    );
};

export default PricingCard;