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
							vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.¯
						</article>
                        <p>Experience</p>
					</div>
				</div>
			</>
		);
	}
}

export default Preview;
