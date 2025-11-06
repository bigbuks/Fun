import React from 'react'
import Cousin from './Cousin'
import Property from './Property'

function Aunt() {
    return (
        <div>
            <p>aunt</p>
            <Cousin />
            <Property name={"Tobi"} age={30} />
        </div>
    )
}

export default Aunt
