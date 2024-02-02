const express = require("express");
const router = express.Router();
const z = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { User } = require("../db");
const saltRounds = 10;
const signinSchema = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string().min(6),
});
router.post("/signup", (req, res) => {
  const verify = signinSchema.safeParse(req.body);
  if (verify.success) {
    User.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        res.status(403).json({ message: "User already exists" });
      } else {
        bcrypt
          .hash(req.body.password, saltRounds)
          .then((hash) => {
            User.create({
              email: req.body.email,
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              password: hash,
            })
              .then(() => {
                return res.status(201).json({
                  message: "User has been registered",
                });
              })
              .catch((err) => {
                console.log(err);
                return res
                  .status(500)
                  .json({ message: "something went wrong" });
              });
          })
          .catch((err) => {
            console.log(err);
            return res.status(500).json({ message: "something went wrong" });
          });
      }
    });
  } else {
    console.log(verify.error);
    return res.status(400).json({ message: "Incorrect inputs" });
  }
});
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
router.post("/signin", (req, res) => {
  const verify = loginSchema.safeParse(req.body);
  if (verify.success) {
    User.findOne({
      email: req.body.email,
    }).then((user) => {
      if (user) {
        bcrypt.compare(req.body.password, user.password).then((result) => {
          if (result) {
            return res.status(200).json({
              token: jwt.sign({ userId: user._id }, process.env.JWT_SECRET),
            });
          } else {
            return res
              .status(403)
              .json({ message: "The Username or Password is incorrect" });
          }
        });
      } else {
        return res.status(403).json({ message: "Account does not exist" });
      }
    });
  } else {
    console.log(verify.error);
    return res.status(400).json({ message: "Incorrect inputs" });
  }
});
module.exports = router;
