import React, { Component } from 'react';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            form:{
                nome: '',
                email: '',
                password: '',
                genero: '',
            }
        }
        this.dadosForm = this.dadosForm.bind(this);
    }
    
    dadosForm(e){
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({form:form})
    }

    render(){
        return(
            <div>
                <h1>Form</h1>

                <label>Nome:</label>
                <input type="nome" name="nome" value={this.state.form.nome} 
                    onChange={this.dadosForm}/> <br/>
                
                <label>Email:</label>
                <input type="email" name="email" value={this.state.form.email} 
                    onChange={this.dadosForm}/>

                <br />

                <label>Senha:</label>
                <input type="password" name="password" value={this.state.form.password} 
                    onChange={this.dadosForm}/>
                
                <br />

                <label>Gênero:</label>
                <select name="genero" value={this.state.genero}
                onChange={this.dadosForm}>
                    <option value="Feminino">Feminino</option>
                    <option value="Masculino">Masculino</option>
                    
                </select>
                <div>
                    <h3>{this.state.form.nome}</h3>
                    <h3>{this.state.form.email}</h3>
                    <h3>{this.state.form.password}</h3>
                    <h3>{this.state.form.genero}</h3>
                </div>
            </div>
        )
    }
}


export default App;