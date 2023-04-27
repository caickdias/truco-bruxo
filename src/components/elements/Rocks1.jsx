import React from 'react'

import rocks from '../../assets/rocks-1.png';
import MovingDiv from '../MovingDiv';

const Rocks1 = () => {
  return (
    <MovingDiv>
      <img 
          src={rocks}
          alt="rocks 1"
          className='h-full w-full'
      />
    </MovingDiv>
  )
}

export default Rocks1