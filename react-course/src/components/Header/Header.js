import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import classes from './Header.module.css';
import Home from '../Home/Home';
import SignIn from '../SignIn/SignIn';
import NotFound from '../NotFound/NotFound';
import { fetchCards } from '../utils/cards-actions';

class Header extends Component {

    componentDidMount() {
        this.props.fetchCards();
    }

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

const mapStateToProps = cards => ({
    cardsNumber: cards.length
})

const mapDispatchToProps = dispatch => ({
    fetchCards: () => {
        return axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
            .then(response =>
                dispatch(fetchCards(response))
            );
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);