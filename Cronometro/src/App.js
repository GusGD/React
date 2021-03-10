import React, { Component } from 'react';
import ImgCronometro from './assets/images/cronometro.png';
import './assets/style/style.css';
import Cronometro from './components/Cronometro';

class App extends Component{
    render(){
        return(
            <div className="container">
                <img className="img" src={ImgCronometro} alt="cronometro" />
                <div className="cronometroAlinha">
                    <Cronometro />
                </div>
                
            </div>
        );
    }
}

export default App;