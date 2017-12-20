const Model = require('../models/');

module.exports = {
	
	find : (req, res) => {
		Model.Step
			.findAll()
			.then(results => res.send(results));
	},

	create : (req, res) => {		
		Model.Step
			.create(
				{
					name : name,
					description : description,
					image : image,
					video : video
				})
			.then(res.send(`ok create step`));
	},

	update : (req, res) => {
		let id = req.params.id;
		let name = req.body.name;
		let description = req.body.description;
		let image = req.body.image;
		let video = req.body.video;

		Model.Step
			.update(
				{
					name : name,
					description : description,
					image : image,
					video : video
				},{
					where : {id : id}
				})
			.then(res.send(`ok update ${id} step`));
	},

	delete : (req, res) => {
		let id = req.params.id;

		Model.Step
			.destroy({where : { id : id}})
			.then(res.send(`ok delete ${id} step`));
	}

};