import React from 'react'
import { useContext } from 'react'
import { SnackContext } from './Uncle'

function Cousin() {
    const snacks = useContext(SnackContext)
    return (
        <div>
            child: {snacks}
        </div>
    )
}

export default Cousin
