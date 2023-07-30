import React, { useState } from 'react'

const Testimonials = () => {

  const[currentIndex,setCurrentIndex]=useState(0)

  const testimonials=[
    {
      quote:'This is the best product i have ever used',
      author:'Jane Doe',
    },
    {
      quote:'I highly reccomend using this product for everyone',
      author:'Dean Ambrose',
    },
    {
      quote:'This product is a life saver!!!!! GET ONE',
      author:'Roman Reigns',
    },
  ]

  const handlePrevClick=()=>{
    setCurrentIndex((currentIndex+testimonials.length-1) % testimonials.length)
  }

  const handleNextClick=()=>{
    setCurrentIndex((currentIndex+1) % testimonials.length)
  }

  return (
    <div className='testimonials'>
<div className='testimonials-quote'>
  ~{testimonials[currentIndex].quote}
</div>
<div className='testimonials-author'>
- {testimonials[currentIndex].author}
</div>
<testimonials className='testimonials-nav'>
  <button onClick={handlePrevClick}>Prev</button>
  <button onClick={handleNextClick}>Next</button>
</testimonials>
    </div>
  )
}

export default Testimonials