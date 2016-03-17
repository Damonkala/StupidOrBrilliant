'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let Idea;

let ideaSchema = Schema({
	timestamp : { type : Date, default: Date.now },
	user: {type: Schema.Types.ObjectId, ref: "User"},
	title: {type: String, required: true},
	description: {type: String, required: true},
	votesForStupid: [{type: Schema.Types.ObjectId, ref: "User"}],
	votesForBrilliant: [{type: Schema.Types.ObjectId, ref: "User"}],
	comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
});

Idea = mongoose.model('Idea', ideaSchema);

module.exports = Idea;
