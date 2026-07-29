import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/createUser", {
        name,
        email,
        age,
      })
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">

        <form onSubmit={Submit}>

          <h2>Add User</h2>

          <input
            className="form-control mb-3"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="form-control mb-3"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <button className="btn btn-success">
            Submit
          </button>

        </form>

      </div>
    </div>
  );
};

export default CreateUser;