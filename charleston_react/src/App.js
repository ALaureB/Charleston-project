import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink, Link } from 'react-router-dom';
import logo from './img/logo.png'
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
					<header>
						<div className="container-fluid App-header">
							<h1>Charleston steps</h1>
							<nav className={this.state.isTop ? null : 'scrolled-nav'}>
								<div className="col-xs-2">
									<Link exact to="/"><img src={logo} alt="logo" id="logo" /></Link>
								</div>
								<div className="col-xs-10">
									<NavLink exact to="/" activeStyle={{textDecoration: 'underline'}} className="navlink"><span role="img" aria-label="Shoes"> 👞 </span>Home</NavLink>
									<NavLink to="/steps" activeStyle={{textDecoration: 'underline'}} className="navlink"><span role="img" aria-label="Shoes"> 👞 </span>Steps</NavLink>
									<NavLink to="/contact" activeStyle={{textDecoration: 'underline'}} className="navlink"><span role="img" aria-label="Shoes"> 👞 </span>Contact</NavLink>
								</div>
							</nav>
						</div>
					</header>

					<Switch>
						<Route exact path="/" component={Home} />   
						<Route path="/steps" component={Steps} />
						<Route path="/contact" component={Contact} />        
					</Switch>

					<footer>
						<div className="container-fluid">
							<p>Footer</p>
						</div>
					</footer>

				</div>
			</BrowserRouter>
		);
	}
}

export default App;