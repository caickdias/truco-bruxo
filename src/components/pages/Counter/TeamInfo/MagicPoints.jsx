import React from 'react'

import MagicMana from '../../../badges/MagicMana';

import { GAME_POINTS_TO_FINISH } from '../../../../utils/counterConstants';
import { getMagicPoints } from '../../../../utils/functions';

const MagicPoints = ({ magicPoints }) => {

    const MAX_MAGIC_POINTS = getMagicPoints(GAME_POINTS_TO_FINISH);
    const totalMagicPointsIcons = new Array(MAX_MAGIC_POINTS).fill(1);    

    return(
        <div className='flex flex-row mt-4 mb-2 ml-2 gap-2'>            
        {
            totalMagicPointsIcons.map((blood, index) => { 
                return (
                    <MagicMana 
                        key={index} 
                        isEmpty={index > magicPoints-1}
                    />
                )
            })
        }
        </div>
    );
}

export default MagicPoints