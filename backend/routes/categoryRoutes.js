// const express = require('express');
import express from 'express'
import { 
    getAllCategories,
    getCategoryById,
    insertCategory,
    updateCategory,
    deleteCategory
     } from '../modules/Category.js';

const router = express.Router();

router.get('/getAllCategories', getAllCategories);
router.get('/getCategoryById', getCategoryById)
router.post('/insertCategory', insertCategory)
router.put('/updateCategory', updateCategory)
router.delete('/deleteCategory', deleteCategory)


export { router }