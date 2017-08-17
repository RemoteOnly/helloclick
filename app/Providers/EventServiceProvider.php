<?php

namespace App\Providers;

use App\Events\SendResetLinkEmailEvent;
use App\Listeners\SendResetLinkEmailListener;
use App\Listeners\UserRegisteredListener;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        // 注册
        Registered::class => [
            UserRegisteredListener::class
        ],
        // 重置密码
        SendResetLinkEmailEvent::class => [
            SendResetLinkEmailListener::class
        ]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
