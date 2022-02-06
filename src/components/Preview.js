import React from "react";
import "../styles/Preview.css";
import emptyAvatar from "../img/emptyAvatar.png";

class Preview extends React.Component {
	render() {
		return (
			<>
				<div className="prevHeader">
					<h1 id="nameH1">{this.props.data.personalInfo.fullName}</h1>
					<h3 id="titleH3">{this.props.data.personalInfo.title}</h3>
				</div>

				<div className="prevMain">
					<div className="mainLeft">
						<img src={this.props.data.personalInfo.photo} alt="" />
						<div id="mainLeftInnerDiv">
							<p>Personal Information</p>
							<span>
								<b>Address</b> <br />
							</span>
							<span>{this.props.data.personalInfo.address}</span>
							<span>
								<b>Number</b>
							</span>
							<span>{this.props.data.personalInfo.number}</span>
							<span>
								<b>Email</b>
							</span>
							<span>{this.props.data.personalInfo.email}</span>
						</div>
					</div>

					<div className="mainRight">
						<p>About Me</p>
						<article>{this.props.data.personalInfo.about}</article>
						<p>Experience</p>
						{this.props.data.experience.map((item) => {
							return (
								<React.Fragment key={item.id}>
									<div className="exEdRow">
										<div className="exEdRowLeft">
											{item.from} - {item.to}
										</div>
										<div className="exEdRowRight">
											{item.position} <br />
											<span>
												{item.company}, &nbsp; {item.city}
											</span>
											<span>{item.description}</span>
										</div>
									</div>
								</React.Fragment>
							);
						})}
						<div className="exEdDiv"></div>
						<p>Education</p>
						<div className="exEdDiv">
							<div className="exEdRow">
								<div className="exEdRowLeft">2008 - 2010</div>
								<div className="exEdRowRight">
									University of Michigan <br />
									<span>Field of study: &nbsp; History Of Art</span>
									<br />
									<span>Degree: &nbsp; Master</span>
								</div>
							</div>
							<div className="exEdRow">
								<div className="exEdRowLeft">2005 - 2008</div>
								<div className="exEdRowRight">
									University of Life <br />
									<span>Field of study: &nbsp; Smoking Weed</span>
									<br />
									<span>Degree: &nbsp; Master</span>
								</div>
							</div>
							<div className="exEdRow">
								<div className="exEdRowLeft">2003 - 2005</div>
								<div className="exEdRowRight">
									University of Street <br />
									<span>Field of study: &nbsp; Hustling</span>
									<br />
									<span>Degree: &nbsp; Bachelor</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Preview;
