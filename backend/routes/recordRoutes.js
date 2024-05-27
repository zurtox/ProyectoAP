import express from 'express';
import {
    getAllRecords,
    getRecordsByContent,
    getRecordsByUser
} from '../modules/Record.js';

const router = express.Router();

// Routes for Record operations
router.get('/records', getAllRecords);
router.get('/records/content/:id', getRecordsByContent);
router.get('/records/user/:id', getRecordsByUser);

export default router;
