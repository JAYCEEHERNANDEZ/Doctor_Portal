import express from "express";
import {
  fetchPatient,
  fetchHistory
} from "../controllers/patientController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Get patient basic info
router.get("/:id", authMiddleware, fetchPatient);

// Get consultation history
router.get("/:id/history", authMiddleware, fetchHistory);

export default router;