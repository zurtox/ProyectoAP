import express from 'express';
import {
    getAllDocumentals,
    getDocumentalById,
    insertDocumental,
    updateDocumental,
    deleteDocumental
} from '../modules/Documental.js';

const router = express.Router();

// Routes for Documental operations
router.get('/documentals', getAllDocumentals);
router.get('/documentals/:id', getDocumentalById);
router.post('/documentals', insertDocumental);
router.put('/documentals/:id', updateDocumental);
router.delete('/documentals/:id', deleteDocumental);

export default router;
