const Todo = (props)=>{
    // const{data} = props
    return(
        <div className="container">
         <h2 style={{textDecoration:props.todo.complete?'line-through':''}}>{props.todo.title}</h2>
         <button className="btn" onClick={props.complete}>Completed</button>
         <button className="cancel">X</button>
        </div>
    )
}

export default Todo;