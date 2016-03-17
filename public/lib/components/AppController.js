console.log("This is line one, trust me");
import React from 'react';
import List from './List';
import Form from './Form';
import { Link } from 'react-router'

import IdeaActions from "../actions/IdeaActions"

import IdeaStore from "../stores/IdeaStore";

let _getAppState = () => {
	return { ideas: IdeaStore.getAll() }
}

export default class AppController extends React.Component {
	constructor(props) {
		super(props);
		this.state = _getAppState();
		this._onChange = this._onChange.bind(this);
	}
	componentDidMount(){
		console.log("Component did mount, indeed");
		IdeaActions.fetchAllIdeas();
		IdeaStore.startListening(this._onChange);
	}
	componentWillUnmount(){
		IdeaStore.stopListening(this._onChange);
	}
	_onChange(){
		console.log("THE STORE HAST EMITTED A CHANGE EVENT!");
		this.setState(_getAppState());
	}
	render() {
		return (
			<div>
				<li><Link to="/user">User</Link></li>
				<Form />
				<List ideas={this.state.ideas} />
			</div>
		)
	}
}
