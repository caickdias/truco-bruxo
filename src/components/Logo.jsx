import React from 'react'

import logo from '../assets/logo.png';

const Logo = () => {
  return (
    <img 
        src={logo}
        alt="logo"
        className='absolute w-56 m-auto left-0 right-0 top-[25%] text-center z-[100]'
    />
  )
}

export default Logo