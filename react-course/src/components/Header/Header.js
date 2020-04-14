import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Header.module.css';
import { requestCards } from '../../reducers/cards/actions';
import { logOut } from '../../reducers/authorization/actions';

class Header extends Component {

    componentDidMount() {
        this.props.requestCards();
    }

    render() {
        const signInLink = <NavLink to="/signin" activeStyle={{color: '#fa923f'}}>Sign In</NavLink>;
        const signOutButton = <button onClick={this.props.logOut}>Sign Out</button>;

        const signInOut = this.props.auth.loggedIn ? signOutButton : signInLink;

        const welcomeLabel = this.props.auth.loggedIn ? <p className={classes['Header-Welcome']}>Welcome, {this.props.auth.currentUser}!</p> : null;

        const settings = this.props.auth.isAdmin ? <li><NavLink exact to="/settings" activeStyle={{color: '#fa923f'}}>Settings</NavLink></li>: null;

        return (
            <header className={classes['Header']}>
                {welcomeLabel}
                <div className={classes["Header-nav-block"]}>
                    <nav>
                        <ul>
                            <li><NavLink exact to="/" activeStyle={{color: '#fa923f'}}>Home</NavLink></li>
                            {settings}
                            <li>{signInOut}</li>
                        </ul>
                    </nav>
                </div>
                <p>The Solar System</p>
                <div className={classes["Header-cardsNumber"]}>{this.props.cardsNumber}</div>
            </header>
        );
    }

}

const mapStateToProps = state => ({
    cardsNumber: state.cardsReducer.length,
    auth: state.authorizationReducer
});

const mapDispatchToProps = {
    requestCards,
    logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);