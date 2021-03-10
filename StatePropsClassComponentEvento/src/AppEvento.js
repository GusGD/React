import React, { Component } from 'react';
import Membro from './components/Membros/Membros';

class App extends Component{

    render(){
        return(
            <div>
                <Membro nome="visitante" />
            </div>
        )
    }
}

export default App;