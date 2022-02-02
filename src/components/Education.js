import React from "react";
import Input from "./Input";
import AddDeleButtons from "./AddDeleButtons";

class Education extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="formLine">
				<Input for="University/School"></Input>
				<Input for="City"></Input>
				<Input for="Field of study"></Input>
				<Input for="Degree"></Input>
				<Input for="From"></Input>
				<Input for="To"></Input>
				<AddDeleButtons></AddDeleButtons>
			</div>
		);
	}
}

export default Education;
