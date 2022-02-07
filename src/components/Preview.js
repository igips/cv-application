import React from "react";
import "../styles/Preview.css";

function Preview (props) {
	
		return (
			<main className="preview">
            
				<div className="prevHeader">
					<h1 id="nameH1">{props.data.personalInfo.fullName}</h1>
					<h3 id="titleH3">{props.data.personalInfo.title}</h3>
				</div>

				<div className="prevMain">
					<div className="mainLeft">
						<img src={props.data.personalInfo.photo} alt="" />
						<div id="mainLeftInnerDiv">
							<p>Personal Information</p>
							<span>
								<b>Address</b> <br />
							</span>
							<span>{props.data.personalInfo.address}</span>
							<span>
								<b>Number</b>
							</span>
							<span>{props.data.personalInfo.number}</span>
							<span>
								<b>Email</b>
							</span>
							<span>{props.data.personalInfo.email}</span>
						</div>
					</div>

					<div className="mainRight">
						<p>About Me</p>
						<article>{props.data.personalInfo.about}</article>
						<p>Experience</p>
						<div className="exEdDiv">
							{props.data.experience.map((item) => {
								return (
									<React.Fragment key={item.id}>
										<div className="exEdRow">
											<div className="exEdRowLeft">
												{item.from} - {item.to}
											</div>
											<div className="exEdRowRight">
												{item.position} <br />
												<div className="comCity">
													{item.company}, {item.city}
												</div>
												<div className="descDiv">{item.description}</div>
											</div>
										</div>
									</React.Fragment>
								);
							})}
						</div>

						<p>Education</p>
						<div className="exEdDiv">
							{props.data.education.map((item) => {
								return (
									<React.Fragment key={item.id}>
										<div className="exEdRow">
											<div className="exEdRowLeft">
												{item.from} - {item.to}
											</div>
											<div className="exEdRowRight">
												{item.school}, {item.city}<br />
												<div className="comCity">
												Field of study:	{item.study} <br />
                                                Degree: {item.degree} 
												</div>
												
											</div>
										</div>
									</React.Fragment>
								);
							})}
						</div>
					</div>
				</div>
			</main>
		);
	
}

export default Preview;
