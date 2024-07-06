<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SecretCommand extends Command
{
    protected $signature = 'command:secret';
    protected $description = 'Secret example command';

    public function handle()
    {
        $password = $this->secret('What is your password?');

        $this->info('Password stored securely.');
    }
}
