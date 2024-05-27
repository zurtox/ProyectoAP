import express from 'express';
import {
    getAllReviews,
    getReviewById,
    insertReview,
    updateReview,
    deleteReview
} from '../modules/Review.js';

const router = express.Router();

// Routes for Review operations
router.get('/reviews', getAllReviews);
router.get('/reviews/:id', getReviewById);
router.post('/reviews', insertReview);
router.put('/reviews/:id', updateReview);
router.delete('/reviews/:id', deleteReview);

export default router;
