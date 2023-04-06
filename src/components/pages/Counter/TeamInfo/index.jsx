import React from 'react'

import TeamName from './TeamName';
import MagicPoints from './MagicPoints';
import BloodPoints from './BloodPoints';

const TeamInfo = ({ team }) => {
  return (    
    <div
        className='flex flex-col w-full px-8'
    >
        <TeamName id={team.id} />
        
        <MagicPoints magicPoints={team.magicPoints} />

        <BloodPoints bloodPoints={team.bloodPoints} />        

    </div>
  )
}


export default TeamInfo