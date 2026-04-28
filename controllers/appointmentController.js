import {
  getSchedule,
  acceptAppointment,
  completeAppointment
} from "../services/appointmentService.js";

export const fetchSchedule = async (req, res) => {
    try {
        res.json(await getSchedule(req.token));
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const accept = async (req, res) => {
    try {
        res.json(await acceptAppointment(req.params.id, req.token));
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const complete = async (req, res) => {
    try {
        res.json(await completeAppointment(req.params.id, req.token));
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};