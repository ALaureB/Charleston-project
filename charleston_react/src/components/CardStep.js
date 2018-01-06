import React, { Component } from 'react';

class CardStep extends Component {

	render() {
		return (
			<div className="card">
				<img src={require(`../img/${this.props.image}`)} alt={this.props.image}  />
				<h4>{this.props.name}</h4> 
				<button type="submit">Discover</button>
			</div>
		);
	}
}

export default CardStep;