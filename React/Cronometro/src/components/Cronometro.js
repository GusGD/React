import React, { Component } from 'react';

class Cronometro extends Component{

    constructor(props){
        super(props);
        this.state = {
            numero: 0,
            botao: 'INICIAR'
        };
        this.timer = null;
        this.iniciar = this.iniciar.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    iniciar(){
            let state = this.state;
            if(this.timer !== null){
                clearInterval(this.timer);
                this.timer = null;
                state.botao = 'INICIAR';
            }else{
                this.timer = setInterval(()=>{
                    let state = this.state;
                    state.numero += 0.1;
                    this.setState(state);
                },100);
            state.botao = 'PAUSAR';
        }

        this.setState(state);
    }

    limpar(){
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
        }
        let state = this.state;
        state.numero = 0;
        state.botao = 'INICIAR';
        this.setState(state);
    }

    render(){
        return(
            <div>
                <button className="timer">{this.state.numero.toFixed(1)}</button>
                <div className="areaBtn">
                    <button className="botao" onClick={this.iniciar}>{this.state.botao}</button>
                    <button className="botao" onClick={this.limpar}>ZERAR</button>
                </div>
            </div>
        );
    }
}

export default Cronometro;