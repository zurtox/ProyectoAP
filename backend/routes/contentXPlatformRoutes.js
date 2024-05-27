import express from 'express';
import {
    getContentXPlatformById,
    insertContentXPlatform,
    deleteContentXPlatform
} from '../modules/ContentXPlatform.js';

const router = express.Router();

// Routes for ContentXPlatform operations
router.get('/contentXPlatform/:id', getContentXPlatformById);
router.post('/contentXPlatform', insertContentXPlatform);
router.delete('/contentXPlatform', deleteContentXPlatform);

export default router;
