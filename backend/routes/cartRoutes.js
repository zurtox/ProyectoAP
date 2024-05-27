// const express = require('express');
import express from 'express'
import { getGenders } from '../modules/Enum.js'
// const { getAllCartContents } = require('../modules/Cart.js');

const router = express.Router();

//Rutas para el registro y consulta de actividades
router.get('/getCarts', getGenders);
// router.get('/all-activities', getAllActivities);
// router.get('/getActivity/:id', getActivity);
// router.put('/editActivity/:id', editActivity);
// router.put('/insert-comment-activity/:id', insertCommentActivity);
// router.delete('/delete-activity/:id', deleteActivity);

export default router