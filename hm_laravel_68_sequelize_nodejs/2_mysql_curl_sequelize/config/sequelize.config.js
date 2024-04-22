// sequelize.config.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'user123', 'secret123', {
  host: 'localhost',
  port: 3307,
  dialect: 'mysql',
  define: {
    timestamps: true, // Sử dụng timestamps mặc định
    paranoid: true // Hỗ trợ soft delete
  }
});

module.exports = sequelize;
