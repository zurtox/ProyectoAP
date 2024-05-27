import express from 'express';
import {
    getAllRecentlyVieweds,
    insertRecentlyViewed,
    deleteRecentlyViewed,
    getTopNRecentRows
} from '../modules/RecentlyViewed.js';

const router = express.Router();

// Routes for RecentlyViewed operations
router.get('/recentlyViewed/:user', getAllRecentlyVieweds);
router.post('/recentlyViewed', insertRecentlyViewed);
router.delete('/recentlyViewed', deleteRecentlyViewed);
router.get('/recentlyViewed/top/:n', getTopNRecentRows);

export default router;
