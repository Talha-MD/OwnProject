import express from "express";
const router = express.Router();
import {
  getProduct,
  getProductById,
  DeleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from "../Controller/productController.js";
import { protect, admin } from "../Middelware/authMiddelware.js";
router.route("/").get(getProduct).post(protect, admin, createProduct);
router.route("/top").get(getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, DeleteProduct)
  .put(protect, admin, updateProduct);
router.route("/:id/reviews").post(protect, createProductReview);

export default router;
