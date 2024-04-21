const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});


// Check connect
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// Check thêm Table and User
class User extends Model { }
User.init({
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

(async () => {
    await sequelize.sync(); // Đảm bảo bảng đã được tạo

    const jane = await User.create({
        username: 'janedoe',
        birthday: new Date(1980, 6, 20)
    });
    console.log(jane.toJSON());
})();


// Update
(async () => {
    await sequelize.sync();

    // Tìm và cập nhật một người dùng có username là 'janedoe'
    const [numOfAffectedRows, affectedRows] = await User.update({ username: 'newUsername' }, {
        where: {
            username: 'janedoe'
        },
        returning: true, // Trả về các bản ghi đã được cập nhật
        plain: true // Nếu là true, chỉ trả về số lượng bản ghi đã được cập nhật
    });
    console.log(affectedRows); // Bản ghi đã được cập nhật
})();
