<?php


namespace App\Console\Commands;

use Illuminate\Console\Command;

class ProgressBarCommand extends Command
{
    protected $signature = 'command:progress-bar';
    protected $description = 'Progress bar example command';

    public function handle()
    {
        $this->info('Processing...');

        $this->withProgressBar(range(1, 100), function ($i) {
            // Simulate work
            usleep(50000);
        });

        $this->info('Done!');
    }
}

