<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Redis;

class SubscribeChannel extends Command
{
    protected $signature   = 'redis:subscribe {channel}';
    protected $description = 'Subscribe to a Redis channel and listen for messages';

    public function handle()
    {
        $channel = $this->argument('channel');

        Redis::subscribe([$channel], function ($message) use ($channel) {
            $this->info("Received message on channel {$channel}: {$message}");
        });
    }
}
