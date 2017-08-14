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
            $table->enum('identity_type', ['wechat', 'qq', 'weibo'])->comment('第三方类型');
            $table->string('open_id')->comment('第三方的openid');
            $table->string('access_token')->comment('access token');
            $table->timestamp('access_expire')->nullable()->comment('token失效时间');
            $table->softDeletes()->comment('用来禁用用户');
            $table->enum('type', ['common', 'photographer'])->default('common')
                ->comment('comment-普通用户，只能浏览 photographer-摄影师');
            $table->rememberToken();
            $table->timestamps();

            $table->unique(['identity_type', 'open_id']);
            $table->index(['identity_type', 'open_id']);
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
