import React from 'react'

function Child(props) {
    return (
        <div>
            <p>Child Component: I received {props.snack} from my Parent 🍪</p>
        </div>
    )
}

export default Child
