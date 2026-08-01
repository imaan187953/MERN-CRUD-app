const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
  },

  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [1, "Age must be at least 1"],
    max: [120, "Age cannot exceed 120"],
  },
});

module.exports = mongoose.model("users", UserSchema);