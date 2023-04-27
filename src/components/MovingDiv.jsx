import React, { useState, useRef, useEffect } from 'react'

const MovingDiv = ({ children, x=200, y=200, speed }) => {

    return (
        <div 
            className='w-full h-full transition-all duration-1000'
            style={{
                position: 'absolute',
            }}
        >
            { children }
        </div>
    )
}

export default MovingDiv