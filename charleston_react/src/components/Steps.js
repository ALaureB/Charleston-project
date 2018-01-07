import React, { Component } from 'react';
import Axios from 'axios';
import HighlightedStep from './HighlightedStep';
import CardStep from './CardStep';
import { Link } from 'react-router-dom';

class Steps extends Component {

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
			<div>
				<h2> ~ Steps ~</h2>
				<HighlightedStep/>
				<div className="card_container">
					{this.state.items.map(item => <CardStep key={item.id} name={item.name} image={item.image} />)}
				</div>
				<Link to="/create" exact="true"><button style={{marginTop:'30px'}}>Create a new step</button></Link>
			</div>
		);
	}
}

export default Steps;