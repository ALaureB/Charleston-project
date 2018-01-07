import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './img/logo.png'
import Home from './components/Home';
import Steps from './components/Steps';
import Contact from './components/Contact';
import Confirmation from './components/Confirmation';
import CreateStep from './components/CreateStep';
import ConfirmationStep from './components/ConfirmationStep';
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
				<MuiThemeProvider>					
					<div>
						<header>
							<div className="container-fluid App-header">
								<Link to="/" exact="true">
									<h1>Charleston steps</h1>
								</Link>
								<nav className={this.state.isTop ? null : 'scrolled-nav'}>
									<div className="col-xs-2">
										<Link to="/" exact="true"><img src={logo} alt="logo" id="logo" /></Link>
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
							<Route path="/create" component={CreateStep} />
							<Route path="/confirmation" component={Confirmation} />
							<Route path="/confirmationstep" component={ConfirmationStep} />    
						</Switch>

						<footer>
							<div className="container-fluid">
								<div className="row flex_to_center">
									<div className="col-xs-2">
										<Link to="/" exact="true"><img src={logo} alt="logo" id="logo" /></Link>
									</div>
									<div className="col-xs-10">
										<p>Made with ❤ in ReactJS for <a href="https://wildcodeschool.fr/" target="_blank" rel="noopener noreferrer">Wild Code School</a></p>
									</div>
								</div>
							</div>
						</footer>
					</div>
				</MuiThemeProvider>
			</BrowserRouter>
		);
	}
}

export default App;