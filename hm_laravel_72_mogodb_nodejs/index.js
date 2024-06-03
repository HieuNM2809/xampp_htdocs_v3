const express = require('express');
const mongoose = require('mongoose');
const bookRouter = require('./routes/books');

const app = express();
app.use(express.json());  // Middleware to parse JSON

// Kết nối đến cơ sở dữ liệu MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/testDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });

// Sử dụng router cho '/books'
app.use('/books', bookRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
