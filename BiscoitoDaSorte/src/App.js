import React, { Component } from 'react';
import ImagemBiscoito from './assets/images/biscoito.png';
import Mensagem from './components/mensagem';
import './assets/style/style.css'

class App extends Component {
    
    render(){
        return(
            <div className="container">
                <img className="img" src={ImagemBiscoito } alt="biscoito da sorte"/>
                
                <Mensagem />
                
            </div>
        )
    }
}


export default App;