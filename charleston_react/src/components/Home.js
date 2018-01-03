import React, { Component } from 'react';
import gif from '../img/giphy-charleston.gif';
import history from '../img/charleston-history.jpg';
import jBaker from '../img/baker_charleston.jpg';

class Home extends Component {

	render() {
		return (
			<div>
				<div id="intro">
					<h2> ~ Embark with us on a magical journey into charleston ~ </h2>
					<div className="row">
						<p className="col-xs-8 col-xs-offset-2 text-justify">Charleston, as a dance, was born in the South of the United States 
						at the beginning of the 1900’s. It is based on body weight shifting from one leg to the other and can be danced 
						solo, with a partner or in groups. Charleston inspired most of modern dances... let's discover this swinggy 
						universe !</p>
					</div>
					<p><img src={gif} alt="loading..." id="gif" /></p>
				</div>

				<div id="history">
					<h3>History of charleston</h3>
						<div className="row flex_to_center">
							<div className="col-xs-6 col-xs-offset-1">
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
					<div className="row">
						<div className="embed-responsive embed-responsive-16by9 col-xs-5 col-xs-offset-1">
							<iframe id="player" className="embed-responsive-item" src="https://www.youtube.com/embed/jEH6eDpjgRw" />
						</div>
						<p className="col-xs-4">Joséphine Baker is Known as the Queen of Charleston !</p>
					</div>
				</div>

				<div id="lastest_publications">
					<h3>Last steps published</h3>
					<div className="row">
						<div className="col-xs-3 card">
							<img src={jBaker} alt="Img" className="poster"/>
							<h3>Step 1</h3>
							<hr/>
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
							<button>Read More</button>
						</div>
												<div className="col-xs-3 card">
							<img src={jBaker} className="poster" alt="image_card"/>
							<h3>Step 1</h3>
							<hr/>
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
							<button>Read More</button>
						</div>
					</div>


				</div>


			
			</div>




		);
	}
}

export default Home;