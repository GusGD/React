import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Painel from './components/pages/painel';
import Home from './components/pages/home';
import { autenticado } from './auth';

const PrivateRoute = ({component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        autenticado() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{path: '/', state:{from: props.location}}} />
        )
    )} />
)

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute exact path="/painel" component={Painel} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;