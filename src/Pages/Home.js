import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Adventure from  '../Components/Adventure'
import Underline from '../Components/Underline'
import Metabnb from '../Components/Metabnb'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Underline/>
      <Adventure/>
      <Metabnb/>
      <Footer/>
    </div>
  )
}

export default Home