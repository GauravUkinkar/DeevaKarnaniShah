import React from 'react'
import Hero from '../../componant/Hero/Hero'
import About from '../../componant/About/About'
import Video from '../../componant/Video/Video'
import Books from '../../assets/Book/Books'
import BF from '../../componant/Before-footer/BF'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Video />
      <Books />
      <BF />
    </>
  )
}

export default Home
