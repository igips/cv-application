import React from "react";
import Input from "./Input";

class PersonalInfo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="formLine">
				<Input for="Full Name"></Input>
				<Input for="Title"></Input>
				<Input for="Photo" input="file"></Input>
				<Input for="Address"></Input>
				<Input for="Phone Number" input="num"></Input>
				<Input for="Email" input="email"></Input>
				<Input for="About You" input="textarea"></Input>
			</div>
		);
	}
}

export default PersonalInfo;
