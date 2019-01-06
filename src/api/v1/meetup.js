let meetupModel = require('../model/meetupModel');
let express = require('express');
let router = express.Router();

router.post('/api/v1/meetup',(req, res) =>{
	if(!req.body || req.body === null){
		return res.status(400).send('Request body missing!');

	}else{
	let model = new meetupModel(req.body);
	model.save()
	.then(doc => {
		if(!doc || doc.length === 0){
			return req.status(500).send('Empty');
		}
		if(doc || doc.length !== 0){
			res.status(201).send(doc);
		}
	})
	.catch(err =>{
		res.status(500).json(err);
	})
 }
})
router.get('/api/v1/meetup', (req, res) =>{
	if(req.query.Id){		
		meetupModel.findOne({
		Id:req.query.Id
	})
	.then(doc =>{
		res.json(doc)
	})
	.catch(err =>{
		res.status(500).json(err)
	})
	}
	else{
		meetupModel.find()
	.then(doc =>{
		res.json(doc)
	})
	.catch(err =>{
		res.status(500).json(err)
	})
	}
})
module.exports = router;