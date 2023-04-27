import React from 'react'

import Plx from 'react-plx';

import Rocks1 from '../../components/elements/Rocks1';
import Rocks2Left from '../../components/elements/Rocks2Left';
import Rocks2Right from '../../components/elements/Rocks2Right';
import Mountains from '../../components/elements/Mountains';
import SkyLeft from '../../components/elements/SkyLeft';
import SkyRight from '../../components/elements/SkyRight';

import { rocks1PlxData, rocks2LeftPlxData, rocks2RightPlxData, mountainsPlxData, skyLeftPlxData, skyRightPlxData, logoPlxData } from '../../../src/data/parallaxData/heroScene';
import Logo from '../../components/Logo';
import MovingClouds from '../elements/MovingClouds';
import ShootingStars from '../elements/ShootingStars';

const Hero = () => {
  return (
    <>
    <Plx className='absolute w-full h-full z-50' parallaxData={rocks1PlxData}>
        <Rocks1 />
      </Plx>

      <Plx className='absolute w-full h-full z-40' parallaxData={rocks2LeftPlxData}>
        <Rocks2Left />
      </Plx>
      
      <Plx className='absolute w-full h-full z-40' parallaxData={rocks2RightPlxData}>
        <Rocks2Right />
      </Plx>

      <Plx className='absolute w-full h-full z-30' parallaxData={mountainsPlxData}>
        <Mountains />
      </Plx>
      
      <Plx className='absolute w-full h-full z-30' parallaxData={skyLeftPlxData}>
        <SkyLeft />
      </Plx>
      
      <Plx className='absolute w-full h-full z-30' parallaxData={skyRightPlxData}>
        <SkyRight />
      </Plx>

      <Plx className='absolute w-full h-full z-[100]' parallaxData={logoPlxData}>
        <Logo />
      </Plx>
      
      <Plx className='absolute w-full h-full z-[100]' parallaxData={logoPlxData}>
        <MovingClouds />
      </Plx>

      <Plx className='absolute w-full h-full z-0' parallaxData={logoPlxData}>
        <ShootingStars />
      </Plx>
    </>
  )
}

export default Hero