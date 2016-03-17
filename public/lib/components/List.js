import React from 'react';

export default class List extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let ideaList = this.props.ideas;
		console.log("ideaList", ideaList);
		let ideaAsList = ideaList.map((idea, index) => {
			return <tr key={index}>
				<td>{idea.title}</td>
				<td>{idea.user}</td>
				<td>{idea.description}</td>
				<td>{idea.votesForStupid.length}</td>
				<td>{idea.votesForBrilliant.length}</td>
				<td><button>Stupid</button></td>
				<td><button>Brilliant</button></td>
			</tr>
		});
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>Title</th>
							<th>User</th>
							<th>Description</th>
							<th>Votes for Stupid</th>
							<th>Votes for Brilliant</th>
						</tr>
					</thead>
					<tbody>
						{ideaAsList}
					</tbody>
				</table>
			</div>
		)
	}
}
