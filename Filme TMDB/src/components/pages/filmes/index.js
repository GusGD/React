import React, { Component } from 'react';
import './style/filme.css'

class Filmes extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            filme: []
        }
        this.loadTrailer = this.loadTrailer.bind(this);
    }



    loadTrailer(){
        const { id } = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
        fetch(url)
        .then((res)=>res.json())
        .then((json) => {
            this.setState({filme: json});
            console.log(json)
        })
    }
    componentDidMount(){
        this.loadTrailer();
    }

    render(){
        return(
            <div className="container">
                <div className="lista-filmes">
                    return(
                        <article key={this.state.filme.id}>
                            <h1 className="nomeFilme"> {this.state.filme.nome}</h1>
                            <img className="img-Fluid" src={this.state.filme.foto} alt="filme"/>
                            {this.state.filme.length !== 0 && 
                                <h2>sinopse</h2>
                            }
                            <h3 className="sinopse">{this.state.filme.sinopse}</h3>
                        </article>
                    )
                </div>
            </div>
            
        )
    }
}

export default Filmes;