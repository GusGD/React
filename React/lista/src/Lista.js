import React, { Component } from 'react';
import Feed from './components/feed/index'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            feed: [
                {id:1, username: 'Gustavo', curtidas:10, comentarios:2},
                {id:2, username: 'Oliveira', curtidas:1000, comentarios:600},
                {id:3, username: 'Amanda', curtidas:200, comentarios:50},
                {id:4, username: 'Amanda', curtidas: 1, comentarios:0},
            ]
        }
    }

    render(){
        return(
            <div>
                <h1>Lista</h1>
                {this.state.feed.map((item)=>{
                    return(
                        <Feed key={item.id} username={item.username}
                            curtidas={item.curtidas} comentarios={item.comentarios}/>
                    )
                })}
            </div>
        )
    }
}


export default App;