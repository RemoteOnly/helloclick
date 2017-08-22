<?php

use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserTagTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = User::with(['images' => function ($query) {
            $query->with('tags');
        }])->get();
        $tags = Tag::pluck('id')->toArray();

        $data = [];
        foreach ($users as $user) {
            $count = [];
            foreach ($user->images as $image) {
                foreach ($image->tags as $tag) {
                    if (in_array($tag->id, $tags)) {
                        $count[$tag->id] = isset($count[$tag->id]) ? ++$count[$tag->id] : 1;
                    }
                }
            }

            foreach ($count as $key => $value) {
                $temp['user_id'] = $user->id;
                $temp['tag_id'] = $key;
                $temp['images_count'] = $value;
                $temp['created_at'] = time();
                array_push($data, $temp);
            }
        }

        DB::table('user_tag')->insert($data);
    }
}
