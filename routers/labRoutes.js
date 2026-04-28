import express from "express";
import {
  createLab,
  fetchResults
} from "../controllers/labController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create lab request
router.post("/", authMiddleware, createLab);

// Get lab results by appointment ID
router.get("/:id", authMiddleware, fetchResults);

export default router;