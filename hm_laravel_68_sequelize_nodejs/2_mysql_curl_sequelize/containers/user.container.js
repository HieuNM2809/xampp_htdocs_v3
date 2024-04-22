// Trong một file khác, ví dụ user.controller.js

const { 
    User: userModel,
    createUser: createUserModel,   // rename 
    readUserById: readUserByIdModel,
    updateUserById: updateUserByIdModel,
    deleteUserById: deleteUserByIdModel 
} = require('../models/user.model');

// Hàm tạo một người dùng mới
async function createUser(req, res) {
    const { firstName, lastName, email } = req.body;

    try {
        const user = await createUserModel(firstName, lastName, email);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Hàm đọc thông tin của một người dùng dựa trên ID
async function readUserById(req, res) {
    const { id } = req.params;
    
    try {
        const user = await readUserByIdModel(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Hàm cập nhật thông tin của một người dùng dựa trên ID
async function updateUserById(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const user = await updateUserByIdModel(id, newData);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Hàm xoá một người dùng dựa trên ID
async function deleteUserById(req, res) {
    const { id } = req.params;
    try {
        await deleteUserByIdModel(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await userModel.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createUser, readUserById, updateUserById, deleteUserById, getAllUsers};
