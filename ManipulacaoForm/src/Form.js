import React, { Component } from 'react';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            senha: '',
            genero: ''
        }
        this.trocaEmail = this.trocaEmail.bind(this);
        this.trocaSenha = this.trocaSenha.bind(this);
        this.trocaGenero = this.trocaGenero.bind(this);
    }
    trocaEmail(e){
        let valorDigitado = e.target.value;
        this.setState({email: valorDigitado});
    }

    trocaSenha(e){
        let valorDigitado = e.target.value;
        this.setState({senha: valorDigitado});
    }

    trocaGenero(e){
        let valorDigitado = e.target.value;
        this.setState({genero: valorDigitado});
    }

    render(){
        return(
            <div>
                <h1>Form</h1>
                <label>Email:</label>
                <input type="email" name="email" value={this.state.email} 
                    onChange={this.trocaEmail}/>

                <br />

                <label>Senha:</label>
                <input type="password" name="password" value={this.state.senha} 
                    onChange={this.trocaSenha}/>
                
                <br />

                <label>Gênero:</label>
                <select name="genero" value={this.state.genero}
                onChange={this.trocaGenero}>
                    <option value="Feminino">Feminino</option>
                    <option value="Masculino">Masculino</option>
                    
                </select>
                <div>
                    <h3>{this.state.email}</h3>
                    <h3>{this.state.senha}</h3>
                    <h3>{this.state.genero}</h3>
                </div>
            </div>
        )
    }
}


export default App;