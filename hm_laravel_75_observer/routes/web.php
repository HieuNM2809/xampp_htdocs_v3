<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/order/store', [OrderController::class, 'store']);
Route::get('/order/{order}/update', [OrderController::class, 'update']);
Route::get('/order/{order}/destroy', [OrderController::class, 'destroy']);


//Laravel Observer hỗ trợ một loạt các sự kiện, mỗi sự kiện tương ứng với một phương thức trong observer. Các sự kiện này bao gồm:
//
//      retrieved: Khi một model được lấy ra từ cơ sở dữ liệu.
//      creating: Trước khi một model được tạo.
//      created: Sau khi một model được tạo.
//      updating: Trước khi một model được cập nhật.
//      updated: Sau khi một model được cập nhật.
//      saving: Trước khi một model được lưu (bao gồm cả khi tạo và cập nhật).
//      saved: Sau khi một model được lưu (bao gồm cả khi tạo và cập nhật).
//      deleting: Trước khi một model được xóa.
//      deleted: Sau khi một model được xóa.
//      restoring: Trước khi một model bị xóa được phục hồi.
//      restored: Sau khi một model bị xóa được phục hồi.
//      replicating: Trước khi một model được sao chép (clone).
