import React from "react";
import Button from "./Button";

class PrevRes extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="buttonDiv">
				<Button prev={this.props.prev}  type="preview"></Button>
				<Button res={this.props.res} type="reset"></Button>
			</div>
		);
	}
}

export default PrevRes;
