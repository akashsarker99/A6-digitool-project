
import './App.css'
import Banner from './components/banner/Banner'
import Cardtools from './components/cardtools/Cardtools'
import Navbar from './components/navbar/Navbar'
import Stats from './components/stats/Stats'
import StepCards from './components/stepcard/StepCards'


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
       <Cardtools></Cardtools>
       <StepCards></StepCards>
    
    </>
  )
}

export default App
