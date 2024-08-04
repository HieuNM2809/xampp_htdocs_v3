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
        Redis::set('lala1', 'lulu');

        while(true){
            sleep(2);
            Redis::publish('mychannel', $message);
            $this->info("Message published to channel {$channel}");
        }
    }
}
