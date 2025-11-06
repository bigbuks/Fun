import React from 'react'
import { useState } from 'react'
import Parent from './Parent'

function Snacks() {
    const [snacks] = useState("Cookies")
    return (
        <div>
            <h1>Im passing the cookies to the child component 🍪</h1>
            <Parent snacks={snacks} />
        </div>
    )
}

export default Snacks
