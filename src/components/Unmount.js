import React, { Component } from 'react'

class Unmount extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    
    render() {
        return (
            <div>
                <h1>Hello Unmount</h1>
            </div>
        )
    }
}

export default Unmount
