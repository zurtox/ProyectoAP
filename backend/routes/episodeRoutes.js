import express from 'express';
import {
    getEpisodeById,
    getEpisodesBySeason,
    insertEpisode,
    updateEpisode,
    deleteEpisode,
    deleteEpisodeSeason
} from '../modules/Episode.js';

const router = express.Router();

// Routes for Episode operations
router.get('/episodes/:id', getEpisodeById);
router.get('/episodes/season/:id', getEpisodesBySeason);
router.post('/episodes', insertEpisode);
router.put('/episodes/:id', updateEpisode);
router.delete('/episodes/:id', deleteEpisode);
router.delete('/episodes/season/:id', deleteEpisodeSeason);

export default router;
