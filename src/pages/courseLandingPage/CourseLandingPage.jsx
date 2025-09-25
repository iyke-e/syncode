import React from 'react'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Carousel from './utility/Carousel'

const CourseLandingPage = () => {
  return (
    <div className='  relative w-screen max-w-[1440px] mx-auto' >
      <Hero />
      <Programs />
      <Team />
      <Testimonials />
      <Blog />

    </div>
  )
}

export default CourseLandingPage