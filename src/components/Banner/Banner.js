import React from 'react'
import './Banner.css'
import cover from 'assets/cover-img.png'

function Banner() {

  return (
    <div className='banner-img'>Banner
    <img src={cover} />
    <div className='banner-overlay'>
        <h1>Find student homes with bills included</h1>
        <h3>A simple and faster way to search for student accommodation</h3>
    </div>

    </div>
  )
}

export default Banner