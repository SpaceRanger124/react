import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import classes from './App.module.css';
import Home from '../components/Home/Home';
import SignIn from '../components/SignIn/SignIn';

class App extends Component {

	render() {
		return (
		    <Router>
		        <div className={classes["App-nav-block"]}>
                    <header>
                        <nav>
                            <ul>
                                <li><NavLink exact to="/" activeStyle={{color: '#fa923f'}}>Home</NavLink></li>
                                <li><NavLink to="/signin" activeStyle={{color: '#fa923f'}}>Sign In</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/signin" exact component={SignIn} />
                        <Route render={() => <h1 style={{'textAlign': 'center'}}>Not Found</h1>} />
                    </Switch>
                </div>
		    </Router>
		);
	}
	
}

export default App;
