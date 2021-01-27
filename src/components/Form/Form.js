import React, { Component } from 'react';
import'./Form.css';

class Form extends Component {
    state = {
        firstName: "", 
        lastName: "",
        email: "",
        message: ""
    };


    form = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        let w = document.forms["formInput"]["message"].value;
        let x = document.forms["formInput"]["firstName"].value;
        let y = document.forms["formInput"]["lastName"].value;
        let z = document.forms["formInput"]["email"].value;
        console.log(x);
        console.log(this.state);
        this.setState({
            firstName: "", 
            lastName: "",
            email: "",
            message: "",
        });
        if(w === "" ) {
            alert("Oops! Looks like you forgot to tell us how we can help you");
            return false;
        }
        if(x === "" ) {
            alert("Please enter your first name");
            return false;
        }
        if(y === "" ) {
            alert("Please enter your last name");
            return false;
        }
         else if(z === "" ) {
            alert("Email must be filled out");
            return false;
        };
    }


    render(){
        return (
            <div className="formContainer">
                <div className="back"></div>
                <h2 id="contactHeader">Contact Us For Questions</h2>
            <form id="sform" name="formInput">
                <input 
                className="inputfield"
                name="firstName"
                placeholder="First Name" 
                value={this.state.firstName} 
                onChange={e => this.form(e)}
                />
                <br/>
                <input
                className="inputfield"
                 name="lastName"
                 placeholder="Last name" 
                 value={this.state.lastName} 
                 onChange={e => this.form(e)}
                />
                 <br/>
                <input
                className="inputfield"
                 name="email"
                 placeholder="Email" 
                 value={this.state.email} 
                 onChange={e => this.form(e)}
                />
                <br/>
                <input 
                className="messagefield"
                name="message" 
                placeholder="How can we help...?" 
                value={this.state.message} 
                onChange={e => this.form(e)}
                />
                 <button className="submitButton" onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
            </div>
        );
    };
}

export default Form; 