/* eslint-disable no-restricted-globals */
import React from "react";
import "../styles/Form.css";
import "../styles/Preview.css";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";
import Preview from "./Preview";
import PrevRes from "./PrevRes";
import emptyAvatar from "../img/emptyAvatar.png";
import Button from "./Button";
import ReactToPrint from 'react-to-print';

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			preview: false,
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
		this.myRef = React.createRef();
		this.handleChange = this.handleChange.bind(this);
		this.handleAddExperience = this.handleAddExperience.bind(this);
		this.handleChangeExperience = this.handleChangeExperience.bind(this);
		this.handleDeleteExperience = this.handleDeleteExperience.bind(this);
		this.handleAddEducation = this.handleAddEducation.bind(this);
		this.handleChangeEducation = this.handleChangeEducation.bind(this);
		this.handleDeleteEducation = this.handleDeleteEducation.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.handlePreview = this.handlePreview.bind(this);
	}

	handleReset() {
		this.setState({
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
		});
	}

	handlePreview() {
		if (this.state.preview) {
			this.setState({
				...this.state,
				preview: false,
			});
		} else {
			this.setState({
				...this.state,
				preview: true,
			});
		}
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
		});
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
		});
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

	render() {
		if (this.state.preview) {
			document.querySelector('meta[name="viewport"]').setAttribute("content", "width=793px");

			return (
				<>
					<div id="editPdfDiv">
						<Button type="edit" prev={this.handlePreview}></Button>
						<ReactToPrint
						trigger={() => {
							return <a href="#"><Button type="pdf"></Button></a>
						}}
						content={() => this.myRef}
					/>
						
					</div>
					

					<Preview ref={el => (this.myRef = el)}  data={this.state}></Preview>
					
				</>
			);
		} else {
			document
				.querySelector('meta[name="viewport"]')
				.setAttribute("content", "width=device-width, initial-scale=1");
			return (
				<main className="form">
					<p>Personal Information</p>

					<PersonalInfo change={this.handleChange} val={this.state.personalInfo}></PersonalInfo>

					<p className="notFirstPara">Experience</p>

					<Experience
						addState={this.handleAddExperience}
						change={this.handleChangeExperience}
						val={this.state.experience}
						del={this.handleDeleteExperience}
					></Experience>

					<p className="notFirstPara">Education</p>

					<Education
						addState={this.handleAddEducation}
						val={this.state.education}
						change={this.handleChangeEducation}
						del={this.handleDeleteEducation}
					></Education>
					<PrevRes prev={this.handlePreview} res={this.handleReset}></PrevRes>
				</main>
			);
		}
	}
}

export default Form;
