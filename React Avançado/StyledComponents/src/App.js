import React, { Component } from 'react';
import {Container, Head, Titulo, BemVindo} from './styled';

class App extends Component{


    render(){
        return(
            <Container>
                <Head>
                    <Titulo> Teste </Titulo>
                </Head>
                <BemVindo cor="00FF00" tamanho="45">
                    Bem vindo
                </BemVindo>
            </Container>
            
        )
    }
}

export default App;