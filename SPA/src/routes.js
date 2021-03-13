import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/pages/header';
import Home from './components/pages/home';

const Routes = () => {
    return(
        <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;