import { useState } from 'react'
import './App.css'
import Hero from './components/scenes/Hero'


function App() {

  return (
    <div className='relative h-screen w-screen max-h-screen max-w-screen'>

      <Hero />      

      <div className='absolute top-[2000px] text-black'>opa</div>
    </div>
  )
}

export default App
