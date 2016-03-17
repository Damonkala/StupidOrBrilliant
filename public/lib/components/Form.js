import React from 'react';
import IdeaActions from "../actions/IdeaActions";

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {titleValue: '', descriptionValue: ''};
	}
	changeInput(inputName, e){
		this.setState({ [inputName]: e.target.value});
	}
	addIdea(e){
		// e.preventDefault();
		let newIdea = { title: this.state.titleValue, description: this.state.descriptionValue };

		IdeaActions.saveIdea(newIdea);
		this.setState({titleValue: '', descriptionValue: ''});
	}
	render() {
		let {titleValue, descriptionValue} = this.state;
		return (
			<form>
				<h3>Add new Idea!</h3>
				<fieldset className="form-group">
					<input type="text" placeholder="Title" value={titleValue} onChange={this.changeInput.bind(this, "titleValue")} />
				</fieldset>
				<fieldset className="form-group">
					<textarea placeholder="Description"  cols="30" rows="10" value={descriptionValue } onChange={this.changeInput.bind(this, "descriptionValue")}></textarea>
				</fieldset>
				<button type="button" className="btn btn-success" onClick={this.addIdea.bind(this)}>Submit</button>
			</form>
		)
	}
}
