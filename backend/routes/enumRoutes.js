import express from 'express';
import {
    getGenders,
    getFamilyRoles,
    getMovieRoles
} from '../modules/Enum.js';

const router = express.Router();

// Routes for Enum operations
router.get('/enums/genders', getGenders);
router.get('/enums/familyRoles', getFamilyRoles);
router.get('/enums/movieRoles', getMovieRoles);

export default router;
