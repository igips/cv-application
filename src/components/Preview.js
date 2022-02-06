import React from "react";
import "../styles/Preview.css";
import emptyAvatar from "../img/emptyAvatar.png";

class Preview extends React.Component {
	render() {
		return (
			<>
				<div className="prevHeader">
					<h1 id="nameH1">Igor Szepietowski</h1>
					<h3 id="titleH3"> Junior Web Developer</h3>
				</div>

				<div className="prevMain">
					<div className="mainLeft">
						<img src={emptyAvatar} alt="" />
						<div id="mainLeftInnerDiv">
							<p>Personal Information</p>
							<span>
								<b>Address</b> <br />
							</span>
							<span>Examsdsble Streest 123, 01-7272, Warsaw</span>
							<span>
								<b>Number</b>
							</span>
							<span>123456789</span>
							<span>
								<b>Email</b>
							</span>
							<span>igor.szepietowski@gmail.com</span>
						</div>
					</div>

					<div className="mainRight">
						<p>About Me</p>
						<article>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl
							sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac
							pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas
							vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.
						</article>
						<p>Experience</p>
						<div className="exEdDiv">
							<div className="exEdRow">
								<div className="exEdRowLeft">2018 - Present</div>
								<div className="exEdRowRight">
									Junior Web Developer <br />
									<span>Twitter Inc, &nbsp; Dupeloria</span>
								</div>
							</div>
							<div className="exEdRow">
								<div className="exEdRowLeft">2015 - 2018</div>
								<div className="exEdRowRight">
									Junior Web Developer <br />
									<span>Facebook Inc, &nbsp; Ontario</span>
								</div>
							</div>
                            <div className="exEdRow">
								<div className="exEdRowLeft">2012 - 2015</div>
								<div className="exEdRowRight">
									Junior Web Developer <br />
									<span>Google Inc, &nbsp; London</span><br />
                                    <span>Working on sram szczam fam</span>
								</div>
							</div>
						</div>
                        <p>Education</p>
                        <div className="exEdDiv">
							<div className="exEdRow">
								<div className="exEdRowLeft">2008 - 2010</div>
								<div className="exEdRowRight">
									University of Michigan <br />
									<span>Field of study: &nbsp; History Of Art</span><br />
                                    <span>Degree: &nbsp; Master</span>
								</div>
							</div>
							<div className="exEdRow">
								<div className="exEdRowLeft">2005 - 2008</div>
								<div className="exEdRowRight">
									University of Life <br />
									<span>Field of study: &nbsp; Smoking Weed</span><br />
                                    <span>Degree: &nbsp; Master</span>
								</div>
							</div>
                            <div className="exEdRow">
								<div className="exEdRowLeft">2003 - 2005</div>
								<div className="exEdRowRight">
									University of Street <br />
									<span>Field of study: &nbsp; Hustling</span><br />
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
