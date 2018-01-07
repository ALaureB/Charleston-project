import React, { Component } from 'react';
import Axios from 'axios';
import TypeWriter from 'react-typewriter';
import CardStep from './CardStep';
import gif from '../img/giphy-charleston.gif';
import history from '../img/charleston-history.jpg';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			steps:[]
		};
	}

	news(){
		Axios
			.get('http://localhost:3000/news')
			.then(response => {
				this.setState({
					steps: response.data
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	componentDidMount() {
		this.news();
	}

	render() {
		return (
			<div>
				<div id="intro">
					<TypeWriter typing={1} fixed={true}><h2> ~ Embark with us on a magical journey into charleston ~ </h2></TypeWriter>
					<div className="row">
						<p className="col-xs-8 col-xs-offset-2 text-justify highlight">Charleston, as a dance, was born in the South of the United States 
						at the beginning of the 1900’s. It is based on body weight shifting from one leg to the other and can be danced 
						solo, with a partner or in groups. Charleston inspired most of modern dances... let's discover this swinggy 
						universe !</p>
					</div>
					<p><img src={gif} alt="loading..." id="gif" /></p>
				</div>

				<div id="history">
					<h3>History of charleston</h3>
					<div className="row flex_to_center">
						<div className="col-xs-6">
							<p className="text-justify">Charleston, as other Afro-American dances from the beginning of the 20th century, 
							was born among Black communities of the South of the United States. This dance was created around 1900 and owes 
							its name to the city of Charleston, South Carolina. It only gained momentum in the early 20’s in New York City and 
							ore precisely in Harlem. Black dancers were fashionable at the time in New York in either black or mixed revues, 
							such as “Shuffle along”, “The Blackbirds”, “Zieffield folies”, and featured famous dancers such as Eddie Rector, 
							Bill Robinson, John Bubbles, Baby Laurence or King Brown. It really became popular in the United States in 1923, 
							after a black only revue performed on Broadway: Runnin' Wild (Charleston music from James P. Johnson).  
							In France, it was only in 1925 that it became known with the first Revue Nègre, in the Théâtre des Champs-Élysées 
							of Paris, starring Sidney Bechet and Josephine Baker who was then making her debut. In the 20’s, Charleston thus 
							became the reference dance in the United States and in Europe.</p>
						</div>
						<div className="col-xs-4">
							<img src={history} alt="Some Charleston Dancers in the United States" />
						</div>
					</div>
				</div>

				<div id="baker">
					<h3>Joséphine Baker, the Queen of charleston !</h3>
					<div className="row flex_to_center">
						<div className="embed-responsive embed-responsive-16by9 col-xs-5">
							<iframe id="player" className="embed-responsive-item" src="https://www.youtube.com/embed/jEH6eDpjgRw" />
						</div>
						<div className="col-xs-5">
							<p className="text-justify">Josephine Baker was born in 1906 in St. Louis, Missouri. During her childhood, 
							she worked as a servant and waitress. She was also a very talented dancer, actress, and singer. 
							In 1923, Josephine Baker earned a spot on the Broadway musical « Shuffle Along ». She decided to move to paris in 1925 
							to star in a show called « La Revue  Negre ». The show was a hit  and popularised charleston dance. Her most famous act was 
							a dance that took place during a show called « La Folie du Jour », where she wore nothing but skirt made of bananas. 
							During World War II, Josephine Baker was recruited to spy for the French Resistance. Because she was a famous celebrity, 
							she was allowed to travel around Europe without being suspected. She passed on secret messages about the Germans such as 
							troop locations and airfields using invisible ink on her sheet music. Josephine Baker returned moved back to the United States
							in the 1950s and become a civil rigts activist. She died in 1975.</p>
						</div>
					</div>
				</div>

				<div id="lastest_publications">
					<h3>Last steps published</h3>
					<div id="news">
						{this.state.steps.map(item => <CardStep key={item.id} name={item.name} image={item.image} />)}						
					</div>
				</div>

			</div>

		);
	}
}

export default Home;