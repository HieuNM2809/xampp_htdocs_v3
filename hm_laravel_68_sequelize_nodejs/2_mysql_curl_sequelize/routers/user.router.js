const express = require('express');
const router = express.Router();
const userController = require('../containers/user.container');

// Import các hàm từ userController
const { 
    createUser,
    readUserById,
    updateUserById,
    deleteUserById,
    getAllUsers
} = userController;

// Định nghĩa các route
router.post('/users', createUser);
router.get('/users/:id', readUserById);
router.put('/users/:id', updateUserById);
router.delete('/users/:id', deleteUserById);
router.get('/users', getAllUsers);

module.exports = router;
