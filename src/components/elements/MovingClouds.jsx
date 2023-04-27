import React from 'react'

import '../../App.css';

import cloud1 from '../../assets/clouds/cloud1.png';
import cloud2 from '../../assets/clouds/cloud2.png';
import cloud3 from '../../assets/clouds/cloud3.png';
import cloud4 from '../../assets/clouds/cloud4.png';
import cloud5 from '../../assets/clouds/cloud5.png';

const MovingClouds = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-[100]'>
        <img className='cloud1 absolute bottom-0 max-w-full' src={cloud1} />                
        <img className='cloud3 absolute bottom-0 max-w-full' src={cloud3} />                
    </div>
  )
}

export default MovingClouds