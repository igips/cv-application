import React from "react";
import Input from "./Input";
import Button from "./Button";
import uniqid from "uniqid";

class Experience extends React.Component {
	render() {
		const uKey = uniqid();
		return (
			<div className="formLine">
				{this.props.val.map((item) => {
					return (
						<React.Fragment key={item.id}>
							<Input
								id={item.id}
								val={item.position}
								change={this.props.change}
								name="position"
								for="Position"
							></Input>
							<Input
								id={item.id}
								val={item.company}
								change={this.props.change}
								name="company"
								for="Company"
							></Input>
							<Input
								id={item.id}
								val={item.from}
								change={this.props.change}
								name="from"
								for="From"
							></Input>
							<Input id={item.id} val={item.to} change={this.props.change} name="to" for="To"></Input>
							<Input
								id={item.id}
								val={item.city}
								change={this.props.change}
								name="city"
								for="City"
							></Input>
							<Input
								id={item.id}
								val={item.description}
								change={this.props.change}
								name="description"
								for="Job Description"
							></Input>
							<Button a="" click={() => this.props.del(item.id)} type="delete"></Button>
						</React.Fragment>
					);
				})}
				<Button click={() => this.props.addState(uKey)} type="add"></Button>
			</div>
		);
	}
}

export default Experience;
