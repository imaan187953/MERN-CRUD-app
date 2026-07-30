import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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

    axios.put(
      "https://mern-crud-app-production-e156.up.railway.app/updateUser/" + id,
      {
        name,
        email,
        age,
      }
    )
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
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