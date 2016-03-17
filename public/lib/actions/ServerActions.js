import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let ServerActions = {
	receiveNewIdea(idea){
		AppDispatcher.dispatch({
			ActionType: ActionTypes.RECEIVE_NEW_IDEA,
			idea: idea
		})
	},
	fetchAllIdeas(ideas){
		AppDispatcher.dispatch({
			ActionType: ActionTypes.FETCH_ALL_IDEAS,
			ideas: ideas
		})
	}
}

export default ServerActions;
