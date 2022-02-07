/* eslint-disable no-restricted-globals */
import React, { useState, useRef } from "react";
import "../styles/Form.css";
import "../styles/Preview.css";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";
import Preview from "./Preview";
import PrevRes from "./PrevRes";
import emptyAvatar from "../img/emptyAvatar.png";
import Button from "./Button";
import ReactToPrint from "react-to-print";

function Form() {
	const [state, setState] = useState({
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
	});

	const previewRef = useRef();

	function handleReset() {
		setState({
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

	function handlePreview() {
		if (state.preview) {
			setState({
				...state,
				preview: false,
			});
		} else {
			setState({
				...state,
				preview: true,
			});
		}
	}

	function handleChange(e) {
		if (e.target.type === "file") {
			handleImage(e);
			return;
		}

		setState({
			...state,
			personalInfo: {
				...state.personalInfo,
				[e.target.name]: e.target.value,
			},
		});
	}

	function handleImage(e) {
		const img = e.target.files[0];
		const reader = new FileReader();

		reader.onload = () => {
			setState({
				...state,
				personalInfo: {
					...state.personalInfo,
					[e.target.name]: reader.result,
				},
			});
		};
		reader.readAsDataURL(img);
	}

	function handleAddExperience(key) {
		setState({
			...state,
			experience: [
				...state.experience,
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

	function handleAddEducation(key) {
		setState({
			...state,
			education: [
				...state.education,
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

	function handleChangeExperience(e, key) {
		setState((prevState) => {
			const newExp = prevState.experience.map((item) => {
				if (item.id === key) {
					return { ...item, [e.target.name]: e.target.value };
				}
				return item;
			});
			return { ...prevState, experience: [...newExp] };
		});
	}

	function handleChangeEducation(e, key) {
		setState((prevState) => {
			const newEdu = prevState.education.map((item) => {
				if (item.id === key) {
					return { ...item, [e.target.name]: e.target.value };
				}
				return item;
			});
			return { ...prevState, education: [...newEdu] };
		});
	}

	function handleDeleteExperience(key) {
		setState((prevState) => {
			const newExp = prevState.experience.filter((item) => item.id !== key);

			return { ...prevState, experience: [...newExp] };
		});
	}

	function handleDeleteEducation(key) {
		setState((prevState) => {
			const newEdu = prevState.education.filter((item) => item.id !== key);

			return { ...prevState, education: [...newEdu] };
		});
	}

	if (state.preview) {
		document.querySelector('meta[name="viewport"]').setAttribute("content", "width=793px");

		return (
			<>
				<div id="editPdfDiv">
					<Button type="edit" prev={handlePreview}></Button>
					<ReactToPrint
						trigger={() => <button className="pdfButton">Save PDF</button>}
						content={() => previewRef.current}
					/>
				</div>

				<Preview ref={previewRef} data={state}></Preview>
			</>
		);
	} else {
		document.querySelector('meta[name="viewport"]').setAttribute("content", "width=device-width, initial-scale=1");
		return (
			<main className="form">
				<p>Personal Information</p>

				<PersonalInfo change={handleChange} val={state.personalInfo}></PersonalInfo>

				<p className="notFirstPara">Experience</p>

				<Experience
					addState={handleAddExperience}
					change={handleChangeExperience}
					val={state.experience}
					del={handleDeleteExperience}
				></Experience>

				<p className="notFirstPara">Education</p>

				<Education
					addState={handleAddEducation}
					val={state.education}
					change={handleChangeEducation}
					del={handleDeleteEducation}
				></Education>
				<PrevRes prev={handlePreview} res={handleReset}></PrevRes>
			</main>
		);
	}
}

export default Form;
