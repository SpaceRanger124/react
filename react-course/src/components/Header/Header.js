import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import classes from './Header.module.css';
import Home from '../Home/Home';
import SignIn from '../SignIn/SignIn';
import NotFound from '../NotFound/NotFound';

class Header extends Component {

    render() {
        return (
            <Router>
                <header className={classes['Header']}>
                    <div className={classes["Header-nav-block"]}>
                        <nav>
                            <ul>
                                <li><NavLink exact to="/" activeStyle={{color: '#fa923f'}}>Home</NavLink></li>
                                <li><NavLink to="/signin" activeStyle={{color: '#fa923f'}}>Sign In</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <p>The Solar System</p>
                    <div className={classes["Header-cardsNumber"]}>{this.props.cardsNumber}</div>
                </header>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/signin" exact component={SignIn} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }

}

export default Header;