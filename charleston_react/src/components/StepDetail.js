import React, { Component } from 'react';
import Axios from 'axios';

class StepDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			step:[]
		};
		this.handleDelete = this.handleDelete.bind(this);		
	}

	getStep(){
		Axios
		.get(`http://localhost:3000/${this.props.match.params.stepId}`)
		.then(response => {
			this.setState({
				step: response.data
			});
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	componentDidMount() {
		this.getStep();
	}

	handleDelete(event){
		event.preventDefault();
		Axios
		.post(`http://localhost:3000/delete/${this.props.match.params.stepId}`)
		.then(function (response) {
			console.log("Houra !")
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	render() {
		return (
			<div className ="stepDetail">
				<h3>{this.state.step.name}</h3>
					<div className="row flex_to_center">
						<div className="embed-responsive embed-responsive-16by9 col-xs-5">
							<iframe id="player" className="embed-responsive-item" src="" />
						</div>
						<div className="col-xs-5">
							<p className="text-justify">{this.state.step.description}</p>
						</div>

						<button type="submit" onSubmit={this.handleDelete}>Delete</button>
					</div>

			</div>				


		);
	}
}

export default StepDetail;