import React, { Component } from 'react';
import gif from '../img/giphy-charleston.gif';


class Home extends Component {

	render() {
		return (
			<div>
        		<h2>
					<span role="img" aria-label="Shoes">👞👞👞</span> Embark with us on a magical journey into charleston... <span role="img" aria-label="Shoes">👞👞👞</span>
				</h2>
				<p>
					<img src={gif} alt="loading..." />
				</p>
        	</div>
        );
  }
}

export default Home;