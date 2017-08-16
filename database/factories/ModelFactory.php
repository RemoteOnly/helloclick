<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\User;

$factory->define(App\Models\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(\App\Models\Image::class, function (\Faker\Generator $faker) {
    $user_ids = User::pluck('id')->toArray();
    return [
        'name' => $faker->name,
        'url' => $faker->imageUrl(),
        'user_id' => array_first(array_random($user_ids, 1)),
        'description' => $faker->paragraph
    ];
});