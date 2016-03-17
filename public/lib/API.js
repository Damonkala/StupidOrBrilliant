import {get, post, ajax} from "jquery";

import ServerActions from "./actions/ServerActions";

let API = {
	saveIdea(newIdea){
		console.log("API.js Save Data", newIdea);
		post("/api/ideas", newIdea)
		.done(data =>ServerActions.receiveNewIdea(data))
		.fail(err => console.err("ERROR IN API.JS SAVE IDEA:", err));
	},
	fetchAllIdeas(){
		get("/api/ideas")
		.done(data => ServerActions.fetchAllIdeas(data))
		.fail(err => console.err("ERROR IN API.JS FETCH IDEAS:", err));
	}
}

export default API;
