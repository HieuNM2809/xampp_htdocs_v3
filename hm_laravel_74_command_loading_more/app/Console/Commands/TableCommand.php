<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class TableCommand extends Command
{
    protected $signature = 'command:table';
    protected $description = 'Table example command';

    public function handle()
    {
        $headers = ['ID', 'Name', 'Email'];
        $users = [
            ['1', 'John Doe', 'john@example.com'],
            ['2', 'Jane Doe', 'jane@example.com'],
        ];

        $this->table($headers, $users);
    }
}
