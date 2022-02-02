import React from "react";
import "../styles/Input.css";

class Input extends React.Component {
	render() {
		let input;

		if (this.props.input === undefined) {
			input = (
				<input
					name={this.props.name}
					value={this.props.val}
					onChange={(e) => this.props.change(e, this.props.id)}
					type="text"
					placeholder={this.props.for}
				/>
			);
		} else if (this.props.input === "file") {
			input = (
				<label>
					<span>Photo</span>
					<input name={this.props.name} onChange={this.props.change} id="img" type="file" accept="image/*" />
				</label>
			);
		} else if (this.props.input === "num") {
			input = (
				<input
					name={this.props.name}
					value={this.props.val}
					onChange={this.props.change}
					type="number"
					placeholder={this.props.for}
				/>
			);
		} else if (this.props.input === "email") {
			input = (
				<input
					name={this.props.name}
					value={this.props.val}
					onChange={this.props.change}
					type="email"
					placeholder={this.props.for}
				/>
			);
		} else if (this.props.input === "textarea") {
			input = (
				<textarea
					name={this.props.name}
					value={this.props.val}
					onChange={this.props.change}
					placeholder={this.props.for}
				></textarea>
			);
		}

		return input;
	}
}

export default Input;
