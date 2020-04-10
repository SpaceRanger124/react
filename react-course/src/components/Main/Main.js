import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import SignIn from '../SignIn/SignIn';
import Settings from '../Settings/Settings';
import SingleCard from '../CardList/SingleCard/SingleCard';
import NotFound from '../NotFound/NotFound';

const Main = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/settings" exact component={Settings} />
            <Route path="/card/:id" component={SingleCard} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default Main;