const mongoose = require('mongoose');

// Kết nối đến cơ sở dữ liệu MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/testDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        // Gọi hàm để thực hiện các ví dụ
        exampleWithFind();
        exampleWithLean();
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });

// Mô hình sách
const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    pages: Number,
    language: String
});

const Book = mongoose.model('Book', BookSchema);

// Ví dụ sử dụng .find()
async function exampleWithFind() {
    console.log("Example with find():");
    const start = Date.now();
    const books = await Book.find();
    const end = Date.now();
    console.log("Time taken find:", end - start, "ms");
    // console.log(books); // Uncomment this line to print the result
}

// Ví dụ sử dụng .find().lean()
async function exampleWithLean() {
    console.log("Example with find().lean():");
    const start = Date.now();
    const books = await Book.find().lean();
    const end = Date.now();
    console.log("Time taken lean:", end - start, "ms");
    // console.log(books); // Uncomment this line to print the result
}


// Thực tế thì kết quả thời gian chạy của .find() và .find().lean() có thể thay đổi tùy thuộc vào một số yếu tố khác nhau như kích thước của dữ liệu, tình trạng mạng, hoạt động của cơ sở dữ liệu, và cả môi trường máy tính của bạn.
//
// Trong trường hợp của bạn, việc .lean() chạy nhanh hơn .find() có thể do một số lý do sau:
//
// Kích thước dữ liệu nhỏ: Nếu cơ sở dữ liệu của bạn có kích thước nhỏ, sự khác biệt giữa .find() và .find().lean() có thể không đáng kể.
//
// Tính năng của Mongoose Documents không được sử dụng: Nếu bạn không sử dụng các tính năng của Mongoose Documents như phương thức hoặc getter/setter, thì việc sử dụng .lean() không có lợi ích rõ rệt và sự khác biệt về hiệu suất giữa .find() và .find().lean() có thể không lớn.
//
// Thời gian truy cập vào cơ sở dữ liệu: Thời gian truy cập vào cơ sở dữ liệu có thể thay đổi dựa trên tình trạng mạng và tải của cơ sở dữ liệu vào thời điểm thử nghiệm.
//
// Yếu tố ngẫu nhiên: Trong một số trường hợp, sự khác biệt về hiệu suất có thể không dự đoán được và có thể là kết quả của các yếu tố ngẫu nhiên.
//
// Để có một cái nhìn toàn diện hơn về hiệu suất của các truy vấn trong ứng dụng của bạn, bạn có thể thử nghiệm trên một mẫu dữ liệu lớn hơn và lặp lại quá trình nhiều lần để đảm bảo tính nhất quán của kết quả.





