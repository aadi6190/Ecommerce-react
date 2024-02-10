import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>GET EXCLUSIVE OFFER ON YOUR EMAIL</h1>
        <p>Subscribe To our newsletter and stay updated</p>
      <div className="">
        <input type="email" placeholder='Your Email ID' />
        <button>SUBSCRIBE</button>
      </div>
    </div>
  )
}

export default NewsLetter
