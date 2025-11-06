import React from 'react'
import { useState, createContext } from 'react'
import Aunt from './Aunt'
export const SnackContext = createContext()


function Uncle() {
    const [snacks] = useState("Cookies")
    return (
        <div>
            <SnackContext.Provider value={snacks}>
                <Aunt snacks={snacks} />
            </SnackContext.Provider>
        </div>
    )
}

export default Uncle
