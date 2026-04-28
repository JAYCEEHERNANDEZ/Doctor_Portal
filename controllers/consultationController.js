import {
  createConsultation,
  updateConsultation
} from "../services/consultationService.js";

export const create = async (req, res) => {
    try {
        res.json(await createConsultation(req.body, req.token));
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const update = async (req, res) => {
    try {
        res.json(await updateConsultation(req.params.id, req.body, req.token));
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};