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
			<form onSubmit={this.handleSubmit}>

				<label>Nom : </label>
				<input type="text" name="name" onChange={this.handleChange} />
				<br/>

				<label>Description : </label>
				<input type="text" name="description" onChange={this.handleChange} />
				<br/>

				<label>Image : </label>
				<input type="text" name="image" onChange={this.handleChange} />
				<br/>

				<label>Vidéo : </label>
				<input type="text" name="video" onChange={this.handleChange} />
				<br/>

				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default CreateStep;