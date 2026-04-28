import express from "express";
import {
  create,
  update
} from "../controllers/consultationController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create consultation note
router.post("/", authMiddleware, create);

// Update consultation note
router.put("/:id", authMiddleware, update);

export default router;