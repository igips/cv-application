import React from "react";
import Input from "./Input";
import AddDeleButtons from "./AddDeleButtons";

class Experience extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="formLine">
				<Input for="Position"></Input>
				<Input for="Company"></Input>
				<Input for="From"></Input>
				<Input for="To"></Input>
				<Input for="City"></Input>
				<Input for="Job Description"></Input>
                <AddDeleButtons></AddDeleButtons>
			</div>
		);
	}
}

export default Experience;