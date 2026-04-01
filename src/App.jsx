
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Cardtools from './components/cardtools/Cardtools'
import Navbar from './components/navbar/Navbar'
import Pricing from './components/pricingCards/Pricing'
import Stats from './components/stats/Stats'
import StepCards from './components/stepcard/StepCards'
import Footer from './components/footer/Footer'
import CardUpperSide from './components/cardtools/CardUpperSide'
import { ToastContainer } from 'react-toastify'
import ReadySection from './components/readysection/ReadySection'

const priceCard = async () =>{
    const res = await fetch('/pricingData.json')
    return res.json();
}
const info = async () =>{
  const data = await fetch('/data.json');
  return data.json();
}
function App() {
const response = priceCard();
const cardData = info();
const [cart, setCart] =useState([]);
const [selectOption, setSelectOption] = useState('product');
const [cartCount, setCartCount] = useState(0);
const [cartTotal, setCartTotal] = useState(0);
  return (
    <>
      <Navbar cartCount={cartCount} cartTotal={cartTotal} selectOption={selectOption} setSelectOption={setSelectOption}></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <CardUpperSide setSelectOption={setSelectOption} selectOption={selectOption}
                     cartCount={cartCount}></CardUpperSide>

      <Suspense fallback={<div className='text-center'><span className="loading loading-spinner loading-xl"></span></div>}>
       <Cardtools cart={cart} setCart={setCart} cardData={cardData}
                  selectOption={selectOption}
                  cartCount={cartCount} setCartCount={setCartCount}
                  cartTotal={cartTotal} setCartTotal={setCartTotal}
                  
       ></Cardtools>
      </Suspense>
       <StepCards></StepCards>

       <Suspense fallback={<div className='text-center'><span className="loading loading-spinner loading-xl"></span></div>}>
       <Pricing response={response}></Pricing>

       </Suspense>
        
        <ReadySection></ReadySection>
       <Footer></Footer>

       <ToastContainer></ToastContainer>
    </>
  )
}

export default App
