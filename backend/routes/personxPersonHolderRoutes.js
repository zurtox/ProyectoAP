import express from 'express';
import {
    getAllPersonxHolder,
    getPersonxHolderById,
    getPersonxHolderByPersonId,
    getPersonxHolderByPersonHolderIdParent,
    getPersonxHolderByPersonHolderIdBrother,
    getPersonxHolderByPersonHolderIdChildren,
    getPersonxHolderByPersonHolderIdPartner,
    insertPersonxHolder,
    updatePersonxHolder,
    deletePersonxHolder
} from '../modules/PersonxPersonHolder.js';

const router = express.Router();

// Routes for PersonxHolder operations
router.get('/personxholders', getAllPersonxHolder);
router.get('/personxholders/:id', getPersonxHolderById);
router.get('/personxholders/person/:personId', getPersonxHolderByPersonId);
router.get('/personxholders/person/parent/:personId', getPersonxHolderByPersonHolderIdParent);
router.get('/personxholders/person/brother/:personId', getPersonxHolderByPersonHolderIdBrother);
router.get('/personxholders/person/children/:personId', getPersonxHolderByPersonHolderIdChildren);
router.get('/personxholders/person/partner/:personId', getPersonxHolderByPersonHolderIdPartner);
router.post('/personxholders', insertPersonxHolder);
router.put('/personxholders/:id', updatePersonxHolder);
router.delete('/personxholders/:id', deletePersonxHolder);

export default router;
