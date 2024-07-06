<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class TestLoadingCommand extends Command
{
    protected $signature   = 'process:users';
    protected $description = 'Process all users and display a progress bar';

    public function handle()
    {


        // --- Chọn
        $groupId = $this->ask('Chon: ');
        if (!$groupId) {
            return 0;
        }

        // --- Loading
        $users = [];
        for ($i = 1; $i <= 10; $i++) {
            $users[] = ['id' => $i, 'name' => 'User ' . $i];
        }

        $this->info('This might take a while...');
        $start = now();

        $this->output->progressStart(count($users));

        foreach ($users as $user) {
            $this->output->progressAdvance();
            sleep(1);
        }
        $this->output->progressFinish();
        $time = $start->diffInSeconds(now()) / 60;
        $this->info("Processed in {$time} minutes, ".now());
    }
}
