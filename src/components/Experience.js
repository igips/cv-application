import React from "react";
import Input from "./Input";
import Button from "./Button";
import uniqid from "uniqid";

class Experience extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			forms: [],
		};

		this.addForm = this.addForm.bind(this);
		this.deleteForm = this.deleteForm.bind(this);
	}

	addForm() {
		const uKey = uniqid();

		this.setState({
			forms: [
				...this.state.forms,
				<React.Fragment key={uKey}>
					<Input
						id={uKey}
						val={this.props.val.position}
						change={this.props.change}
						name="position"
						for="Position"
					></Input>
					<Input
						id={uKey}
						val={this.props.val.company}
						change={this.props.change}
						name="company"
						for="Company"
					></Input>
					<Input
						id={uKey}
						val={this.props.val.from}
						change={this.props.change}
						name="from"
						for="From"
					></Input>
					<Input id={uKey} val={this.props.val.to} change={this.props.change} name="to" for="To"></Input>
					<Input
						id={uKey}
						val={this.props.val.city}
						change={this.props.change}
						name="city"
						for="City"
					></Input>
					<Input
						id={uKey}
						val={this.props.val.description}
						change={this.props.change}
						name="description"
						for="Job Description"
					></Input>
					<Button a="" click={() => this.deleteForm(uKey)} type="delete"></Button>
				</React.Fragment>,
			],
		});
		this.props.add(uKey);
	}

	deleteForm(key) {
		this.setState((state) => {
			const forms = state.forms.filter((fragment) => fragment.key !== key);

			return {
				forms,
			};
		});
		this.props.del(key);
	}

	render() {
		return (
			<div className="formLine">
				{this.state.forms}
				<Button click={this.addForm} type="add"></Button>
			</div>
		);
	}
}

export default Experience;
