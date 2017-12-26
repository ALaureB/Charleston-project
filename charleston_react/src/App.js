import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Steps from './components/Steps';
import Contact from './components/Contact';
import './stylesheets/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isTop: true,
		};
	}

	componentDidMount() {
		document.addEventListener('scroll', () => {
			const isTop = window.scrollY < 100;
			if (isTop !== this.state.isTop) {
				this.setState({ isTop })
			}
		});
	}

	render() {
		return (
			<BrowserRouter>
			<div>

			<div className="App-header">
				<h1>Charleston steps</h1>
				<nav className={this.state.isTop ? null : 'scrolled-nav'}>
					<NavLink exact to="/" activeStyle={{textDecoration: 'underline'}} className="navlink"><span role="img" aria-label="Shoes"> 👞 </span>Home</NavLink>
					<NavLink to="/steps" activeStyle={{textDecoration: 'underline'}} className="navlink"><span role="img" aria-label="Shoes"> 👞 </span>Steps</NavLink>
					<NavLink to="/contact" activeStyle={{textDecoration: 'underline'}} className="navlink"><span role="img" aria-label="Shoes"> 👞 </span>Contact</NavLink>
				</nav>
			</div>

			<div className="row">
			<p className="col-xs-2">Col-xs-2</p>
			<p className="col-xs-10">Col-xs-10</p>
			</div>

			<Switch>
				<Route exact path="/" component={Home} />   
				<Route path="/steps" component={Steps} />
				<Route path="/contact" component={Contact} />        
			</Switch>

			<footer>
				<p>Footer</p>

			</footer>

			</div>
			</BrowserRouter>
		);
	}
}

export default App;