var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Comment;

var commentSchema = Schema({
	timestamp : { type : Date, default: Date.now },
	user: {type: Schema.Types.ObjectId, ref: "User"},
	content: {type: string, required: true},
	idea: {type: Schema.Types.ObjectId, ref: "Idea"},
});

Comment = mongoose.model('Comment', commentSchema);

export default Comment;
