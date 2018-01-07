import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  color: "white",
  textDecoration:"none"
};

class CardStep extends Component {

	render() {
		return (
			<div className="card">
				<img src={require(`../img/${this.props.image}`)} alt={this.props.image}  />
				<h4>{this.props.name}</h4> 
				<button type="submit"><Link to={`/step/${this.props.id}`} exact="true" style={styles}>Discover</Link></button>

			</div>
		);
	}
}

export default CardStep;