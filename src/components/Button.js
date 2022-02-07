import React from "react";
import "../styles/Button.css";

function Button(props) {
	let button;

	if (props.type === "delete") {
		button = (
			<div className="buttonDiv">
				<button onClick={props.click} className="delButton">
					Delete
				</button>
			</div>
		);
	} else if (props.type === "add") {
		button = (
			<div className="buttonDiv">
				<button onClick={props.click} className="addButton">
					Add
				</button>
			</div>
		);
	} else if (props.type === "preview") {
		button = (
			<button onClick={props.prev} className="previewButton">
				Preview
			</button>
		);
	} else if (props.type === "reset") {
		button = (
			<button onClick={props.res} className="resetButton">
				Reset
			</button>
		);
	} else if (props.type === "edit") {
		button = (
			<button onClick={props.prev} className="editButton">
				Edit
			</button>
		);
	} else if (props.type === "pdf") {
		button = <button className="pdfButton">Save PDF</button>;
	}

	return button;
}

export default Button;
