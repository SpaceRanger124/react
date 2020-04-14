import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Header.module.css';
import { requestCards } from '../../reducers/cards/actions';

class Header extends Component {

    componentDidMount() {
        this.props.requestCards();
    }

    render() {
        return (
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
        );
    }

}

const mapStateToProps = cards => ({
    cardsNumber: cards.length
})

const mapDispatchToProps = {
    requestCards
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);