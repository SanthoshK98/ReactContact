import React from "react";

class State extends React.Component{
    constructor(){
        super();
        this.state={
            data:0
        }
    }
    change(){
        this.setState({data:this.state.data + 1})
    }
    render(){
        return(
            <div>
                <h1>Hello {this.state.data}</h1>
                <button onClick={()=>this.change()}>Click Me</button>
            </div>
        )
    }
}

export default State
