import React from 'react'

import '../../App.css';

const ShootingStars = () => {
  return (
    <div className='shootingStars absolute top-0 left-0 w-full h-full overflow-hidden z-0'>
        <span className='star star1 absolute top-[0%] left-[10%] w-1 h-1 bg-black rounded-full' />
        <span className='star star2 absolute top-[6%] left-[20%] w-1 h-1 bg-black rounded-full' />
        <span className='star star3 absolute top-[20%] left-[30%] w-1 h-1 bg-black rounded-full' />
        <span className='star star4 absolute top-[55%] left-[40%] w-1 h-1 bg-black rounded-full' />
        <span className='star star5 absolute top-[40%] left-[90%] w-1 h-1 bg-black rounded-full' />
        <span className='star star6 absolute top-[65%] left-[60%] w-1 h-1 bg-black rounded-full' />
        <span className='star star7 absolute top-[5%] left-[70%] w-1 h-1 bg-black rounded-full' />
        <span className='star star8 absolute top-[35%] left-[80%] w-1 h-1 bg-black rounded-full' />
    </div>
  )
}

export default ShootingStars