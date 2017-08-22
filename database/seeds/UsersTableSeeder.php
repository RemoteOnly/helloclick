<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $base = ['id' => 1, 'name' => 'user_', 'email' => 'email@126.com_'];
        $keys = array_keys($base);
        $users = [];
        for ($i = 1; $i < 10; $i++) {
            $values = array_values($base);
            foreach ($values as &$value) {
                $value .= $i;
            }

            $user = array_combine($keys, $values);
            $user['email_confirmed'] = 'yes';
            $user['password'] = Hash::make('666666');
            $user['created_at'] = time();
            array_push($users, $user);
        }

        DB::table('users')->insert($users);
    }
}
