import React, { Component } from 'react';


class App extends Component{
    
    constructor(props){
        super(props);
        this.state ={ 
            hora: '00:00:00'
        };
    }
    //Para consumir api ou webservice
    componentDidMount(){
        setInterval(()=>{
            this.setState({hora: new Date().toLocaleTimeString() })
        }, 1000);
    }

    //atualização para um estado e executar uma ação
    componentDidUpdate(){

    }

    render(){
        return(
            <div>
                <h1>Ciclo de vida do componente</h1>

                <h3>{this.state.hora}</h3>
            </div>
        )
    }
}

export default App;