import React from "react";
import Form from "./components/Form";
import "./styles/App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="app">
				<header>CV Builder</header>

				<Form></Form>

				<footer>
					<a href="https://github.com/igips" target="_blank" rel="noreferrer">
						<i className="fab fa-github"></i>
					</a>
				</footer>
			</div>
		);
	}
}

export default App;
