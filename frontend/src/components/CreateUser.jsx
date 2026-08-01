import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      return toast.error("Name cannot be empty");
    }

    if (email.trim() === "") {
      return toast.error("Email cannot be empty");
    }

    if (age < 1 || age > 120) {
      return toast.error("Age must be between 1 and 120");
    }

    axios.post(
      "https://mern-crud-app-production-e156.up.railway.app/createUser",
      {
        name: name.trim(),
        email: email.trim(),
        age,
      }
    )
      .then(() => {
        toast.success("User created successfully!");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || "Failed to create user");
      });
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
            type="number"
            min="1"
            max="120"
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