import express from 'express';
import {
    getAllMovieParticipants,
    getMovieParticipantById,
    getActorByContentId,
    getDirectorByContentId,
    getWriterByContentId,
    insertMovieParticipant,
    deleteMovieParticipant
} from '../modules/MovieParticipant.js';

const router = express.Router();

// Routes for MovieParticipant operations
router.get('/movieParticipants', getAllMovieParticipants);
router.get('/movieParticipants/:id', getMovieParticipantById);
router.get('/movieParticipants/content/:contentId/actor', getActorByContentId);
router.get('/movieParticipants/content/:contentId/director', getDirectorByContentId);
router.get('/movieParticipants/content/:contentId/writer', getWriterByContentId);
router.post('/movieParticipants', insertMovieParticipant);
router.delete('/movieParticipants/:id', deleteMovieParticipant);

export default router;
