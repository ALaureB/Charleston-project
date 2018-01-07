import React, { Component } from 'react';
import img from '../img/charleston_manning.jpg';
import { Link } from 'react-router-dom';

class Confirmation extends Component {

	render() {
		return (
			<div>
				<p className="highlight" >Thank you, your message has been sent. I will answer you as soon as possible.</p>
				<Link to="/" exact="true"><p style={{marginBottom:'30px'}}>Go back on home page</p></Link>
				<img src={img} alt="Manning dancing Chaleston" />
			</div>
		);
	}
}

export default Confirmation;