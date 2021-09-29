
import React, {useState}  from "react";
import axios from "axios";

   

const initialState = {
  massege: "",
  date: "",

  massegeError: "",
  dateError: "",
  };

export default class ValiationForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let massegeError = "";
    let dateError = "";
    // let passwordError = "";

    if (!this.state.massege) {
      massegeError = "massege cannot be blank";
    }

    if (!this.state.date) {
      dateError = " date cannot be blank";
    }

    if (dateError || massegeError) {
      this.setState({ dateError, massegeError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div className="container">

      <form onSubmit={this.handleSubmit}>
      
        <div>
          <input
            label for="massege"
            placeholder="massege"
            value={this.state.massege}
            onChange={this.handleChange}
            
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.massegeError}
          </div>
        </div>
        
        <div>
          <input
            type="date"
            label for="date"
            placeholder="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.dateError}
          </div>
        </div>
        <button type="submit">ADD details</button>
      </form>
      </div>
    );
  }
}