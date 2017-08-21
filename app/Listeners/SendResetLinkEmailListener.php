<?php

namespace App\Listeners;

use App\Events\SendResetLinkEmailEvent;
use App\Mail\SendResetLinkMail;
use App\Model\User;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;

class SendResetLinkEmailListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Handle the event.
     *
     * @param  SendResetLinkEmail $event
     * @return void
     */
    public function handle(SendResetLinkEmailEvent $event)
    {
        $user = $event->user;
        if ($user) {
            $url = URL::route('auth.show_reset_password', ['token' => $event->token, 'email' => $user->email]);
            Mail::to($user->email)->queue(new SendResetLinkMail($url));
        }
    }
}
