<?php

namespace App\Listeners;

use App\Mail\ActivateMail;
use Cache;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;

class UserRegisteredListener implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels, Dispatchable;

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  Registered $event
     * @return void
     */
    public function handle(Registered $event)
    {
        $user = $event->user;
        if ($user) {
            $token = str_random();
            Cache::put('active_token_' . $user->id, $token, 24 * 60);
            $url = URL::route('auth.active', ['id' => $user->id, 'token' => $token]);
            Mail::to($user->email)->queue(new ActivateMail($user, $url));
        }
    }
}
