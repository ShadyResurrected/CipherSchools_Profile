import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  interests: [],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  followers: [],
});

export const User = mongoose.model("User", schema);
