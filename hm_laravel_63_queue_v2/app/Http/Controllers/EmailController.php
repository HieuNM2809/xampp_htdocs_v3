<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Jobs\SendEmailJob;
use Carbon\Carbon;

class EmailController extends Controller
{
    public function sendEmail()
    {
        dispatch(new SendEmailJob());

        echo 'email sent sendEmail';
    }
    public function sendEmailDelay3s()
    {
        $emailJob = (new SendEmailJob())->delay(Carbon::now()->addSeconds(3));
        dispatch($emailJob);

        echo 'email sent sendEmailDelay3s';
    }
}
