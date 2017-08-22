<?php

use App\Models\User;
use Illuminate\Database\Seeder;

class FollowingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //DB::table('followings')->delete();

        $users = User::all();
        $data = [];
        foreach ($users as $user) {
            $user_ids = $users->random(mt_rand(1, 10))->pluck('id')->toArray();
            $temp['user_id'] = $user->id;
            foreach ($user_ids as $user_id) {
                $temp['photographer_id'] = $user_id;
                $temp['created_at'] = time();
                array_push($data, $temp);
            }
        }

        DB::table('followings')->insert($data);
    }
}
