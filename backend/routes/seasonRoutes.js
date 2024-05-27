import express from 'express';
import {
    getAllSeasons,
    getSeasonById,
    deleteSeasonDocumental,
    deleteSeasonSerie,
    insertSeason,
    updateSeason
} from '../modules/Season.js';

const router = express.Router();

// Routes for Season operations
router.get('/seasons', getAllSeasons);
router.get('/seasons/:id', getSeasonById);
router.delete('/seasons/documental/:id', deleteSeasonDocumental);
router.delete('/seasons/serie/:id', deleteSeasonSerie);
router.post('/seasons', insertSeason);
router.put('/seasons/:id', updateSeason);

export default router;
