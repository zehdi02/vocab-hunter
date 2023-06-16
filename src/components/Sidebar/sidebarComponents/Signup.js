import React, { Component, useState } from "react";

export default class Signup extends Component {

  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="modal">
        <div className="modal_content px-2">
          <span className="close" onClick={this.handleClick}></span>
          <form className="pb-2">
            <label className="text-white" for="name">Name</label>
            <input className="rounded my-1 px-1" type="text" id="username" name="username" placeholder="Enter username"></input>
            <br></br>

            <label className="text-white" for="password">Password</label>
            <input className="rounded my-1 px-1" type="password" id="password" name="password" placeholder="Enter password"></input>
            <br></br>
            <button className="px-2 mt-2 text-gray-800 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-300">SignUp</button>
          </form>
        </div>
      </div>
    );
  }
}