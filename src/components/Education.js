import React from "react";
import Input from "./Input";
import Button from "./Button";
import uniqid from "uniqid";

class Education extends React.Component {
	render() {
		const uKey = uniqid();

		return (
			<div className="formLine">
				{this.props.val.map((item) => {
					return (
						<React.Fragment key={item.id}>
							<Input
								id={item.id}
								val={item.school}
								change={this.props.change}
								name="school"
								for="University/School"
							></Input>
							<Input
								id={item.id}
								val={item.city}
								change={this.props.change}
								name="city"
								for="City"
							></Input>
							<Input
								id={item.id}
								val={item.study}
								change={this.props.change}
								name="study"
								for="Field of study"
							></Input>
							<Input
								id={item.id}
								val={item.degree}
								change={this.props.change}
								name="degree"
								for="Degree"
							></Input>
							<Input
								id={item.id}
								val={item.from}
								change={this.props.change}
								name="from"
								for="From"
							></Input>
							<Input
								id={item.id}
								val={item.to}
								change={this.props.change}
								name="to"
								for="To"
							></Input>
							<Button click={() => this.props.del(item.id)} type="delete"></Button>
						</React.Fragment>
					);
				})}
				<Button click={() => this.props.addState(uKey)} type="add"></Button>
			</div>
		);
	}
}

export default Education;
