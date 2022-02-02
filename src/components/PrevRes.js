import React from "react";
import Button from "./Button";

class PrevRes extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="buttonDiv">
				<Button type="preview"></Button>
				<Button type="reset"></Button>
			</div>
		);
	}
}

export default PrevRes;
