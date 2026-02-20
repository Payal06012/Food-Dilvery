import express from "express";
import {
  getAllOrders,
  cancelOrder
} from "../controllers/adminOrderController.js";

import authMiddleware from "../middleware/Auth.js";
// import checkRole from "../middleware/roleMiddleware.js";

const adminRouter = express.Router();

// Admin Orders
adminRouter.get(
  "/orders",
//   authMiddleware,
//   checkRole("ADMIN"),
  getAllOrders
);

adminRouter.put(
  "/order/cancel/:id",
//   authMiddleware,
//   checkRole("ADMIN"),
  cancelOrder
);

export default adminRouter;
