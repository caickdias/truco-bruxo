import React, { useState } from 'react'

import { POINTS_DIC } from '../../../../utils/counterConstants'

const RoundPoints = ({ onSelectRoundPoints }) => {

  const [selectedRound, setSelectedRound] = useState('comum');

  return (
    <div className='flex flex-wrap items-center justify-center gap-2 '>
      <Button title="Comum" name="comum" selected={selectedRound === 'comum'} setSelectedRound={setSelectedRound} onSelectRoundPoints={onSelectRoundPoints} />
      <Button title="Truco" name="truco" selected={selectedRound === 'truco'} setSelectedRound={setSelectedRound} onSelectRoundPoints={onSelectRoundPoints} />
      <Button title="Duque" name="duque" selected={selectedRound === 'duque'} setSelectedRound={setSelectedRound} onSelectRoundPoints={onSelectRoundPoints} />
      <Button title="Bispo" name="bispo" selected={selectedRound === 'bispo'} setSelectedRound={setSelectedRound} onSelectRoundPoints={onSelectRoundPoints} />
    </div>
  )
}

const Button = ({ title, name, selected, setSelectedRound ,onSelectRoundPoints }) => {
  return(
    <button
      className='flex items-center justify-center p-2 min-w-[40%] border-2 border-gray-500 rounded-lg'
      style={{ borderColor: selected ? 'red' : '' }}
      onClick={() => {
        onSelectRoundPoints(POINTS_DIC[name]);
        setSelectedRound(name);
      }}
    >
      {title}
    </button>
  )
}

export default RoundPoints