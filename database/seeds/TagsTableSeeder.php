<?php

use Illuminate\Database\Seeder;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       // Cache::forget('banners');
        //DB::table('tags')->truncate();

        $data = [
            ['name' => '美食', 'slug' => 'food'],
            ['name' => '烟花', 'slug' => 'firework'],
            ['name' => '美女', 'slug' => 'belle'],
            ['name' => '寺庙', 'slug' => 'temple'],
            ['name' => '服饰', 'slug' => 'clothes'],
            ['name' => '节日', 'slug' => 'festival'],
            ['name' => '樱花', 'slug' => 'sakura'],
            ['name' => '建筑', 'slug' => 'building'],
            ['name' => 'Cosplay', 'slug' => 'cosplay'],
            ['name' => '铁塔', 'slug' => 'tower'],
            ['name' => '艺术', 'slug' => 'art'],
            ['name' => '异域小镇', 'slug' => 'town'],
            ['name' => '动漫', 'slug' => 'animation'],
            ['name' => '汽车', 'slug' => 'car'],
            ['name' => '户外野行', 'slug' => 'wild'],
            ['name' => '饰品', 'slug' => 'accessory'],
            ['name' => '其他', 'slug' => 'other'],
        ];
        foreach ($data as $key => &$item) {
            $item['display_order'] = $key;
            $item['is_banner'] = array_random(['yes', 'no', 'yes', 'yes']);
        }

        DB::table('tags')->insert($data);
    }
}
