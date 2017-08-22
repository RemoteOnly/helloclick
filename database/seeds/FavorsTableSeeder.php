<?php

use App\Models\Image;
use App\Models\User;
use Illuminate\Database\Seeder;

class FavorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('favors')->delete();

        $users = User::all();
        $images = Image::with('user')->get();

        $data = [];
        foreach ($users as $user) {
            $temp_images = $images->random(20);
            $temp = [];
            foreach ($temp_images as $image) {
                $temp['user_id'] = $user->id;
                $temp['image_id'] = $image->id;
                $temp['photographer_id'] = $image->user->id;
                $temp['created_at'] = time();
                array_push($data, $temp);
            }
        }

        DB::table('favors')->insert($data);
    }
}
