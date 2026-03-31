
import { Suspense } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Cardtools from './components/cardtools/Cardtools'
import Navbar from './components/navbar/Navbar'
import Pricing from './components/pricingCards/Pricing'
import Stats from './components/stats/Stats'
import StepCards from './components/stepcard/StepCards'
import Footer from './components/footer/Footer'

const priceCard = async () =>{
    const res = await fetch('/pricingData.json')
    return res.json();
}

function App() {
const response = priceCard();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
       <Cardtools></Cardtools>
       <StepCards></StepCards>

       <Suspense fallback={<div className='text-center'><span className="loading loading-spinner loading-xl"></span></div>}>
       <Pricing response={response}></Pricing>

       </Suspense>

       <Footer></Footer>
    </>
  )
}

export default App
