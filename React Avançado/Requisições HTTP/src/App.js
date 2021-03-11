import React, { Component } from 'react';
import './style/style.css';
//https://sujeitoprogramador.com/rn-api/?api=posts
class App extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            nutri: []
        };
    }

    componentDidMount(){
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
        fetch(url)
        .then((res)=> res.json())
        .then((json) => {
            let state = this.state;
            state.nutri = json;
            this.setState(state);
            //console.log(json);
        })
    }

    render(){
        return(
            <div className="container">
                <header>
                    <strong>React Nutri</strong>
                </header>
                {this.state.nutri.map((item)=>{
                    return(
                        <article key={item.id} className="post">
                            <strong className="titulo"> {item.titulo}</strong>
                            <img className="capa" src={item.capa} alt="imagem de capa" />
                            <p className="subtitulo"> {item.subtitulo}</p>
                            <button className="botao"> acessar</button>
                        </article>
                    );
                })}
            </div>
            
        )
    }
}

export default App;
