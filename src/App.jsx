import React, { useEffect } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './Components/Header'
import About from './Components/About'
import Blog from './Components/Blog'
import Categories from './Components/Categories'
import Hpage from './Pages/Hpage'
import Footer from './Components/Footer'

export default function App() {
  useEffect(()=>{
  document.body.style.backgroundColor='#f8f9fa'
  },[])
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
             <Route path='/' element={<Hpage/>}/>
             <Route path='/blog' element={<Blog/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/Categories' element={<Categories/>}/>
             <Route path='/Categories' element={<Categories/>}/>
             <Route path='/contect' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
     
     
      
     

    </div>
  )
}
