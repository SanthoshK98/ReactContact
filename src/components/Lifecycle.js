import React, { Component } from 'react'

class Lifecycle extends Component {
    
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    render() {
        
        return (
            <div>
                <h1>Count:{this.props.count}</h1>
                <h1>{this.props.name}</h1>
                <button onClick={this.props.data}>change count</button>
                
            </div>
        )
    }
}

export default Lifecycle
