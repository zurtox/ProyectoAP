import express from 'express';
import {
    getAllPurchaseContents,
    getPurchaseContentById,
    insertPurchaseContent,
    updatePurchaseContent,
    deletePurchaseContent
} from '../modules/PurchaseContent.js';

const router = express.Router();

// Routes for PurchaseContent operations
router.get('/purchaseContents', getAllPurchaseContents);
router.get('/purchaseContents/:id', getPurchaseContentById);
router.post('/purchaseContents', insertPurchaseContent);
router.put('/purchaseContents/:id', updatePurchaseContent);
router.delete('/purchaseContents/:id', deletePurchaseContent);

export default router;
