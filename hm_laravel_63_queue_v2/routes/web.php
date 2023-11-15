<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestQueueEmails;

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

Route::get('sending-queue-emails', [TestQueueEmails::class,'sendTestEmails']);


//https://viblo.asia/p/tim-hieu-queue-trong-laravel-Az45bgbwKxY
//https://www.section.io/engineering-education/implementing-laravel-queues/
//https://www.twilio.com/blog/queueing-in-laravel

//php artisan queue:failed
//
//php artisan queue:retry all
//
//php artisan queue:flush
//
//php artisan queue:retry {failedJobId}
//
//php artisan queue:forget {failedJobId}

//php artisan horizon
