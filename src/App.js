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
        <main><Form></Form></main>
        



      </div>




    );
  }

}





export default App;
