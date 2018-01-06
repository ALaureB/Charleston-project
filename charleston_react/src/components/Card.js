import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import jbaker from '../img/baker_charleston.jpg';

const style = {
	margin: 12,
};

const CardStep = () => (

	<div class="card">
		<img src={jbaker} alt="jbaker" />
		<h4><b>Step1</b></h4> 
		<RaisedButton label="Click me" style={style} />

	</div>

);

export default CardStep;