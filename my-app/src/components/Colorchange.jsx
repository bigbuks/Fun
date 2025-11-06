import React from 'react'
import { useState } from 'react';

function Colorchange() {
    const [color, setColor] = useState(0);

    function changeColor() {
        setColor(color + 1);
    }

    return (

        <div>
            <div className='bg-red-600 h-[30vh] w-[20%] m-auto mt-30 rounded-2xl cursor-pointer' onClick={changeColor} style={{ backgroundColor: color % 2 === 0 ? 'red' : 'blue' }}>

            </div>
        </div>
    )
}

export default Colorchange