import API from "../API";

let IdeaActions = {
	saveIdea(newIdea){
		API.saveIdea(newIdea);
	},
	fetchAllIdeas(){
		API.fetchAllIdeas();
	}
}

export default IdeaActions;
