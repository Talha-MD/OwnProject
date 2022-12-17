import express from "express";
const router = express.Router();
import {
  authUsers,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUser,
  DeleteUser,
  getUserById,
  UpdateUser,
} from "../Controller/userController.js";
import { protect, admin } from "../Middelware/authMiddelware.js";

router.post("/login", authUsers);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route("/").post(registerUser).get(protect, admin, getUser);
router
  .route("/:id")
  .delete(protect, admin, DeleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, UpdateUser);

export default router;
