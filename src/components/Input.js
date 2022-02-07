import React from "react";
import "../styles/Input.css";

const Input = (props) => {
	let input;

		if (props.input === undefined) {
			input = (
				<input
					name={props.name}
					value={props.val}
					onChange={(e) => props.change(e, props.id)}
					type="text"
					placeholder={props.for}
				/>
			);
		} else if (props.input === "file") {
			input = (
				<label>
					<span>Photo</span>
					<input name={props.name} onChange={props.change} id="img" type="file" accept="image/*" />
				</label>
			);
		} else if (props.input === "num") {
			input = (
				<input
					name={props.name}
					value={props.val}
					onChange={props.change}
					type="number"
					placeholder={props.for}
				/>
			);
		} else if (props.input === "email") {
			input = (
				<input
					name={props.name}
					value={props.val}
					onChange={props.change}
					type="email"
					placeholder={props.for}
				/>
			);
		} else if (props.input === "textarea") {
			input = (
				<textarea
					name={props.name}
					value={props.val}
					onChange={props.change}
					placeholder={props.for}
				></textarea>
			);
		}
	

	return(
		input
	); 
		

	
};

export default Input;
