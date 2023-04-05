import { useState } from 'react'
import './App.css'

import Counter from './components/pages/Counter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex ">
      <Counter />
    </div>
  )
}

export default App
