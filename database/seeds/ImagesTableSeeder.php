<?php

use App\Models\Image;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Seeder;

class ImagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('images')->delete();

        $tag_ids = Tag::pluck('id')->toArray();

        $images = factory(Image::class)->times(100)->create();

        $image_tag = [];
        foreach ($images as $image) {
            $image_tags = array_random($tag_ids, mt_rand(1, 4));
            foreach ($image_tags as $tag_id) {
                array_push($image_tag, ['image_id' => $image['id'], 'tag_id' => $tag_id]);
            }
        }

        count($image_tag) && DB::table('image_tag')->insert($image_tag);
    }
}
