import React from "react";
import "../styles/Input.css";



class Input extends React.Component {


    render() {
        let input;

        if(this.props.input === undefined) {
            input = <input type="text" placeholder={this.props.for} />;

        } else if (this.props.input === "file") {
            input = <label><span>Photo</span><input id="img" type="file" accept="image/*" /></label>

        } else if (this.props.input === "num") {
            input = <input type="number" placeholder={this.props.for}/>

        } else if (this.props.input === "email") {
            input = <input type="email" placeholder={this.props.for} />

        } else if (this.props.input === "textarea") {
            input = <textarea  placeholder={this.props.for}></textarea>
        }


        return( 
            input
        );
    }
}

export default Input;