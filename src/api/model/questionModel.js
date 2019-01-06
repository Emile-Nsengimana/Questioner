let mongoose = require('mongoose');

const server = 'localhost';
const database = 'admin';
const user ='emile';
const password = 'password';

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`);

let Question = new mongoose.Schema({
	Id:{
		type:Number,
		unique:true
	},
	createdOn:Date,
	createdBy:Number,
	meetup:Number,	
	title:String,
	body:String,
	votes:Number
})

module.exports = mongoose.model('Question', Question);