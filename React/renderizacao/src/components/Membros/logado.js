import React, { Component } from 'react';

class Logado extends Component {
    
    constructor(props){
        super(props);
        this.state={
            nome: props.nome
        }

    }
    render(){
        return(
            <div>
                <h2> Bem vindo ao sistema {this.state.nome}</h2>
            
            </div>
        )
    }
}

export default Logado;