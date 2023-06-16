import React from "react";
import Signup from "./Signup";
import Login from "./Login";

export default class LoginSignup extends React.Component {
  state = {
    seenSignup: false,
    seenLogin: false
  };

  togglePopSignup = () => {
    this.setState(prevState => ({
      seenSignup: !prevState.seenSignup
    }));
  };

  togglePopLogin = () => {
    this.setState(prevState => ({
      seenLogin: !prevState.seenLogin
    }));
  };

  render() {
    return (
      <ul className="font-medium">
        <li>
          <div className="btn" onClick={this.togglePopLogin}>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
            </a>
          </div>
          {this.state.seenLogin && <Login toggle={this.togglePopLogin} />}
        </li>
        <li>
          <div className="btn" onClick={this.togglePopSignup}>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </a>
          </div>
          {this.state.seenSignup && <Signup toggle={this.togglePopSignup} />}
        </li>
      </ul>
    );
  }
}
