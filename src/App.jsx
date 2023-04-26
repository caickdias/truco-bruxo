import { useState } from 'react'
import './App.css'
import Plx from 'react-plx';

import Counter from './components/pages/Counter';
import Rocks1 from './components/elements/Rocks1';
import Rocks2Left from './components/elements/Rocks2Left';
import Rocks2Right from './components/elements/Rocks2Right';
import Mountains from './components/elements/Mountains';
import SkyLeft from './components/elements/SkyLeft';
import SkyRight from './components/elements/SkyRight';

import { rocks1PlxData, rocks2LeftPlxData, rocks2RightPlxData, mountainsPlxData } from '../src/data/parallaxData/heroScene';

function App() {

  return (
    <div className='relative h-screen w-screen max-h-screen max-w-screen'>

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
      
      <Plx className='absolute w-full h-full z-30' parallaxData={rocks2LeftPlxData}>
        <SkyLeft />
      </Plx>
      
      <Plx className='absolute w-full h-full z-30' parallaxData={rocks2LeftPlxData}>
        <SkyRight />
      </Plx>

      <div className='absolute top-[2000px]'>opa</div>
    </div>
  )
}

export default App
