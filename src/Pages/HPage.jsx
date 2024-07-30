import React from 'react'
import Herosection from '../Components/Herosection'
import Blog from '../Components/Blog'
import About from '../Components/About'
import Categories from '../Components/Categories'
import Contect from '../Components/Contect'

export default function Hpage() {
  return (
    <div>
    <Herosection/>
    <Blog/>
    <About/>
    <Categories/>
    <Contect/>
    </div>
  )
}
