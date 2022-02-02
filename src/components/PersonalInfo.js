import React from "react";
import Input from "./Input";

class PersonalInfo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="formLine">
				<Input val={this.props.val.fullName} change={this.props.change} name="fullName" for="Full Name"></Input>
				<Input val={this.props.val.title} change={this.props.change} name="title" for="Title"></Input>
				<Input change={this.props.change} name="photo" for="Photo" input="file"></Input>
				<Input val={this.props.val.address} change={this.props.change} name="address" for="Address"></Input>
				<Input
					val={this.props.val.number}
					change={this.props.change}
					name="number"
					for="Phone Number"
					input="num"
				></Input>
				<Input
					val={this.props.val.email}
					change={this.props.change}
					name="email"
					for="Email"
					input="email"
				></Input>
				<Input
					val={this.props.val.about}
					change={this.props.change}
					name="about"
					for="About You"
					input="textarea"
				></Input>
			</div>
		);
	}
}

export default PersonalInfo;
