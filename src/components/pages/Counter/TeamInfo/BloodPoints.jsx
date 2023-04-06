import React from 'react'

import BloodBadge from '../../../badges/BloodBadge';

import { BLOOD_POINTS_TO_MAGIC } from '../../../../utils/counterConstants';

const BloodPoints = ({ bloodPoints }) => {

    const MAX_BLOOD_POINTS = BLOOD_POINTS_TO_MAGIC;
    const totalBloodPoints = new Array(MAX_BLOOD_POINTS).fill(1);
    
    return(
        <div className='flex flex-row mt-2 mb-4'>            
        {
            totalBloodPoints.map((blood, index) => { 
                return (
                    <BloodBadge 
                        key={index} 
                        isEmpty={index > bloodPoints-1}
                    />
                )
            })
        }
        </div>
    );
}
export default BloodPoints