import express from 'express';
import {
    signUp,
    logIn,
    actualUser,
    actualUserId,
    logOutUser,
    recoverPassword,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    countFemaleUsers,
    countMaleUsers,
    countOtherUsers,
    countNotDefinedUsers,
    getAgeDistribution
} from '../modules/User.js';

const router = express.Router();

// Routes for user authentication and management
router.post('/signUp', signUp);
router.post('/logIn', logIn);
router.get('/actualUser', actualUser);
router.get('/actualUserId', actualUserId);
router.post('/logOut', logOutUser);
router.post('/recoverPassword', recoverPassword);

// Routes for user data management
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

// Routes for user statistics
router.get('/countFemaleUsers', countFemaleUsers);
router.get('/countMaleUsers', countMaleUsers);
router.get('/countOtherUsers', countOtherUsers);
router.get('/countNotDefinedUsers', countNotDefinedUsers);
router.get('/ageDistribution', getAgeDistribution);

export default router;
