let mongoose = require('mongoose');

const server = 'localhost';
const database = 'admin';
const user ='emile';
const password = 'password';

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`);

let Users = new mongoose.Schema({
	Id:{
		type:Number,
		unique:true
	},
	fname:String,
	lname:String,
	oname:String,
	email:String,
	phone:Number,
	username:{
		type:String,
		unique:true
	},
	password:String
})

module.exports = mongoose.model('user', Users);