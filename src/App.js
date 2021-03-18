// create your App component here
import React, { Component } from 'react'
import axios from 'axios'

export class App extends Component {

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(r => r.json())
        .then(console.log)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default App
