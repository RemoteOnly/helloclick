<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->comment('图片名');
            $table->unsignedInteger('user_id')->comment('发布人id');
            $table->unsignedInteger('view_count')->default(0)->comment('图片浏览量');
            $table->unsignedInteger('comment_count')->default(0)->comment('图片评论量');
            $table->unsignedInteger('favor_count')->default(0)->comment('图片点赞量');
            $table->text('description')->comment('图片的描述');
            $table->timestamps();

            $table->index('user_id');

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('images');
    }
}
