let mongoose = require('mongoose');

const server = 'localhost';
const database = 'admin';
const user ='emile';
const password = 'password';

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`);

let Meetups = new mongoose.Schema({
	Id:{
		type:Number,
		unique:true
	},
	createdOn:Date,
	location:String,
	topic:String,
	happeningOn:Date,	
	tag:String
})

module.exports = mongoose.model('meetup', Meetups);