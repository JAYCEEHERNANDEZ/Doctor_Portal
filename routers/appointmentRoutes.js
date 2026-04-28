import express from "express";
import {
  fetchSchedule,
  accept,
  complete
} from "../controllers/appointmentController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Get daily/weekly schedule
router.get("/schedule", authMiddleware, fetchSchedule);

// Accept appointment
router.put("/:id/accept", authMiddleware, accept);

// Complete appointment
router.put("/:id/complete", authMiddleware, complete);

export default router;