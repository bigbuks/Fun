import React from 'react'
import Child from './Child'

function Parent(props) {
    return (
        <div>
            <p>Parent</p>
            <Child snack={props.snacks} />
        </div>
    )
}

export default Parent
