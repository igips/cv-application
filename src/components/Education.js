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
        this.deleteForm = this.deleteForm.bind(this);
	}

	addForm() {
        const uKey = uniqid();

		this.setState({
			forms: [
				...this.state.forms,
				<React.Fragment key={uKey}>
					<Input for="University/School"></Input>
					<Input for="City"></Input>
					<Input for="Field of study"></Input>
					<Input for="Degree"></Input>
					<Input for="From"></Input>
					<Input for="To"></Input>
					<Button click={() => this.deleteForm(uKey)} type="delete"></Button>
                </React.Fragment>,
			],
		});
	}

    deleteForm(key) {
        this.setState(state => {
            const forms = state.forms.filter(fragment => fragment.key !== key);

            return {
                forms,
            };
        });
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

export default Education;
