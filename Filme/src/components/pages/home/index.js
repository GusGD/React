import React, { Component } from 'react';
import './style/home.css';
import {Link} from 'react-router-dom';

class Home extends Component{
    constructor(props){
        super (props);
        this.state = {
            filmes: []
        };

        this.loadFilmes = this.loadFilmes.bind(this);
    }

    componentDidMount(){
        this.loadFilmes();
    }

    loadFilmes(){
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            this.setState({filmes: json})
            console.log(json);
        });
    }
    
    render(){
        return(
            <div className="container">
                <div className="lista-filmes">
                    {
                        this.state.filmes.map((filmes) => {
                            return (
                                <article key={filmes.id}>
                                    <strong className="nomeFilme"> {filmes.nome}</strong>
                                    <img className="img-Fluid" src={filmes.foto} alt="filme"/>
                                    <Link to={`/filme/${filmes.id}`}>acessar</Link>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
            
        )
    }
}

export default Home;