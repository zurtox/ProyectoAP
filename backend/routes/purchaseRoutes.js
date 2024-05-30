import express from 'express';
import {
    getAllPurchases,
    getPurchaseById,
    insertPurchase,
    getPurchaseContent,
    getPurchaseTotalCost,
    getPurchasesLast3Months,
    getPurchasesLast6Months,
    getPurchasesLastYear
} from '../modules/Purchase.js';

const router = express.Router();

// Routes for Purchase operations
router.get('/purchases', getAllPurchases);
router.get('/purchases/:id', getPurchaseById);
router.post('/purchases', insertPurchase);
router.get('/purchases/:id/content', getPurchaseContent);
router.get('/purchases/:id/totalCost', getPurchaseTotalCost);
router.get('/purchase/last3Months', getPurchasesLast3Months);
router.get('/purchase/last6Months', getPurchasesLast6Months);
router.get('/purchase/lastYear', getPurchasesLastYear);

export default router;
