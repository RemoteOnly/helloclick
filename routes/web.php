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
Route::get('/load_images', 'HomeController@loadImages')->name('load_images');
Route::get('/show', 'HomeController@show')->name('show');
Route::get('/settings', 'UserController@index')->name('settings');


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