import {
  createLabRequest,
  getLabResults
} from "../services/labService.js";

export const createLab = async (req, res) => {
    try {
        res.json(await createLabRequest(req.body, req.token));
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const fetchResults = async (req, res) => {
    try {
        res.json(await getLabResults(req.params.id, req.token));
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};