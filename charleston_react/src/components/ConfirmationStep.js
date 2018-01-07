import React, { Component } from 'react';
import img from '../img/teaching-english-roaring-twenties.jpg';
import { Link } from 'react-router-dom';

const styles = {
  marginBottom: "30px",
  fontWeight: "bold",
  color: "black",
  textDecoration:"underline"
};

class ConfirmationStep extends Component {

	render() {
		return (
			<div>
				<p className="highlight" >Thank you for adding a new step to the database !</p>
				<Link to="/steps" exact="true"><p style={styles}>Go back on step page</p></Link>
				<img src={img} alt="Teaching english roaring twenties" />
			</div>
		);
	}
}

export default ConfirmationStep;