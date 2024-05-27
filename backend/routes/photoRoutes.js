import express from 'express';
import {
    getPhotoById,
    insertPhoto,
    deletePhoto
} from '../modules/Photo.js';

const router = express.Router();

// Routes for Photo operations
router.get('/photos/:id', getPhotoById);
router.post('/photos', insertPhoto);
router.delete('/photos/:id', deletePhoto);

export default router;
