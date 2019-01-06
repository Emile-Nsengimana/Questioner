let questionModel = require('../model/questionModel');
let express = require('express');
let router = express.Router();

router.post('/api/v1/question',(req, res) =>{
	if(!req.body){
		return res.status(400).send('No question asked !');

	}else{
	let model = new questionModel(req.body);
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
router.get('/api/v1/question', (req, res) =>{
	if(req.query.Id){		
		questionModel.findOne({
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
		questionModel.find()
	.then(doc =>{
		res.json(doc)
	})
	.catch(err =>{
		res.status(500).json(err)
	})
	}
})
router.put('/api/v1/question', (req, res) =>{
	if(!req.query.Id){
		return res.status(400).send('question id ?');
	}
	else{
		questionModel.findOneAndUpdate({
		Id:req.query.Id
		},req.body,	{
			new:true}
		)
	.then(doc =>{
		res.json(doc)
	})
	.catch(err =>{
		res.status(500).json(err)
	})
	}
})

module.exports = router;