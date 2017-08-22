<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index')->name('index');
Route::get('/tags/{slug}', 'HomeController@showTaggedImages')->name('show_tagged_images');
// index 和 show_tagged_image两个页面中加载图片的方法
Route::get('/show/{image_id}', 'HomeController@show')->name('show');

// Image 的去读上传
Route::get('/load_images', 'ImageController@loadImages')->name('load_images');

// User
Route::get('/users/{id}', 'UserController@index')->name('user.index');
Route::group(['middleware' => 'auth'], function () {
    Route::get('/followings', 'UserController@followings')->name('user.followings');
    Route::post('/followings/{user_id}', 'UserController@toggleFollowing')->name('user.toggle_following');
    Route::get('/favors', 'UserController@showFavors')->name('user.show_favors');
    Route::post('/favor', 'UserController@favor')->name('user.favor');
    // profile
    Route::get('/settings', 'UserController@settings')->name('user.settings');

    // comment
    Route::post('/comments', 'CommentController@store')->name('comment.store');
    Route::delete('/comments/{comment_id}', 'CommentController@destroy')->name('common.destroy');
});


Route::group(['as' => 'auth.', 'namespace' => 'Auth'], function () {
    // 登录退出
    Route::post('login', 'LoginController@login')->name('login');
    Route::get('logout', 'LoginController@logout')->name('logout');
    // 注册、重发和激活
    Route::post('register', 'RegisterController@register')->name('register');
    Route::post('resend', 'RegisterController@resend')->name('resend');
    Route::get('active/{id}/{token}', 'RegisterController@active')->name('active');
    // 发送重置密码链接
    Route::post('send_reset_link', 'ForgotPasswordController@sendResetLinkEmail')->name('send_reset_link');
    Route::get('reset_password/{token}', 'ResetPasswordController@showResetForm')->name('show_reset_password');
    Route::put('reset_password', 'ResetPasswordController@reset')->name('reset_password');
});

// admin
Route::group(['namespace' => 'Admin', 'as' => 'admin.', 'prefix' => '_admin'], function () {
    Route::get('/', 'IndexController@index')->name('index');

    // users
    Route::get('users', 'UserController@index')->name('user.index');
    Route::put('users/{user_id}', 'UserController@forbid')->name('user.forbid');
    Route::delete('users/{user_id}/force', 'UserController@destroy')->name('user.destroy');
    Route::put('users/{user_id}/update_type', 'UserController@updateType')->name('user.update_type');

    // images
    Route::get('images', 'ImageController@index')->name('image.index');
    Route::delete('images/{image_id}', 'ImageController@destroy')->name('image.destroy');

    // comments
    Route::get('comments', 'CommentController@index')->name('comment.index');
    Route::delete('comments/{comment_id}', 'CommentController@destroy')->name('comment.destroy');

    // tags
    Route::get('tags', 'TagController@index')->name('tag.index');
    Route::get('tags/create', 'TagController@create')->name('tag.create');
    Route::post('tags/store', 'TagController@store')->name('tag.store');
    Route::delete('tags/{tag_id}', 'TagController@destroy')->name('tag.destroy');
});