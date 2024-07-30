import React, { useEffect } from 'react'
import Header from './Components/Header'
import Herosection from './Components/Herosection'
import Footer from './Components/Footer'
import About from './Components/About'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Categories from './Components/Categories'

export default function App() {
  useEffect(()=>{
  document.body.style.backgroundColor='#f8f9fa'
  },[])
  return (
     <div>

      <Header/>
      <Herosection/>
      <Blog/>
      <Categories/>
      <Contact/>
      <About/>
      
      <Footer/>
    </div>
  )
}
