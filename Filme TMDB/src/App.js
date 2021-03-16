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

/*
https://api.themoviedb.org/3/movie/550?api_key=cdb98ea705f6d117b95c67ad2f1aa340


cdb98ea705f6d117b95c67ad2f1aa340
*/