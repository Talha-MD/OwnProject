import express from "express";
import {
  addOrderItems,
  getOrderById,
  UpdateOrdertoPaid,
  getMyOrder,
  getOrders,
  updateOrderToDelivered,
} from "../Controller/OrderController.js";
import { protect, admin } from "../Middelware/authMiddelware.js";
const router = express.Router();

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/myorders").get(protect, getMyOrder);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, UpdateOrdertoPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

export default router;
