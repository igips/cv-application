import React from "react";
import Input from "./Input";
import Button from "./Button";
import uniqid from "uniqid";

function Education (props) {
	
		const uKey = uniqid();

		return (
			<div className="formLine">
				{props.val.map((item) => {
					return (
						<React.Fragment key={item.id}>
							<Input
								id={item.id}
								val={item.school}
								change={props.change}
								name="school"
								for="University/School"
							></Input>
							<Input
								id={item.id}
								val={item.city}
								change={props.change}
								name="city"
								for="City"
							></Input>
							<Input
								id={item.id}
								val={item.study}
								change={props.change}
								name="study"
								for="Field of study"
							></Input>
							<Input
								id={item.id}
								val={item.degree}
								change={props.change}
								name="degree"
								for="Degree"
							></Input>
							<Input
								id={item.id}
								val={item.from}
								change={props.change}
								name="from"
								for="From"
							></Input>
							<Input
								id={item.id}
								val={item.to}
								change={props.change}
								name="to"
								for="To"
							></Input>
							<Button click={() => props.del(item.id)} type="delete"></Button>
						</React.Fragment>
					);
				})}
				<Button click={() => props.addState(uKey)} type="add"></Button>
			</div>
		);
	
}

export default Education;
