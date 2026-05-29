<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('send-mail', function () {
    \Illuminate\Support\Facades\Mail::raw('Congrats for sending test email with Mailtrap!', function ($message) {
        $message->to('nasrulillah78@gmail.com')
                ->from('hello@demomailtrap.co', 'Mailtrap Test')
                ->subject('You are awesome!');
    });
    $this->info('Test email sent successfully to Mailtrap!');
})->purpose('Send a test mail to Mailtrap');
