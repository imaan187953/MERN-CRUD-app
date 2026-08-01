import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateUser = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(
      "https://mern-crud-app-production-e156.up.railway.app/getUser/" + id
    )
      .then((result) => {
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const Update = (e) => {
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

    axios.put(
      "https://mern-crud-app-production-e156.up.railway.app/updateUser/" + id,
      {
        name: name.trim(),
        email: email.trim(),
        age,
      }
    )
      .then(() => {
        toast.success("User updated successfully!");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || "Update failed");
      });
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">

        <form onSubmit={Update}>

          <h2>Update User</h2>

          <input
            className="form-control mb-3"
            placeholder="Enter Updated Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="form-control mb-3"
            placeholder="Enter Updated Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="number"
            min="1"
            max="120"
            className="form-control mb-3"
            placeholder="Enter Updated Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <button className="btn btn-success">
            Update
          </button>

        </form>

      </div>
    </div>
  );
};

export default UpdateUser;