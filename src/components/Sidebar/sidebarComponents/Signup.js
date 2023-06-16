import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    password: "",
    wordbank: {}
  });

  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  
  function handleClick() {
    this.props.toggle();
  };

  function updateForm(value){
    return setForm((prev) => {
      return {...prev, ...value};
    });
  }

  async function onSubmit(e){
    e.preventDefault();
    e.target.reset();

    const newPerson = {...form};

    await fetch("http://localhost:5050/record", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    setForm({name: "", password: "", wordbank: {}});
    setSubmitted(true);
    navigate("/");
  }

  return (
    <div className="modal">
      <div className="modal_content px-2">
        <span className="close" onClick={handleClick}></span>
          
        <form onSubmit={onSubmit}>
          <label className="text-white" for="name">Name</label>
          <input className="rounded my-1 px-1" type="text" id="username" name="username" placeholder="Enter username" onChange={(e) => updateForm({name: e.target.value})}></input>
          <br></br>

          <label className="text-white" for="password">Password</label>
          <input className="rounded my-1 px-1" type="password" id="password" name="password" placeholder="Enter password" onChange={(e) => updateForm({password: e.target.value})}></input>
          <br></br>
          <input className="btn btn-primary px-2 mt-2 text-gray-800 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-300" type="submit" value="Sign up"/>
        </form>

        {submitted && <p className="text-white">You sucessfully made an account!</p>}
      </div>
    </div>
  );
}
