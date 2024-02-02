const express = require("express");
const router = express.Router();
//user-> signin returns a token
const userRouter = require("./user");
//todo requires an authentication header
const todoRouter = require("./todo");
router.use("/user", userRouter);
router.use("/todos", todoRouter);
module.exports = router;
