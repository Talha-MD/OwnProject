import jwt from "jsonwebtoken";
import User from "../Model/UserModel.js";
import asynchandler from "express-async-handler";

const protect = asynchandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECERET);
      req.user = await User.findById(decode.id).select("-password");
      console.log(decode, token);
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Authorized Token Failed");
    }
  }
  if (!token) {
    res.status(400);
    throw new Error("Not Authorization Token");
  }
  next();
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not Authorized as an Admin");
  }
};

export { protect, admin };
