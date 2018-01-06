import React, { Component } from 'react';

class Contact extends Component {
	render() {
		return (
			<div className="container">
				<h2> ~ Contact ~</h2>
				<p className="highlight">If you want to contact me, please fill this form. I will be very happy to hear from you soon !</p>

				<form className="col-xs-8 col-xs-offset-2">
					<div className="form-group">
						<label for="name" className="pull-left">Name*</label>
						<input type="text" className="form-control input" id="name" placeholder="Jopéphine Baker" required />
					</div>
					<div className="form-group">
						<label for="mail" className="pull-left">Mail*</label>
						<input type="email" className="form-control input" id="mail" placeholder="josephine@paris.fr" required />
					</div>
					<div className="form-group">
						<label for="objet" className="pull-left">Subject*</label>
						<input type="text" className="form-control input" id="objet" placeholder="I love charleston" required/>
					</div>
					<div>
						<label for="message" className="pull-left">Your message*</label><br />
						<textarea className="form-control" id="message" rows="6" placeholder="I would like to have more infos about Shorty George !" maxlength="400" required></textarea>
					</div>
					
					<button type="submit">Envoyer</button>

				</form> 
			</div>
		);
	}
}

export default Contact;