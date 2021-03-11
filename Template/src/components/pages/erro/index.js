import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Erro extends Component{


    render(){
        return(
            <div>
                <h1> Ops! Pagina não encontrada</h1>
                <h3>você está procurando por: </h3>
                <Link to="/">Inicio</Link> <br />
                <Link to="/sobre">Sobre</Link>
                <hr />
            </div>
            
        )
    }
}

export default Erro;