import React, { useState } from 'react'

function Nav2() {
    const [menu, setMenu] = useState(false)
    const [change, setChange] = useState("Hello World");
    const [text, setText] = useState();

    const textChange = () => {
        setChange("Goodbye World")
    }
    const open = () => {
        setMenu(true)
    }
    const close = () => {
        setMenu(false)
    }

    // function changeText(e) {
    //     setText(e.target.value)
    // }
    return (
        <>
            <nav className='flex justify-between items-center bg-orange-500 px-8 h-[12vh] relative'>
                <h1 className='italic text-3xl font-bold text-black'>React</h1>
                <ul className={`${menu ? "flex" : "hidden"} md:flex md:flex-row flex-col bg-red-500 md:bg-transparent gap-[40px] absolute md:top-9 top-[93px] md:w-[50%] w-full left-0 md:left-[48%] justify-end p-5 md:p-0`}>
                    <li>
                        <a href="" className='link'>
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="" className='link'>
                            Menu
                        </a>
                    </li>

                    <li>
                        <a href="" className='link'>
                            Services
                        </a>
                    </li>

                    <li>
                        <a href="" className='link'>
                            Contact Us
                        </a>
                    </li>
                </ul>

                {menu ? <p className='md:hidden cursor-pointer text-2xl' onClick={close}>❌</p> :
                    <p className='md:hidden cursor-pointer text-2xl' onClick={open}>⏸️</p>}
            </nav>

            <h1 onCut={textChange}>{change}</h1>

            <p>{text}</p>
            <label htmlFor="text">Name:</label>
            <input type="text" className='border-2 rounded-sm' onChange={(e) => setText(e.target.value)} />

        </>
    )
}

export default Nav2
