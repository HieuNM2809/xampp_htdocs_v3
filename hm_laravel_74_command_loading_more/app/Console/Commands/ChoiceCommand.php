<?php
namespace App\Console\Commands;

use Illuminate\Console\Command;

class ChoiceCommand extends Command
{
    protected $signature = 'command:choice';
    protected $description = 'Choice example command';

    public function handle()
    {
        $choice = $this->choice(
            'Which database system are you using?',
            ['MySQL', 'PostgreSQL', 'SQLite', 'SQL Server'],
            0
        );

        $this->info("You have chosen: $choice");
    }
}
