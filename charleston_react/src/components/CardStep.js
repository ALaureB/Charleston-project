import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
	margin: 12
};

class CardStep extends Component {

	render() {
		return (
			<div className="card">
				<img src={require(`../img/${this.props.image}`)} alt={this.props.image}  />
				<h4>{this.props.name}</h4> 
				<RaisedButton label="Click me" style={style} />
			</div>
		);
	}
}

export default CardStep;