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
      <div>
        <div className="btn" onClick={this.togglePopSignup}>
          <button className="flex-1 ml-3 whitespace-nowrap bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">SIGNUP</button>
        </div>
        {this.state.seenSignup && <Signup toggle={this.togglePopSignup} />}

        <div className="btn" onClick={this.togglePopLogin}>
          <button className="flex-1 ml-3 whitespace-nowrap bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Login</button>
        </div>
        {this.state.seenLogin && <Login toggle={this.togglePopLogin} />}
      </div>
    );
  }
}
