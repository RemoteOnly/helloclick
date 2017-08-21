<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendResetLinkMail extends Mailable
{
    use Queueable, SerializesModels;

    private $url;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($url)
    {
        $this->url = $url;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('密码重置')->view('vendor.mail.html.button', [
            'url' => $this->url,
            'slot' => '请点击该链接重置密码'
        ]);
    }
}
