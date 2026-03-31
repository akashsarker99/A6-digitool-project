
import { Suspense } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Cardtools from './components/cardtools/Cardtools'
import Navbar from './components/navbar/Navbar'
import Stats from './components/stats/Stats'


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
       <Cardtools></Cardtools>
    </>
  )
}

export default App
