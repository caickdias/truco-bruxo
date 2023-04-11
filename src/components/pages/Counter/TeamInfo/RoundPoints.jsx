import React, { useState } from 'react'

import { POINTS_DIC } from '../../../../utils/counterConstants'

const RoundPoints = ({ onSelectRoundPoints }) => {

  const [selectedRound, setSelectedRound] = useState('comum');

  return (
    <div className='flex flex-wrap items-center justify-center gap-2 '>
      <Button title="comum" selected={selectedRound === 'comum'} onSelect={setSelectedRound} />
      <Button title="truco" selected={selectedRound === 'truco'} onSelect={setSelectedRound} />
      <Button title="duque" selected={selectedRound === 'duque'} onSelect={setSelectedRound} />
      <Button title="bispo" selected={selectedRound === 'bispo'} onSelect={setSelectedRound} />
    </div>
  )
}

const Button = ({ title, selected, onSelect }) => {
  return(
    <button
      className='flex items-center justify-center p-2 min-w-[40%] border-2 border-gray-500 rounded-lg'
      style={{ backgroundColor: selected ? 'red' : 'transparent' }}
      onClick={() => onSelect(title)}
    >
      {title}
    </button>
  )
}

export default RoundPoints