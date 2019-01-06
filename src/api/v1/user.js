let signModel = require('../model/signupModel');
let express = require('express');
let router = express.Router();

router.post('/api/v1/user',(req, res) =>{
	if(!req.body){
		return res.status(400).send('Request body missing!');

	}else{
	let model = new signModel(req.body);
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
router.get('/api/v1/user', (req, res) =>{
	if(!req.query.username){
		return res.status(400).send('Missing username');

	}
	else{
		signModel.findOne({
		username:req.query.username
	})
	.then(doc =>{
		res.json(doc)
	})
	.catch(err =>{
		res.status(500).json(err)
	})
	}
})
router.put('/api/v1/user', (req, res) =>{
	if(!req.query.username){
		return res.status(400).send('Missing username');
	}
	else{
		signModel.findOneAndUpdate({
		username:req.query.username
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
router.delete('/api/v1/user', (req, res) =>{
	if(!req.query.username){
		return res.status(400).send('Missing username');

	}
	else{
		signModel.findOneAndDelete({
		username:req.query.username
	})
	.then(doc =>{
		res.json(doc)
	})
	.catch(err =>{
		res.status(500).json(err)
	})
	}
})

module.exports = router;