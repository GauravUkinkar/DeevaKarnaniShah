import { useState } from 'react'

import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './componant/Header/Header'
import Testimonial from './Pages/Testimonial/Testimonial'

function App() {

  return (
    <>
     <BrowserRouter >
     <Header />
     <Routes>
      <Route path="/" element={<Testimonial/>} />

      
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
