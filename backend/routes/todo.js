const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();
const z = require("zod");
const { Todo, User } = require("../db");
const todoSchema = z.string();
router.get("/listTodos", auth, (req, res) => {
  User.findOne({ _id: req.userId }).then((user) => {
    if (user) {
      Todo.find({ _id: { $in: user.todos } }).then((userTodos) => {
        res.status(200).json({ todos: userTodos });
      });
    } else {
      return res.status(403).json({ message: "Invalid user" });
    }
  });
});
router.post("/addTodo", auth, (req, res) => {
  const { success } = todoSchema.safeParse(req.body);
  if (success) {
    Todo.create({
      todo: req.body.todo,
      completed: false,
    }).then((todo) => {
      User.updateOne({ _id: req.userId }, { $push: { todos: todo._id } });
    });
  } else {
    return res.status(400).json({ message: "incorrect inputs" });
  }
});
router.put("/toggleTodo", auth, (req, res) => {
  Todo.findOne({
    _id: req.body.id,
  })
    .then((todo) => {
      if (todo) {
        if (todo.completed == true) {
          Todo.updateOne({ _id: todo._id }, { completed: false }).then(() => {
            res.status(200).json({ message: "Todo marked as to be done" });
          });
        } else {
          Todo.updateOne({ _id: todo._id }, { completed: true }).then(() => {
            res.status(200).json({ message: "Todo marked as done" });
          });
        }
      } else {
        return res.status(400).json({ message: "No such todo found" });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: "something went wrong" });
    });
});
module.exports = router;
