import {EventEmitter} from "events";
import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let _ideas = [];

 class IdeaStore extends EventEmitter {

	constructor(props) {
		super(props);

		AppDispatcher.register(action => {
			switch (action.ActionType) {
				case ActionTypes.FETCH_ALL_IDEAS:
        _ideas = action.ideas;
				this.emit("CHANGE");
				break;

				case ActionTypes.RECEIVE_NEW_IDEA:
          _ideas.push(action.idea);
					this.emit("CHANGE");
					break;
				default:
				//do nothing
			}
		})
	}

	getAll() {
		return _ideas;
	}
	startListening(callback) {
		this.on("CHANGE", callback);
	}
	stopListening(callback) {
		this.removeListener("CHANGE", callback)
	}
}

export default new IdeaStore();
