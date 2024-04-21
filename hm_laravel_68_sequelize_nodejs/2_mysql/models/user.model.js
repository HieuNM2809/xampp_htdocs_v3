// user.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config');

const User = sequelize.define('Users', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

// Tạo một người dùng mới
async function createUser(firstName, lastName, email) {
    try {
        const user = await User.create({ firstName, lastName, email });
        return user;
    } catch (error) {
        throw new Error('Could not create user: ' + error);
    }
}

// Đọc thông tin của một người dùng dựa trên ID
async function readUserById(id) {
    try {
        const user = await User.findByPk(id);
        return user;
    } catch (error) {
        throw new Error('Could not read user' + error);
    }
}

// Cập nhật thông tin của một người dùng dựa trên ID
async function updateUserById(id, newData) {
    try {
        const user = await User.findByPk(id);
        if (user) {
            await user.update(newData);
            return user;
        }
        throw new Error('User not found' + error);
    } catch (error) {
        throw new Error('Could not update user' + error);
    }
}

// Xoá một người dùng dựa trên ID
async function deleteUserById(id) {
    try {
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            return;
        }
        throw new Error('User not found' + error);
    } catch (error) {
        throw new Error('Could not delete user' + error);
    }
}

module.exports = {
    User,
    createUser,
    readUserById,
    updateUserById,
    deleteUserById
};
