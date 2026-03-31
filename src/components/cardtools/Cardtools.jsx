import { Suspense } from 'react';
import Card from './Card';

const info = async () =>{
  const data = await fetch('/data.json');
  return data.json();
}

const Cardtools = () => {
    const cardData = info();
    return (
        <div>
            <section className='pt-18'>
                 <div className='text-center'>
                    <h2 className='text-lg sm:text-3xl md:text-4xl font-extrabold mb-3'>Premium Digital Tools</h2>
                    <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>
                 </div>
                 <div className='button-container pt-5 flex flex-row justify-center gap-2 pb-8'>
                    <button className="btn text-white font-semibold bg-linear-65 from-[#067D68] to-[#50D5B7] rounded-full transition-all ease-in-out duration-400 hover:scale-105 btn-sm sm:btn-md sm:mx-0">Products</button>
                    <button className='btn btn-ghost font-semibold rounded-full transition-all ease-in-out duration-400 hover:scale-105 btn-sm sm:btn-md sm:mx-0'>Cart (0)</button>
                 </div>
                    <Suspense>

                     <Card cardData={cardData}></Card>
                    </Suspense>
            </section>
        </div>
    );
};

export default Cardtools;