import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { HiArrowDownOnSquareStack } from "react-icons/hi2";
import { PiAppStoreLogoFill } from "react-icons/pi";
import { SiAlienware } from "react-icons/si";
import { SiApachespark } from "react-icons/si";
function ThursdayIcon() {
    return (
        <>
            <div className='flex gap-5 py-3'>
                <p className='text-4xl text-blue-950'> <FaFacebookF /></p>
                <p className='text-4xl text-blue-950'><HiArrowDownOnSquareStack /></p>
                <p className='text-4xl text-blue-950'><PiAppStoreLogoFill /></p>
                <p className='text-4xl text-blue-950'><SiAlienware /></p>
                <p className='text-4xl text-blue-950'><SiApachespark /></p>

                <p className='text-4xl text-blue-950'><i class='fa-solid fa-house-tsunami fa-beat'></i></p>
                <p className='text-4xl text-blue-950'><i class="fa-solid fa-truck fa-beat"></i></p>
                <p className='text-4xl text-blue-950'><i class="fa-solid fa-user"></i></p>
                <p className='text-4xl text-blue-950'><i class="fa-solid fa-cloud"></i></p>

            </div>

        </>
    )
}

export default ThursdayIcon
