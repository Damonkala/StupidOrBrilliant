console.log("This is line two, trust me");
import React from 'react';
import { Link } from 'react-router';
import AppController from './AppController';

export default class UserPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<li><Link to="/list">List</Link></li>
			</div>
		)
	}
}
