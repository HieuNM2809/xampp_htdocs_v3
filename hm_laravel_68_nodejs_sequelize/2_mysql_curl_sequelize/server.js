const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const userRouter = require('./routers/user.router'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', userRouter);

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

