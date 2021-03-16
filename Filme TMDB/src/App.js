import React, { Component } from 'react';
//import { Route } from 'react-router';
import './components/style/app.css';
import Routes from './route/routes';

class App extends Component{

    //https://sujeitoprogramador.com/r-api/?api=filmes/

    render(){
        return(
            <div className="app">
                <Routes />
            </div>
            
        )
    }
}

export default App;

