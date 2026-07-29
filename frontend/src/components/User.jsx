import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("http://localhost:3001")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + id)
      .then(() => getUsers())
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-75 bg-white rounded p-3">

        <Link to="/create" className="btn btn-success mb-3">
          Add User
        </Link>

        <table className="table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {users.map((user) => (

              <tr key={user._id}>

                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>

                <td>

                  <Link
                    to={`/update/${user._id}`}
                    className="btn btn-success"
                  >
                    Update
                  </Link>

                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
};

export default User;