import React, {useState} from 'react'

const StateTodo = (props) => {
    const [newtodo, setnewTodo] = useState()
    const addItem = (e)=>{
        e.preventDefault()
        props.addTodo(newtodo)
    }
    return (
        <div>
            {/* <h2>{JSON.stringify(newtodo)}</h2> */}
            <form>
                <input type='text' value={newtodo} onChange={(e)=>setnewTodo(e.target.value)}/>
                <button onClick={addItem}>Click to add</button>
            </form>
        </div>
    )
}

export default StateTodo
