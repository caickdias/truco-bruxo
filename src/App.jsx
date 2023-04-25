import { useState } from 'react'
import './App.css'
import Plx from 'react-plx';

import Counter from './components/pages/Counter';
import Rocks1 from './components/elements/Rocks1';
import Rocks2 from './components/elements/Rocks2';

const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 1,
        endValue: 2,
        property: "scale",
      },
    ],
  },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative h-screen w-screen max-h-screen max-w-screen'>
      <Plx className='absolute w-full h-full z-50' parallaxData={parallaxData}>
        <Rocks1 />
      </Plx>

      <Plx className='absolute w-full h-full z-40' parallaxData={parallaxData}>
        <Rocks2 />
      </Plx>
    </div>
  )
}

export default App
