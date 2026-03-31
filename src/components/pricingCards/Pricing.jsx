import React, { use } from 'react';
import PricingCard from './PricingCard';

const Pricing = ({response}) => {
    
    const pricingCard = use(response);
    console.log(pricingCard)
    return (
        <div>
             <div className='container mx-auto mt-14 sm:py-8 text-center px-7'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3'>Simple, Transparent Pricing</h2>
                <p className='text-[#627382] text-sm'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                
            
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch container lg:w-11/12 mx-auto justify-center gap-8 mt-8 p-4'>
                    {
                        pricingCard.map(card => <PricingCard key={card.id} card={card}></PricingCard>)
                    }
                </div>
        </div>
    );
};

export default Pricing;