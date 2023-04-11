import React from 'react'

import TeamName from './TeamName';
import MagicPoints from './MagicPoints';
import BloodPoints from './BloodPoints';

const TeamInfo = ({ id, team, onChangeScore }) => {
  return (    
    <div
        className='relative flex items-center justify-center flex-col w-full border-2 border-zinc-500 rounded-xl px-4 py-2 mt-2'
    >
        <ScoreBoard id={id} onChangeScore={onChangeScore} />

        <TeamName id={team.id} />
        
        <MagicPoints magicPoints={team.magicPoints} />

        <BloodPoints bloodPoints={team.bloodPoints} />        

    </div>
  )
}

const ScoreBoard = ({ id, onChangeScore }) => {
  return(
    <div className='absolute flex w-full h-full z-50'>
      
      <button className='flex flex-1 px-2'
        onClick={() => onChangeScore('remove', id)}
      >
        <h1 className='text-5xl'>-</h1>
      </button>
      
      <button className='flex flex-1 justify-end px-2'
        onClick={() => onChangeScore('add', id)}
      >
        <h1 className='text-4xl'>+</h1>
      </button>
      
    </div>
  )
}

export default TeamInfo