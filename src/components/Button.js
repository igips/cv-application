import React from "react";
import "../styles/Button.css";

class Button extends React.Component {
	render() {
		let button;

		if (this.props.type === "delete") {
			button = (
				<div className="buttonDiv">
					<button onClick={this.props.click} className="delButton">
						Delete
					</button>
				</div>
			);
		} else if (this.props.type === "add") {
			button = (
				<div className="buttonDiv">
					<button onClick={this.props.click} className="addButton">
						Add
					</button>
				</div>
			);
		} else if (this.props.type === "preview") {
			button = <button onClick={this.props.prev}  className="previewButton">Preview</button>;
		} else if (this.props.type === "reset") {
			button = <button onClick={this.props.res} className="resetButton">Reset</button>;
		}

		return button;
	}
}

export default Button;
