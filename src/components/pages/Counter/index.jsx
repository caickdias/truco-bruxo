import React, { useState } from 'react'
import BloodBadge from '../../badges/BloodBadge'
import MagicMana from '../../badges/MagicMana'

const index = () => {

    

    return (
        <div className='flex flex-col w-screen h-screen items-center justify-center'>
            <BloodBadge />

            <MagicMana />
        </div>
    )
}

export default index