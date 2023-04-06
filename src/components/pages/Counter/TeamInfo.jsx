import React from 'react'

import BloodBadge from '../../badges/BloodBadge';
import MagicMana from '../../badges/MagicMana';

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

const TeamName = ({id}) => <h1 className='text-3xl text-left font-bold'>Time {id}</h1>;

const BloodPoints = ({ bloodPoints }) => {
    
    return(
        <div className='flex flex-row my-4'>            
        {
            new Array(bloodPoints).fill(1).map((blood, index) => <BloodBadge key={index} />)
        }
        </div>
    );
}

const MagicPoints = ({ magicPoints }) => {
    return(
        <div className='flex flex-row my-4 gap-2'>            
        {
            new Array(magicPoints).fill(1).map((blood, index) => <MagicMana key={index} />)
        }
        </div>
    );
}

export default TeamInfo