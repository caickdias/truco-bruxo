import React from 'react'

const BloodBadge = ({ isEmpty=true }) => {

  const fillColor = isEmpty ? 'bg-gradient-to-tl from-gray-700 to-zinc-700' : 'bg-gradient-to-tl from-[maroon] to-[darkred]';

  return (    
    <div className={`bloodBadge w-8 h-8 rotate-45 m-1
        ${fillColor}
        shadow-md shadow-[#111]
      `}
    >            
    </div>    
  )
}

export default BloodBadge