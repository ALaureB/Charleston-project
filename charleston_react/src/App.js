import React, { Component } from 'react';
import './stylesheets/App.css';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Steps from './components/Steps';
import Contact from './components/Contact';

class App extends Component {


	render() {
		return (


	      <BrowserRouter>
	      <div>
	      				<div className="App-header">
				<h1>Charleston steps</h1>
			</div>
	        <NavLink exact to="/" activeStyle={{fontWeight: 'bold', color: 'red'}}> Home </NavLink>
	        <NavLink to="/steps" activeStyle={{fontWeight: 'bold', color: 'red'}}> Steps </NavLink>
	        <NavLink to="/contact" activeStyle={{fontWeight: 'bold', color: 'red'}}> Contact </NavLink>

	        <Switch>
	          <Route path="/steps" component={Steps} />
	          <Route path="/contact" component={Contact} />
	          <Route exact path="/" component={Home} />          
	        </Switch>
	      </div>
	      </BrowserRouter>
	);
  }
}

export default App;