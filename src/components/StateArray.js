import React, { useState } from 'react'
import StateChild from './StateChild'
import StateTodo from './StateTodo'

const StateArray = () => {
    const [dummy, setDummy] = useState('')
    const [name, setName] = useState([
        {id:0, title:'Hello'},
        {id:1, title:'Hello1'}
    ])
    const addList = () => {
        // let todos = [...name]
        // let id= todos[todos.length-1]?todos[todos.length-1]['id']+1:0;
        // let newOne = {
        //     id:name.length,
        //     title
        // }
        // todos.push(newOne)
        // setName({todos})
        let newObj = {id:2,title:dummy} 
        let arr = name.concat(newObj)
        setName(arr)
        console.log(arr)
    }
    return (
        <>
            <div className='scroll'>
                {
                    name.map(item =>
                        <div key={item.id}>
                            <StateChild id={item.id} title={item.title} />
                        </div>

                    )
                }

            </div>
            {/* <StateTodo addTodo={(todo)=>addList(todo)}/> */}
            <input type="text" value={dummy}  onChange={(e)=>setDummy(e.target.value)} />
            <button onClick={addList}>Click to Add</button>
        </>
    )
}

export default StateArray
