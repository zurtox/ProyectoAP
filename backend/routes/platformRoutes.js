import express from 'express';
import {
    getAllPlatforms,
    getPlatformById,
    insertPlatform,
    updatePlatform,
    deletePlatform
} from '../modules/Platform.js';

const router = express.Router();

// Routes for Platform operations
router.get('/platforms', getAllPlatforms);
router.get('/platforms/:id', getPlatformById);
router.post('/platforms', insertPlatform);
router.put('/platforms/:id', updatePlatform);
router.delete('/platforms/:id', deletePlatform);

export default router;
