import express from 'express';
import {
    getAllPersons,
    getPersonById,
    insertPerson,
    updatePerson,
    deletePerson
} from '../modules/Person.js';

const router = express.Router();

// Routes for Person operations
router.get('/persons', getAllPersons);
router.get('/persons/:id', getPersonById);
router.post('/persons', insertPerson);
router.put('/persons/:id', updatePerson);
router.delete('/persons/:id', deletePerson);

export default router;
