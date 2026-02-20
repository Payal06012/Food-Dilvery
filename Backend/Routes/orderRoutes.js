import express from "express";
import { placeOrder } from "../controllers/orderController.js";
import authMiddleware from "../middleware/Auth.js";

const router = express.Router();

router.post("/place",authMiddleware, placeOrder);

export default router;
