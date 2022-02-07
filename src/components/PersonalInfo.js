import React from "react";
import Input from "./Input";

function PersonalInfo(props) {
	return (
		<div className="formLine">
			<Input val={props.val.fullName} change={props.change} name="fullName" for="Full Name"></Input>
			<Input val={props.val.title} change={props.change} name="title" for="Title"></Input>
			<Input change={props.change} name="photo" for="Photo" input="file"></Input>
			<Input val={props.val.address} change={props.change} name="address" for="Address"></Input>
			<Input val={props.val.number} change={props.change} name="number" for="Phone Number" input="num"></Input>
			<Input val={props.val.email} change={props.change} name="email" for="Email" input="email"></Input>
			<Input val={props.val.about} change={props.change} name="about" for="About You" input="textarea"></Input>
		</div>
	);
}

export default PersonalInfo;
