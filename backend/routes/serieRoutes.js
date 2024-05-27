import express from 'express';
import {
    getAllSeries,
    getSerieById,
    insertSerie,
    updateSerie,
    deleteSerie
} from '../modules/Serie.js';

const router = express.Router();

// Routes for Serie operations
router.get('/series', getAllSeries);
router.get('/series/:id', getSerieById);
router.post('/series', insertSerie);
router.put('/series/:id', updateSerie);
router.delete('/series/:id', deleteSerie);

export default router;