import React from "react";
import Button from "./Button";

class AddDeleButtons extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="buttonDiv">
				<Button type="add"></Button>
				<Button type="delete"></Button>
			</div>
		);
	}
}

export default AddDeleButtons;
