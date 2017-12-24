import React, { Component } from 'react';

class Header extends Component {

  render() {
	return (
		<div>
		
			<div className="App-header">
				<h1>Charleston steps</h1>
			</div>

			<nav>
	  			<a>Home</a>
	  			<a>Steps</a>
	  			<a>Contact</a>
	  		</nav>

  		</div>
	);
  }
}

export default Header;