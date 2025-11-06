import React, { useEffect } from 'react'
import { useState } from 'react';;


function Change() {

    const [count, setCount] = useState(0);

    // const add = () =>{
    //     setCount(c => c + 1)
    // }

    function add() {
        setCount(count + 1);
    }
    function subtract() {
        count === 0 ? setCount(0) : setCount(count - 1);
    }
    function restart() {
        setCount(0)
    }

    useEffect(() => {
        console.log(`you added ${count}`)
    }, [count]);

    return (

        <div className='bg-blue-800 text-white p-8 rounded-2xl w-[45%] h-[40vh] flex flex-col justify-center mt-10 m-auto'>

            <h1 className='text-white text-6xl font-extrabold text-center font-modern'>{count}</h1>
            <div className='flex justify-around mt-4'>
                <button className='text-white text-4xl px-4 py-1 rounded-2xl bg-black cursor-pointer font-play' onClick={add}>+</button>
                <button className='text-white text-4xl px-5 py-2 rounded-2xl bg-black cursor-pointer font-play' onClick={restart}>Restart</button>
                <button className='text-white text-4xl px-4 py-1 rounded-2xl bg-black cursor-pointer font-play' onClick={subtract}>-</button>
            </div>

        </div>
    )
}

export default Change