import React, { Component } from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: true
        }
    }
    render(){
        return(
            <div>
                { this.state.status === 1 &&
                    <h1>Bem vida ao sistema</h1>
                }
                <div>
                    <h2> curso react</h2>
                </div>
            </div>
            
        )
    }
}

export default App;