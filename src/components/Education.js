import React from "react";
import Input from "./Input";
import Button from "./Button";
import uniqid from "uniqid";

class Education extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			forms: [],
		};

		this.addForm = this.addForm.bind(this);
	}

	addForm() {
		const uKey = uniqid();

		this.props.addState(
			<React.Fragment key={uKey}>
				<Input
					id={uKey}
					val={this.props.val.school}
					change={this.props.change}
					name="school"
					for="University/School"
				></Input>
				<Input id={uKey} val={this.props.val.city} change={this.props.change} name="city" for="City"></Input>
				<Input
					id={uKey}
					val={this.props.val.study}
					change={this.props.change}
					name="study"
					for="Field of study"
				></Input>
				<Input
					id={uKey}
					val={this.props.val.degree}
					change={this.props.change}
					name="degree"
					for="Degree"
				></Input>
				<Input id={uKey} val={this.props.val.from} change={this.props.change} name="from" for="From"></Input>
				<Input id={uKey} val={this.props.val.to} change={this.props.change} name="to" for="To"></Input>
				<Button click={() => this.props.del(uKey)} type="delete"></Button>
			</React.Fragment>,
			uKey
		);
	}

	

	render() {
		return (
			<div className="formLine">
				{this.props.forms}
				<Button click={this.addForm} type="add"></Button>
			</div>
		);
	}
}

export default Education;
