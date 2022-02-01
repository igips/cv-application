import React from "react";
import "../styles/Form.css";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Button from "./Button"
import Input from "./Input"

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
				<p>Education</p>
				
			</main>
		);
	}
}

export default Form;
