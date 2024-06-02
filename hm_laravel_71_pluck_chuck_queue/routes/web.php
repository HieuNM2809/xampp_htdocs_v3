<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;


//1. Pluck
//Phương thức pluck được sử dụng để lấy một danh sách các giá trị từ một cột duy nhất của bảng trong cơ sở dữ liệu.
//Nó rất hữu ích khi bạn chỉ cần lấy một mảng giá trị từ một cột cụ thể mà không cần các dữ liệu khác.
Route::get('/pluck', function () {
//    $names = User::pluck('name');
//
//    foreach ($names as $name) {
//        echo $name . '<br>';
//    }
    $emails = User::pluck('email', 'id');
    dd($emails);
});


//2. Chunk
//Phương thức chunk được sử dụng để xử lý một lượng lớn bản ghi bằng cách chia nhỏ chúng thành các phần nhỏ hơn (chunk) và xử lý từng phần một.
//Điều này giúp tránh việc sử dụng quá nhiều bộ nhớ khi làm việc với một lượng lớn dữ liệu
Route::get('/chunk', function () {
    User::chunk(10, function ($users) {
        foreach ($users as $user) {
            $user->password = $user->password .'test';
            $user->save();
        }
    });
});


//Đặc điểm	                    Chunk	                                                   Limit và Offset
//---------------------------------------------------------------------------------------------------------------------------------------
//Mục đích chính                Chia nhỏ dữ liệu để xử lý từng phần	                   Giới hạn và bỏ qua số lượng bản ghi trong truy vấn
//Quản lý bộ nhớ                Hiệu quả, chỉ tải từng phần dữ liệu	                   Có thể tiêu thụ nhiều bộ nhớ với tập dữ liệu lớn
//Hiệu suất	                    Tốt hơn khi làm việc với tập dữ liệu lớn	           Giảm hiệu suất với giá trị OFFSET lớn
//Độ phức tạp mã	            Đơn giản hóa mã khi xử lý dữ liệu lớn	               Có thể phức tạp hơn khi phải quản lý thủ công OFFSET
//Trường hợp sử dụng	        Xử lý dữ liệu lớn từng phần một cách hiệu quả	       Truy vấn một số lượng bản ghi cụ thể từ một vị trí cụ thể





// ---------Queue
use App\Http\Controllers\UserController;

// /users?name=hieuminh&email=hieuminh@gmail.com&password=123456789766
Route::get('/users', [UserController::class, 'store']);





