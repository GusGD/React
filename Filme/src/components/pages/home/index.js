import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component{


    render(){
        return(
            <div>
                <h1>Bem vindo a página Home</h1>
                <Link to="/sobre" >Ir para sobre</Link>
                <hr />
            </div>
            
        )
    }
}

export default Home;