import React from "react";
import Input from "./Input";
import Button from "./Button";
import uniqid from "uniqid";

function Experience(props) {
	const uKey = uniqid();
	return (
		<div className="formLine">
			{props.val.map((item) => {
				return (
					<React.Fragment key={item.id}>
						<Input
							id={item.id}
							val={item.position}
							change={props.change}
							name="position"
							for="Position"
						></Input>
						<Input
							id={item.id}
							val={item.company}
							change={props.change}
							name="company"
							for="Company"
						></Input>
						<Input id={item.id} val={item.from} change={props.change} name="from" for="From"></Input>
						<Input id={item.id} val={item.to} change={props.change} name="to" for="To"></Input>
						<Input id={item.id} val={item.city} change={props.change} name="city" for="City"></Input>
						<Input
							id={item.id}
							val={item.description}
							change={props.change}
							name="description"
							for="Job Description"
						></Input>
						<Button a="" click={() => props.del(item.id)} type="delete"></Button>
					</React.Fragment>
				);
			})}
			<Button click={() => props.addState(uKey)} type="add"></Button>
		</div>
	);
}

export default Experience;
