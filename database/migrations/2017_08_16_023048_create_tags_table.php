<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tags', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->comment('标签名');
            $table->string('slug')->unique()->comment('url中显示的英文名');
            $table->enum('is_banner', ['yes', 'no'])->default('yes')->comment('是否是导航栏成员');
            $table->smallInteger('display_order')->default(0)->comment('显示顺序');
            $table->timestamps();

            $table->index('slug');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tags');
    }
}
