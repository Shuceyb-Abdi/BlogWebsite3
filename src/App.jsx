import React, { useEffect } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './Components/Header'
import About from './Components/About'
import Blog from './Components/Blog'
import Categories from './Components/Categories'
import Contect from './Components/Contect'
import Footer from './Components/Footer'
import Mainpage from './Pages/Mainpage'

export default function App() {
  useEffect(()=>{
  document.body.style.backgroundColor='#f8f9fa'
  },[])
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
             <Route path='/' element={<Mainpage/>}/>
             <Route path='/blog' element={<Blog/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/Categories' element={<Categories/>}/>
             <Route path='/Categories' element={<Categories/>}/>
             <Route path='/contect' element={<Contect/>}/>
        </Routes>
        <Footer/>
      </Router>
     
     
     </div>
  )
}
