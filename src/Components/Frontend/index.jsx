import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

import About from './About'
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects'


const index = () => {
  return (
   <>
   


<Header/>
<main>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
   
      
   </Routes>


</main>


   </>
  )
}

export default index
