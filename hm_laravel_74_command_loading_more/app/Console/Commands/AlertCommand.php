<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class AlertCommand extends Command
{
    protected $signature = 'command:alert';
    protected $description = 'Alert example command';

    public function handle()
    {
        $this->alert('This is an alert message!');
    }
}

