import React from 'react'


const MagicMana = ({ isEmpty=true }) => {

  const fillColor = isEmpty ? 'bg-gradient-to-tl from-gray-700 to-zinc-700' : 'bg-gradient-to-t from-[navy] to-[blue]';

  return (
    <div className={`magicMana w-6 h-9
        ${fillColor}
        shadow-md shadow-[#111]`}
    >            
    </div>   
  )
}

export default MagicMana