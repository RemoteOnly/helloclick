<?php

use App\Models\Image;
use App\Models\User;
use Illuminate\Database\Seeder;

class CommentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //DB::table('comments')->delete();

        $images = Image::orderBy('created_at', 'desc')->limit(4)->get();
        $users = User::all();
        $data = [];
        foreach ($images as $image) {
            $at_users = $users->random(random_int(1, 3));
            $content = '';
            foreach ($at_users as $at_user) {

                $content .= '@' . $at_user->name . '这是评论';
            }

            $temp['image_id'] = $image->id;
            $temp['user_id'] = $users->random(1)->first()->id;
            $temp['content'] = $content;
            $temp['created_at'] = time();

            array_push($data, $temp);
        }
        DB::table('comments')->insert($data);
    }
}
