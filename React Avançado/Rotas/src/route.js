import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/pages/home';
import Sobre from './components/pages/sobre';
import Header from './components/pages/header';
import Erro from './components/pages/erro';
import Produto from './components/pages/produtos';


const Routes = ()=>{
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/sobre" component ={Sobre} />
                <Route path="/produto/:id" component={Produto} />
                <Route path="*" component={Erro}/>
            </Switch>
        </BrowserRouter>
    );
}


export default Routes;