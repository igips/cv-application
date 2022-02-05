/* eslint-disable no-restricted-globals */
import React from "react";
import "../styles/Form.css";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";
import PrevRes from "./PrevRes";
import emptyAvatar from "../img/emptyAvatar.png";

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			ExperienceForm: [],
			EducationForm: [],
			personalInfo: {
				fullName: "",
				title: "",
				photo: emptyAvatar,
				address: "",
				number: "",
				email: "",
				about: "",
			},
			experience: [],
			education: [],
			
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleAddExperience = this.handleAddExperience.bind(this);
		this.handleChangeExperience = this.handleChangeExperience.bind(this);
		this.handleDeleteExperience = this.handleDeleteExperience.bind(this);
		this.handleAddEducation = this.handleAddEducation.bind(this);
		this.handleChangeEducation = this.handleChangeEducation.bind(this);
		this.handleDeleteEducation = this.handleDeleteEducation.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.addStateFormExperience = this.addStateFormExperience.bind(this);
		this.deleteFormExpereience = this.deleteFormExpereience.bind(this);
		this.addStateFormEducation = this.addStateFormEducation.bind(this);
		this.deleteFormEducation = this.deleteFormEducation.bind(this);
		
	}

	handleReset() {
	
		this.setState({
			personalInfo: {
				fullName: "",
				title: "",
				photo: emptyAvatar,
				address: "",
				number: "",
				email: "",
				about: "",
			},
			
		}, () => console.log(this.state));

		
	}

	

	handleChange(e) {
		if (e.target.type === "file") {
			this.handleImage(e);
			return;
		}

		this.setState({
			...this.state,
			personalInfo: {
				...this.state.personalInfo,
				[e.target.name]: e.target.value,
			},
		});
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
				},
			});
		};
		reader.readAsDataURL(img);
	}

	handleAddExperience(key) {
		this.setState({
			...this.state,
			experience: [
				...this.state.experience,
				{
					id: key,
					position: "",
					company: "",
					from: "",
					to: "",
					city: "",
					description: "",
					
				},
			],
		});
	}

	handleAddEducation(key) {
		this.setState({
			...this.state,
			education: [
				...this.state.education,
				{
					id: key,
					school: "",
					city: "",
					study: "",
					degree: "",
					from: "",
					to: "",
		
				},
			],
		});
	}

	handleChangeExperience(e, key) {
		this.setState((state) => {
			const newExp = state.experience.map((item) => {
				if (item.id === key) {
					return { ...item, [e.target.name]: e.target.value };
				}
				return item;
			});
			return { ...state, experience: [...newExp] };
		}, () => console.log(this.state));
	}

	handleChangeEducation(e, key) {
		this.setState((state) => {
			const newEdu = state.education.map((item) => {
				if (item.id === key) {
					return { ...item, [e.target.name]: e.target.value };
				}
				return item;
			});
			return { ...state, education: [...newEdu] };
		}, () => console.log(this.state));
	}

	handleDeleteExperience(key) {
		this.setState((state) => {
			const newExp = state.experience.filter((item) => item.id !== key);

			return { ...state, experience: [...newExp] };
		});
	}

	handleDeleteEducation(key) {
		this.setState((state) => {
			const newEdu = state.education.filter((item) => item.id !== key);

			return { ...state, education: [...newEdu] };
		});
	}

	addStateFormExperience(state, key) {
		

		this.setState({
			...this.state,
			ExperienceForm: [
				...this.state.ExperienceForm,
					state
			],
		}, () => this.handleAddExperience(key));
	}

	deleteFormExpereience(key) {
		this.setState((state) => {
			const forms = state.ExperienceForm.filter((fragment) => fragment.key !== key);

			return { ...state, ExperienceForm: [...forms] };
		}, () => this.handleDeleteExperience(key));	
	}

	addStateFormEducation(state, key) {
		this.setState({
			...this.state,
			EducationForm: [
				...this.state.EducationForm,
				state
			],
		}, () => this.handleAddEducation(key));
	}

	deleteFormEducation(key) {
		this.setState((state) => {
			const forms = state.EducationForm.filter((fragment) => fragment.key !== key);
			return {...state, EducationForm: [...forms]};
		}, () => this.handleDeleteEducation(key));
	}

	
	

	render() {
		return (
			<main className="form">
				<p>Personal Information</p>

				<PersonalInfo change={this.handleChange} val={this.state.personalInfo}></PersonalInfo>

				<p className="notFirstPara">Experience</p>

				<Experience
					forms={this.state.ExperienceForm}
					addState={this.addStateFormExperience}	
					change={this.handleChangeExperience}
					val={this.state.experience}
					del={this.deleteFormExpereience}
				></Experience>

				<p className="notFirstPara">Education</p>

				<Education
					forms={this.state.EducationForm}
					addState={this.addStateFormEducation}
					val={this.state.education}
					change={this.handleChangeEducation}
					del={this.deleteFormEducation}
				></Education>
				<PrevRes res={this.handleReset}></PrevRes>
			</main>
		);
	}
}

export default Form;
