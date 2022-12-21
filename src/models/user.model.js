const mongoose = require("mongoose");
const _ = require("lodash");
const UserConstant = require("../utils/constants/userModelConstant");
const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      enum: _.values(UserConstant.GENDER),
    },
    avatar: {
      type: String,
    },
    state: {
      type: String,
      enum: _.values(UserConstant.STATE),
    },
    friends: {
      type: Array,
      default: [],
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("Users", UserSchema);
