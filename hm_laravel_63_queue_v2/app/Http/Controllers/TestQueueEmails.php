<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Jobs\TestSendEmail;

class TestQueueEmails extends Controller
{
    public function sendTestEmails()
    {
        $emailJobs = new TestSendEmail("hehe", [1,2,3,4]);

//        dispatch($emailJobs)->onQueue('haha');
        dispatch($emailJobs)->onQueue('haha')->delay(now()->addSeconds(10));
    }
}
