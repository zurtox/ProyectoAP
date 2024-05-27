import express from 'express';
import {
    getAllPersonHolders,
    getPersonHolderById,
    insertPersonHolder,
    updatePersonHolder,
    deletePersonHolder
} from '../modules/PersonHolder.js';

const router = express.Router();

// Routes for PersonHolder operations
router.get('/personholders', getAllPersonHolders);
router.get('/personholders/:id', getPersonHolderById);
router.post('/personholders', insertPersonHolder);
router.put('/personholders/:id', updatePersonHolder);
router.delete('/personholders/:id', deletePersonHolder);

export default router;
