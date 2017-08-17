<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSocialAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('social_accounts', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id')->comment('用户id');
            $table->enum('identity_type', ['wechat', 'qq', 'weibo'])->comment('第三方类型');
            $table->string('open_id')->comment('第三方的openid');
            $table->string('access_token')->comment('access token');
            $table->string('refresh_token')->comment('refresh token');
            $table->timestamp('access_expire_at')->nullable()->comment('token失效时间');
            $table->timestamps();

            $table->unique(['identity_type', 'open_id']);
            $table->index(['identity_type', 'open_id']);

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('social_accounts');
    }
}
