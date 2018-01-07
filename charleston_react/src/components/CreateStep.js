import React, { Component } from 'react';
import Axios from 'axios';

class CreateStep extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			description: '',
			image: '',
			video: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange (event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		Axios
		.post('http://localhost:3000/create', {
			name: this.state.name,
			description: this.state.description,
			image: this.state.image,
			video : this.state.video
		})
		.then(function (response) {
			this.props.updatingData();
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	render() {
		return (
			<div className="container">
				<h2> ~ Create a new step ~</h2>
				<p className="highlight">To add a step to the database, plase fill this form</p>

				<form className="col-xs-8 col-xs-offset-2" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label for="name" className="pull-left">Name*</label>
						<input type="text" className="form-control input" name="name" placeholder="Pink the cherries" onChange={this.handleChange} required />
					</div>
					<div>
						<label for="description" className="pull-left">Description*</label><br />
						<textarea className="form-control" name="description" rows="6" placeholder="To pink the cherries...." maxlength="400" onChange={this.handleChange} required></textarea>
					</div>
					<div className="form-group">
						<label for="image" className="pull-left">Image*</label>
						<input type="text" className="form-control input" name="image" placeholder="Pink the cherries" onChange={this.handleChange} required />
					</div>
					<div className="form-group">
						<label for="video" className="pull-left">Image*</label>
						<input type="text" className="form-control input" name="video" placeholder="Pink the cherries" onChange={this.handleChange} required />
					</div>				
					<button type="submit">Envoyer</button>
					<p className="text-left">*All fields are mandatory !</p>
				</form> 
			</div>
		);
	}
}

export default CreateStep;