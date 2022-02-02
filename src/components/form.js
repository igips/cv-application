/* eslint-disable no-restricted-globals */
import React from "react";
import "../styles/Form.css";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";
import PrevRes from "./PrevRes";
import emptyAvatar from "../img/emptyAvatar.png";

import uniqid from "uniqid";

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			personalInfo: {
				fullName: "",
				title: "",
				photo: emptyAvatar,
				address: "",
				number: "",
				email: "",
				about: "",
			},
			experience: [
				
			],
			education: [
				
			]

		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		if(e.target.type === "file") {
			this.handleImage(e)
			return;
		}

		this.setState({
			...this.state,
			personalInfo: {
				...this.state.personalInfo,
				[e.target.name]: e.target.value,
			},
		}, () => console.log(this.state.personalInfo.about));
		
	}

	handleImage(e) {
		const img = e.target.files[0];
		const reader = new FileReader();

		reader.onload = () => {
			this.setState({
				...this.state,
				personalInfo: {
					...this.state.personalInfo,
					[e.target.name]: reader.result,
				}
			}, () => console.log(this.state.personalInfo.photo));
		}
		reader.readAsDataURL(img);
	}


	render() {
		return (
			<main className="form">
				<p>Personal Information</p>
				<PersonalInfo change={this.handleChange} val={this.state.personalInfo}></PersonalInfo>
				<p className="notFirstPara">Experience</p>
				<Experience></Experience>
				<p className="notFirstPara">Education</p>
				<Education></Education>
				<PrevRes></PrevRes>
			</main>
		);
	}
}

export default Form;
