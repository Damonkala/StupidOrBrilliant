'use strict';

let express = require('express')
let router = express.Router();


let Idea = require('../models/ideaSchema');

router.post('/ideas', function(req, res){
	let idea = new Idea;
	idea.title = req.body.title;
	idea.description = req.body.description;
	idea.save(function(err, idea){
		res.status(err ? 400 : 200).json(err || idea);
	})
})
router.get('/ideas', function(req, res){
	Idea.find({}, function(err, ideas){
		res.status(err ? 400 : 200).json(err || ideas);
	})
})

module.exports = router;
