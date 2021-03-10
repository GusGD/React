import React, { Component } from 'react';

class Logout extends Component {
    
    constructor(props){
        super(props);
        this.state={
            nome: props.nome
        }

    }
    render(){
        return(
            <div>
                <h2> Você está como {this.state.nome} </h2>
            
            </div>
        )
    }
}

export default Logout;