import React, { Component } from 'react';
import Logado  from './components/Membros/logado';
import Logout  from './components/Membros/logout';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: false
        }
        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }
    entrar(){
        this.setState({status:true});
    }
    sair(){
        this.setState({status:false});
    }

    render(){
        return(
            <div>
                {this.state.status ?
                    <div>
                        <Logado nome="Gustavo"/>
                        <h2>Deseja sair ?<button onClick={this.sair} className="linkButton">click aqui</button></h2>
                    </div>
                    :
                    <div>
                        <Logout nome= "Visitante"/>
                        <h2>Deseja realizar o login? <button onClick={this.entrar} className="linkButton">click aqui</button></h2>
                    </div>
                }
            </div>
            
        )
    }
}

export default App;