import React, { Component } from 'react';
import Axios from 'axios';
import gif from './img/giphy-charleston.gif';
import './stylesheets/App.css';
import Header from './components/Header';
import Step from './components/Step';
import CreateStep from './components/CreateStep';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items:[]
		};
	}

	update(){
		Axios
			.get('http://localhost:3000/')
			.then(response => {
				this.setState({
					items: response.data
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	componentDidMount() {
		this.update();
		setInterval(()=>{
			this.update()
		}, 1000);
	}

	handleDemand(){
		this.update();
	}

	render() {
		return (
	  		<div className="App">

				<Header />

				<h2>
					<span role="img" aria-label="Shoes">👞👞👞</span> Embark with us on a magical journey into charleston... <span role="img" aria-label="Shoes">👞👞👞</span>
				</h2>

				<p>
					<img src={gif} alt="loading..." />
				</p>

				<div>
					{this.state.items.map(item => <Step id={item.id} name={item.name} description={item.description} image={item.image} video={item.video} updatingData={this.handleDemand.bind(this)} />)}
					<CreateStep add={this.handleDemand.bind(this)}/>

				</div>

			</div>
	);
  }
}

export default App;