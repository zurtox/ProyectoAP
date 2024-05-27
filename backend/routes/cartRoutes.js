// const express = require('express');
import express from 'express'
import { 
    deleteCartContent,
    insertCartContent,
    getAllCartContents,
    deleteAllCartContent } from '../modules/Cart.js';

const router = express.Router();

router.get('/allCart', getAllCartContents);
router.post('/cart', insertCartContent)
router.delete('/cart/:id', deleteCartContent)
router.delete('/allCart', deleteAllCartContent)

export { router }