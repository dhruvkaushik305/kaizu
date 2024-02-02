const jwt = require("jsonwebtoken");
require("dotenv").config();
const { User } = require("../db");
module.exports = function (req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    User.findOne({
      _id: user.userId,
    }).then((user) => {
      if (user) {
        req.userId = user._id;
        next();
      } else {
        return res.status(403).json({ message: "Not authorized" });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Invalid token" });
  }
};
