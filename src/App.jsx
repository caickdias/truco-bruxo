import { useState } from 'react'
import './App.css'
import Plx from 'react-plx';

import Counter from './components/pages/Counter';
import Rocks1 from './components/elements/Rocks1';

const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 1,
        endValue: 3,
        property: "scale",
      },
    ],
  },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative h-screen w-screen'>
      <Rocks1 />
    </div>
  )
}

export default App
