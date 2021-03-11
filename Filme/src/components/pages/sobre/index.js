import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sobre extends Component{


    render(){
        return(
            <div>
                <h1> pagina sobre o site</h1>
                <Link className="btnInicio" to="/" >Ir para incio</Link>
                <hr />
            </div>
            
        )
    }
}

export default Sobre;