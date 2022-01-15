import React, {useState} from 'react'

const Hover = () => {
    const [hover, setHover] = useState(0)
    const hovering = ()=>{
        setHover(hover+1)
    }
    return (
        <div>
            <h1 onMouseOver={hovering}>Hovered {hover} Times</h1>
        </div>
    )
}

export default Hover
