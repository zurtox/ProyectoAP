import express from 'express';
import {
    getAllPaymentMethods,
    getPaymentMethodById,
    insertPaymentMethod,
    updatePaymentMethod,
    deletePaymentMethod
} from '../modules/PaymentMethod.js';

const router = express.Router();

// Routes for PaymentMethod operations
router.get('/paymentMethods', getAllPaymentMethods);
router.get('/paymentMethods/:id', getPaymentMethodById);
router.post('/paymentMethods', insertPaymentMethod);
router.put('/paymentMethods/:id', updatePaymentMethod);
router.delete('/paymentMethods/:id', deletePaymentMethod);

export default router;
