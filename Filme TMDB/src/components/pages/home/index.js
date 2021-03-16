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
    /*
https://api.themoviedb.org/3/movie/550?api_key=cdb98ea705f6d117b95c67ad2f1aa340
cdb98ea705f6d117b95c67ad2f1aa340
*/
    loadFilmes(){
        let url = 'https://api.themoviedb.org/3/movie/550?api_key=cdb98ea705f6d117b95c67ad2f1aa340';
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                this.setState({filmes: json});
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
                                    <strong className="nomeFilme"> {filmes.original_title}</strong>
                                    <strong className="nomeFilme"> {filmes.release_date}</strong>
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