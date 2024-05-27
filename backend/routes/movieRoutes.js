import express from 'express';
import {
    getAllMovies,
    getMovieById,
    insertMovie,
    updateMovie,
    deleteMovie
} from '../modules/Movie.js';

const router = express.Router();

// Routes for Movie operations
router.get('/movies', getAllMovies);
router.get('/movies/:id', getMovieById);
router.post('/movies', insertMovie);
router.put('/movies/:id', updateMovie);
router.delete('/movies/:id', deleteMovie);

export default router;
