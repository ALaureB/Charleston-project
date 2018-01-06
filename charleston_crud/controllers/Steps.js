const Model = require('../models/');
const nodemailer = require("nodemailer");

module.exports = {
	
	findAll : (req, res) => {
		Model.Step
			.findAll()
			.then(results => res.send(results));
	},

	news : (req, res) => {
		Model.Step
			.findAll({ limit: 3, order: [['id', 'DESC']]})
			.then(results => res.send(results));
	},

	find : (req, res) => {
		let id = req.params.id;		
		Model.Step
			.find({where : {id : id}})
			.then(results => res.send(results));
	},

	create : (req, res) => {		
		let name = req.body.name;
		let description = req.body.description;
		let image = req.body.image;
		let video = req.body.video;		

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
	},

	notify: (req, res, next) => {
		var transport = nodemailer.createTransport({
			host: "smtp.mailtrap.io",
			port: 2525,
			auth: {
				user: "282a3d165de31e",
				pass: "be3b011087f729"
			}
		});
		transport.sendMail({
			from: req.body.mail,
			to: "charleston_steps@yopmail.com",
			subject: req.body.subject, 
			text: 'Name : ' + req.body.name + '\n' + 'Mail : ' + req.body.mail + '\n' + 'Message : ' + req.body.message,
			html: '<p>' + '<b>' + 'Nom : ' + '</b>'+ req.body.name + '<p>' + '<b>' + 'Mail : ' + '</b>' + req.body.mail + '<p>' + '<b>' + 'Message : ' + '</b>' + req.body.message + '</p>'
		}, (error, response) => {
			if(error){
				console.log(error);
			} else{
				res.send('OK send !!');
			}
		});
    }

};