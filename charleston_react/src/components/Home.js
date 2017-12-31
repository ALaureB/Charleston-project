import React, { Component } from 'react';
import gif from '../img/giphy-charleston.gif';
import img1 from '../img/baker_charleston.jpg'

class Home extends Component {

	render() {
		return (
			<div>
			<div id="intro">
				<h2> ~ Embark with us on a magical journey into charleston ~ </h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
				ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
				laboris nisi ut aliquip ex ea commodo consequat.</p>
				<p><img src={gif} alt="loading..." id="gif" /></p>
			</div>

			<div id="history">
				<h3>History of charleston</h3>
					<div className="row">
						<div className="col-xs-6 col-xs-offset-1">
							<p className="text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
							totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
							explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
							gni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor 
							sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore 
							magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
							laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate 
							velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
						</div>
						<div className="col-xs-5">
							<img src={img1} alt="Josephine Baker dances Charleston" />
						</div>
					</div>
			</div>

			<div id="lastest_publications">
				<h3>Last steps published</h3>


			</div>
			</div>




		);
	}
}

export default Home;