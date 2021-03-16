import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../components/pages/home';
import Header from '../components/pages/header';
import Erro from '../components/pages/erro';
import Filmes from '../components/pages/filmes';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/filme/:id" component={Filmes}/>

                <Route path="*" component={Erro}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;