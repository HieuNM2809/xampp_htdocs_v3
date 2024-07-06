<?php
namespace App\Console\Commands;

use Illuminate\Console\Command;

class AskAndConfirmCommand extends Command
{
    protected $signature = 'command:ask-confirm';
    protected $description = 'Ask and confirm example command';

    public function handle()
    {
        $name = $this->ask('What is your name?');
        $confirmed = $this->confirm('Do you wish to continue?', true);

        if ($confirmed) {
            $this->info("Hello, $name! Let's continue...");
        } else {
            $this->warn("Goodbye, $name!");
        }
    }
}
