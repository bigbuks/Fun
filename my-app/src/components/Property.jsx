import React, { useContext } from 'react'
import { SnackContext } from './Uncle'


function Property({ name, age }) {
    const snacks = useContext(SnackContext)
    return (
        <div>My name is {name} you are {age} years old and you love {snacks}.</div>
    )
}

export default Property