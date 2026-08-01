require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");



const app = express();

console.log("THIS IS MY CURRENT SERVER");

app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((err) => console.log(err));

// Get All Users
app.get("/", (req, res) => {
    UserModel.find({})
        .then((users) => res.json(users))
        .catch((err) => {
            res.status(400).json({
                message: err.message,
            });
        });
});

// Get Single User
app.get("/getUser/:id", (req, res) => {
    const { id } = req.params;

    UserModel.findById(id)
        .then((user) => res.json(user))
        .catch((err) => {
            res.status(400).json({
                message: err.message,
            });
        });
});

// Create User
app.post("/createUser", (req, res) => {
    console.log("Received:", req.body);

    UserModel.create(req.body)
        .then((user) => {
            console.log("Saved:", user);
            res.json(user);
        })
        .catch((err) => {
            console.log("Error:", err);
            res.status(500).json(err);
        });
});
// Update User
app.put("/updateUser/:id", (req, res) => {
    const { id } = req.params;

    UserModel.findByIdAndUpdate(
        id,
        {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
        },
        {
            new: true,
            runValidators: true
        }
    )
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
});

// Delete User
app.delete("/deleteUser/:id", (req, res) => {
    const { id } = req.params;

    UserModel.findByIdAndDelete(id)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
});

app.get("/test", (req, res) => {
    res.send("Backend is working!");
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});