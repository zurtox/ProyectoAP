import express from 'express'
import { 
    getAllCommunities,
    getCommunityById,
    insertCommunity,
    updateCommunity,
    deleteCommunity
     } from '../modules/Community.js';

const router = express.Router();

router.get('/getAllCommunities', getAllCommunities);
router.get('/getCommunityById', getCommunityById)
router.post('/insertCommunity', insertCommunity)
router.put('/updateCommunity', updateCommunity)
router.delete('/deleteCommunity', deleteCommunity)


export { router }