import React, { Component } from 'react';
import Axios from 'axios';
import Step from './Step';
import CreateStep from './CreateStep';

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

				{this.state.items.map(item => <Step id={item.id} name={item.name} description={item.description} image={item.image} video={item.video} updatingData={this.handleDemand.bind(this)} />)}
				<CreateStep updatingData={this.handleDemand.bind(this)}/>

			</div>
		);
	}
}

export default Steps;