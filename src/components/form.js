import React from "react";
import "../styles/Form.css";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";
import Button from "./Button";

class Form extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<main className="form">
				<p>Personal Information</p>
				<PersonalInfo></PersonalInfo>
				<p className="notFirstPara">Experience</p>
				<Experience></Experience>
				<p className="notFirstPara">Education</p>
				<Education></Education>
				<div className="buttonDiv">
					<Button type="preview"></Button>
					<Button type="reset"></Button>
				</div>
				
			</main>
		);
	}
}

export default Form;
