import React from "react";
import Button from "./Button";

function PrevRes(props) {
	return (
		<div className="buttonDiv">
			<Button prev={props.prev} type="preview"></Button>
			<Button res={props.res} type="reset"></Button>
		</div>
	);
}

export default PrevRes;
