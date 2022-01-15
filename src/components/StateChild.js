import React from 'react'

const StateChild = (props) => {
    
    const {id,title} = props
    
    return (
        <>
            <div key={id}>
                <h2>{title}</h2>
                <h3>{id}</h3>
            </div>
        </>
    )
}

export default StateChild
