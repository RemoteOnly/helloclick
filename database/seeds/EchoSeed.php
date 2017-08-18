<?php

use Illuminate\Database\Seeder;

class EchoSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        dd(\Illuminate\Support\Facades\Hash::make('666666'));
    }
}
