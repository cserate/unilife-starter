import React from 'react'
import './Banner.css'
import cover from '../../assets/cover-img.png'

function Banner() {

  //set a variable for the backgound image
  const banner = {
        backgroundImage: `url(${cover})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        height:"40vh",
        position: "relative" 
  }
  return (
    <div style= { banner } >
        <div className='banner-overlay'>
          <div className='banner-text'>
            <h1>Find student homes with bills included</h1>
            <p>A simple and faster way to search for student accommodation</p>
          </div>
        </div>
    </div>

  )
}

export default Banner