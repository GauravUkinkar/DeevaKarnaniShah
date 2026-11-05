import { useState } from 'react'

import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './componant/Header/Header'
import Testimonial from './Pages/Testimonial/Testimonial'
import Footer from './componant/Footer/Footer'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Blog from './Pages/Blog/Blog'
import Charity from './Pages/Charity/Charity'


function App() {

  return (
    <>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/charity" element={<Charity />} />





        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
