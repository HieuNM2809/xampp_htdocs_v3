<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Redis;

class PublishMessage extends Command
{
    protected $signature   = 'redis:publish {channel} {message}';
    protected $description = 'Publish a message to a Redis channel';

    public function handle()
    {
        $channel = $this->argument('channel');
        $message = $this->argument('message');

        while(true){
            Redis::publish($channel, $message);
            $this->info("Message published to channel {$channel}");
        }
    }
}
