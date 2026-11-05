import { useState } from 'react'

import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './componant/Header/Header'
import Testimonial from './Pages/Testimonial/Testimonial'
import Footer from './componant/Footer/Footer'
import Home from './Pages/Home/Home'

function App() {

  return (
    <>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testimonial" element={<Testimonial />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
