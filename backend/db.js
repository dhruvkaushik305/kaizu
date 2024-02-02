const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("DB planted"));

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
});

const todoSchema = new mongoose.Schema({
  todo: String,
  completed: Boolean,
});

const User = mongoose.model("User", userSchema);
const Todo = mongoose.model("Todo", todoSchema);
module.exports = {
  User,
  Todo,
};
