import React, { useState } from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import Property from './Property';

function Navbar() {
    const [visible, setVisible] = useState(false);

    return (
        <>

            <nav className='flex justify-between items-center bg-orange-500 px-8 h-[9vh]'>
                <h1 className='text-black italic text-2xl font-extrabold font-play'>My App</h1>

                <ul className='hidden sm:flex items-center gap-5 text-black ml-auto'>
                    <li><Link className='link hover:text-gray-300 transition' to="/">Home</Link></li>
                    <li><Link className='link hover:text-gray-300 transition' to="/about">About</Link></li>
                    <li><Link className='link hover:text-gray-300 transition' to="/contact">Contact</Link></li>
                    <li><Link className='link hover:text-gray-300 transition' to="/services">Services</Link></li>
                    <li><Link className='link hover:text-gray-300 transition' to="/blog">Blog</Link></li>
                </ul>

                <div>
                    <img onClick={() => setVisible(true)} src={assets.grid} className='w-6 cursor-pointer sm:hidden' />
                </div>
            </nav>

            {/* for sm scrn */}
            <div className={`fixed top-0 right-0 bg-white transition-all duration-300 ease-in-out overflow-hidden ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-700'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-3 p-3 cursor-pointer border-b border-gray-300 h-[9vh] bg-orange-500'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} />
                        <p className='text-white text-lg font-semibold italic'>Back</p>
                    </div>

                    <a onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-300 hover:bg-gray-100 cursor-pointer' href="/">Home</a>
                    <a onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-300 hover:bg-gray-100 cursor-pointer' href="/about">About</a>
                    <a onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-300 hover:bg-gray-100 cursor-pointer' href="/contact">Contact</a>
                    <a onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-300 hover:bg-gray-100 cursor-pointer' href="/services">Services</a>
                    <a onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-300 hover:bg-gray-100 cursor-pointer' href="/blog">Blog</a>
                </div>
            </div>


        </>
    );
}

export default Navbar;
