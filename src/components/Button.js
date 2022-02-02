import React from "react";
import "../styles/Button.css";

class Button extends React.Component {
	render() {
		let button;

		if (this.props.type === "delete") {
			button = <button className="delButton">Delete</button>;
			
		} else if (this.props.type === "add") {
			button = <button className="addButton">Add</button>;

		} else if (this.props.type === "preview") {
			button = <button className="previewButton">Preview</button>;

		} else if (this.props.type === "reset") {
			button = <button className="resetButton">Reset</button>;
		}

		return (
			button
		);
	}
}

export default Button;
