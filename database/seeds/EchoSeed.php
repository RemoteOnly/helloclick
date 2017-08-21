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
        $image_ids = DB::table('favors')
            ->where('user_id', 11)
            ->orderBy('created_at')
            ->offset(4)
            ->limit(4)
            ->get(['image_id']);

        $image_ids = $image_ids->pluck('image_id')->toArray();
        dd($image_ids);
    }
}
