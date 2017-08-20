<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //Schema::drop('users');

        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->enum('email_confirmed', ['yes', 'no'])->default('no')->comment('是否经过邮箱验证');
            $table->string('photo')->nullable();
            $table->string('star_sign')->nullable()->comment('星座');
            $table->enum('sex', array('男', '女'))->default('男');
            $table->enum('type', ['common', 'photographer'])->default('common')
                ->comment('comment-普通用户，只能浏览 photographer-摄影师');
            $table->string('description')->nullable()->comment('自我介绍');

            $table->softDeletes()->comment('用来禁用用户');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
