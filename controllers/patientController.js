import {
  getPatient,
  getPatientHistory
} from "../services/patientService.js";

export const fetchPatient = async (req, res) => {
    try {
        res.json(await getPatient(req.params.id, req.token));
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const fetchHistory = async (req, res) => {
    try {
        res.json(await getPatientHistory(req.params.id, req.token));
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};