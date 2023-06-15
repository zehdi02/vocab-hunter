import React, { Component, useState } from "react";

export default class Signup extends Component {



  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>&times;    </span>
          <form>
            <label for="name">Name</label>
            <input type="text" id="username" name="username" placeholder="Enter your username"></input>
            <br></br>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password"></input>
            <br></br>
            <button >SignUp</button>
          </form>
        </div>
      </div>
    );
  }
}