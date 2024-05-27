import express from 'express';
import {
    getAllFavoriteMovies,
    updateFavorite,
    isFavorite
} from '../modules/Enum.js';

const router = express.Router();

// Routes for FavoriteMovie operations
router.get('/favoriteMovies', getAllFavoriteMovies);
router.post('/favoriteMovies', updateFavorite);
router.post('/favoriteMovies/isFavorite', isFavorite);

export default router;
