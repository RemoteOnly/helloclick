<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //$this->call(UsersTableSeeder::class);
        //$this->call(TagsTableSeeder::class);
        //$this->call(ImagesTableSeeder::class);
        //$this->call(UserTagTableSeeder::class);
        //$this->call(EchoSeed::class);
        //$this->call(FollowingsTableSeeder::class);
        // $this->call(FavorsTableSeeder::class);
        $this->call(CommentsTableSeeder::class);
    }
}
