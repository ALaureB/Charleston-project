import React, { Component } from 'react';

class HighlightedStep extends Component {

	render() {
		return (
			<div>
				<h3>Shorty George</h3>
					<div className="row flex_to_center">
						<div className="embed-responsive embed-responsive-16by9 col-xs-5">
							<iframe id="player" className="embed-responsive-item" src="https://www.youtube.com/embed/fAcBBxrpx-4" />
						</div>
						<div className="col-xs-5">
							<p className="text-justify">While performing the shorty George keep your knees close together and step forward in a straight narrow line stepping down on the balls of your feet. Avoid rotating your hips.</p>
						</div>
					</div>

			</div>
		);
	}
}

export default HighlightedStep;